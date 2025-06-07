"use client"

import { Link } from "react-scroll"
import React from "react";
import { FaCopyright } from "react-icons/fa"
import { FaArrowPointer } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <section className="bg-black p-3 w-full text-white flex justify-center items-center gap-4">
                <FaCopyright className="size-6 text-white" />
                <h1 className="text-white text-center font-semibold text-lg">Copyright 2024, Crave Bakes, All Rights Reserved</h1>
            </section>
            <div id="icon-box" className="bg-orange-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed bottom-6 right-6">
              <Link
                     to="hero" spy={true} offset={-100} smooth={true}>
              <FaArrowPointer className="w-[35px] h-[35px]" />
              </Link>
            </div>
        </>
    )
}
export default Footer;