import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./TypingText";

const card_details = [
  {
    id: 1,
    front_image: "projectscard-image1",
    back_image: "projectscard-backimage1",
    title: "Residential",
    desc: "We are offering turnkey solar solutions in Pakistan and install the Net Metering mechanism to all the residential clients at a very reasonable price. SZ Solar has completed a long list of residential projects of various magnitudes. We provide Grid Tie Solar System in Pakistan along with Hybrid and off-grid solar systems.",
  },
  {
    id: 2,
    front_image: "projectscard-image2",
    back_image: "projectscard-backimage2",
    title: "Commercial",
    desc: "SZ Solar has achieved commendable success in the commercial sector providing the efficacious Hybrid Solar System in Pakistan to various commercial units like hospitals, schools, and offices. We also offer the on-grid and off-grid solar system along with the effective implementation of net metering.",
  },
  {
    id: 3,
    front_image: "projectscard-image3",
    back_image: "projectscard-backimage3",
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
              variants={fadeIn("right", "spring", index * 0.5)}
              className="group font-poppins max-w-[352px] mx-auto"
            >
                <div className="w-full bg-transparent cursor-pointer group perspective">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full duration-1000 flex flex-col justify-center items-center">
                    <div className="w-full backface-hidden">
                      <img
                        src={`./images/${detail.front_image}.svg`}
                        className="h-full"
                        alt=""
                      />
                    </div>
                    <div className="absolute w-full my-rotate-y-180 backface-hidden overflow-hidden">
                      <div className="relative">
                        <img
                          src={`./images/${detail.back_image}.png`}
                          className="h-full"
                          alt=""
                        />
                        {/* <div className="text-gray-400 absolute top-1/3 -translate-y-1/4 -translate-x-1/2 left-1/2 ">
                          <h3 className="text-2xl text-center text-[#9FE221]">
                            35kW Solar System
                          </h3>
                          <h4 className="text-base text-center mt-6">House:<span className="ml-3 text-gray-300">Syed's House</span></h4>
                          <p className="text-sm text-center mt-4">Location:<span className="ml-3 text-gray-300">Lahore</span></p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
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
