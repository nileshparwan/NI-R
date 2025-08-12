import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import TopHeaderBar from "../TopHeaderBar";
import logo from "@/assets/logo.png";

export default function Header() {
  const { t } = useTranslation();
  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [initialOffset, setInitialOffset] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "services", label: t("nav.services") },
    { id: "gallery", label: t("nav.gallery") },
    { id: "testimonials", label: t("nav.testimonials") },
    { id: "contact", label: t("nav.contact") },
  ];

  const openEmail = () => {
    const email = "accounts@nirautomobile.com";
    const subject = "Get A Quote";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  useEffect(() => {
    if (navRef.current) {
      setInitialOffset(navRef.current.offsetTop);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sticky header logic
      if (currentScrollY > initialOffset && currentScrollY > lastScrollY) {
        setIsSticky(true);
      } else if (currentScrollY <= initialOffset) {
        setIsSticky(false);
      }
      setLastScrollY(currentScrollY);
    };

    // Intersection Observer for section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -70% 0px", // Adjusted to trigger when section is near top of viewport
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    // Observe all sections
    const sections = navItems.map((item) => document.getElementById(item.id));
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      } else {
        console.warn(`Section with ID ${section?.id} not found in the DOM`);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [initialOffset, lastScrollY, navItems]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID ${sectionId} not found`);
    }
  };

  return (
    <header className="w-full shadow-sm border-b border-gray-200">
      {/* Top Bar */}
      <TopHeaderBar />

      {/* Main Navigation */}
      <div
        ref={navRef}
        className={`bg-white px-4 py-3 flex items-center justify-between transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 w-full shadow-md z-50" : ""
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Cripar Logo" className="h-10" />
            {/* <div>
              <div className="font-bold text-xl text-red-600">NI-R</div>
              <span className="text-sm text-gray-500">
                {t("header.automotive")}
              </span>
            </div> */}
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`hover:text-primary transition-colors ${
                activeSection === item.id
                  ? "text-red-600 font-semibold underline underline-offset-4"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          onClick={openEmail}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          {t("header.get_a_quote")}
        </Button>
      </div>
    </header>
  );
}