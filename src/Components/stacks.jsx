import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Html from "../assets/html.png";
import Css from "../assets/css3.png";
import Js from "../assets/javascript.png";
import ReactLogo from "../assets/React.png";
import Tailwin from "../assets/tailwin.png";
import Boos from "../assets/boos.png";
import Word from "../assets/word.png";
import Figma from "../assets/figma.webp";
import Fram from "../assets/framer.png";
import Framerr from "../assets/Framerr.png";
import Chat from "../assets/chat.png";
import Ai from "../assets/ai.png";

const stackItems = [
  { src: Html, label: "HTML" },
  { src: Css, label: "CSS" },
  { src: Js, label: "JavaScript" },
  { src: ReactLogo, label: "React" },
  { src: Tailwin, label: "Tailwind" },
  { src: Boos, label: "Bootstrap" },
  { src: Word, label: "WordPress" },
  { src: Figma, label: "Figma" },
  { src: Fram, label: "Framer" },
  { src: Framerr, label: "Framer (Design)" },
  { src: Chat, label: "ChatGPT" },
  { src: Ai, label: "Illustrator" },
];

const Stacks = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Stacks</h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-15">
        {stackItems.map((stack, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            once: false,
            margin: "-100px",
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="bg-white shadow-md rounded-xl p-6 py-[80px] flex flex-col items-center justify-center text-center"
              animate={isInView ? { scale: 1.05, opacity: 1 } : { scale: 0.6, opacity: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={stack.src}
                alt={stack.label}
                className="w-[100px] object-contain mb-4"
              />
              <span className="text-xl font-semibold">{stack.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stacks;
