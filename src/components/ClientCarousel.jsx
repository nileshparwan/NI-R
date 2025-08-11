import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const ClientCarousel = ({ logos }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      initialSlide={Math.floor(logos.length / 2)}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="w-full py-4"
    >
      {logos.map((logo, idx) => (
        <SwiperSlide key={idx} className="!w-[250px] md:!w-[300px]">
          <motion.div
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img src={logo.src} alt={logo.alt} className="max-h-full object-contain" loading='lazy'/>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientCarousel;
