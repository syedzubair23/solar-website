import About from "./components/About"
import Brands from "./components/Brands"
import CalculatorCta from "./components/CalculatorCta"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OfferCard from "./components/OfferCard"
import ProjectsCard from "./components/ProjectsCard"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import CalculatorPage from "./pages/CalculatorPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <div className="bg-[#041014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        {/* <ContactPage /> */}
        {/* <CalculatorPage /> */}
        <Hero />
        <About />
        <OfferCard />
        <Brands />
        <ProjectsCard />
        <Stats />
        <Testimonials />
        <CalculatorCta />
        <Footer />
      </div>
    </div>
  )
}

export default App
