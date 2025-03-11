import React from "react";
import { FaAutoprefixer, FaCss3, FaDiceD6, FaDisplay, FaRegThumbsUp } from "react-icons/fa6";
import { BsBoundingBoxCircles } from "react-icons/bs";


const ServicePage = () => {
  return (
    <div className="max-w-7xl px-8 m-auto my-14 gap-6 grid service-grid ">
      <div className="p-8 text-sm shadow-md border rounded" >
        <FaAutoprefixer className="w-10 h-10 text-blue-500" /> 
        <p className="text-gray-900 font-semibold pt-4 pb-2">Refreshing Design</p>
        <p className="text-gray-700 pt-2 pb-4">
          We enjoy working with descr.... client, people for whome qualtiy
          sevice intrgrity and aesthetics.
        </p>
      </div>
      <div className="p-8 text-sm shadow-md border" >
        <FaCss3 className="w-10 h-10 text-blue-500"  /> 
        <p className="text-gray-900 font-semibold pt-4 pb-2">Refreshing Design</p>
        <p className="text-gray-700 pt-2 pb-4">
          We enjoy working with descr.... client, people for whome qualtiy
          sevice intrgrity and aesthetics.
        </p>
      </div>
      <div className="p-8 text-sm shadow-md border" >
        <FaDiceD6 className="w-10 h-10 text-blue-500"  />
        <p className="text-gray-900 font-semibold pt-4 pb-2">Refreshing Design</p>
        <p className="text-gray-700 pt-2 pb-4">
          We enjoy working with descr.... client, people for whome qualtiy
          sevice intrgrity and aesthetics.
        </p>
      </div>
      <div className="p-8 text-sm shadow-md border" >
        <FaDisplay className="w-10 h-10 text-blue-500"  />
        <p className="text-gray-900 font-semibold pt-4 pb-2">Refreshing Design</p>
        <p className="text-gray-700 pt-2 pb-4">
          We enjoy working with descr.... client, people for whome qualtiy
          sevice intrgrity and aesthetics.
        </p>
      </div>
      <div className="p-8 text-sm shadow-md border" >
        <BsBoundingBoxCircles className="w-10 h-10 text-blue-500"  />
        <p className="text-gray-900 font-semibold pt-4 pb-2">Refreshing Design</p>
        <p className="text-gray-700 pt-2 pb-4">
          We enjoy working with descr.... client, people for whome qualtiy
          sevice intrgrity and aesthetics.
        </p>
      </div>
      <div className="p-8 text-sm shadow-md border" >
        <FaRegThumbsUp className="w-10 h-10 text-blue-500"  />
        <p className="text-gray-900 font-semibold pt-4 pb-2">Refreshing Design</p>
        <p className="text-gray-700 pt-2 pb-4">
          We enjoy working with descr.... client, people for whome qualtiy
          sevice intrgrity and aesthetics.
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
