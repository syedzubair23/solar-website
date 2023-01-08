import React from "react";
import { motion } from "framer-motion";
import { buttonVariant } from "../utils/motion";

const Button = ({ styles, button_text, handleClick }) => (
  <motion.button 
    variants={buttonVariant}
    initial="hidden"
    whileHover="show"
    type="button" 
    className={`z-10 py-3 px-6 font-poppins text-base box-border shadow-sm [background:linear-gradient(90deg,_#31640b,_rgba(159,_226,_33,_0.6))] rounded-lg outline-none cursor-pointer ${styles}`} onClick={handleClick}>
    {button_text}
  </motion.button>
);

export default Button;
