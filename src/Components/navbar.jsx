import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { BrowserRouter, Link } from "react-router-dom"

const navbar = () => {

  return (
    <BrowserRouter>
      <div
        className='fixed z-40 m-auto bg-white p-2 h-75 w-full  rounded-2xl shadow'
      >
       
        <div className="p-2 w-full pt-13  mx-auto">
          <div className="flex px-13 b flex-col items-center m-auto space-y-6">
            <Link
              to="/"
              className="bg-orange-600 text-white font-semi py-1.5 rounded-full w-full text-center"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black  py-1.5 w-full text-center rounded-full"
            >
              About
            </Link>
            <Link
              to="/stack"
              className="text-black  py-1.5 w-full text-center  rounded-full"
            >
              Stack
            </Link>
            <Link
              to="/contact"
              className="text-black  py-1.5 w-full text-center  rounded-full"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default navbar
