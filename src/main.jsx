import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

const baseUrl = import.meta.env.BASE_URL || '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={baseUrl}> {/* ✅ This wraps everything */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
