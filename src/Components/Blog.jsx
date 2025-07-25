import React from "react";
import banner from "../assets/images/banner.jpg";
import { LuArrowUpRight } from "react-icons/lu";
import { Blogs } from "./Data/Blogs";

const Blog = () => {
  return (
    <div className="mb-12">
      <div className="w-full h-[20vh] bg-[#FB6514]  rounded-tl-[60px] rounded-br-[60px] flex items-center mb-12 sm:mb-5">
        <div className="relative h-[12vh] w-full overflow-hidden rotate-[-2deg]">
          <div
            className="absolute top-0 left-0 h-full w-[100%] animate-banner-scroll"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row text-center sm:text-start gap-6 sm:gap-0 justify-between  items-center h-auto w-full  md:gap-10 lg:gap-5 p-5 lg:p-10 mb-5">
        <h1 className="text-5xl 2xl:text-6xl sm:w-60 2xl:w-auto text-black font-semibold">
          From my blog post
        </h1>
        <button className="px-5 py-1 sm:py-2  text-lg 2xl:text-2xl text-white rounded-full bg-[#FD853A] hover:bg-[#fda53a] cursor-pointer ">
          See All
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-8">
        {Blogs.map(({ image, category, author, date, description }, index) => (
          <div
            key={index}
            className="flex flex-col justify-between text-center lg:text-start items-center lg:items-start gap-4"
          >
            <div
              className="w-[300px] sm:w-[390px] md:w-[490px] lg:w-[350px] 2xl:w-[450px] h-[310px] sm:h-[400px] md:h-[500px] lg:h-[360px] 2xl:h-[460px] rounded-xl bg-center bg-cover group bg-no-repeat flex justify-end items-end"
              style={{ backgroundImage: `url(${image})` }}
            >
              <LuArrowUpRight className="p-2 text-7xl sm:text-8xl md:text-9xl lg:text-8xl 2xl:text-[120px] duration-300 group-hover:bg-[#FD853A] text-white bg-[#1D2939] rounded-full " />
            </div>

            <h1 className="bg-[#F2F4F7] text-lg 2xl:text-xl text-black p-3 rounded-2xl">
              {category}
            </h1>

            <div className="flex justify-between items-center 2xl:text-xl gap-4">
              <p className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FD853A]" />
                {author}
              </p>
              <p className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FD853A]" />
                {date}
              </p>
            </div>

            <p className="text-3xl 2xl:text-4xl sm:w-100 2xl:w-120 text-black">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
