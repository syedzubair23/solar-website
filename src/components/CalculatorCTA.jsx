import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, zoomIn } from "../utils/motion";

function CalculatorCTA() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r [background:linear-gradient(_101.27deg,_#31640B_0%,_#397C08_50.67%,_#78BB21_101.34%)] py-16 mb-20 md:mb-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className="font-poppins space-y-8 max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-x-8 gap-y-12 py-8 px-4 md:p-16 bg-white/[12%] rounded-xl shadow-[0px_0px_40px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            <motion.h3 variants={textVariant(1.1)} className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-[#D9F4FD] mx-auto md:max-w-none leading-tight max-w-[24ch]">
              Confused? Use SZSolar's Estimated Bill Calculator
            </motion.h3>
            <motion.p variants={textVariant(1.2)} className="text-sm text-[#D9F4FD] text-center md:text-left mx-auto md:max-w-none max-w-prose leading-relaxed">
              We have developed a calculator that asks you different types of
              products which are required to install a solar system, then it
              calculates the estimate bill according to your selected items.
            </motion.p>
            <motion.button
              variants={zoomIn(1.3, 1)}
              whileHover={{ translateY: 1.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 5 }}
              className="mt-6 md:mt-8 self-center md:self-start flex items-center justify-center text-[#D9F4FD] text-sm font-semibold bg-white/5 [background:linear-gradient(_170.28deg,_rgba(255,255,255,0.5)_-64.13%,_rgba(4,16,20,0.175336)_40.44%,_rgba(4,16,20,0.1)_70%,rgba(255,255,255,0.2)_95.43%)] shadow-[0px_8px_26px_rgba(0,0,0,0.25)] w-[100px] h-[100px] border-2 border-[#93C3D2] rounded-full hover:text-[#9FE221]"
              onClick={() => navigate("/calculator")}
            >
              Calculator
            </motion.button>
          </div>
          <motion.div variants={slideIn('right', 'spring', 0.5, 2)}>
            <img
              src="./images/calculatorcta-image.png"
              className="max-w-[230px] lg:max-w-[330px] h-auto"
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CalculatorCTA;
