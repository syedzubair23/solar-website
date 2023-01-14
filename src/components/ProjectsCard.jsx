import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./TypingText";
import { projectscard_details } from "../constants";

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
        <div className="flex flex-col md:flex-row gap-12 md:gap-4 lg:gap-16">
          {projectscard_details.map((detail, index) => (
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
                    <img
                      src={`./images/${detail.back_image}.png`}
                      className="h-full"
                      alt=""
                    />
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
