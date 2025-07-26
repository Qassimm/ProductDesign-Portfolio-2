import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MyProjects } from "./Data/MyProject";
import { LuArrowUpRight } from "react-icons/lu";
import myProject from '../assets/images/MyProject.png';

const  Portfolio = () => {
  return (
    <div className="h-auto p-5 lg:p-10 w-auto flex justify-center items-center  lg:my-12">
      <div className="flex flex-col justify-between w-full gap-20">
        <div className="flex flex-col md:flex-row text-center md:text-start justify-between items-center gap-5 md:gap-0">
          <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-semibold md:w-120 lg:w-150 ">
            Lets have a look at my{""}
            <span className="text-[#FD853A]"> Portfolio</span>
          </h1>
          <button className="px-5 py-2 text-lg 2xl:text-2xl text-white rounded-full bg-[#FD853A] hover:bg-[#fda53a] cursor-pointer">
            See All
          </button>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-10">
          {MyProjects.map((project, index) => (
        <div
          key={index}
          className="w-[610px] 2xl:w-[710px] h-[350px] 2xl:h-[450px] px-3 rounded-2xl overflow-hidden bg-cover bg-center relative group"
          style={{
            backgroundImage: `radial-gradient(ellipse at bottom left, rgba(0, 0, 0, 0.5), transparent 70%), url(${myProject})`,
          }}
        >
          
          <div className="absolute top-4 right-4 group-hover:text-[#FD853A] duration-300 text-5xl 2xl:text-6xl">
            <FaArrowAltCircleRight />
          </div>

          
          <div className="absolute bottom-4 left-4 max-w-[90%] bg-transparent group-hover:bg-black/60 group-hover:backdrop-blur-[2px] text-white rounded-xl p-4 transition-all duration-300">
            <p className="text-5xl 2xl:text-6xl font-semibold mb-2">{project.title}</p>
            <p className="hidden group-hover:block text-sm 2xl:text-xl leading-relaxed transition duration-300">
              {project.description}
            </p>
          </div>
        </div>
      ))}
        </div>

        <div className="flex justify-center gap-1 items-center">
            <div  className="w-10 2xl:w-20 h-3 2xl:h-4 bg-[#FD853A] rounded-2xl"/>
            <div  className="w-3 2xl:w-4 h-3 2xl:h-4 bg-[#E4E7EC] rounded-2xl"/>
            <div  className="w-3 2xl:w-4 h-3 bg-[#E4E7EC] rounded-2xl"/>
            <div  className="w-3 2xl:w-4 h-3 bg-[#E4E7EC] rounded-2xl"/>
        </div>

        <div className="flex flex-wrap justify-center gap-3 items-center">
            {['Landing Page', 'Product Design' , 'Animation' , 'Glassmorphism' , 'Cards'].map((links, i) => (
                <button key={i}
                className="py-2 px-5 bg-[#E4E7EC] hover:bg-[#c3d6f7] rounded-full cursor-pointer 2xl:text-xl "
                >{links}</button>
            ))}
        </div>
            
           <div className=" flex flex-col justify-center items-center gap-5">
             <div className="text-center flex-col md:flex-row items-center md:items-start text-4xl md:text-5xl 2xl:text-6xl md:w-[560px] lg:w-auto gap-5 md:gap-0 lg:gap-3  flex">
                <h1>Lirante - Food Dilvery Solution </h1><LuArrowUpRight className="bg-[#FD853A] hover:bg-[#fda53a] cursor-pointer text-white rounded-full p-2"/>
            </div>
            <p className="text-center md:w-150 2xl:w-200  2xl:text-xl  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
           </div>

      </div>
    </div>
  );
};

export default Portfolio;
