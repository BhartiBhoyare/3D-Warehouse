import React from "react";
import bgimage from "../assets/heroImage.png"
import { FaRegImage } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";

const Home = () => {
  return (
    <div className="top-0">
      <img className="h-[33rem] object-cover lg:h-[33rem] bg-cover lg:w-full lg:flex lg:top-7" src={bgimage} alt="" />
      <div className="bg-gradient-to-b from-[#1b1a26] top-7 via-transparent h-[70rem] z-10 absolute w-full">
        <div className="flex flex-col pl-5 pt-52 lg:pt-48 lg:pl-52">
          <p className="lg:font-semibold font-bold text-white text-2xl lg:text-[2rem] mb-10 font-sans">
            What can we help you find?
          </p>
          <div className="bg-white font-bold flex items-center w-[21rem] lg:w-[51rem] rounded-sm lg:rounded-md">
            <input
              type="search"
              className="form-control mr-lg-2 outline-none w-[46rem] px-2 rounded-l-lg lg:rounded-l-md"
              placeholder="Search for content..."
              aria-label="Search"
            />
            <FaRegImage className="text-[#004f83] h-[2rem] w-[5rem] mr-4 lg:size-6 cursor-pointer hover:text-[#0279c7]" />
            <div className="bg-[#0063a3] py-[0.9rem] px-4 rounded-r-sm lg:rounded-r-md cursor-pointer hover:bg-[#0279c7]">
              <ImSearch className="text-white size-5 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
