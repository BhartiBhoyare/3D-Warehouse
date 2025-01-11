import React from "react";
import artifort from "../assets/artifort.png";
import thumbnail from "../assets/thumbnail.png";
import chair from "../assets/chair.png";
import custom from "../assets/custom.png"
import { VscGlobe } from "react-icons/vsc";
import { GrFormLocation } from "react-icons/gr";

const Brands = () => {
  return (
    <div className="bg-[#f1f1f6] py-16 px-4 lg:px-24 lg:mt-8">
      <div className="text-[#1e6798] text-sm font-bold flex flex-col lg:flex-row">
        <div>
        OUR BRANDS
        <p className="text-black text-xl lg:text-3xl lg:font-semibold mt-3">
          Design with the brands you love on 3D Warehouse.
        </p>
        <p className="text-black font-normal lg:text-lg mt-4">
          Check out our top brands and partners, and start designing your dream
          space today.
        </p>
        <button className=" text-white bg-[#0063a3] mt-4 py-2 lg:py-1 px-4 lg:px-3 rounded-sm hover:bg-[#217cbb]">
          View All
        </button>
        </div>
        <div className="flex mt-14 lg:mt-0 lg:ml-3">
          <div className="flex flex-col items-center cursor-pointer bg-white lg:h-[21.6rem] rounded-sm shadow-md shadow-gray-300 mr-2 lg:mx-3">
            <img className="lg:h-32 h-12 object-cover" src={chair} alt="" />
            <img className="lg:h-14 h-6 rounded-full absolute mt-9 lg:mt-24 border-2 border-white" src={artifort} alt="" />
            <h1 className="lg:mt-10 mt-2 text-xs lg:text-sm text-black">Artifort</h1>
            <button className="bg-[#7d808d] text-[0.65rem] text-white px-1 rounded-sm mt-2">Furniture</button>
            <div className="flex items-center mt-1 lg:mt-2">
              <GrFormLocation className="lg:size-5 text-[#7d808d]" />
              <p className="lg:text-[0.76rem] text-[0.6rem] font-normal text-black">NL</p>
            </div>
            <div className="flex items-center lg:mt-14 py-2 border-t-[1px] border-[#cbcdd6]">
              <VscGlobe className="text-[#aeaeb6] size-6 lg:mr-28 mr-4 hover:text-[#004f83]" />
              <button className="bg-[#0063a3] text-white hover:bg-[#217cbb] px-3 py-1 rounded-sm ml-4 lg:ml-28">Follow</button>
            </div>
          </div>
          <div className="flex flex-col  items-center cursor-pointer bg-white lg:h-[21.6rem] rounded-sm shadow-md shadow-gray-300 ml-2 lg:mx-3">
            <img className="lg:h-32 h-12 object-cover" src={custom} alt="" />
            <img className="lg:h-14 h-6 rounded-full absolute mt-9 lg:mt-24 border-2 border-white" src={thumbnail} alt="" />
            <h1 className="lg:mt-10 mt-2 text-xs lg:text-sm text-black">Lande</h1>
            <button className="bg-[#7d808d] text-[0.65rem] text-white px-1 rounded-sm mt-2">Furniture</button>
            <div className="flex items-center mt-1 lg:mt-2">
              <GrFormLocation className="lg:size-5 text-[#7d808d]" />
              <p className="lg:text-[0.76rem] text-[0.6rem] font-normal text-black">NL</p>
            </div>
            <div className="flex items-center lg:mt-14 py-2 border-t-[1px] border-[#cbcdd6]">
              <VscGlobe className="text-[#aeaeb6] size-6 lg:mr-28 mr-4 hover:text-[#004f83]" />
              <button className="bg-[#0063a3] text-white hover:bg-[#217cbb] px-3 py-1 rounded-sm ml-4 lg:ml-28">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
