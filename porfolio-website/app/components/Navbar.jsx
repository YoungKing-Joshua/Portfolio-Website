import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full fixed px5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top" className="font-Ovo">
          <Image
            alt=""
            src={assets.logo}
            className="w-28 cursor pointer mr-14"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#service" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image alt="" src={assets.moon_icon} className="w-6 " />
          </button>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo shadow-sm bg-opacity-50"
          >
            Contact
            <Image alt="" src={assets.arrow_icon} className="w-3" />
          </a>

          <button className="block md:hidden ml-3">
            <Image alt="" src={assets.menu_black} className="w-6 " />
          </button>
        </div>

        {/* -- ----- moble menu ----- -- */}
      </nav>
    </>
  );
};

export default Navbar;
