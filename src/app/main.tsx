import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/input.css'
//import App from './App.tsx'
import AppRoutes from '../routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
