import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/input.css'
import '../styles/tailwind.css'
//import App from './App.tsx'
import AppRoutes from '../routes/routes.tsx'
import { ShipsProvider } from "../context/StarshipsContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShipsProvider>
      <AppRoutes />
    </ShipsProvider>
  </StrictMode>
);
