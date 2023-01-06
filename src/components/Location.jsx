import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const locations = [
  {
    id: "multan",
    name: "Multan",
    address: "3211 Gulgasht Colony Multan, ML 66000",
  },
  {
    id: "karachi",
    name: "Karachi",
    address: "1122 Bharia Town Karachi, KH 12300",
  },
  {
    id: "lahore",
    name: "Lahore",
    address: "1311 Gulberg Town Lahore, LH 36000",
  },
  {
    id: "peshawar",
    name: "Peshawar",
    address: "9212 Namak Mandi Peshawar, PW 9100",
  },
];

function Location() {
  return (
    <motion.div
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
    </motion.div>
  );
}

export default Location;
