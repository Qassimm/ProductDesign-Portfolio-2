import React from "react";
import listline from "../assets/images/listline.png";
import { ExperienceWork } from "./Data/ExperienceWork";

const MyWorkExperience = () => {
  return (
    <div className=" lg:h-[100vh] w-full   p-8 lg:p-10  flex flex-col  items-center text-[#344054] gap-10 sm:gap-20 relative lg:mb-22">
      <div>
        <h1 className="text-4xl sm:text-6xl 2xl:text-8xl font-semibold text-center">
          My <span className="text-[#FD853A] ">Work Experience</span>
        </h1>
      </div>

     <div className="flex justify-between  flex-col  items-center gap-10 sm:gap-15 lg:gap-2 w-full">
      {ExperienceWork.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-5 border rounded-2xl  sm:border-0 py-5 justify-center sm:justify-between items-center sm:items-start w-full "
        >
          <div  className="sm:w-40 md:w-50 lg:w-fit text-center md:text-start">
            <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">{exp.company}</h1>
            <p className="text-[#98A2B3] sm:text-[12px] md:text-base 2xl:text-xl">{exp.duration}</p>
          </div>

          

          <div className=" flex flex-col justify-start items-center sm:items-start text-center  md:text-start sm:w-50 lg:w-auto ">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">{exp.role}</h1>
            <p className="text-[#98A2B3]  lg:w-85 sm:text-[12px] lg:text-base 2xl:text-xl ">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
    <img src={listline} alt="" className="hidden sm:block h-130 lg:h-100 2xl:h-130 object-cover absolute top-45"/>
    </div>
  );
};

export default MyWorkExperience;
