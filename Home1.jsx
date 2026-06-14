import React, { useState, useEffect } from 'react';
import insidePic from "./picture/inside.jpg";
import mountainPic from "./picture/mountain.jpg";
import starPic from "./picture/star.jpg";
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/pageAnimations.css';

const Home1 = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [containerRef, isVisible] = useScrollAnimation();
  const [sectionRef, sectionVisible] = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);


    return () => clearInterval(interval);
  }, []);
  return (
     <div className="w-full bg-white py-5 px-6 sm:px-12" ref={containerRef}>
      {/* 👇 EXACT SPOT 3: Added dynamic Tailwind transitions below to animate opacity seamlessly 👇 */}
      <div 
        className={`max-w-[1200px] mt-[20px] mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-20 select-none transition-all duration-1000 ease-in-out animate-stagger-1 ${
          isVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
        }`}
      >
        
        {/* 1. Snowflake */}
        <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition duration-300">
          <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            <line x1="4.93" y1="19.07" x2="19.07" y2="4.93"></line>
          </svg>
          <span className="text-xl font-semibold tracking-tight text-gray-800 font-sans">Snowflake</span>
        </div>

        {/* 2. NATUSKA */}
        <div className="flex items-center grayscale hover:grayscale-0 transition duration-300">
          <span className="text-xl font-bold tracking-wider text-gray-800 font-sans flex items-center">
            N
            <span className="inline-block text-red-500 mx-0.5 transform scale-y-95">▲</span>
            TUSKA
          </span>
        </div>

        {/* 3. vision */}
        <div className=" hidden lg:flex items-center space-x-1.5 grayscale hover:grayscale-0 transition duration-300 ">
          <div className="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-white rounded-full translate-x-[3px] -translate-y-[1px]"></div>
          </div>
          <span className="text-xl font-medium tracking-tight text-slate-800 font-sans">vision</span>
        </div>

        {/* 4. Network */}
        <div className="hidden md:flex items-center space-x-1 grayscale hover:grayscale-0 transition duration-300 ">
          <svg className="w-5 h-5 text-emerald-700" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a3 3 0 100 6 3 3 0 000-6zm-4.5 9a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm9 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM4 19c0-2.5 4-3.5 4-3.5s1.5 1.5 4 1.5 4-1.5 4-1.5 4 1 4 3.5V21H4v-2z" />
          </svg>
          <span className="text-xl font-medium text-gray-800 font-sans">Network</span>
        </div>

        {/* 5. SAONA */}
        <div className="hidden sm:flex items-center grayscale hover:grayscale-0 transition duration-300 ">
          <span className="text-xl font-light tracking-[0.25em] text-amber-600 font-sans flex items-center">
            SA
            <div className="relative w-5 h-5 mx-1 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-amber-600 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-dashed border-amber-600 rounded-full animate-spin-slow opacity-60 scale-110"></div>
            </div>
            NA
          </span>
        </div>

      </div>
      <section 
        ref={sectionRef}
        className={`w-full bg-white text-center py-12 px-4 transition-all duration-1000 animate-stagger-2 ${
          sectionVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
        }`}
      >
  <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-3">
    Luxury Meets Innovation
  </p>
  <h2 className="text-3xl mt-[20px] sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
    Step into Your Sci-Fi Dream <br className="hidden sm:inline" />
    (No Spacesuit Required)
  </h2>
  <p className='hidden sm:flex text-gray-600 text-1xl mt-[20px]'>
    The height of the first floor is 2.5 meters. which  can be usedas a parking space. Quick and easy to asssemble, thus modular design can be packed into containers for global shipping.
 Assemble like building blocks for versatile setups.  </p>
</section>

{/* ---------------- MAIN CARD SHOWCASE ---------------- */}

    </div>
  );
};

export default Home1;
