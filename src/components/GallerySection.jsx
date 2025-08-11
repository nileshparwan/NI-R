import React, { useState, useMemo, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const swiperRef = useRef(null);

  const images = useMemo(
    () => [
      { src: "/images/image1.jpg", altKey: "gallery.alt.mechanicWorking", category: "ALL" },
      { src: "/images/image2.jpg", altKey: "gallery.alt.engineRepair", category: "ALL" },
      { src: "/images/image3.jpg", altKey: "gallery.alt.mechanicTablet", category: "CUSTOMER WHEEL" },
      { src: "/images/image4.jpg", altKey: "gallery.alt.teamRepairing", category: "ALL" },
      { src: "/images/image5.jpg", altKey: "gallery.alt.openingCarHood", category: "STOCK WHEEL" },
      { src: "/images/image6.jpg", altKey: "gallery.alt.mechanicUnderHood", category: "ALL" },
    ],
    []
  );

  const filteredImages = useMemo(
    () =>
      activeCategory === "ALL" ? images : images.filter((img) => img.category === activeCategory),
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
            {["ALL", "CUSTOMER WHEEL", "STOCK WHEEL"].map((category) => (
              <button
                key={category}
                className={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded ${
                  activeCategory === category ? "bg-red-500 text-white" : "bg-pink-200 text-black"
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
                      <CardContent className="p-0">
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
