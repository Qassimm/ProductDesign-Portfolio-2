import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false) // scroll down → hide
      } else {
        setShowNavbar(true) // scroll up → show
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (

         // orange colore #FD853A
        // black color #171717

    <div
      className={`md:p-2 lg:p-5 fixed z-[100] w-screen transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='bg-[#171717] w-auto h-[10vh] px-6 sm:px-4 md:rounded-full flex justify-between items-center text-white'>

        {/* Left Links */}
        {['Home', 'About', 'Service'].map((link, i) => (
          <a
            key={i}
            className='hidden md:flex cursor-pointer py-[10px] lg:py-[10px] 2xl:py-[15px] px-[16px] lg:px-[40px] 2xl:px-[45px] hover:bg-[#4b4b4b] rounded-full duration-300 lg:text-lg 2xl:text-3xl'
          >
            {link}
          </a>
        ))}

        {/* Logo */}
        <div className='flex justify-center items-center text-2xl 2xl:text-4xl font-bold md:mx-8'>
          <img src={Logo} alt='Logo' className='h-auto w-[75px] 2xl:w-[120px]' />
          <p>JCREA</p>
        </div>

        {/* Right Links */}
        {['Resume', 'Project', 'Contact'].map((link, i) => (
          <a
            key={i}
            className='hidden md:flex cursor-pointer py-[10px] lg:py-[10px] 2xl:py-[15px] px-[16px] lg:px-[40px] 2xl:px-[45px] hover:bg-[#4b4b4b] rounded-full duration-300 lg:text-lg 2xl:text-3xl'
          >
            {link}
          </a>
        ))}

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-3 text-xl text-white cursor-pointer rounded-full duration-300 hover:text-gray-400'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#171717] text-white  absolute top-18 left-0 w-1/2 px-10 py-6 flex flex-col gap-4 transition-all duration-300 ease-in-out rounded-r-xl ${
            isOpen
              ? 'translate-x-0 opacity-100'
              : '-translate-x-5 opacity-0 pointer-events-none'
          }`}
        >
          {['Home', 'About', 'Service', 'Resume', 'Project', 'Contact'].map(
            (link, i) => (
              <a key={i} className='text-lg pb-1 border-b-1 cursor-pointer hover:text-gray-300'>
                {link}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

