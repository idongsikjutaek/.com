import React from "react";
import { ShieldCheck, Coins, Truck } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';
import garden from "./picture/garden.jpg";

const Home3 = () => {
  const [containerRef, isVisible] = useScrollAnimation();
  const [count, setCount] = useState(1);
    const statsRef = useRef(null);

   useEffect(() => {
    let counterInterval;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(1); 
          
          const target = 5000;
          const duration = 2000;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          clearInterval(counterInterval);

          counterInterval = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(target * (1 - Math.pow(1 - progress, 3)));

            if (frame >= totalFrames) {
              setCount(target);
              clearInterval(counterInterval);
            } else {
              setCount(currentCount);
            }
          }, frameRate);
        } else {
          setCount(1);
          clearInterval(counterInterval);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
      clearInterval(counterInterval);
    };
  }, []);

   return (
    <div 
      ref={containerRef}
      className={`min-h-screen bg-white font-sans text-gray-800 selection:bg-orange-200 transition-all duration-1000 ${
        isVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
      }`}
    >
      {/* SECTION 1: WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content & Stats */}
        <div className="space-y-8">
          <div className="space-y-8 animate-fade-in-left">
            <h1 className="text-4xl text-center md:text-left  text-3xl font-bold text-slate-900 tracking-tight leading-tight animate-fade-in-down">
              Space-Age Homes for <br />
              Cool Cats!
            </h1>

            <div className="text-center md:text-left md:text-base text-gray-500 leading-relaxed font-normal max-w-xl">
              <p>
                Picture this: Tiny homes that stack like Lego, but way cooler.
                That's us since 2020. We've planted our funky IDONGSIKs in
                hundreds of accommodation spots globally. Our team? Over 30
                Avengers of prefab design. HQ's in Qingzhou, China, but we're
                going interstellar. Our mission? To make you wonder how you ever
                lived without us!
              </p>
            </div>
          </div>

          {/* Inline Stats Box */}
          <div ref={statsRef} className=" border border-gray-200 rounded-sm grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 md:mr-auto md:max-w-md">
            {/* Stat 1 */}
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600">
                {count.toLocaleString()}cm²
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                Factory area
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                Monthly Capacity
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Main Showcase Image */}
        <div className="rounded-3xl overflow-hidden shadow-sm h-full max-h-[550px] animate-zoom-in-slow">
          <img
            src={garden}
            alt="Futuristic IDONGSIK homes community layout"
            className="w-full h-full object-cover aspect-square md:aspect-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Home3;
