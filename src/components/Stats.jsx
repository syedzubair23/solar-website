import React from "react";
import {
  BoltIcon,
  BoltSlashIcon,
  CurrencyDollarIcon,
  CurrencyRupeeIcon,
  PencilIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant, textVariant2 } from "../utils/motion";

function Stats() {
  return (
    <section className="bg-[url('/images/stats-bgimage.png')] bg-no-repeat bg-[top_right_-20rem] sm:bg-right-top lg:bg-center max-w-7xl mx-auto mb-16 md:mb-28 px-4 pt-16 pb-8 md:pb-0 lg:pb-32 sm:px-6 lg:px-8">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className="font-poppins space-y-20">
        <div className="space-y-10">
          <motion.h2 variants={textVariant2} className="font-fjalla_one tracking-wide text-3xl leading-snug md:leading-tight sm:text-5xl mx-auto lg:mx-0 max-w-[17ch] text-[#9FE221] text-center lg:text-left">
            We are Pakistan's Famous Solar Brand
          </motion.h2>
          <motion.p variants={textVariant(1.2)} className="text-base text-[#D9F4FD] text-center lg:text-left mx-auto lg:mx-0 max-w-prose leading-relaxed">
            We are providing solar solutions in Pakistan since 2012. We have
            satisfied clients all over the Pakistan. Our skillful engineers are
            always cooperative and give clear guidance to customers. We have
            almost installed 650+ projects ranging from domestic to industrial
            projects in all these years.
          </motion.p>
        </div>
        {/* <div className=" bg-[url('images/stats-bgeffectimage.png')] bg-no-repeat bg-[center_left_10rem] rounded-3xl"> */}
        <motion.div variants={fadeIn('left', 'tween', 1.3, 1)} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14 justify-items-center px-8 py-16 bg-white/10 shadow-[0px_0px_40px_rgba(0,0,0,0.25)] rounded-3xl backdrop-blur-3xl overflow-hidden">
            <div className="w-[98%] sm:w-[500px] h-72 rotate-12 rounded-[185px] absolute blur-[115px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 [background:linear-gradient(_90deg,_#1A6E80_0%,_#418282_100%)]"></div>
          <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-white/5 border box-border border-[#6A6A6A] flex place-content-center pb-6 pr-6">
            <div className="flex flex-col gap-2 items-center justify-center -rotate-45">
              <UserGroupIcon className="w-12 h-12 text-[#820C0C]" />
              <h3 className="text-white text-[32px] font-semibold leading-none text-center pt-1">
                500,000+
              </h3>
              <p className="text-[#869A77] text-sm text-center font-medium leading-none">
                Satisfied Clients
              </p>
            </div>
          </div>
          <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-[#04303F] flex place-content-center pb-6 pr-6">
            <div className="flex flex-col gap-2 items-center justify-center -rotate-45">
              <PencilSquareIcon className="w-12 h-12 text-[#80DCFA]" />
              <h3 className="text-white text-[32px] font-semibold leading-none text-center pt-1">
                650+
              </h3>
              <p className="text-[#869A77] text-sm text-center font-medium leading-none">
                Projects Completed
              </p>
            </div>
          </div>
          <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-white/5 border box-border border-[#6A6A6A] flex place-content-center pb-6 pr-6">
            <div className="flex flex-col gap-2 items-center justify-center -rotate-45">
              <BoltIcon className="w-12 h-12 text-[#E2E221]" />
              <h3 className="text-white text-[32px] font-semibold leading-none text-center pt-1">
                10mw+
              </h3>
              <p className="text-[#869A77] text-sm text-center font-medium leading-none">
                Electricity Produced
              </p>
            </div>
          </div>
          <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-[#04303F] box-border flex place-content-center pb-6 pr-6">
            <div className="flex flex-col gap-2 items-center justify-center -rotate-45">
              <CurrencyDollarIcon className="w-12 h-12 text-[#48B48D]" />
              <h3 className="text-white text-[32px] font-semibold leading-none text-center pt-1">
                54m+
              </h3>
              <p className="text-[#869A77] text-sm text-center font-medium leading-none">
                Rupees Saved
              </p>
            </div>
          </div>
        </motion.div>
        {/* </div> */}
      </motion.div>
    </section>
  );
}

export default Stats;

// [background:linear-gradient(_170.28deg,_rgba(4,16,20,0.7)_-64.13%,_rgba(4,16,20,0.175336)_42.44%,_rgba(4,16,20,0.1)_100%,rgba(4,16,20,0.2)_95.43%)]