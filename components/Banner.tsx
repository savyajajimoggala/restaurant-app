"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import Image from "next/image";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 py-20 lg:px-20 px-10">
      <h1
        data-aos="zoom-in"
        className="text-[50px] text-black text-center leading-[60px]"
      >
        Our Freshly Baked bread is the <br /> famous of our breakfast menu
      </h1>

      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-center text-xl text-slate-600"
      >
        Crafted with fresh ingredients and time-honored recipes, our chefs blend
        tradition with a modern touch to serve you food that feels like home.
        Whether its a family dinner or a quick bite, we promise warmth,
        hospitality, and taste in every bite.
      </p>

      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="border-2 border-black rounded-full px-14 py-4 font-bold"
      >
        READ MORE
      </button>

      <div className="w-full bg-cover bg-center flex flex-col justify-center items-center">
        <Image
          data-aos="zoom-in"
          data-aos-delay="600"
          src="/banner3.jpg"
          alt="banner image"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};

export default Banner;