import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import BouncingCar from '@/components/BouncingCar';

// Lazy load large pages
const Home = lazy(() => import('../pages/Home'))

export default function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Suspense fallback={<BouncingCar />}><Home/></Suspense>} />
      </Route>
    </Routes>
  )
}
