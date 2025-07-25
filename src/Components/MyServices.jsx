import React, { useEffect, useRef } from "react";
import Background from "../assets/images/Background.jpg";
import Leaf from "../assets/images/Leaf.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import { LuArrowUpRight } from "react-icons/lu";

const MyServices = () => {
  const leafRef = useRef(null);
  const leafRef2 = useRef(null);
  const leafRef3 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const cardsData = [
  {
    title: "UI/UX Design",
    image: img1,
  },
  {
    title: "Web Development",
    image: img2,
  },
  {
    title: "App Design",
    image: img1,
  },
];

  useEffect(() => {
    gsap.fromTo(
      leafRef.current,
      { y: 0, rotate: 70, filter: "blur(0px)" }, // initial
      {
        y: 80, // move down
        rotate: 150, // rotate slightly more
        filter: "blur(3px)",
        duration: 8,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: leafRef.current,
          start: "top 50%",
          end: "top 0%",
          scrub: true, // for smooth scroll-based animation
        },
      }
    );

    gsap.fromTo(
      leafRef2.current,
      { x: 0, filter: "blur(0px)" },
      {
        x: 200, // move to right
        filter: "blur(3px)",
        rotation: 50,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: leafRef2.current,
          start: "top 50%",
          end: "top 0%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      leafRef3.current,
      { x: 0, filter: "blur(0px)" },
      {
        x: 40, // slight move to right
        ease: "sine.inOut",
        filter: "blur(3px)",
        scrollTrigger: {
          trigger: leafRef3.current,
          start: "top 50%",
          end: "top 0%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    // orange colore #FD853A
    // black color #171717

    <div
      className="lg:h-[100vh]  w-auto bg-cover rounded-[50px] relative text-white overflow-hidden mt-12 md:mt-6  lg:mt-0 mb-12 z-10"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] rounded-[50px] z-5 " />

      {/* Visible content div */}
      <div className="relative z-20 p-15">
        <div className="z-90 flex justify-center md:justify-between text-center md:text-start flex-col md:flex-row items-center  text-white">
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-semibold">
            My <span className="text-[#FD853A]">Services</span>
          </h1>

          <p className="md:w-[465px] 2xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
        </div>

<svg width="0" height="0" class="absolute">
  <defs>
    <clipPath id="roundedCard" clipPathUnits="objectBoundingBox">
      <path d="
        M1,0.0656
        V0.6533
        C1,0.6968,0.9573,0.7402,0.9049,0.7402
        H0.842
        C0.7601,0.7402,0.6893,0.7951,0.6893,0.8769
        V0.9453
        C0.6893,0.9842,0.6578,1,0.6019,1
        H0.0791
        C0.0395,1,0,0.9604,0,0.9209
        V0.0656
        C0,0.0256,0.0395,0,0.0791,0
        H0.9209
        C0.9604,0,1,0.0395,1,0.0656
        Z" />
    </clipPath>
  </defs>
</svg>

     <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center lg:justify-between items-center  my-10 z-40 ">
  {cardsData.map((card, index) => (
    <div key={index} className="relative group cursor-pointer">
      <div
        className="w-[300px] sm:w-[355px] 2xl:w-[405px] h-[400px] sm:h-[455px] 2xl:h-[505px] border-2 border-white rounded-4xl bg-white/10 flex flex-col justify-between relative overflow-hidden group-hover:bg-[#FD853A] duration-300"
        style={{ clipPath: "url(#roundedCard)" }}
      >
        <h1 className="text-3xl p-8 border-b-2">{card.title}</h1>
        <img
          src={card.image}
          alt={card.title}
          className="rounded-tl-4xl  rounded-tr-4xl z-10 object-cover sm:h-65 group-hover:h-70 duration-300 transition-all"
        />
        <div className="w-[90%] h-36 sm:h-48 bg-[#9E9D9D] absolute bottom-23 left-1/18 rounded-[40px] z-9 group-hover:h-53 transition-all" />
        <div className="w-[80%] h-34 sm:h-48 bg-[#757575]/50 blur-[1px] absolute bottom-28 left-1/10 rounded-[40px] group-hover:h-53 transition-all" />
      </div>
      <LuArrowUpRight className="p-2 text-7xl sm:text-8xl lg:text-8xl 2xl:text-[110px] duration-300 group-hover:bg-[#FD853A] text-white bg-[#1D2939] rounded-full absolute right-0 bottom-2 hover:bg-[#FD853A] " />
    </div>
  ))}
</div>


    </div>
    <div className="image-class hidden lg:block">
        <img src={Leaf} alt="" ref={leafRef} className="h-80 mt-4 absolute -left-25 top-30 rotate-70 z-5" />
        <img src={Leaf} alt="" ref={leafRef2} className="h-30 mt-4 absolute left-1/3 top-0 z-5" />
        <img src={Leaf} alt="" ref={leafRef3} className="h-145 mt-4 absolute -right-30 top-30 z-5" />
      </div>
    </div>
  );
};

export default MyServices;
