import React from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/waterFlow.css';
import { Link } from "react-router-dom"
import './styles/pageAnimations.css';
import groups from "./picture/groups.jpg";      

const Home5 = () => {
  const [containerRef, isVisible] = useScrollAnimation();
  return (          
    <div 
      ref={containerRef}
      className={`bg-[#f4f7fc] min-h-screen font-sans antialiased text-slate-800 py-16 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${
        isVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Landscape Image Illustration */}
        <div className="w-full top-8 rounded-3xl overflow-hidden shadow-lg border border-white/20 animate-zoom-in-slow">
          <img 
            src={groups} 
            alt="Modular Housing Community Aerial View" 
            className="w-full h-[400px] lg:h-[700px] object-cover"
          />
        </div>

        {/* Right Side: Text Content Scrolling Section */}
        <div className=" text-center md:text-left flex flex-col justify-center lg:pt-6 animate-fade-in-right">
          <span className="text-xls uppercase tracking-widest font-bold text-orange-500 block mb-4">
            GAME-CHANGING OPPORTUNITY
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-8 animate-fade-in-down">
            Join the Modular <br /> Housing <br /> Movement
          </h1>

          <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            <p>
              Fancy tapping into a goldmine? Our cutting-edge IDONGSIK homes 
              are changing the game for resorts, Airbnb stays, and tourism retreats. 
              Partner with us on high-impact projects and watch your profits soar.
            </p>

            <p>
              A shout-out to all our cultural and tourism partners worldwide! 
              Get sweet wholesale discounts, rock-solid support, and insane returns from 
              early bird signing to ongoing success. Factory visits? Yep, we do those too.
            </p>

            <p className="font-medium text-slate-800 pt-2">
              Don't sleep on this. Join our global takeover and start dealing today. 
              The sky's the limit, hurry!
            </p>
          </div>

          {/* Button */}
          <div className="mt-10 animate-bounce-in">
          <Link to ="/partner">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-xl transition-colors duration-200 shadow-sm shadow-orange-500/20 btn-hover-lift">
              Get Started
            </button>
          </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home5;