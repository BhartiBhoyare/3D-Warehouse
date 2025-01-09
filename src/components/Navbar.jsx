import React from "react";
import logo from "../assets/logo.png";
import upload from "../assets/upload.png";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex fixed top-0 z-50 bg-white items-center py-4 px-7">
        <img className="h-7" src={logo} alt="" />
        <button className="font-bold bg-[#0063a3] text-white py-[0.1rem] px-4 rounded-sm ml-6">
          Get SketchUp
        </button>
        <img className="size-4 ml-[49.6rem]" src={upload} alt="" />
        <img className="size-5 ml-6" src={user} alt="" />
      </nav>
    </>
  );
};

export default Navbar;
