import React from "react";
import { ShieldCheck, Coins, Truck } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import useScrollAnimation from "./hooks/useScrollAnimation";
import "./styles/waterFlow.css";import "./styles/pageAnimations.css";
import chilling from "./picture/chilling.jpg";

const Homee1 = () => {
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
            const currentCount = Math.round(
              target * (1 - Math.pow(1 - progress, 3)),
            );

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
      { threshold: 0.1 },
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
        isVisible ? "animate-water-flow-up" : "water-flow-hidden"
      }`}
    >
      {/* SECTION 1: WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content & Stats */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="space-y-4">
            <p className="text-[18px] text-center md:text-left  text-1xl font-semibold text-orange-500 tracking-tight leading-tight">
              A New Era of IDONGSIk Living
            </p>

            <h1 className="text-4xl text-center md:text-left  text-3xl font-bold text-slate-900 tracking-tight leading-tight animate-fade-in-down">
              Space IDONGSIk Homes Built for the Future
            </h1>

            <div className="text-center md:text-left md:text-base text-gray-500 leading-relaxed font-normal max-w-xl">
              <p>
                IDONGSIk JUTAEK leads the way with our modular, prefabricated
                IDONGSIk house, offering innovative housing solutions worldwide.
                Our unique design ensures easy assembly and modularity, making
                shipping more efficient and cost-effective than any competitor.
                Manufactured with the highest standards of quality, our space
                IDONGSIk houses promise unparalleled performance and durability.
                Whether double-deck or single-deck, each prefab IDONGSIk house is
                crafted to meet diverse needs while controlling both quality and
                costs, ensuring a superior product for global markets.
              </p>
            </div>
          </div>

          {/* Inline Stats Box */}
        </div>

        {/* Right Column: Main Showcase Image */}
        <div className="rounded-3xl overflow-hidden shadow-sm h-full max-h-[550px]">
          <img
            src={chilling}
            alt="Futuristic IDONGSIk homes community layout"
            className="w-full h-full object-cover aspect-square md:aspect-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Homee1;
