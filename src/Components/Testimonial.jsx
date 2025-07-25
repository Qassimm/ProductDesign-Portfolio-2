import React from "react";
import Background from "../assets/images/Background.jpg";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Testimonials } from "./Data/Testimonial";

const Testimonial = () => {
  return (
    <div
      className="lg:h-auto 2xl:h-[100vh] lg:py-10 w-auto bg-cover rounded-[50px] relative text-white overflow-hidden my-12 "
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] rounded-[50px] z-5" />

      <div className="z-20 relative p-5">
        <div className="flex justify-center items-center flex-col gap-10 ">
          <div className="flex flex-col text-center justify-center items-center gap-4">
            <h1 className="md:w-120 2xl:w-220 lg:leading-15 text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-center">
              Testimonials That Speak to{" "}
              <span className="text-[#FD853A]">My Results</span>
            </h1>

            <p className="lg:w-200 lg:text-[20px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex gap-8">
              {Testimonials.map((item, index) => (
                <div
                  key={index}
                  className=" w-[95vw] md:w-[95vw] lg:w-[55vw]  md:h-[260px] 2xl:h-[360px] rounded-[24px] bg-white/15 backdrop-blur-[3px] p-3 flex flex-col justify-center items-center md:items-start gap-6"
                >
                  {/* Profile Info */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-5 relative z-10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[55px] w-[55px] 2xl:h-[105px] 2xl:w-[105px] object-cover rounded-full"
                      />
                      <div>
                        <h2 className="font-semibold text-[23px] 2xl:text-[28px]">
                          {item.name}
                        </h2>
                        <p className="2xl:text-xl">{item.position}</p>
                      </div>
                    </div>
                    <FaQuoteRight className="hidden md:block text-9xl absolute right-30 top-5 text-[#6670854D]" />
                  </div>

                  {/* Rating */}
                  <div className="flex text-2xl gap-1">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>
                          <FaStar className=" text-[#FD853A] text-3xl 2xl:text-6xl" />
                        </span>
                      ))}
                    <p>{item.rating.toFixed(1)}</p>
                  </div>

                  {/* Feedback */}
                  <p className="text-center md:text-start 2xl:text-xl">{item.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
