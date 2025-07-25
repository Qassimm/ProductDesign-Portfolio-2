import React from "react";
import { FaAward, FaMailBulk } from "react-icons/fa";
import { FaShield, FaStar } from "react-icons/fa6";

const Contact = () => {
  const stats = [
    {
      icon: <FaStar />,
      text: "4.9/5 Average Ratings",
    },
    {
      icon: <FaAward />,
      text: "25+ Winning Awards",
    },
    {
      icon: <FaShield />,
      text: "Certified Product Designer",
    },
  ];

  return (
    <div className="h-auto w-full flex flex-col justify-center items-center gap-5 md:gap-10 lg:p-10 mb-22">
      <h1 className=" w-auto lg:w-[800px] 2xl:w-[900px] text-4xl md:text-6xl 2xl:text-7xl text-center font-semibold">
        Have an Awsome Project Idea?
        <span className="text-[#FD853A]"> Let's Discuss</span>
      </h1>

      <div className=" mx-2 sm:w-[400px] md:w-[700px] lg:w-[830px] h-[70px] md:h-[90px] border-1  rounded-[50px]    px-3 justify-between items-center">
        <form action="submit" className="flex  items-center  md:gap-6">
          <FaMailBulk className="text-4xl md:text-6xl text-[#FD853A] cursor-pointer bg-[#FFEAD5] p-1 md:p-3 rounded-full" />
          <input
            type="text "
            placeholder="Enter Email Address"
            className="text-sm sm:text-base md:text-xl 2xl:text-2xl text-black outline-0 h-18 md:h-22 w-[75%] ml-4 md:ml-0"
          />
          <button className="bg-[#FD853A] hover:bg-[#fda53a] cursor-pointer md:text-xl text-white py-2 md:py-3 px-3 sm:px-5 md:px-8 rounded-4xl">
            Send
          </button>
        </form>

        <div className="flex justify-between w-full p-1 md:p-3 text-black text-[12px] md:text-base text-center md:text-start">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center md:gap-2">
              <div className="text-xl 2xl:text-2xl">{item.icon}</div>
              <p className="text-[9px] sm:text-base 2xl:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
