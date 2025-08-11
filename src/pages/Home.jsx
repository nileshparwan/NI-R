import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import WorkshopShowcase from '@/components/WorkshopShowcase';
import SecuritySection from '@/components/SecuritySection';
import ClientSection from '@/components/ClientSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactUsSection from '@/components/ContactUsSection';
import Gallery from '@/components/GallerySection';
import BackToTopButton from '@/components/BackToTopButton';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutUsSection />
      <ServicesSection />
      <WorkshopShowcase />
      <Gallery />
      <SecuritySection />
      <ClientSection />
      <TestimonialSection />
      <ContactUsSection />
      <BackToTopButton />
    </>
  );
}
