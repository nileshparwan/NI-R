// src/components/HeroBanner.jsx
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import HeroImage from '../assets/hero-bg.jpg'
import Painter from '../assets/painter-at-work.webp'
import { Button } from '@/components/ui/Button';


export default function HeroBanner() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-br from-[#2d261e] to-[#0c0a07]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={HeroImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-12">
                <motion.div
                    className="text-white max-w-2xl z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="uppercase text-red-500 tracking-widest text-sm font-semibold mt-4 mb-3">
                        {t("hero_banner.battery_check_replace")}
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                        {t("hero_banner.your_car_health_is_our_mission")}
                    </h1>
                    <p className="text-lg mb-8 text-gray-200">
                        {t("hero_banner.repair_times_vary")}
                    </p>

                    <div className="flex items-center gap-4">
                        <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6"
                        >
                            {t("hero_banner.read_more")}
                        </Button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="mt-10 lg:mt-0 absolute bottom-0 mx-auto md:right-0 z-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={Painter}
                        alt="Mechanic holding tire"
                        className="w-[350px] lg:w-[450px] object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
