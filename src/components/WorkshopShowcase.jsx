import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import paintBooth from '@/assets/paintBooth.png';
import jigWork from '@/assets/jigWork.png';
import { useTranslation } from 'react-i18next';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const WorkshopShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-gray-50">
      {/* Background Image (right side) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 md:opacity-40"
      // style={{ backgroundImage: `url(${background})` }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
        {/* Left: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="col-span-1 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="overflow-hidden shadow-lg border-none flex flex-col flex-grow">
              <img src={paintBooth} alt={t("workshop.paintBoothAlt")} className="w-full h-48 object-cover" loading='lazy'/>
              <CardContent className="p-4 text-center text-sm font-medium text-gray-800 flex-grow flex items-center justify-center">
                {t("workshop.paintBooth")}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="col-span-1 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="overflow-hidden shadow-lg border-none flex flex-col flex-grow">
              <img src={jigWork} alt={t("workshop.jigAlt")} className="w-full h-48 object-cover" loading='lazy'/>
              <CardContent className="p-4 text-center text-sm font-medium text-gray-800 flex-grow flex items-center justify-center">
                {t("workshop.jigWork")}
              </CardContent>
            </Card>
          </motion.div>
        </div>


        {/* Right: Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-gray-900 space-y-6 z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            <span className="text-[#F4C300]">{t('workshop.keyInKeyOut1')}</span><br />
            {t('workshop.keyInKeyOut2')} <br className="hidden md:block" />
            <span className="text-[#F4C300]">{t('workshop.keyInKeyOut3')}</span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {t('workshop.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopShowcase;
