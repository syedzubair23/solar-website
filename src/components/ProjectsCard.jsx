import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./TypingText";

const card_details = [
  {
    id: 1,
    image: "projectscard-image1",
    title: "Residential",
    desc: "We are offering turnkey solar solutions in Pakistan and install the Net Metering mechanism to all the residential clients at a very reasonable price. SZ Solar has completed a long list of residential projects of various magnitudes. We provide Grid Tie Solar System in Pakistan along with Hybrid and off-grid solar systems.",
  },
  {
    id: 2,
    image: "projectscard-image2",
    title: "Commercial",
    desc: "SZ Solar has achieved commendable success in the commercial sector providing the efficacious Hybrid Solar System in Pakistan to various commercial units like hospitals, schools, and offices. We also offer the on-grid and off-grid solar system along with the effective implementation of net metering.",
  },
  {
    id: 3,
    image: "projectscard-image3",
    title: "Industrial",
    desc: "SZ Solar holds the record of installing the first and second-largest Grid Tie Solar System in Pakistan for the Textile Sector of Pakistan. SZ Solar (Pvt) Ltd has installed state of the art Grid Tie Solar System at industrial giants of Pakistan while also helping them get their successful implementation of Net Metering System.",
  },
];

function ProjectsCard() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className="font-poppins space-y-16"
      >
        <TypingText title="Projects Portfolio" />
        <div className="flex flex-col md:flex-row gap-4 lg:gap-16">
          {card_details.map((detail, index) => (
            <motion.div
              key={detail.id}
              variants={fadeIn('right', 'spring', index * 0.5)}
              className="group font-poppins max-w-[352px] mx-auto"
            >
              <img
                src={`./images/${detail.image}.svg`}
                // className="grayscale brightness-50"
                alt=""
              />
              <div className="space-y-5 px-6">
                <div className="flex flex-col items-center justify-center gap-1">
                  <h3 className="font-fjalla_one text-[#78BB21] text-center text-xl tracking-wide">
                    {detail.title} Projects
                  </h3>
                  <div className="self-center">
                    <img
                      src="./images/decorated_divider.svg"
                      className="mx-auto max-w-[62px]"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-sm text-[#D9F4FD] text-justify max-w-prose mx-auto leading-relaxed">
                  {detail.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsCard;
