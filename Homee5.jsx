import React from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';
import farm from "./picture/farm.jpg";
import paint from "./picture/paint.jpg";      

const Homee5 = () => {
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
            src={farm} 
            alt="Modular Housing Community Aerial View" 
            className="w-full h-[400px] lg:h-[700px] object-cover"
          />
        </div>

        {/* Right Side: Text Content Scrolling Section */}
        <div className=" text-center md:text-left flex flex-col justify-center lg:pt-20 md:pt-16 animate-fade-in-right">
          <span className="text-xls uppercase tracking-widest font-bold text-orange-500 block mb-4">
            Scenic Accommodations
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-8 animate-fade-in-down">
            Designed to <br />Conquer Any <br /> Landscape
          </h1>

          <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            <p>
              Our space IDONGSIk houses offer a modern, comfortable retreat. Hence, they are innovative 
              solutions for diverse tourism projects. Designed to address accommodation challenges in 
              scenic areas, these unique spaces are ideal for high-end campsites, resort hotels, and 
              homestay theme upgrades.
            </p>

            <p>
              The space IDONGSIk house concept enhances travel living experiences with features like 
              360° panoramic views and stargazing opportunities. Whether in resorts, backyard spaces, 
              or granny flats, these homes embrace the beauty of nature, allowing guests to reconnect 
              with the environment while enjoying a luxurious stay.
            </p>
          </div>
        </div>
      </div>
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:pt-20 md:pt-16">
        {/* Right Side: Text Content Scrolling Section */}
        <div className="pt-20 text-center md:text-left flex flex-col justify-center lg:pt-20">
          <span className="text-xls uppercase tracking-widest font-bold text-orange-500 block mb-4">
            Durable Build
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-8">
            Timeless Elegance with <br/>Wood-Alu-Clad Touch
          </h1>

          <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            <p>
              Our space IDONGSIk homes feature a unique wood-alu-clad material that 
              combines the natural warmth of wood with the strength of aluminum. 
              This exclusive combination offers a high-end solution that appeals 
              to international clients seeking the benefits of both materials.
            </p>

            <p>
              The wood-alu-clad design enhances the aesthetic appeal of tiny homes 
              while providing long-lasting durability and resistance to environmental 
              elements. This innovative material sets us apart from competitors, 
              offering you a perfect balance of sustainability, luxury, and timeless 
              design to meet your customers’ needs.
            </p>
          </div>
        </div>
        <div className="w-full top-8 rounded-3xl overflow-hidden shadow-lg border border-white/20">
          <img 
            src={paint} 
            alt="Modular Housing Community Aerial View" 
            className="w-full h-[400px] lg:h-[700px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Homee5;