import React from "react";

const About = () => {
  return (
    <div className="font-bold text-sm text-[#1e6798] bg-[#f1f1f6] py-12 px-4 lg:py-[4.5rem] lg:px-24">
      ABOUT US
      <div className="flex flex-col lg:flex-row text-black mt-3">
        <p className="lg:text-3xl text-2xl lg:w-[100rem] font-sans">
          Share your models and get inspired with the world’s largest 3D model
          library.
        </p>
        <p className="text-sm lg:text-lg mt-4 lg:mt-0 font-normal font-sans lg:ml-14">
          3D Warehouse is a website of searchable, pre-made 3D models that works
          seamlessly with SketchUp. 3D Warehouse is a tremendous resource and
          online community for anyone who creates or uses 3D models.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center bg-[#217cbb] text-white py-10 lg:w-[65rem] mt-16">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-medium lg:text-7xl lg:font-normal">5.2M+</p>
          <p className="font-semibold text-xs lg:text-sm mt-2">
            Models & Products on the platform
          </p>
        </div>
        <div className="bg-white h-[0.06rem] lg:h-28 lg:w-[0.05rem] my-4 lg:my-0 mx-10"></div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-medium lg:text-7xl lg:font-normal">2.3K+</p>
          <p className="font-semibold text-xs lg:text-sm mt-2">
            Real world brands promoting products
          </p>
        </div>
        <div className="bg-white h-[0.04rem] lg:h-28 lg:w-[0.04rem] my-4 lg:my-0 mx-10"></div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-medium lg:text-7xl lg:font-normal">41.5K+</p>
          <p className="font-semibold text-xs lg:text-sm mt-2">
            Model & product downloads per hour
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
