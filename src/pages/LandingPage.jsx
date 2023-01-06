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

function LandingPage() {
  return (
    <div>
        <Hero />
        <About />
        <OfferCard />
        <Brands />
        <ProjectsCard />
        <Stats />
        {/* <Testimonials /> */}
        <CalculatorCTA />
        <ContactCTA />        
    </div>
  )
}

export default LandingPage