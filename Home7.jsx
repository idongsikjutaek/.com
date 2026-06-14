import React from "react";
import useScrollAnimation from "./hooks/useScrollAnimation";
import "./styles/waterFlow.css";
import "./styles/pageAnimations.css";
import time from "./picture/time.jpg";

// Simple SVG WhatsApp Icon matching the layout
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Home7 = () => {
  const [containerRef, isVisible] = useScrollAnimation();
  return (
    <div
      ref={containerRef}
      className={`bg-white min-h-screen font-sans antialiased flex items-center justify-center sm: lg: transition-all duration-1000 ${
        isVisible ? "animate-water-flow-up" : "water-flow-hidden"
      }`}
    >
      <div className=" h-[400px] md: w-full bg-white overflow-hidden shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left Section: Landscape Background Image */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full animate-zoom-in-slow">
          <img
            src={time}
            alt="Futuristic IDONGSIK homes in forest"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Orange Info Card Content Container */}
        <div className="lg:col-span-7 bg-orange-500  text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between animate-fade-in-right">
          {/* Main Copy Area */}
          <div className="flex flex-col md:grid-cols-12 gap-8 items-start mb-12">
            {/* Heading and Paragraph description */}
            <div className="md:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.15] animate-fade-in-down">
                Invest in the <br /> Future of Housing!
              </h1>
              <p className="text-white/90 text-[15px] leading-relaxed font-normal max-w-md">
                Connect with us on WhatsApp for personalized assistance and
                explore innovative opportunities tailored to your business
                needs.
              </p>
            </div>

            {/* Direct WhatsApp Callout Unit */}
            <div className="hidden lg:flex md:col-span-4 flex-col items-start md:items-center text-left md:text-center md:pt-4">
              <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-sm">
                <WhatsAppIcon className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium tracking-wide block">
                +1 9364456496
              </span>
              <span className="text-xs text-white/70 mt-0.5 block">
                (WhatsApp)
              </span>
            </div>
          </div>

          {/* Bottom Metagrid Footer Links */}
          <div className="flex justify-between md:flex  gap-y-6 gap-x-4 pt-8 border-t border-white/20 text-sm">
            {/* WeChat Block */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-semibold block tracking-wide">
                  9364456496
                </span>
                <span className="text-xs text-white/70 font-normal mt-0.5 block">
                  (WeChat)
                </span>
              </div>

              {/* Phone Block */}
              <div>
                <span className="font-semibold block tracking-wide">
                  +1 9364456496
                </span>
                <span className="text-xs text-white/70 font-normal mt-0.5 block">
                  (Phone)
                </span>
              </div>
            </div>

            {/* Email Block (spans full width on small layouts) */}
            <div className="flex flex-col gap-4">
               <div className="col-span-2 md:col-span-1">
              <span className="font-semibold block tracking-wide break-all">
                IDONGSIKJUTAEK@gmail.com
              </span>
              <span className="text-xs text-white/70 font-normal mt-0.5 block">
                (Email)
              </span>
            </div>
            <div className="flex flex-col  lg:hidden">
              <span className="font-semibold block tracking-wide">
                +86 15318955803
              </span>
              <span className="text-xs text-white/70 font-normal mt-0.5 block">
                (WhatsApp)
              </span>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home7;
