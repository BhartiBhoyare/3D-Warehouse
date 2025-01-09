import React from "react";
import artifort from "../assets/artifort.png";
import thumbnail from "../assets/thumbnail.png";
import chair from "../assets/chair.png";
import custom from "../assets/custom.png"
import { VscGlobe } from "react-icons/vsc";
import { GrFormLocation } from "react-icons/gr";

const Brands = () => {
  return (
    <div className="bg-[#f1f1f6] py-16 px-24 mt-8">
      <div className="text-[#1e6798] text-sm font-bold flex">
        <div>
        OUR BRANDS
        <p className="text-black text-3xl font-semibold mt-3">
          Design with the brands you love on 3D Warehouse.
        </p>
        <p className="text-black font-normal text-lg mt-4">
          Check out our top brands and partners, and start designing your dream
          space today.
        </p>
        <button className=" text-white bg-[#0063a3] mt-4 py-1 px-3 rounded-sm hover:bg-[#217cbb]">
          View All
        </button>
        </div>
        <div className="flex ml-3">
          <div className="flex flex-col items-center cursor-pointer bg-white h-[21.6rem] rounded-sm shadow-md shadow-gray-300 mx-3">
            <img className="h-32 object-cover" src={chair} alt="" />
            <img className="h-14 rounded-full absolute mt-24" src={artifort} alt="" />
            <h1 className="mt-10 text-black">Artifort</h1>
            <button className="bg-[#7d808d] text-[0.65rem] text-white px-1 rounded-sm mt-2">Furniture</button>
            <div className="flex items-center mt-2">
              <GrFormLocation className="size-5 text-[#7d808d]" />
              <p className="text-[0.76rem] font-normal text-black">NL</p>
            </div>
            <div className="flex items-center mt-14 pt-2 border-t-[1px] border-[#cbcdd6]">
              <VscGlobe className="text-[#aeaeb6] size-6 mr-28 hover:text-[#004f83]" />
              <button className="bg-[#0063a3] text-white hover:bg-[#217cbb] px-3 py-1 rounded-sm ml-28">Follow</button>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer bg-white h-[21.6rem] rounded-sm shadow-md shadow-gray-300 mx-3">
            <img className="h-32 object-cover" src={custom} alt="" />
            <img className="h-14 rounded-full absolute mt-24" src={thumbnail} alt="" />
            <h1 className="mt-10 text-black">Danver Stainless Outdoor Kitchens</h1>
            <button className="bg-[#7d808d] text-[0.65rem] text-white px-1 rounded-sm mt-2">Building Products</button>
            <div className="flex items-center mt-2">
              <GrFormLocation className="size-5 text-[#7d808d]" />
              <p className="text-[0.76rem] font-normal text-black">NL</p>
            </div>
            <div className="flex items-center mt-14 pt-2 border-t-[1px] border-[#cbcdd6]">
              <VscGlobe className="text-[#aeaeb6] size-6 mr-28 hover:text-[#004f83]" />
              <button className="bg-[#0063a3] text-white hover:bg-[#217cbb] px-3 py-1 rounded-sm ml-28">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
