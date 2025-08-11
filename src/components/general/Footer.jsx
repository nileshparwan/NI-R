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
            <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-6 gap-12">

                {/* Logo & About */}
                <div className="col-span-1 md:col-span-2 flex flex-col items-start space-y-6">
                    <img src={logo} alt={t("footer.logoAlt")} className="object-contain mb-2 w-28" />
                    <p className="text-gray-300 text-sm leading-relaxed">{t("footer.about")}</p>
                    <div className="flex space-x-5 mt-4">
                        <a href="https://www.facebook.com/nirautomotive/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-red-500 transition-colors duration-300">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.instagram.com/ni_r_automotive_co_ltd?igsh=MXVkNW1tdDNxdXBsbw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-red-500 transition-colors duration-300">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Explore Navigation */}
                <nav className="col-span-1 md:col-span-1">
                    <h3 className="text-lg font-semibold mb-5 text-[#F4C300]">{t("footer.explore.title")}</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        {exploreItems.map((item, index) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleNavClick(item.href, index + 1)}
                                    className="text-gray-300 hover:text-[#F4C300] transition-colors duration-300"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Info + Map side by side on md+ */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 text-[#F4C300]">{t("footer.contact.title")}</h3>
                        <ul className="space-y-5 text-gray-300 text-sm">
                            <li className="flex items-center gap-3">
                                <MapPin className="text-[#D62828] w-5 h-5 flex-shrink-0" />
                                <span>{t("footer.contact.address")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-[#D62828] w-5 h-5 flex-shrink-0" />
                                <span>{t("footer.contact.phone")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-[#D62828] w-5 h-5 flex-shrink-0" />
                                <span>{t("footer.contact.email")}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="rounded-lg overflow-hidden shadow-lg h-48 md:h-full w-full border border-gray-700">
                        <iframe
                            title="NI-R Automotive Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4666.911966253511!2d57.48059097608776!3d-20.328229681151537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5dcfef4817c1%3A0x9a9036da2b8cc99b!2sNI-R%20automotive%20co%20ltd!5e1!3m2!1sen!2smu!4v1754922932469!5m2!1sen!2smu"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            {/* Quote Subscription */}
            <div className="flex flex-col gap-3 w-full max-w-lg mx-auto mb-4">
                <h3 className="text-lg font-semibold text-[#F4C300]">{t("footer.quote.title")}</h3>
                <div className="flex gap-3">
                    <input
                        type="email"
                        placeholder={t("footer.quote.placeholder")}
                        className="flex-grow px-4 py-2 rounded-md text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4C300]"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Button
                        onClick={openEmail}
                        className="bg-[#D62828] hover:bg-[#F4C300] transition-colors duration-300 text-white px-6"
                    >
                        {t("footer.quote.button")}
                    </Button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
                <p>
                    © {new Date().getFullYear()} <span className="text-red-500 font-semibold">NR Automotive</span>. {t("footer.rights")}
                </p>
            </div>
        </footer>
    );
}