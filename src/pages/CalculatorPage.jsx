import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CustomSelect from "../components/CustomSelect";
import SolarQuote from "../components/SolarQuote";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, pageVariant, textVariant2, zoomIn } from "../utils/motion";

function CalculatorPage() {
  const [unitRange, setUnitRange] = useState(300);
  const unit_range = Number(unitRange);
  const navigate = useNavigate();

  function GenerateInvoice() {
    html2canvas(document.querySelector("#quoteCapture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("solar-quotation.pdf");
      console.log(pdfWidth, pdfHeight);
      console.log(imgProps);
      console.log(pdf.internal);
    });
  }

  const system_capcity = () => {
    if (unit_range >= 300 && unit_range <= 350) {
      return "3";
    } else if (unit_range >= 351 && unit_range <= 600) {
      return "5";
    } else if (unit_range >= 601 && unit_range <= 1200) {
      return "10";
    } else if (unit_range >= 1201 && unit_range <= 1800) {
      return "15";
    } else if (unit_range >= 1801 && unit_range <= 2400) {
      return "20";
    } else if (unit_range >= 2401 && unit_range <= 3000) {
      return "25";
    } else if (unit_range >= 3001 && unit_range <= 3600) {
      return "30";
    } else if (unit_range >= 3601 && unit_range <= 4200) {
      return "35";
    }
  };

  return (
    <>
      {/* <div className="max-w-7xl mx-auto py-16 md:py-28 mb-16 md:mb-28 bg-[url('/images/calculatorpage-bgimage.png')] bg-no-repeat bg-cover bg-top font-poppins"> */}
        <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit" className="max-w-7xl mx-auto py-16 md:py-28 mb-16 relative">
        {/* <img
          src="./images/calculatorpage-bgimage.png"
          className="absolute -top-16 pointer-events-none h-[2090px] xs:h-[1915px] sm:h-[2030px] md:h-[1591px] object-cover overflow-hidden"
          alt=""
        /> */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: "0.25" }}
          className="space-y-16 sm:space-y-28"
        >
          <motion.h2 variants={textVariant2} className="px-4 sm:px-6 lg:px-8 font-fjalla_one text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide text-center">
            Solar Calculator
          </motion.h2>
          <div className="px-6 sm:px-10 lg:px-12 [background:linear-gradient(101.27deg,_#31640b,_#397c08_50%,_#78bb21)] py-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 items-start justify-items-center font-poppins relative z-10">
            <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className="space-y-10 md:space-y-14">
              <h3 className="text-3xl lg:text-4xl font-semibold text-white text-center">
                Electricity Units (Monthly)
              </h3>
              <div className="space-y-6">
                <h4 className="text-xl md:text-2xl font-semibold text-[#041014] text-center">
                  {unitRange} Units
                </h4>
                <input
                  type="range"
                  className="accent-[#9FE221] focus:accent-lime-400 w-full"
                  min="0"
                  max="4500"
                  step="10"
                  onChange={(e) => setUnitRange(e.target.value)}
                />
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className="space-y-10 md:space-y-14">
              <h3 className="text-3xl lg:text-4xl font-semibold text-white text-center">
                System Capacity
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-[#041014] text-center">
                {!(
                  (unit_range >= 0 && unit_range < 300) ||
                  unit_range > 4200
                ) ? (
                  `You require ${system_capcity()}KW Solar System`
                ) : (
                  <div>
                    <p className="text-lg">{`Your monthly unit consumption is ${
                      unit_range >= 0 && unit_range < 300 ? "low" : "high"
                    }. Contact us for FREE site evaluation and Quotation.`}</p>
                    <Button
                      styles={"text-white mt-6"}
                      button_text={"Contact Us"}
                      handleClick={() => navigate("/contact")}
                    />
                  </div>
                )}
              </h4>
            </motion.div>
          </div>
          {/* <div className="px-4 sm:px-6 lg:px-8">
            <motion.h3 variants={zoomIn(0.6, 1)} className="text-3xl font-semibold text-white text-center mb-10">
              Get Estimated Quote
            </motion.h3>
            <form
              action=""
              className="max-w-xl md:max-w-3xl mx-auto font-poppins relative z-10"
            >
              <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                {calculator_option.map((opt) => (
                  <div key={opt.id}>
                    <label className="block mb-1.5 text-xs text-white">
                      {opt.label}
                    </label>
                    {opt.label === "Number of Solar Plates" ? (
                      <CustomSelect
                        id={opt.id}
                        number={true}
                        option={opt.options}
                        calculator_option={calculator_option}
                        label={opt.label}
                      />
                    ) : (
                      <CustomSelect
                        id={opt.id}
                        number={false}
                        option={opt.options}
                        calculator_option={calculator_option}
                        label={opt.label}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="cursor-pointer mt-10" onClick={GenerateInvoice}>
                <Button
                  styles={"w-full text-white"}
                  button_text={"Generate Quote"}
                />
              </div>
            </form>
          </div> */}
        </motion.div>
      </motion.div>
    </>
  );
}

export default CalculatorPage;
