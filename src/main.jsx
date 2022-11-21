import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Page404 from './pages/Page404';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);
