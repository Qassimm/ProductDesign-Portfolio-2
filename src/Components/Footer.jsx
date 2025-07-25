import React from "react";
import Logo from "../assets/images/logo.png";
import { LuArrowUpRight } from "react-icons/lu";
import { FaFacebook, FaPaperPlane, FaPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-auto w-full p-5 lg:pt-10 px-12 bg-[#272727] rounded-tl-[54px] rounded-tr-[54px] flex flex-col justify-between items-center gap-10 text-white mt-22">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center w-full ">
        <h1 className="text-4xl md:text-6xl 2xl:text-7xl text-center md:text-start font-semibold md:w-100 lg:w-auto">Lets Connect there</h1>
        <button className="flex items-center text-xl 2xl:text-2xl bg-[#FD853A] px-2 lg:px-3 py-2 rounded-full gap-1 hover:bg-[#fda53a]">
          Hire me <LuArrowUpRight className="text-2xl" />
        </button>
      </div>
      
      <div className="flex flex-wrap justify-center lg:justify-between items-start w-full border-[#475467] border-b-2 border-t-2 py-5 md:py-10 gap-8 lg:gap-0">
        <div className="flex flex-col justify-center  ">
          <div className="flex items-center  justify-center lg:justify-start text-xl 2xl:text-2xl font-semibold">
            <img
              src={Logo}
              alt="logo"
              className="h-[66px] 2xl:h-[86px] w-[86px] 2xl:w-[76px] object-cover"
            />
            <p className="">JCREA</p>
          </div>

          <div className="m-3 flex flex-col items-center lg:items-start text-center lg:text-start">
            <p className=" lg:w-131 2xl:w-161 2xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>

            <div className="flex gap-4 mt-8 text-xl 2xl:text-3xl cursor-pointer ">
              <FaFacebook />
              <FaYoutube />
              <FaWhatsapp />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className=" flex gap-7 sm:gap-5 2xl:gap-15 flex-col sm:flex-row">
        <div className="flex flex-col justify-between items-center md:items-start text-center md:text-start">
          <h1 className="text-[#FD853A] text-lg 2xl:text-2xl font-semibold">Navigation</h1>
          <div className="flex flex-col gap-3 mt-3 ">
            {["Home", "About", "Service " , "Resume" , "Project"].map((link, i) => (
              <a
                key={i}
                className=" hover:border-b-1 cursor-pointer 2xl:text-xl "
              >
                {link}
              </a>
            ))}
          </div>
        </div>

         <div className="flex flex-col  items-center md:items-start text-center md:text-start">
          <h1 className="text-[#FD853A] text-lg 2xl:text-2xl font-semibold">Contact</h1>
          <div className="flex flex-col gap-3 mt-3 ">
            {["+91 7738443636", "Jaycrea36@gmail.com", "Portfolio-jcrea.com "].map((link, i) => (
              <a key={i} className="2xl:text-xl">
                {link}
                
              </a>
            ))}
          </div>
        </div>
        </div>

        <div className=" text-lg 2xl:text-2xl text-center md:text-start ">
            <h1 className="text-[#FD853A] font-semibold">Get the latest information</h1>
            <form action="submit" className="bg-white w-[80vw] md:w-80 2xl:w-100 h-12 2xl:h-16 rounded-2xl mt-5 flex justify-between items-center ">
                <input type="email" placeholder="Email Address" className="outline-0 text-black mx-2 text-base 2xl:text-lg" />

                <button><FaPaperPlane className="bg-[#FD853A] hover:bg-[#fda53a] text-5xl 2xl:text-[64px] rounded-tr-2xl rounded-br-2xl p-3"/></button>
            </form>
        </div>
      </div>
      

      <div className="flex justify-between items-center w-full flex-col md:flex-row text-center md:text-start gap-2 text-xs sm:text-sm md:text-base">
        <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
