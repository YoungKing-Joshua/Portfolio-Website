import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

function Footer({ isDarkMode }) {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          joshuadeialorse@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2026 Joshua Dei-Alorse. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center">
          <li>
            <a target="_blank" href="https://github.com/YoungKing-Joshua">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/joshua-dei-alorse-ba9157236/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/YoungKing-Joshua">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
