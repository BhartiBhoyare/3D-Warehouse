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
    <div className="py-16 px-24">
      <p className="text-[2.6rem] font-semibold mr-28">
        Get the most out of 3D Warehouse & SketchUp with our suite of products.
      </p>
      <div className="grid grid-cols-4 gap-4 mt-20">
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
            className="shadow-md shadow-[#cfcfcf] rounded-md border-t-4 cursor-pointer border-[#4c8fbb] py-4 px-4 focus:border-t-4 focus:border-[#005f9e] transform focus:-translate-y-2"
          >
            <h1 className="text-[#66696c] text-sm font-bold">{name}</h1>
            <p className="text-[0.77rem] text-[#66696c] mt-3 h-8 mr-3">
              {para}
            </p>
            <div className="mt-[6.5rem] text-[0.63rem] font-bold">
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
      <div id="SketchUp" className="flex pt-20">
        <div className="">
          <h3 className="text-[#1e6798] font-bold text-sm">{name}</h3>
          <h1 className="text-3xl font-semibold mt-3">{heading}.</h1>
          <p className="mt-3 text-lg mr-14">{para}</p>
          <button className="text-white bg-[#0063a3] mt-4 py-[0.4rem] px-3 rounded-sm hover:bg-[#217cbb] text-sm font-semibold">
            Get Started
          </button>
        </div>
        <img className="h-80" src={img} alt="" />
      </div>
    </div>
  );
};

export default SketchUp;
