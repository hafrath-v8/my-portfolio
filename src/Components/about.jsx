"use client";

import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

function Item({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px", once: false });

  return (
    <section className="flex justify-center items-center">
      <motion.div
        ref={ref}
        className="w-full m-4 flex flex-col items-center relative"
        animate={{ scale: isInView ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Paragraph */}
        <div className="flex-1 border-2 border-dotted border-[#6670FF] px-6 py-4 bg-white rounded-md shadow-md">
          <p className="text-lg text-[#333]">{text}</p>
        </div>

        {/* Progress Circle */}
        <figure className="sticky top-0 w-[75px] h-[75px] shrink-0 mx-5 mt-4">
          <svg className="-rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength={1}
              stroke="#6670FF"
              className="opacity-20"
              strokeWidth={5}
              fill="none"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength={1}
              stroke="#6670FF"
              strokeDasharray="1"
              strokeWidth={5}
              fill="none"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </motion.div>
    </section>
  );
}

export default function TrackElementWithinViewport() {
  const paragraphs = [
    "I'm passionate about web development and design, blending creativity with clean code. I bring ideas to life using HTML, CSS, JavaScript, Tailwind, React, and Figma. I also work with WordPress and focus on SEO to make websites both beautiful and discoverable.",
    "My web design journey began with a deep curiosity and a love for creativity. I’m a self-taught designer who learned through hands-on practice, tutorials, and countless hours exploring YouTube and online resources.",
    "My tech stack mirrors the vibrant diversity of the web itself—from HTML, CSS, and JavaScript to Figma, Adobe Creative Suite, and more. I'm always learning and evolving.",
    "As a self-taught developer, I've built my skills entirely through YouTube and online resources. I focus on crafting beautiful, functional websites that are both user-friendly and optimized for search engines.",
  ];

  return (
    <>
      {paragraphs.map((text, index) => (
        <Item key={index} text={text} />
      ))}
    </>
  );
}
