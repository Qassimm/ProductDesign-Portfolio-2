import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import MyServices from './Components/MyServices'
import MyWorkExperience from './Components/MyWorkExperience';
import Lenis from 'lenis';
import HireMe from './Components/HireMe';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Footer from './Components/Footer';


const App = () => {

   useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // controls smoothness
    });

    // 👇 Define raf inside useEffect so it has access to lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf); //  this starts the animation loop

    return () => {
      lenis.destroy();
    };
  }, []);  

  return (
    <div className='font-lufga text-[#344054] overflow-x-hidden '>

      <Navbar/>
      <Hero/>
      <MyServices/>
      <MyWorkExperience/>
      <HireMe/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
