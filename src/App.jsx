import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SolarQuote from "./components/SolarQuote";
import AnimateRoutes from "./pages/AnimateRoutes";

function App() {
  return (
    <div className="bg-[#041014] overflow-hidden">
        <Navbar />
      <ScrollToTop>
        <AnimateRoutes />
      </ScrollToTop>
      {/* <SolarQuote /> */}
      <Footer />
    </div>
  );
}

export default App;
