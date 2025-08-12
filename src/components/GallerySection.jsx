import React, { useState, useMemo, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

import image1 from '@/assets/gallery/image1.jpeg';
import image2 from '@/assets/gallery/image2.jpeg';
import image3 from '@/assets/gallery/image3.jpeg';
import image4 from '@/assets/gallery/image4.jpeg';
import image5 from '@/assets/gallery/image5.jpeg';
import image6 from '@/assets/gallery/image6.jpeg';
import image7 from '@/assets/gallery/image7.jpeg';
import image8 from '@/assets/gallery/image8.jpeg';
import image9 from '@/assets/gallery/image9.jpeg';
import image10 from '@/assets/gallery/image10.jpeg';
import image11 from '@/assets/gallery/image11.jpeg';

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const swiperRef = useRef(null);

  const images = useMemo(() => [
    { src: image1, altKey: 'gallery.captions.porsche1', category: ['ALL', 'fullcar'] },
    { src: image2, altKey: 'gallery.captions.mercedes', category: ['ALL', 'fullcar'] },
    { src: image3, altKey: 'gallery.captions.porsche2', category: ['ALL', 'fullcar'] },
    { src: image4, altKey: 'gallery.captions.porsche3', category: ['ALL', 'scratchrepairs'] },
    { src: image5, altKey: 'gallery.captions.toyota', category: ['ALL', 'scratchrepairs'] },
    { src: image6, altKey: 'gallery.captions.evo', category: ['ALL', 'fullcar'] },
    { src: image7, altKey: 'gallery.captions.porsche4', category: ['ALL', 'scratchrepairs'] },
    { src: image8, altKey: 'gallery.captions.wildtrak', category: ['ALL', 'scratchrepairs'] },
    { src: image9, altKey: 'gallery.captions.fit', category: ['ALL', 'fullcar'] },
    { src: image10, altKey: 'gallery.captions.discovery', category: ['ALL', 'fullcar'] },
    { src: image11, altKey: 'gallery.captions.bmw', category: ['ALL', 'scratchrepairs'] },
  ], []);
  

  const filteredImages = useMemo(
    () =>
      activeCategory === "ALL" ? images : images.filter((img) => img.category.includes(activeCategory)),
    [activeCategory, images]
  );

  const swiperSettings = {
    modules: [Autoplay, Navigation],
    spaceBetween: 8,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <section id="gallery">
      <TooltipProvider>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 text-center">
            {t("gallery.title")}
          </h1>

          <div className="flex flex-col sm:flex-row justify-end mb-4 gap-2 sm:gap-4">
            {["ALL", "fullcar", "scratchrepairs"].map((category) => (
              <button
                key={category}
                className={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded ${activeCategory === category ? "bg-red-500 text-white" : "bg-pink-200 text-black"
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {t(`gallery.categories.${category.replace(" ", "").toLowerCase()}`)}
              </button>
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="block sm:hidden relative">
            <Swiper {...swiperSettings} ref={swiperRef}>
              {filteredImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden mx-2">
                      <CardContent className="p-0">
                        <img
                          src={image.src}
                          alt={t(image.altKey)}
                          className="w-full h-40 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="p-2 text-center text-sm text-gray-700">
                          <p>{t(image.altKey)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full z-10"
              aria-label={t("gallery.prevSlide")}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full z-10"
              aria-label={t("gallery.nextSlide")}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0 flex flex-col flex-1">
                        <img
                          src={image.src}
                          alt={t(image.altKey)}
                          className="w-full h-40 sm:h-48 md:h-64 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="p-2 text-center text-sm sm:text-base text-gray-700">
                          <p>{t(image.altKey)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t(image.altKey)}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </section>
  );
};

export default Gallery;
