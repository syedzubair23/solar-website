import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    // className={`text-base text-[#D9F4FD] text-center leading-loose lg:text-justify mx-auto lg:mx-0 max-w-prose`}
    className={`font-fjalla_one tracking-wide text-5xl leading-snug sm:text-[64px] text-[#9FE221] text-center lg:text-left`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="font-fjalla_one tracking-wide text-5xl leading-snug sm:text-[64px] text-[#9FE221] text-center lg:text-left"
  >
    {title}
  </motion.h2>
);