import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CalculatorPage from "./pages/CalculatorPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SolarQuote from "./components/SolarQuote";

function App() {
  return (
    <div className="bg-[#041014] overflow-hidden">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ScrollToTop>
      {/* <SolarQuote /> */}
      <Footer />
    </div>
  );
}

export default App;
