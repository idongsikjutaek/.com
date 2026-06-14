import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

export default function WelcomeScreen({onStart}) {
  const [mounted, setMounted] = useState(false);

  // Triggers the entry animations after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStart = () => {
    // Smooth fade-out before navigating
    setMounted(false);
    setTimeout(() => {
     if(onStart) onStart();
    }, 600); // Matches the transition duration
  }; 

  return (
    <div className={`relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black text-white transition-opacity duration-700 ease-in-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial gradient to shadow the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.08)_0%,transparent_65%)]" />
        
        {/* Moving geometric grid/shapes */}
        <div className="absolute top-[-10%] left-[-10%] h-[40vw] w-[40vw] rounded-full bg-orange-600/10 blur-[120px] animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-orange-500/5 blur-[150px] animate-pulse duration-[8000ms]" />
        
        {/* Fine background grid line effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        
        {/* Aesthetic Orange Glowing Badge */}
        <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-orange-400 uppercase transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
          Welcome Experience
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          The Future Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">Modular</span>
        </h1>

        {/* Subtitle description */}
        <p className={`text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-400 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Step inside an architectural revolution where luxury structural design meets absolute environmental harmony.
        </p>

        {/* Interactive Premium Start Button */}
        <div className={`transition-all duration-1000 delay-600 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
         <Link to="/">
         <button
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-orange-500 px-8 py-4 font-semibold text-black tracking-wide shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_45px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95"
          >
            {/* White shine reflection block that sweeps across on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" /><span className="relative flex items-center gap-2">
              GET STARTED
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
         </Link> 
        </div>

      </div>

      {/* Decorative Minimalist Bottom Footer Element */}
      <div className={`absolute bottom-6 z-10 text-xs tracking-widest text-zinc-600 uppercase transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          Copyright © 2026 | IDONGSIk JUTAEKE 
      </div>

    </div>
  );
}