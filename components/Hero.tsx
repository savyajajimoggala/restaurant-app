"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine'
    });
  }, []);

  return (
    <section id="hero" className="w-full flex lg:flex-row flex-col justify-between items-start">
      {/* Image Section */}
      <div id="image-section" className="lg:w-[50%] w-full">
        <Image
          data-aos="zoom-in"
          src="/hero.jpg"
          alt="hero-banner"
          width={800}
          height={500}
          className="bg-cover bg-center"
        />
      </div>

      {/* Content Section */}
      <div id="content-section" className="lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-20">
        <Image
          data-aos="zoom-in"
          data-aos-delay="200"
          src="/logo.png"
          alt="logo"
          width={120}
          height={100}
        />

        <h1 data-aos="zoom-in" data-aos-delay="400" className="text-[50px] text-center leading-[55px]">
          Fresh Breads<br />Handcrafted daily
        </h1>

        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-center text-xl text-slate-600"
        >
          we believe food is not just a meal — it&apos;s an emotion. Inspired by India’s
          rich culinary heritage, we serve a wide variety of traditional and modern Indian
          dishes prepared with love and the finest ingredients.
        </p>

        <button
          data-aos="zoom-in"
          data-aos-delay="800"
          className="border-2 border-black rounded-full px-14 py-4 font-bold"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default Hero;