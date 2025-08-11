// src/components/Footer.jsx
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from '@/assets/logo.png';
import { useAccordion } from "@/context";
import { Button } from "@/components/ui/Button";

export default function Footer() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { setOpenItem } = useAccordion();

    const openEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setError(t("footer.errors.emptyEmail"));
            return;
        }

        if (!emailRegex.test(email)) {
            setError(t("footer.errors.invalidEmail"));
            return;
        }

        setError("");
        const to = "accounts@nirautomobile.com";
        const subject = t("footer.email.subject");
        const body = `${t("footer.email.body")}\n\n${t("footer.email.userEmail")}: ${email}`;
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const exploreItems = [
        { id: "services", label: t("footer.explore.collision"), href: "services" },
        { id: "services", label: t("footer.explore.paint"), href: "services" },
        { id: "services", label: t("footer.explore.mechanical"), href: "services" },
        { id: "services", label: t("footer.explore.maintenance"), href: "services" },
    ];

    const handleNavClick = (sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setOpenItem(`item-${index}`);
        } else {
          console.warn(`Section with ID ${sectionId} not found`);
        }
      };

    return (
        <footer className="bg-[#0B1C3F] text-white">
            <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

                {/* Logo & About */}
                <div className="col-span-1 md:col-span-2">
                    <img src={logo} alt={t("footer.logoAlt")} className="object-contain mb-4" width={100} height={100} />
                    <p className="text-gray-300 text-sm mb-4">
                        {t("footer.about")}
                    </p>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/nirautomotive/" target="_blank" rel="noreferrer" className="hover:text-red-500 cursor-pointer">
                            <Facebook size={16} className="hover:text-red-500 cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/ni_r_automotive_co_ltd?igsh=MXVkNW1tdDNxdXBsbw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-red-500 cursor-pointer">
                            <Instagram size={16} className="hover:text-red-500 cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#F4C300]">{t("footer.explore.title")}</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        {exploreItems.map((item, index) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleNavClick(item.href, index+1)}
                                    className={`transition-colors text-gray-300 hover:text-[#F4C300]`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#F4C300]">{t("footer.contact.title")}</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin className="text-[#D62828] w-4 h-4" /> {t("footer.contact.address")}
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="text-[#D62828] w-4 h-4" /> {t("footer.contact.phone")}
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="text-[#D62828] w-4 h-4" /> {t("footer.contact.email")}
                        </li>
                    </ul>
                </div>

                {/* Quote */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#F4C300]">{t("footer.quote.title")}</h3>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder={t("footer.quote.placeholder")}
                            className="px-4 py-2 rounded-md text-black w-full min-w-[150px]"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button onClick={openEmail} className="bg-[#D62828] hover:bg-[#F4C300] text-white">
                            {t("footer.quote.button")}
                        </Button>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} <span className="text-red-500">NR Automotive</span>. {t("footer.rights")}</p>
            </div>
        </footer>
    );
}
