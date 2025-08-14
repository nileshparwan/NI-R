import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/Button';
import coFounder from '../assets/co-founder.jpeg';
import bodyPaintSpraying from '../assets/body-paint-spraying.jpg';
import { useTranslation } from 'react-i18next';

// Define a color palette for consistency
const colors = {
    red: '#EF4444',
    blue: '#3B82F6',
    yellow: '#FACC15',
    highlight: '#F4C300'
};

const AboutUsSection = () => {
    const [showMore, setShowMore] = useState(false);
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="about">
            <motion.div
                className="bg-white py-12 px-4 md:px-8 lg:px-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                    {/* Left Section - Images and Badge */}
                    <motion.div variants={itemVariants} className="hidden md:flex flex-1 flex-col justify-center gap-4 relative">
                        <div className="grid grid-cols-1 gap-4">
                            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
                                <img src={bodyPaintSpraying} alt={t('about_us.images.body_paint_spraying_alt')} className="w-full h-auto object-contain rounded-lg shadow-lg" loading='lazy' />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Section - About Us Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <motion.div variants={itemVariants} className="text-red-600 text-sm font-semibold uppercase">
                            <span className="mr-2">🔧</span>
                            {t('about_us.label')}
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-800 leading-tight">
                            {t('about_us.title')}
                        </motion.h2>

                        <motion.div variants={itemVariants} className="flex-1 flex flex-col gap-4 relative mt-4 md:hidden">
                            <div className="grid grid-cols-1 gap-4">
                                <motion.div variants={itemVariants}>
                                    <img src={bodyPaintSpraying} alt={t('about_us.images.body_paint_spraying_alt')} className="w-full h-auto object-contain rounded-lg shadow-lg" loading='lazy' />
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-gray-600 mt-2">
                            {t('about_us.subtitle')}
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <motion.div variants={itemVariants}>
                                <Card className="bg-gray-50 border-none shadow-sm h-full">
                                    <CardHeader className="flex flex-row items-center space-x-4">
                                        <div className="p-2 bg-red-100 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 01-9-9c0-2.836 1.146-5.4 3-7.2L6 3h12l-3.2 3.8A9 9 0 0112 21z" />
                                            </svg>
                                        </div>
                                        <CardTitle className="text-lg font-bold leading-relaxed">{t('about_us.services.collision')}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Card className="bg-gray-50 border-none shadow-sm h-full">
                                    <CardHeader className="flex flex-row items-center space-x-4">
                                        <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <CardTitle className="text-lg font-bold leading-relaxed">{t('about_us.services.paint')}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants}>
                                <Card className="bg-gray-50 border-none shadow-sm h-full">
                                    <CardHeader className="flex flex-row items-center space-x-4">
                                        <div className="p-2 bg-yellow-100 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 01-9-9c0-2.836 1.146-5.4 3-7.2L6 3h12l-3.2 3.8A9 9 0 0112 21z" />
                                            </svg>
                                        </div>
                                        <CardTitle className="text-lg font-bold leading-relaxed">{t('about_us.services.mechanical')}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Card className="bg-gray-50 border-none shadow-sm h-full">
                                    <CardHeader className="flex flex-row items-center space-x-4">
                                        <div className="p-2 bg-red-100 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <CardTitle className="text-lg font-bold leading-relaxed">{t('about_us.services.maintenance')}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="flex items-center gap-4 mt-6">
                            <Button onClick={() => setShowMore(prev => !prev)} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                                {t('about_us.read_more')}
                            </Button>
                            <div className="flex items-center gap-2">
                                <img src={coFounder} alt="Nedil" className="w-10 h-10 rounded-full object-cover" loading='lazy'/>
                                <div>
                                    <p className="text-sm font-semibold">Nedil Ittoo</p>
                                    <p className="text-xs text-gray-500">{t('about_us.founder')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <AnimatePresence>
                    {showMore && (
                        <motion.div
                            key="readMoreContent"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden mt-6"
                        >
                            <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6 space-y-6">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 flex items-center justify-center rounded-full"
                                        style={{ backgroundColor: colors.highlight }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">{t('about_us.expertise_title')}</h3>
                                </div>

                                {/* Body */}
                                <div className="text-gray-700 text-base leading-relaxed space-y-4">
                                    <p>{t('about_us.expertise.paragraph1')}</p>
                                    <p>{t('about_us.expertise.paragraph2')}</p>
                                    <p>{t('about_us.expertise.paragraph3')}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default AboutUsSection;