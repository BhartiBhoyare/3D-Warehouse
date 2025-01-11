import React from "react";
import { FaUsers } from "react-icons/fa";
import product from "../assets/product.png";
import shear_with_world from "../assets/shear with world.png";
import promote from "../assets/promote.png";
import model from "../assets/find-any-model.png";
import { ImSearch } from "react-icons/im";

const Shear = () => {
  return (
    <div className="lg:px-24 lg:py-10 py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col">
          <FaUsers className="text-gray-500 size-8 lg:size-10" />
          <h1 className="lg:font-semibold font-bold text-xl lg:text-3xl mt-3">
            Share your work with the world
          </h1>
          <p className="lg:text-lg text-sm text-gray-700 mt-4 lg:w-[30rem]">
            We know you're proud of what you create in SketchUp… you should be.
            Don’t keep that to yourself! Share your models with the community
            and inspire others.
          </p>
          <button className="text-[#19567f] lg:font-semibold font-bold lg:text-lg w-[9.89rem] mt-4 cursor-pointer">
            Create an account
          </button>
        </div>
        <img className="lg:h-96 lg:ml-20 mt-10 lg:mt-0 " src={shear_with_world} alt="" />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center mt-10 lg:mt-8">
        <img className="lg:h-96 lg:mr-20 mt-10 lg:mt-0" src={model} alt="" />
        <div className="flex flex-col">
          <ImSearch className="text-gray-500 size-6 lg:size-9" />
          <h1 className="lg:font-semibold font-bold text-xl lg:text-3xl mt-3 lg:mr-4">
            Find any model you can imagine
          </h1>
          <p className="lg:text-lg text-sm text-gray-700 mt-4 lg:w-[30rem]">
            Need the perfect couch to provide context to your project? Download
            someone else's model, add it to your project, and keep cruisin’.
          </p>
          <button className="text-[#19567f] font-semibold lg:text-lg lg:w-44 w-40 mt-4 cursor-pointer">
            Browse our models
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-8">
        <div className="flex flex-col">
          <img className="size-8 lg:size-12" src={product} alt="" />
          <h1 className="lg:font-semibold font-bold text-xl lg:text-3xl mt-3">Promote your products</h1>
          <p className="lg:text-lg text-sm text-gray-700 mt-4 lg:w-[30rem]">
            Have a product that an architect, interior designer, or woodworker
            might buy? 3D Warehouse has millions of relevant users. Increase
            sales and brand awareness by putting your product in front of the
            eyes of your customers.
          </p>
        </div>
        <img className="lg:h-96 lg:ml-20 mt-10 lg:mt-0" src={promote} alt="" />
      </div>
    </div>
  );
};

export default Shear;
