import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import HeroPic from '../assets/images/HeroPic.png';

const Hero = () => {
  const buttons = [
    { label: "Portfolio", iconPosition: "right" },
    { label: "Hire Me", iconPosition: "left" },
  ];

  return (
    // orange colore #FD853A
    // black color #171717

    <div className="lg:h-[100vh] w-auto p-5 md:p-10 flex justify-evenly items-center flex-col">
      <div className="text-center flex flex-col justify-center items-center mt-20 lg:mt-10">
        <p className="py-2 2xl:px-4  border-2 border-[#171717] rounded-full w-[103px] 2xl:text-2xl font-semibold ">
          Hello!
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-[150px] font-semibold font-outfit text-black mt-2.5 md:mt-0">
          I'm<span className="text-[#FD853A]">Jenny</span>,<br /> Product
          Designer
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-15 md:gap-0  w-full justify-between items-center  translate-y-10">
        <div className="w-[320px] font-semibold flex md:flex-none flex-col   items-center md:items-start text-center md:text-start">
          <FaQuoteLeft className="text-xl 2xl:text-3xl mb-5" />
          <p className="2xl:text-2xl">
            Jenny's Exceptional product design ensure our website's
            success.Highly Recommended
          </p>
        </div>

        <div className=" flex flex-col justify-end items-center sm:items-end text-end ">
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span key={index}>
                  <FaStar className="text-[#FD853A] text-3xl 2xl:text-6xl" />
                </span>
              ))}
          </div>
          <h1 className="text-4xl 2xl:text-6xl font-semibold">10 Years</h1>
          <p className="2xl:text-2xl">Experience</p>
        </div>
      </div>

      

      <div className="grid place-items-center relative mt-85 lg:mt-0">
        <img src={HeroPic} alt="HeroPic" className=" h-[66vh] absolute object-cover -top-66 sm:-top-72.5 2xl:-top-100 z-10" />
        <div className="w-80 sm:w-140 h-90 sm:h-70 2xl:h-80 bg-[#FEB273] rounded-t-full absolute -top-51 sm:-top-37.5" />
     
        <div className="w-[270px] 2xl:w-[360px] rounded-full border-white border-1 p-2 2xl:p-4 backdrop-blur-md bg-white/30 flex justify-between items-center text-lg z-50 text-white translate-y-15">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className="group relative overflow-hidden hover:bg-[#FD853A] rounded-full px-5 2xl:px-7 py-2 2xl:py-3 hover:text-xl flex justify-center items-center duration-300 cursor-pointer"
          >
            {btn.iconPosition === "left" && (
              <span className="absolute start-[-30px] transition-all duration-300 group-hover:start-4">
                <LuArrowUpRight className="text-2xl" />
              </span>
            )}
            <span
              className={`font-normal transition-all group-hover:font-semibold ${
                btn.iconPosition === "left"
                  ? "group-hover:ms-6"
                  : "group-hover:me-6"
              }`}
            >
              {btn.label}
            </span>
            {btn.iconPosition === "right" && (
              <span className="absolute end-[-30px] transition-all duration-300 group-hover:end-4">
                <LuArrowUpRight className="text-2xl" />
              </span>
            )}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Hero;
