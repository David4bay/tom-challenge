import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Preview from './components/Preview.tsx'
import SignUser from './components/SignUser.tsx'
import AuthProvider from './components/AuthProvider/AuthProvider.tsx'
import Gallery from './components/Gallery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<App />} />
      <Route path="/signuser" element={<SignUser />} />
      <Route path="/preview/*" element={<Preview />} />
      <Route path="/gallery/*" element={<Gallery />} />
      <Route path="*" element={<App />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
