import React from "react";

const About = () => {
  return (
    <div className="mt-[30rem] font-bold text-sm text-[#1e6798] bg-[#f1f1f6] py-[4.5rem] px-24">
      ABOUT US
      <div className="flex text-black mt-3">
        <p className="text-3xl font-semibold w-[100rem] pr-10">
          Share your models and get inspired with the world’s largest 3D model
          library.
        </p>
        <p className="text-lg font-normal text-gray-800 px-5">
          3D Warehouse is a website of searchable, pre-made 3D models that works
          seamlessly with SketchUp. 3D Warehouse is a tremendous resource and
          online community for anyone who creates or uses 3D models.
        </p>
      </div>
      <div className="flex justify-center bg-[#217cbb] text-white py-10 w-[65rem] mt-16">
        <div className="flex flex-col items-center">
          <p className="text-7xl font-normal">5.2M+</p>
          <p className="font-semibold mt-2">
            Models & Products on the platform
          </p>
        </div>
        <div className="bg-white w-[0.05rem] mx-10"></div>
        <div className="flex flex-col items-center">
          <p className="text-7xl font-normal">2.3K+</p>
          <p className="font-semibold mt-2">
            Real world brands promoting products
          </p>
        </div>
        <div className="bg-white w-[0.04rem] mx-10"></div>
        <div className="flex flex-col items-center">
          <p className="text-7xl font-normal">41.5K+</p>
          <p className="font-semibold mt-2">
            Model & product downloads per hour
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
