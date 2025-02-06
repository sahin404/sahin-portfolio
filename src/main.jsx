import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className="bg-[#221238] min-h-screen w-full">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    </HelmetProvider>


  </StrictMode>,
)
