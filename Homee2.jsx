import React from 'react';
import first from "./picture/first.jpg";
import second from "./picture/second.jpg";
import third3 from "./picture/third3.jpg";
import fourth from "./picture/fourth.jpg";
import fifth from "./picture/fifth.jpg";
import sixth from "./picture/sixth.jpg";
import {Link} from "react-router-dom";
import { useState,useEffect } from 'react';
import {motion} from "framer-motion";
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';

const Homee2 = () => {
    const [isPageMounted, setIsPageMounted] = useState(false);
    const [containerRef, isVisible] = useScrollAnimation();
  // All the modular units visible in your showcase timeline video
  const capsuleCards = [
    {
      title: "Double Deck Space IDONGSIk",
      desc: "Explore the most popular double-deck space IDONGSIk homes, offering panoramic views and sci-fi-inspired design for ultimate comfort.",
      img: first,
      path:"/c5"
    },
    {
      title: "Single Deck Space IDONGSIk",
      desc: "Perfect sleek layout for clean minimalist living with premium build materials.",
      img: second,
      path:"/c7"
    },
    {
      title: "IDONGSIk House C7 Plus",
      desc: "Enjoy modern comfort with the sleek, eco-friendly IDONGSIk House C7 Plus double-deck design.",
      img: third3,
      path:"/c7-plus"
    },
    {
      title: "IDONGSIk House D5",
      desc: "Compact modular setup with highly responsive thermal glass insulation sheets.",
      img: fourth,
      path:"/d5"
    },
    {
      title: "IDONGSIk House D7",
      desc: "Enjoy stylish comfort in the IDONGSIk House D7, featuring two bedrooms, wide panoramic views and a sleek modern design.",
      img: fifth,
      path:"/d7"
    },
    {
      title: "IDONGSIk House D8",
      desc: "Spacious multi-room high ceiling structure designed for luxury hosting environments.",
      img: sixth,
      path:"/d8" 
    },
  ];

   useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageMounted(true);
    }, 400); // Small delay so the user catches the entrance animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* LUXURY MEETS INNOVATION INTRO HEADERS */}
       

      {/* TWO-COLUMN CARD RESPONSIVE GRID */}
      <section 
        ref={containerRef}
        className={`w-full pb-5 px-4 sm:px-8 md:px-12 transition-all duration-1000 ${
          isVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
        }`}
      >
        <div className=" text-center space-y-4 animate-fade-in-down">
            <p className="text-sm sm:text-[15px] font-semibold uppercase tracking-widest text-orange-500 mb-3">
             Innovative Prefab Homes Redefined
            </p>

            <h1 className="text-4xl pb-6 text-center md:text-center  text-3xl font-bold text-slate-900 tracking-tight leading-tight animate-fade-in-down entrance-delay-2">
             Explore Our Luxury Space IDONGSIk Houses
            </h1>
          </div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {capsuleCards.map((card, idx) => (
            <div 
              key={idx} 
              className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] md:aspect-[16/9] group cursor-pointer"
            >
              {/* Card Image Wrapper */}
              <img 
                src={card.img} 
                alt={card.title} 

                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Fixed Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end items-start text-left p-6 sm:p-10 text-white z-10">
                <Link to = {card.path}>
                <h3 className="text-[20px]  sm:text-xl md:text-2xl font-bold mb-2 tracking-wide">
                  {card.title}
                </h3>
                <p className={`text-[18px] sm:text-[20px]  text-gray-300 max-w-xl font-light leading-relaxed overflow-hidden transition-all duration-600 ease-in-out 
                    ${isPageMounted 
                      ? 'max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mb-4' 
                      : 'max-h-24 opacity-100 mb-4'
                    }`}>
                  {card.desc}
                </p>
                
                {/* Underlined Interactive Button */}
                <button className="flex items-center space-x-2 bg-transparent text-white font-medium text-xs sm:text-sm border-b border-white pb-0.5 hover:text-orange-400 hover:border-orange-400 transition duration-100">
                  <span>Learn More</span>
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                </Link> 
              </div>
              

            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Homee2;