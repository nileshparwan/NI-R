import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ClientCarousel from './general/ClientCarousel';

import sicomLogo from '@/assets/clients/sicom.jpg';
import transinvestLogo from '@/assets/clients/transinvest.jpeg';
import eagle from '@/assets/clients/eagle.png';
import mua from '@/assets/clients/mua.png';
import swan from '@/assets/clients/swan.png';
import newIndia from '@/assets/clients/newIndia.jpg';
import jubilee from '@/assets/clients/jubileeInsurance.jpeg';

const logos = [
  { src: sicomLogo, alt: 'SICOM General Insurance' },
  { src: mua, alt: 'Mua Insurance' },
  { src: swan, alt: 'Mua Insurance' },
  { src: eagle, alt: 'Eagle Insurance' },
  { src: newIndia, alt: 'New India Insurance' },
  { src: jubilee, alt: 'Jubilee Insurance' },
  { src: transinvestLogo, alt: 'Transinvest Construction' }
];

const ClientSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0B1C3F] text-white py-16 px-4 md:px-12 lg:px-20 mb-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          dangerouslySetInnerHTML={{ __html: t('client_section.title') }}
        />

        {/* ShadCN Carousel */}
        <ClientCarousel logos={logos} />

        {/* Description Copy */}
        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto space-y-4 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: t('client_section.description_1') }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: t('client_section.description_2') }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
