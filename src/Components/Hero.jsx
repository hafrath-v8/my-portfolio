import React, { useState, useEffect } from "react";
import Button from "./Button";
import ringImg from "../assets/ring.png";
import poly from "../assets/poly.png";
import gear from "../assets/gear.png";
import inaam from "../assets/inaam.jpeg";
import afsal from "../assets/afsal.jpeg";
import siloj from "../assets/siloj.jpeg";
import hafrath from "../assets/hafrath.jpg";
import square from "../assets/square.png";
import { motion, AnimatePresence } from "framer-motion";
import Nav from '../Components/navbar'
import End from '../Components/end'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const items = ["Web Development", "Web Designing", "SEO"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative  bg-white">
      {/* Menu Button */}
      <div className="fixed bg-white rounded-full p-2 shadow top-6 right-6 z-50">
        <Button toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>

      {/* Optional: Menu Overlay */}
      {isOpen && (
        <Nav/>
      )}

      {/* Floating Top Icons */}
      <div className="absolute top-5 w-full lg:z-1 overflow-hidden flex justify-around lg:flex-col lg:absolute lg:left-[4%]">
        {[ringImg, square, poly].map((img, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={img} alt="icon"  className="lg:w-[200px] w-[110px]" />
          </motion.div>
        ))}
      </div>
      {/* Main Content */}
      <div className="absolute  overflow-hidden top-60 w-[1200px] lg:top-50 md:top-55  mx-auto z-0"><End/></div>
      
      <div className="flex flex-col items-center justify-center mt-[120px] text-center">
        <h2 className="text-5xl font-medium">Hi, I'm Hafrath!</h2>

        <div className="mt-2 h-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {items[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Profile Image */}
        <div
          className="w-64 h-64 bg-cover z-2 bg-center rounded-3xl shadow-2xl mt-2"
          style={{ backgroundImage: `url(${hafrath})` }}
        />

        {/* Client Avatars */}
        <div className="relative flex items-center justify-center left-4 mt-6 h-[50px] w-[240px]">
          <img src={afsal} alt="afsal" className="w-9 rounded-full border-2 border-white absolute left-0" />
          <img src={inaam} alt="inaam" className="w-9 rounded-full border-2 border-white absolute left-6" />
          <img src={siloj} alt="siloj" className="w-9 rounded-full border-2 border-white absolute left-12" />
          <p className="absolute left-[88px] top-[15px] text-sm">20+ Happy clients</p>
        </div>

        {/* Contact Button */}
        <a
  href="https://wa.me/94704553604?text=Hi%20Hafrath%2C%20I'm%20interested%20in%20working%20with%20you"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-6 text-2xl font-bold px-9 py-3 bg-white rounded-full border-4 border-blue-100 cursor-pointer">
    Contact Me
  </button>
</a>


        {/* Floating Bottom Icons */}
        <div className="flex w-full lg:flex-col justify-around lg:z-2 lg:absolute lg:left-[80%]">
          {[poly, gear, ringImg].map((img, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0, 8, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={img} alt="icon" className="w-28 lg:w-[200px] " />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rocket Hire Me Button */}
      {/* Rocket Hire Me Button */}


    </div>
  );
};

export default Hero