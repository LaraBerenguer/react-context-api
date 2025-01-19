import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/input.css'
import '../styles/tailwind.css'
import AppRoutes from '../routes/routes.tsx'
import { ShipsProvider } from "../context/ShipCardContext.tsx";
import { AuthProvider } from '../auth/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShipsProvider>ºº
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ShipsProvider>
  </StrictMode>
);
