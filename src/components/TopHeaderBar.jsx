import { Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TopHeaderBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    function callNumber() {
        window.location.href = "tel:+23052545800";
    }

    function openEmail() {
        window.location.href = "mailto:info@nirautomobile.com";
    }


    return (
        <div className="bg-black text-white text-sm py-2 px-4 flex flex-col items-center md:flex-row justify-evenly">
            <div className="flex items-center gap-4">
                <p onClick={callNumber}>+230 52545800</p>
                <p onClick={openEmail}>info@nirautomobile.com</p>
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
                    <Facebook size={16} className="hover:text-red-500 cursor-pointer" />
                    <Twitter size={16} className="hover:text-red-500 cursor-pointer" />
                    <Linkedin size={16} className="hover:text-red-500 cursor-pointer" />
                    <Instagram size={16} className="hover:text-red-500 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
export default TopHeaderBar;