import React from "react";

const Button = ({ styles, button_text, handleClick }) => (
  <button type="button" className={`z-50 py-3 px-6 font-poppins text-base box-border shadow-sm [background:linear-gradient(90deg,_#31640b,_rgba(159,_226,_33,_0.6))] rounded-lg outline-none cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 ${styles}`} onClick={handleClick}>
    {button_text}
  </button>
);

export default Button;
