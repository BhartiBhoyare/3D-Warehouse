import React from "react";
import upload from "../assets/upload.png";
import user from "../assets/user.png";
import newLogo from "../assets/newLogo.png"

const Navbar = () => {
  return (
    <>
      <nav className="flex fixed items-center lg:py-[1.1rem] py-6 px-10 w-full lg:px-7 top-0 z-50 bg-white">
        <img className="lg:h-7 h-14 cursor-pointer" src={newLogo} alt="" />
        <div className="hidden lg:flex font-semibold text-2xl ml-2">3D Warehouse</div>
        <button className="hidden lg:flex font-bold bg-[#0063a3] text-white py-[0.1rem] px-4 rounded-sm ml-6">
          Get SketchUp
        </button>
        <img className="hidden lg:flex cursor-pointer size-4 lg:ml-[48.8rem]" src={upload} alt="" />
        <img className="cursor-pointer size-10 ml-[35rem] lg:size-5 lg:ml-6" src={user} alt="" />
      </nav>
    </>
  );
};

export default Navbar;
