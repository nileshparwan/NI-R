import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header';

export default function AppLayout(){
  const { t, i18n } = useTranslation()
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <Outlet />
      </main>

      <footer className='bg-secondary text-white p-8'>
        <div className='max-w-7xl mx-auto'>
          <p>© {new Date().getFullYear()} NI-R — All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
