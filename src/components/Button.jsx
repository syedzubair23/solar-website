import React from "react";

const Button = ({ styles, button_text }) => (
  <button type="button" className={`py-3 px-6 font-poppins text-base box-border text-white shadow-sm [background:linear-gradient(90deg,_#31640b,_rgba(159,_226,_33,_0.6))] rounded-lg outline-none ${styles}`}>
    {button_text}
  </button>
);

export default Button;
