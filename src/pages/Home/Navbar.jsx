
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


export const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener('mousedown', closeDropDown);

    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
  }, []);

  const location = useLocation();
  return (
    <nav className="flex items-center justify-between px-20 pt-3 text-white">
      <div className="duration-200 hover:scale-110 flex items-center">

        <img className='h-32' src="/white.png" alt="" />

      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        <Link to="/"><li className="group flex  cursor-pointer flex-col">
          Home<span className={`mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 ${location.pathname==='/'?'w-full':'group-hover:w-full'} `}></span>
        </li></Link>
        <Link to="/about"><li className="group flex  cursor-pointer flex-col">
          About<span className={`mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 ${location.pathname==='/about'?'w-full':'group-hover:w-full'} `}></span>
        </li></Link>
        <Link to="/skills"> <li className="group flex  cursor-pointer flex-col">
          Skills<span className={`mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 ${location.pathname==='/skills'?'w-full':'group-hover:w-full'} `}></span>
        </li>
        </Link>

        <Link to="/contact"><li className="group flex  cursor-pointer flex-col">
          Contact<span className={`mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 ${location.pathname==='/contact'?'w-full':'group-hover:w-full'} `}></span>
        </li></Link>
        <Link to="/contact"><li className="group flex  cursor-pointer flex-col">
          <button className="relative overflow-hidden p-4 rounded-3xl text-white">
            <span className="absolute inset-0 bg-gradient-to-r from-[#29103c] to-[#411086] transition-opacity duration-300 group-hover:opacity-0"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#411086] to-[#0b0411] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="relative z-10">Get in touch</span>
          </button>
        </li></Link>
      </ul>
      <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
        {dropDownState && (
          <ul className=" z-10 bg-[#0b0411]/80 backdrop-blur-md  gap-2 bg-blur  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
              Home
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              About
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
              Skills
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              Contact
            </li>
          </ul>
        )}
      </div>
    </nav>

  );
};

