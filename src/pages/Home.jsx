import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroBanner from '@/components/HeroBanner';
import AboutUsSection from '@/components/AboutUsSection';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <HeroBanner />
      <AboutUsSection />
    </>
  );
}
