import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[#221238] min-h-screen">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>

  </StrictMode>,
)
