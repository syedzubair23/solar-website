import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import { fadeIn, staggerContainer } from "../utils/motion";
import { offercard_details } from "../constants";

function OfferCard() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className="font-poppins space-y-16"
      >
          <TypingText title="Solar Energy Offers" />
        <div className="flex flex-col md:flex-row gap-16 md:gap-4 lg:gap-16">
          {offercard_details.map((detail, index) => (
            <motion.div
              key={detail.id}
              variants={fadeIn('right', 'tween', index * 0.45)}
              className="group font-poppins bg-[#041014] px-8 pt-8 pb-12 space-y-1 rounded-[65px] shadow-[4px_6px_30px_rgba(31,133,193,0.25)] max-w-[380px] md:max-w-none mx-auto"
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
    </section>
  );
}

export default OfferCard;
