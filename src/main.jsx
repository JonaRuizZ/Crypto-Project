import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Crypto from './components/Crypto';
import './index.css'
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Cryptomoneda from './pages/Cryptomoneda'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/cryptomonedas' element={<App />}>
                <Route index element={<Crypto />} />
                <Route path=':id' element={<Cryptomoneda />} />
            </Route>
            <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);
