import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from "./TypingText";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 md:my-32 mt-0"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className="font-poppins space-y-16"
      >
        <TypingText 
          title='About'
        />
        <div className="grid grid-cols-1 justify-items-center items-center lg:items-start lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.p
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="text-base text-[#D9F4FD] text-justify xs:text-center leading-loose lg:text-justify mx-auto lg:mx-0 max-w-prose"
          >
            SZSOLAR is a company that offers the opportunity to create a clean
            future for future generations through solar energy solutions.
            <span className="mt-4 block">
              We committed to both residential, industrial, and commercial solar
              products over more than a decade, its performance advantages in
              real-world conditions and environmental benefits today we
              considered as a pioneer in the solar industry. Our extensive
              product range, seamless installations, and diverse Project
              Portfolio have earned us market leader status in no time.
            </span>
            <span className="mt-4 block">
              Our vision is to make our environment optimistic and green with
              very advanced, revolutionary and sustainable solar products to
              make Pakistan brighter.
            </span>
          </motion.p>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="relative"
          >
            <img
              src="./images/about_image.png"
              alt=""
              className="h-auto w-96"
            />
            <img
              src="./images/about_bgeffectimage.png"
              alt=""
              className="absolute aspect-h-1 aspect-w-1 sm:max-w-lg top-16 sm:-top-6 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0 sm:-left-16 -z-[1]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
