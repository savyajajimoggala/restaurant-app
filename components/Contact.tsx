"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";


const Contact = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine'
        });
    }, []);

    return (
        <section id="contact" className="w-full flex flex-col justify-start items-end gap-20 bg-cover h-fit lg:py-20 py-10 lg:px-20 px-10 bg-center" style={{ background: `url("banner.jpg")` }}>
            <div className="lg:w-[40%] w-full">

            </div>

            <div className="lg:w-[60%] w-full flex flex-col justify-start items-center gap-10">
                <h1 data-aos="zoom-in" className="text-[55px] text-black font-semibold text-center">Contact Us</h1>
                <p data-aos="zoom-in" data-aos-delay="400" className="text-center text-xl text-black">At Masala Magic, we believe food is more than just taste — its tradition, love, and celebration.,<br></br>Whether you prefer rich curries or light snacks, we serve it with care — just like at home</p>
                <div className="flex flex-col justify-center items-center gap-6 lg:w-[80%] w-full">
                    <div id="form-box" className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 w-full">
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <h1 className="text-lg font-semibold text-black">Full Name</h1>
                            <input type="text" placeholder="Enter your full name" className="bg-white text-black px-6 py-3 w-full rounded-full border-slate-400" />

                        </div>

                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <h1 className="text-lg font-semibold text-black">Email</h1>
                            <input type="text" placeholder="Enter your full email" className="bg-white text-black px-6 py-3 w-full rounded-full border-slate-400" />

                        </div>
                    </div>

                        <div id="form-box" className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 w-full">
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <h1 className="text-lg font-semibold text-black">Password</h1>
                            <input type="password" placeholder="Enter your password" className="bg-white text-black px-6 py-3 w-full rounded-full border-slate-400" />

                        </div>

                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <h1 className="text-lg font-semibold text-black">Phone number</h1>
                            <input type="number" placeholder="Enter your phone number" className="bg-white text-black px-6 py-3 w-full rounded-full border-slate-400" />

                        </div>
                    </div>
                
                    <button className="w-1/2 bg-black px-6 py-3 rounded-full text-white font-semibold">SUBMIT</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600" id="address-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-end items-start gap-6 mt-10">
                    <div className="fiex fiex-col justify-center items-start gap-3">
                        <h1 className="text-black font-bold text-2xl">FIND US</h1>
                        <p className="text-xl">121 Rock Street<br></br> 21st Avenue,Hyderabad, Telangana - 500072</p>

                    </div>
                    <div className="fiex fiex-col justify-center items-start gap-3">
                        <h1 className="text-black font-bold text-2xl">FIND US</h1>
                        <p className="text-xl">121 Rock Street<br></br> 21st Avenue,Hyderabad, Telangana - 500072</p>

                    </div>
                    <div className="fiex fiex-col justify-center items-start gap-3">
                        <h1 className="text-black font-bold text-2xl">FIND US</h1>
                        <p className="text-xl">121 Rock Street<br></br> 21st Avenue,Hyderabad, Telangana - 500072</p>

                    </div>

                </div>
            </div>

        </section>
    )
}
export default Contact;