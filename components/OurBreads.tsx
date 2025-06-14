"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import { ourbreads } from "../export";

const OurBreads = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine'
        });
    }, []);
    return (
        <section id="breads" className="w-full flex-col justify-center items-center gap-10 bg-cover h-fit py-20 lg:px-20 px-10 bg-center" style={{ backgroundImage: `url('/banner4.jpg')` }}>
            <h1 data-aos="zoom-in" className="text-[55px] text-white font-semibold">Our Breads</h1>

            <div data-aos="zoom-in" data-aos-delay="200" className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6">
                {ourbreads.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-4 bg-white p-8 rounded-lg">
                        <Image src={item.image} alt="bread image" width={300} height={400} className="w-[300px] h-[200px] rounded-lg transform hover:scale-100 transition-transform duration-300 cursor-pointer"
                        />
                        <h1 className="text-[20px] text-black font-semibold">{item.title}</h1>
                        <p className="text-center">{item.desc}</p>
                        <button className="border-2 border-black rounded-full px-8 py-2 uppercase text-sm font-semibold  transform hover:scale-100 transition-transform duration-300">
                            ORDER NOW
                        </button>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default OurBreads