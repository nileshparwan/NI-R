import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function AppLayout(){
  const { t, i18n } = useTranslation()
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
