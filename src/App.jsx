import About from "./components/About"
import Brands from "./components/Brands"
import CalculatorCTA from "./components/CalculatorCTA"
import ContactCTA from "./components/ContactCTA"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OfferCard from "./components/OfferCard"
import ProjectsCard from "./components/ProjectsCard"
import SolarQuote from "./components/SolarQuote"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import CalculatorPage from "./pages/CalculatorPage"
import ContactPage from "./pages/ContactPage"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div className="bg-[#041014]">
        <Navbar />
        {/* <ContactPage /> */}
        <CalculatorPage />
        {/* <LandingPage />       */}
        <SolarQuote />
        <Footer />
    </div>
  )
}

export default App
