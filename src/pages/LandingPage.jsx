import React from 'react'
import About from '../components/About'
import Brands from '../components/Brands'
import CalculatorCTA from '../components/CalculatorCTA'
import ContactCTA from '../components/ContactCTA'
import Hero from '../components/Hero'
import OfferCard from '../components/OfferCard'
import ProjectsCard from '../components/ProjectsCard'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'
import { pageVariant } from '../utils/motion'

function LandingPage() {
  return (
    <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit">
        <Hero />
        <About />
        <OfferCard />
        <Brands />
        <ProjectsCard />
        <Stats />
        <Testimonials />
        <CalculatorCTA />
        <ContactCTA />        
    </motion.div>
  )
}

export default LandingPage