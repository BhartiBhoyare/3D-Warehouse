import React from "react";
import upload from "../assets/upload.png";
import user from "../assets/user.png";
import logo from "../assets/newLogo.png"

const Navbar = () => {
  return (
    <>
      <nav className="flex fixed w-full top-0 z-50 bg-white items-center py-4 px-7 shadow-sm shadow-[#e1e2e8]">
        <img className="h-7" src={logo} alt="" />
        <div className="hidden lg:flex font-semibold text-2xl ml-3">3D Warehouse</div>
        <button className="hidden lg:flex font-bold bg-[#0063a3] text-white py-[0.1rem] px-4 rounded-sm ml-6">
          Get SketchUp
        </button>
        <img className="hidden lg:flex size-4 lg:ml-[48rem]" src={upload} alt="" />
        <img className="size-5 ml-[17.5rem] lg:ml-6" src={user} alt="" />
      </nav>
    </>
  );
};

export default Navbar;
