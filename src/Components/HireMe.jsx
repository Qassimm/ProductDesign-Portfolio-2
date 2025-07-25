import React from "react";
import SidPic from "../assets/images/sidePic.png";

const HireMe = () => {
  return (
    <div className="lg:h-[100vh] w-auto flex justify-center items-center rounded-[50px] bg-[#F2F4F7] lg:my-12 ">
      <div className="flex  items-center gap-5 ">
        <div className="relative w-fit group hidden lg:block">
          {/* Circle 1 - Inner (Smallest) */}
          <div
            className="absolute inset-0 z-0 hidden lg:block w-[375px] 2xl:w-[475px] h-[375px] 2xl:h-[475px] border-[#FD853A] border-2 left-13 top-10 rounded-full
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-0"
          ></div>

          {/* Circle 2 - Middle */}
          <div
            className="absolute inset-0 z-0 hidden lg:block w-[400px] 2xl:w-[500px] h-[400px] 2xl:h-[500px] border-[#FD853A] border-2 left-10 top-6 rounded-full
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
          />

          {/* Circle 3 - Outer (Biggest) */}
          <div
            className="absolute inset-0 z-0 hidden lg:block w-[450px] 2xl:w-[550px] h-[450px] 2xl:h-[550px] border-[#FD853A] border-2  left-4 rounded-full
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
          ></div>

          {/* Image */}
          <img
            src={SidPic}
            alt="sidPic"
            className="relative z-10     w-[36vw] object-cover"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start gap-10 lg:gap-10 my-5 text-center lg:text-start">
          <div className="flex flex-col gap-8 lg:gap-5">
            <h1 className="text-4xl sm:text-6xl 2xl:text-7xl font-semibold">
              Why <span className="text-[#FD853A]">Hire me</span> ?
            </h1>

            <div className="md:w-[495px] text-[15px] md:text-[20px] 2xl:text-2xl text-[#9eadc7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
            </div>
          </div>

          <div className="flex justify-between gap-10 lg:gap-10">
            <div className="text-base flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold ">450+</h2>
              <p className="text-[14px] sm:text-base 2xl:text-xl">Project Completed</p>
            </div>

            <div className="text-base flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold">450+</h2>
              <p className="text-[14px] sm:text-base 2xl:text-xl">Project Completed</p>
            </div>
          </div>

          <button className="py-3 sm:py-4 px-5 sm:px-8 border  font-semibold rounded-2xl text-2xl sm:text-3xl 2xl:text-4xl w-fit hover:bg-black hover:text-white duration-300 cursor-pointer">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
