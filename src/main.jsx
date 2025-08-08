import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import './index.css'
import './i18n'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className='min-h-screen flex items-center justify-center'>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
