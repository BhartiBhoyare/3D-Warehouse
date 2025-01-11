import React, { useRef, useState } from "react";
import { links } from "./data";

const SketchUp = () => {
  const [name, setname] = useState("SketchUp Pro");
  const [heading, setheading] = useState("Simple is powerful.");
  const [para, setpara] = useState(
    "The most intuitive way to design, document and communicate your ideas in 3D. SketchUp enables you to design, define, and plan in all stages of the project. Work through your ideas in 3D space and quickly develop your projects. Accuracy from the beginning is key."
  );
  const [img, setimg] = useState("/sketchup-pro.png");

  return (
    <div className="lg:py-16 lg:px-24 py-16 px-4">
      <p className="lg:text-[2.6rem] text-[1.25rem] font-semibold lg:mr-28">
        Get the most out of 3D Warehouse & SketchUp with our suite of products.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-20">
        {links.map(({ name, para, btn1, btn2, content }) => (
          <button
            onClick={(e) => {
              setname(content.name);
              setheading(content.heading);
              setpara(content.para);
              setimg(content.img);
              const section = document.querySelector("#SketchUp");
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="shadow-md shadow-[#cfcfcf] rounded-md border-t-4 cursor-pointer border-[#4c8fbb] py-2 px-2 lg:py-4 lg:px-4 focus:border-t-4 focus:border-[#005f9e] transform focus:-translate-y-2"
          >
            <h1 className="text-[#66696c] lg:text-sm text-xs font-bold">{name}</h1>
            <p className="lg:text-[0.77rem] text-[0.65rem] text-[#66696c] mt-3 h-28 lg:h-8 lg:mr-3">
              {para}
            </p>
            <div className="hidden lg:flex ml-3 mt-[6.5rem] text-[0.63rem] font-bold">
              <button className="bg-[#a4a6af] hover:bg-[#7d808d] text-white rounded-sm py-[0.1rem] px-1">
                {btn1}
              </button>
              <button className="bg-[#a4a6af] hover:bg-[#7d808d] text-white rounded-sm py-[0.1rem] px-1 ml-[0.4rem]">
                {btn2}
              </button>
            </div>
          </button>
        ))}
      </div>
      <div id="SketchUp" className="flex lg:flex-row flex-col pt-20">
        <div className="">
          <h3 className="text-[#1e6798] font-bold text-sm">{name}</h3>
          <h1 className="lg:text-3xl text-xl font-semibold mt-3">{heading}.</h1>
          <p className="mt-3 text-sm lg:text-lg lg:mr-14">{para}</p>
          <button className="text-white bg-[#0063a3] mt-4 py-[0.4rem] px-3 rounded-sm hover:bg-[#217cbb] text-sm font-semibold">
            Get Started
          </button>
        </div>
        <img className="lg:h-80 mt-12 lg:mt-0" src={img} alt="" />
      </div>
    </div>
  );
};

export default SketchUp;
