import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import { fadeIn, staggerContainer } from "../utils/motion";

const card_details = [
  {
    id: 1,
    image: "offercard_image1",
    title: "Residential",
    desc: "We are dedicated to providing residential solar solutions in Pakistan. Say Yes to Solar and No to conventional energy to decrease grid dependency.",
  },
  {
    id: 2,
    image: "offercard_image2",
    title: "Commercial",
    desc: "We provide solar solutions to various commercial units such as hospitals, schools, offices, renowned companies, and organizations of Pakistan.",
  },
  {
    id: 3,
    image: "offercard_image3",
    title: "Industrial",
    desc: "SZ Solar holds the record of installing the first and second-largest Grid Tied Solar Power Plants for Textile Manufacturers in Pakistan.",
  },
];

function OfferCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className="font-poppins space-y-16"
      >
          <TypingText title="Solar Energy Offers" />
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {card_details.map((detail, index) => (
            <motion.div
              key={detail.id}
              variants={fadeIn('right', 'tween', index * 0.45)}
              className="group font-poppins bg-[#041014] px-8 pt-8 pb-12 space-y-1 rounded-[65px] shadow-[4px_6px_30px_rgba(31,133,193,0.25)] max-w-[280px] md:max-w-none mx-auto"
            >
              <img
                src={`./images/${detail.image}.png`}
                className="mx-auto lg:max-w-[202px] h-auto"
                alt=""
              />
              <div className="space-y-5">
                <div className="flex flex-col items-center justify-center gap-1">
                  <h3 className="font-fjalla_one text-[#78BB21] text-center text-xl tracking-wide">
                    {detail.title} Solar
                    <br />
                    Offers
                  </h3>
                  <div className="self-center">
                    <img
                      src="./images/decorated_divider.svg"
                      className="mx-auto max-w-[62px]"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-sm text-[#D9F4FD] text-center leading-relaxed">
                  {detail.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default OfferCard;
