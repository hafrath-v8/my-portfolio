import React from "react";
import DotCursor from "./cursor"; // adjust path if needed

const Contact = () => {
  return (
    <div className="relative my-9 overflow-hidden">
      <DotCursor /> {/* Dot cursor is only active here */}

      <div className="rounded-4xl py-[50px] w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-gray-100 p-6">
        <div>
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <div className="flex cursor-pointer flex-col mt-2 ">
            <span className="text-base">Book a Call</span>
            <span className="text-base">armhafrath@gmail.com</span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Useful Links</h2>
          <div className="flex cursor-pointer flex-col mt-2">
            <span className="text-base">Home</span>
            <span className="text-base">About</span>
            <span className="text-base">Projects</span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Social</h2>
          <div className="flex cursor-pointer flex-col mt-2">
            <span className="text-base">LinkedIn</span>
            <span className="text-base">Facebook</span>
            <span className="text-base">X</span>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex cursor-pointer mb-8 flex-col gap-2">
            <span className="text-m text-gray-500">© 2025</span>
            <span className="text-m text-indigo-600 font-semibold">
              Made by Hafrath
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
