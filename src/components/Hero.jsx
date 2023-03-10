import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";
import { useRef } from "react";

function Hero() {
  const navigate = useNavigate();
  // let ref = useRef(null)
  // let { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start start', 'end start'],
  // })
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  // let opacity = useTransform(scrollYProgress, [0,1 ], [1, 0])

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: "0.25" }}
      className="max-w-7xl mx-auto relative"
      // ref={ref}
    >
      <motion.img
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        src="./images/hero-bgimage.png"
        className="absolute -left-4 -top-36 max-h-[850px] pointer-events-none"
      />
      <motion.div 
      // style={{y, opacity}} 
      className="font-poppins grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-end gap-x-8 md:gap-x-4 gap-y-16 my-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <motion.h1
              variants={textVariant(1.1)}
              className="font-fjalla_one text-white text-5xl sm:text-6xl md:text-7xl text-center md:text-left lg:text-8xl"
            >
              Join the
              <span className="block mt-2">Solar Energy</span>
            </motion.h1>
            <motion.h1
              variants={textVariant(1.2)}
              className="font-fjalla_one mt-2 text-[#9FE221] text-5xl sm:text-6xl md:text-7xl text-center md:text-left lg:text-8xl"
            >
              Revolution
            </motion.h1>
          </div>
          <motion.p
            variants={textVariant(1.4)}
            className="text-base px-4 sm:px-6 md:px-0 text-[#D9F4FD] mx-auto max-w-prose md:mx-0 md:max-w-none text-justify xs:text-center md:text-justify leading-relaxed"
          >
            If you are tired of huge bill prices, constant power outrage, &
            blackouts, and you want permanent solution of these problems. We got
            you covered because we will solve your problem by harnessing the
            power of sun to provide you free electricity.
          </motion.p>
          <motion.div
            variants={slideIn("left", "tween", 1.5, 1)}
            className="flex flex-col xs:flex-row gap-x-2 gap-y-3 place-content-center md:justify-start pt-2"
          >
            <Button
              styles={"text-white"}
              button_text={"Get Quote"}
              handleClick={() => navigate("/contact")}
            />
            <Button
              styles={
                "[background:none] border-2 [border:linear-gradient(90deg,_#31640b,_rgba(159,_226,_33,_0.6))] text-[#9FE221]"
              }
              button_text={"Calculator"}
              handleClick={() => navigate("/calculator")}
            />
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.6, 1)}
          initial="hidden"
          whileInView="show"
          className="relative"
        >
          <img
            src="./images/hero_image.png"
            className="w-auto md:w-80 lg:w-auto h-96 md:h-auto"
            alt=""
          />
          <img
            src="./images/hero-bgeffectimage2.png"
            className="absolute h-auto right-4 -top-32 md:-top-44 pointer-events-none -z-[1]"
            alt=""
          />
          <img
            src="./images/hero-bgeffectimage1.png"
            className="absolute h-auto right-4 -bottom-24 pointer-events-none -z-[1]"
            alt=""
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
