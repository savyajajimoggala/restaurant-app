"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { clients } from "../export";

const Clients = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine'
        });
    }, []);

    return (
        <section id="testimonials" className="w-full flex flex-col justify-center items-center gap-20 bg-cover h-fit py-=20 lg:px-20 px-10 bg-center" style={{ backgroundImage: `url('/banner1.jpg')` }}>
            <h1 data-aos="zoom-in" className="text-[55px] text-white font-semibold text-center">Read what our clients says</h1>
            <div data-aos="zoom-in" data-aos-delay="200" className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center lg:gap-8 gap-20"></div>
            {
         clients.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-start gap-4 bg-orange-600 p-10 h-[350px] rounded-xl relative"> 
        <div id="icon-box" className="bg-white p-6 rounded-full text-orange-600 absolute top-10">
        <FaQuoteLeft className="size-10" />
        </div>
        <p className="text-white text-lg">{item.about}</p>
        <h1 className="text-white text-xl font-bold uppercase">{item.name}</h1>
        </div>
         ))
            }
        </section>
    )
}
export default Clients