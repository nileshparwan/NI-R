import React from 'react';
import { motion } from 'framer-motion';
import cctvImage from '@/assets/cctv.jpeg';
import { useTranslation, Trans } from 'react-i18next';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const SecuritySection = () => {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="overflow-hidden rounded-xl shadow-lg"
                >
                    <img
                        src={cctvImage}
                        alt={t('security_section.alt', 'Caméra CCTV')}
                        className="w-full h-auto object-cover"
                        loading='lazy'
                    />
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="space-y-6 text-gray-800"
                >
                    <h2
                      className="text-3xl md:text-4xl font-bold tracking-tight leading-snug"
                      dangerouslySetInnerHTML={{ __html: t('security_section.title') }}
                    />

                    {t('security_section.paragraphs', { returnObjects: true }).map((para, i) => (
                      <p key={i} className="text-base md:text-lg leading-relaxed">{para}</p>
                    ))}

                    <div
                      className="mt-4 text-base font-medium text-gray-700"
                      dangerouslySetInnerHTML={{ __html: t('security_section.hours') }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default SecuritySection;
