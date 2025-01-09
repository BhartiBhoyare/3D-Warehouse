import React from "react";
import bgimage from "../assets/hero-img.png";
import { FaRegImage } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";

const Home = () => {
  return (
    <div className="top-0">
      <img className="absolute top-7" src={bgimage} alt="" />
      <div className="bg-gradient-to-b from-[#1b1a26] top-7 via-transparent h-[50rem] z-10 absolute w-full">
        <div className="flex flex-col pt-40 pl-52">
          <p className="font-semibold text-white text-[2rem] mb-10 font-sans">
            What can we help you find?
          </p>
          <div className="bg-white flex items-center w-[52rem] rounded-md">
            <input
              type="search"
              className="form-control mr-lg-2 outline-none py-3 px-3 w-[46rem] rounded-l-md"
              placeholder="Search for content..."
              aria-label="Search"
            />
            <FaRegImage className="text-[#004f83] size-6 h-7 mr-5 cursor-pointer hover:text-[#0279c7]" />
            <div className="bg-[#0063a3] py-[0.9rem] px-4 rounded-r-md cursor-pointer hover:bg-[#0279c7]">
              <ImSearch className="text-white size-5 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
