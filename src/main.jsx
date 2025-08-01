import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
import Admin from './Pages/Admin.jsx';
import LoginPage from './Component/LoginPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />}  />
      <Route path='/admin' element={<LoginPage />} />
      <Route path='/admin-panal' element={<Admin />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
)
