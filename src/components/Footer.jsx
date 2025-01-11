import React from "react";
import trimblelog from "../assets/trimbleLogo.png";
import trimble from "../assets/trimble.png"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const languages = [
    "English",
    "Español",
    "Français",
    "Italiano",
    "Nederlands",
    "Polski",
    "Deutsch",
    "Svenska",
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-20 bg-[#085293] text-white py-8 px-4 lg:py-20 lg:px-20">
        <div className="lg:w-[22.4rem]">
          <img className="h-12" src={trimblelog} alt="" />
          <p className="lg:ml-2 text-sm lg:text-base mt-4">
            Positioning-centric information is changing the way people,
            businesses and governments work throughout the world. By applying
            Trimble's advanced positioning solutions, productivity increases and
            safety improvements are being realized.
          </p>
          <button className="hidden lg:flex ml-2 underline mt-4 cursor-pointer">More About Trimble</button>
        </div>
        <div className="flex mt-6 lg:mt-0">
        <div className="list-none text-sm pr-10 lg:pl-24">
          <p className="font-bold pb-2">About Us</p>
          <li className="underline py-2 cursor-pointer">Careers</li>
          <li className="underline py-2 cursor-pointer">SketchUp Blog</li>
          <li className="underline py-2 cursor-pointer">Trimble Buildings</li>
        </div>
        <div className="list-none text-sm pl-4 lg:pl-24">
          <p className="font-bold pb-2">Help</p>
          <li className="underline py-2 cursor-pointer">Help Center</li>
          <li className="underline py-2 cursor-pointer">SketchUp Forums</li>
          <li className="underline py-2 cursor-pointer">SketchUp Training</li>
          <li className="underline py-2 cursor-pointer">Contact Us</li>
        </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-row items-center px-4 lg:px-20 py-7 bg-[#f1f1f6]">
        <img className="h-6" src={trimble} alt="" />
        <div className=" flex text-xs space-x-6 lg:ml-36 mt-2 lg:mt-0 text-[#0063a3]">
          <a className="text-[#404243] " href="">© 2025 Trimble Inc</a>
          <a href="">Privacy</a>
          <a href="">Terms of Use</a>
        </div>
        <div className="flex text-xs space-x-6 lg:ml-6 mt-2 lg:mt-0 text-[#0063a3]">
          <a href="">Do Not Sell My Personal Information</a>
          <a href="">Build</a>
        </div>
        <div className="relative inline-block mt-4 lg:mt-0 ml-4 lg:ml-40">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-between w-36 px-3 py-2 bg-white hover:border-[1px] border-gray-300 focus:border-[1px] focus:border-black"
          >
            <span className="text-xs">{selectedLanguage}</span>
            <IoIosArrowDown />
          </button>
          {isOpen && (
            <ul className="absolute bottom-full left-0 w-36 rounded-sm pb-2 mt-2 bg-white">
              {languages.map((language) => (
                <li
                  key={language}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
