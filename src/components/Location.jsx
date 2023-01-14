import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { locations } from "../constants";

function Location() {
  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: "0.25" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 font-poppins">
      <motion.h3 variants={fadeIn("right", 'tween', 0.3, 1)} className="text-[#9FE221] text-[32px] font-semibold leading-tight">
        Locations
      </motion.h3>
      <motion.div  className="grid grid-cols-2 gap-x-4 sm:gap-x-16">
        {locations.map((location, index) => (
          <motion.div variants={fadeIn("up", 'spring', 0.32 * index)} key={location.id} className="mb-8 md:mb-12">
            <h4 className="text-xl font-medium text-[#9FE221]">
              {location.name}
            </h4>
            <p className="mt-2 text-base text-[#ADBABF] max-w-[18ch] leading-relaxed">
              {location.address}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Location;
