import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import BouncingCar from '@/components/BouncingCar';

// Lazy load large pages
const Home = lazy(() => import('../pages/Home'))
// const Services = lazy(() => import('../pages/Services'))
// const About = lazy(() => import('../pages/About'))
// const Gallery = lazy(() => import('../pages/Gallery'))
// const Testimonials = lazy(() => import('../pages/Testimonials'))
const Contact = lazy(() => import('../pages/Contact'))
// const Clients = lazy(() => import('../pages/Clients'))
// const Operational = lazy(() => import('../pages/Operational'))

export default function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Suspense fallback={<BouncingCar />}><Home/></Suspense>} />
        {/* <Route path='services' element={<Suspense fallback={<div>Loading Services...</div>}><Services/></Suspense>} />
        <Route path='about' element={<Suspense fallback={<div>Loading About...</div>}><About/></Suspense>} />
        <Route path='gallery' element={<Suspense fallback={<div>Loading Gallery...</div>}><Gallery/></Suspense>} />
        <Route path='testimonials' element={<Suspense fallback={<div>Loading Testimonials...</div>}><Testimonials/></Suspense>} /> */}
        <Route path='contact' element={<Suspense fallback={<div>Loading Contact...</div>}><Contact/></Suspense>} />
        {/* <Route path='clients' element={<Suspense fallback={<div>Loading Clients...</div>}><Clients/></Suspense>} />
        <Route path='operational' element={<Suspense fallback={<div>Loading Operational...</div>}><Operational/></Suspense>} /> */}
      </Route>
    </Routes>
  )
}
