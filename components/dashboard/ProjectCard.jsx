import React from "react";
import { BsPersonCircle, BsStopwatchFill } from "react-icons/bs";
import { HiStar } from "react-icons/hi";

export default function ProjectCard() {
  return (
    <div className="bg-gray-900 rounded-xl p-3 space-y-3">
      <div className="flex justify-between">
        <div className="flex items-start space-x-1">
            <h1 className="text-lg border-l-4 border-orange-600 px-2">Project name</h1>
        </div>
        <span className="cursor-pointer p-1"><HiStar size={20}/></span>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <p className="w-fit text-sm px-4 py-1 bg-gray-800 rounded-full flex items-center space-x-2">
            <span className="text-cyan-400"><BsPersonCircle/></span>
            <span>Your</span>
        </p>
        <p className="w-fit text-sm px-4 py-1 bg-gray-800 rounded-full flex items-center space-x-2">
            <span className="text-lime-400"><BsStopwatchFill/></span>
            <span>10-11-2023</span>
        </p>
      </div>
      <div className="p-2 rounded-md bg-gray-800 text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium facere quis enim reiciendis, veritatis.
      </div>
      <div>
        footer
      </div>
    </div>
  );
}
