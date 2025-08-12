import { Globe, Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TopHeaderBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    function callNumber() {
        window.location.href = "tel:6841400";
    }

    function openEmail() {
        window.location.href = "mailto:accounts@nirautomobile.com";
    }


    return (
        <div className="bg-black text-white text-sm py-2 px-4 flex flex-col items-center md:flex-row justify-evenly">
            <div className="flex items-center gap-4">

                <div onClick={callNumber} className="flex items-center gap-2">
                    <Phone className="text-[#D62828] w-5 h-5 flex-shrink-0" />
                    <p>6841400</p>
                </div>

                <div onClick={openEmail} className="flex items-center gap-2">
                    <Mail className="text-[#D62828] w-5 h-5 flex-shrink-0" />
                    <p>accounts@nirautomobile.com</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center">
                    <Globe size={16} />

                    <Select onValueChange={changeLanguage} defaultValue="en">
                        <SelectTrigger className="w-[120px] bg-black border-none text-white focus:ring-0">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black">
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex gap-4 border-l border-gray-500 pl-4">
                    <a href="https://www.facebook.com/nirautomotive/" target="_blank" rel="noreferrer" className="hover:text-red-500 cursor-pointer">
                        <Facebook size={16} className="hover:text-red-500 cursor-pointer" />
                    </a>

                    <a href="https://www.instagram.com/ni_r_automotive_co_ltd?igsh=MXVkNW1tdDNxdXBsbw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-red-500 cursor-pointer">
                        <Instagram size={16} className="hover:text-red-500 cursor-pointer" />
                    </a>

                </div>
            </div>
        </div>
    );
};
export default TopHeaderBar;