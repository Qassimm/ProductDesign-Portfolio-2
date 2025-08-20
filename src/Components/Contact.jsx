import React, { useState } from "react";
import { FaAward, FaMailBulk, FaSpinner } from "react-icons/fa";
import { FaShield, FaStar, } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast"; 

const Contact = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); 

  const stats = [
    { icon: <FaStar />, text: "4.9/5 Average Ratings" },
    { icon: <FaAward />, text: "25+ Winning Awards" },
    { icon: <FaShield />, text: "Certified Product Designer" },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".contact-heading", {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-heading",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".form-sec", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".form-sec",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Thank you for your submission!", { duration: 2000 });
        setEmail("");
      } else {
        toast.error("Error sending email. Try again.", { duration: 2000 });
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong.", { duration: 2000 });
    } finally {
      setLoading(false); // 🔄 stop loading
    }
  };

  return (
    <div
      id="contact"
      className="h-auto w-full flex flex-col justify-center items-center gap-5 md:gap-10 lg:p-10 mb-22 relative"
    >
      {/* Toaster container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />

      <h1 className="contact-heading w-auto lg:w-[800px] 2xl:w-[900px] text-4xl md:text-6xl 2xl:text-7xl text-center font-semibold">
        Have an Awsome Project Idea?
        <span className="text-[#03c1cc]"> Let's Discuss</span>
      </h1>

      <div className="form-sec mx-2 sm:w-[400px] md:w-[700px] lg:w-[830px] h-[70px] md:h-[90px] border-1 rounded-[50px] px-3 justify-between items-center">
        <form onSubmit={handleSubmit} className="flex items-center md:gap-6">
          <FaMailBulk className="text-4xl md:text-6xl text-[#03c1cc] cursor-pointer bg-[#dfdfdf] p-1 md:p-3 rounded-full" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            required
            className="text-sm sm:text-base md:text-xl 2xl:text-2xl text-black outline-0 h-18 md:h-22 w-[75%] ml-4 md:ml-0"
          />
          <button
            type="submit"
            disabled={loading} // disable when loading
            className="bg-[#03c1cc] hover:bg-[#22a9b0] cursor-pointer md:text-xl text-white py-2 md:py-3 px-3 sm:px-5 md:px-8 rounded-4xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <FaSpinner className="animate-spin text-white "/> : "Send"} {/* 🔄 change text */}
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
