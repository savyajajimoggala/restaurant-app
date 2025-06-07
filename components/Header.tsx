"use client";

import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "About", path: "about" },
    { link: "Breads", path: "breads" },
    { link: "Menu", path: "menu" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="w-full bg-black sticky top-0 z-50">
      <div className="flex justify-between items-center lg:px-16 px-6 py-3">
        <Image src="/logo.png" alt="Logo" width={90} height={90} className="invert" />

        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <ScrollLink
                to={path}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:text-orange-500"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 hidden lg:block">
          ORDER NOW
        </button>

        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-6 pb-6">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <ScrollLink
                to={path}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white uppercase font-semibold cursor-pointer p-2 hover:text-orange-400"
                onClick={toggleMenu}
              >
                {link}
              </ScrollLink>
            </li>
          ))}
          <button className="bg-orange-600 text-white px-10 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300">
            ORDER NOW
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Header;