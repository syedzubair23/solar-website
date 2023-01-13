import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from './LandingPage';
import CalculatorPage from "./CalculatorPage"
import ContactPage from "./ContactPage"
import { AnimatePresence } from 'framer-motion';

function AnimateRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.key}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes