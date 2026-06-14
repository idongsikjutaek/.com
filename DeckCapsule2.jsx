import React, { useState } from 'react';
import cool from "./picture/cool.jpg";
import cool1 from "./picture/cool1.jpg";
import cool2 from './picture/cool2.jpg';
import cool3 from './picture/cool3.jpg';
import cool4 from './picture/cool4.jpg';
import cool5 from './picture/cool5.jpg';
import cool6 from "./picture/cool6.jpg";


// Custom fluid animations for clean modern layout appearance
const layoutAnimationStyles = `
  @keyframes elementFadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-layout-up {
    animation: elementFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;

const DeckCapsule = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
 // Place this inside your component function alongside your other states
const [lightboxIndex, setLightboxIndex] = useState(null);

const galleryImages = [
  { title: "Exterior Resort Setup Grid View", src: cool1 },
  { title: "Twin Sphere Modular High Angle Mountain Ridge", src: cool2 },
  { title: "Interior Panoramic Dome View Frame", src: cool3 },
  { title: "Lower Level Exterior Pod Foundation Setup", src: cool4 },
  { title: "Top Tier Double Deck Symmetrical Dining Area", src: cool5 },
  { title: "Night Sky Starry Backdrop Long-Exposure Frame", src: cool6 }
];
  const productVideos = [
    { id: 1, title: "C7-plus Introduction Video", duration: "1:12" },
    { id: 2, title: "Factory Introduction Video", duration: "2:45" }
  ];

  const specificationData = [
    {
      category: "Specifications",
      items: [
        { label: "Dimensions", value: "Diameter 4.16 meters" },
        { label: "Body Height", value: "4.5 meters" },
        { label: "Load-bearing Structure", value: "140mm diameter seamless circular tube + 20mm thick steel plate" },
        { label: "External Cladding Material", value: "Aluminum single plate" },
        { label: "Surface Treatment of Profilest", value: "High temperature fluorocarbon coating" },
        { label: "Base Structure", value: "Galvanized pipe + waterproof board + OSB (Oriented Strand Board) + aluminum plastic board + floor" }
      ]
    },
    {
      category: "Glass",
      items: [
        { label: "Glass Material", value: "Double-glazed Low-E tempered glass" },
        { label: "Glass Thickness", value: "22mm" },
        { label: "Specification", value: "5mm + 12A + 5mm" },
        { label: "Transmittance", value: "60%" },
        { label: "Glass Film", value: "Single-sided Low-E film" },
        { label: "Temperature Resistance", value: "-30°C to 60°C" }
      ]
    },
    {
      category: "Fixing Method",
      items: [
        { label: "Fixing Method", value: "Concrete platform with reserved bolt holes according to provided site drawings and templates, using high-strength bolts for fixation." }
      ]
    }
  ];
   const features = [
    {
      id: 1,
      title: "Aluminum panel",
      // Custom SVG combination to mimic the overlapping textured squares
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute top-1 left-3 w-8 h-8 border-2 border-[#f06424] rounded-sm border-dashed opacity-70"></div>
          <div className="absolute bottom-1 right-3 w-8 h-8 border-2 border-[#f06424] rounded-sm bg-[#f3f4f6] flex flex-col justify-between p-1">
            <div className="w-full h-[1px] bg-[#f06424] rotate-45 transform origin-left scale-150 opacity-40"></div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Waterproof Flooring",
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Droplet */}
          <div className="absolute top-0 text-[#f06424]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"/></svg>
          </div>
          {/* Surface line & Arrow */}
          <div className="absolute bottom-2 text-[#f06424] w-full flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 17h14l4-4" />
              <path d="M17 13h3v3" />
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Double Layer Hollow Low-E Glass",
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute top-1 left-2 w-7 h-8 border-2 border-[#f06424] rounded-[3px]"></div>
          <div className="absolute bottom-1 right-2 w-7 h-8 border-2 border-[#f06424] rounded-[3px] bg-[#f3f4f6] flex items-center justify-center">
            <div className="w-3 h-4 border-r border-t border-[#f06424] rotate-45 transform -translate-x-0.5 translate-y-0.5"></div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Fluorocarbon Coating",
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Shield/Sun rays reflecting */}
          <div className="absolute top-0 text-[#f06424]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          {/* Base structure */}
          <div className="absolute bottom-2 w-10 h-2 border border-[#f06424] rounded-xs flex justify-between px-0.5 items-center">
            <div className="w-0.5 h-1 bg-[#f06424]"></div>
            <div className="w-0.5 h-1 bg-[#f06424]"></div>
            <div className="w-0.5 h-1 bg-[#f06424]"></div>
            <div className="w-0.5 h-1 bg-[#f06424]"></div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Electric staircase",
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center text-[#f06424]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 19h4v-4h4v-4h4v-4h4" />
            <path d="M13 17l3 3m0 0h-3m3 0v-3" />
          </svg>
        </div>
      )
    }
  ];


  const configurationTable = [
    { category: "Structural System", items: [
      { name: "Structural System", desc: "Framework structure with wooden frame system", qty: "1 set" },
      { name: "Support System", desc: "Steel support with external cladding", qty: "3 sets" },
      { name: "Exterior Cladding", desc: "Aluminum single plate decorative panel modules", qty: "65 pieces" },
      { name: "Glass", desc: "Double-glazed Low-E tempered glass", qty: "40 pieces" },
      { name: "Wall", desc: "Composite wood grain panel / tempered glass", qty: "1 set" },
      { name: "Entrance Door", desc: "Remote-controlled controlled opening and closing", qty: "1 set" }
    ]},
    { category: "Interior Decoration", items: [
      { name: "Interior Cladding", desc: "Wood grain panels", qty: "1 set" },
      { name: "Flooring", desc: "High-grade SPC waterproof floor", qty: "1 set" },
      { name: "Bathroom", desc: "Integrated bathroom (including sink, faucet, shower head, toilet, and floor drain)", qty: "1 set" },
      { name: "Lighting", desc: "Remote-controlled LED dimmable ceiling lights", qty: "1 set" },
      { name: "Electrical Switches", desc: "Wireless smart switches", qty: "1 set" },
      { name: "Control Panel", desc: "Wireless remote control", qty: "1 set" },
      { name: "Ventilation", desc: "Triangular skylights", qty: "2 pieces" },
      { name: "Bed", desc: "Multi-functional dual-use bed", qty: "1 set" },
      { name: "Curtains", desc: "Aluminum track panoramic curtains", qty: "1 set" }
    ]},
    { category: "Window", items: [
      { name: "Panoramic Window", desc: "Double-glazed Low-E glass", qty: "1 set" }
    ]},
    { category: "Support", items: [
      { name: "Load-Bearing Supports", desc: "Double-glazed Low-E glass", qty: "1 set" }
    ]},
    { category: "Stairs", items: [
      { name: "Entrance Stairs", desc: "Entrance stairs", qty: "3 sets" }
    ]},
    { category: "Electrical & Plumbing", items: [{ name: "Electrical & Plumbing Systems", desc: "Electrical and plumbing systems", qty: "1 set" }
    ]},
    { category: "Accessories", items: [
      { name: "Hooks / Connectors / Transport", desc: "Hooks, connectors, and transport packaging film", qty: "1 set" }
    ]}
  ];
  

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: layoutAnimationStyles }} />

      {/* ==================== SECTION 2: HERO TITLE & OVERVIEW ROW ==================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-layout-up">
        {/* Left main headers text layout */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <span className="text-[13px] text-orange-500 sm:font-bold uppercase tracking-widest text-[15px] block">
            Magical Dreams Above Stars
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
            Luxury Awaits in C7 Plus IDONGSIK House
          </h1>
          <p className="text-slate-500 text-[15px] md:text-[20px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            The height of the first floor is 2.5 meters, which can 
            be used as a parking space. 
            Quick and easy to assemble, this
             modular design can be packed into 
             containers for global shipping. 
             Assemble like building blocks for 
             versatile setups.
          </p>

          {/* Core high level bullet specs table blocks */}
          <div className="grid grid-cols-2 gap-4 pt-6 text-left max-w-xl mx-auto lg:mx-0">
            <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
              <span className="text-[10px] sm:font-bold text-orange-500 text-[20px] block">Low MOQ</span>
              <p className="text-sm sm:text-[12px] text-slate-500 mt-1">Fits 1 unit per 40ft container.</p>
            </div>
            <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
              <span className="text-[10px] sm:font-bold text-orange-500 text-[20px] block">Quick Delivery</span>
              <p className="text-sm sm:text-[12px] text-slate-500 mt-1">Ready in just 30 days.</p>
            </div>
            <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
              <span className="text-[10px] sm:font-bold text-orange-500 text-[20px] block">Stock Availability</span>
              <p className="text-sm sm:text-[12px]  text-slate-500 mt-1">Reliable stock for immediate purchase.</p>
            </div>
            <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
              <span className="text-[10px] sm:font-bold text-orange-500 text-[20px] block">Custom Colors</span>
              <p className="text-sm sm:text-[12px]  text-slate-500 mt-1">Choose from vibrant color shades.</p>
            </div>
          </div>
        </div>

        {/* Right side display image frame block */}
        <div className="w-full max-w-[250px] md:max-w-[350px] lg:max-w-[500px] h-auto lg:h-[560px] lg:col-span-5 bg-slate-100 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-400 font-medium text-xs mx-auto">
          <img src={cool} alt="" />
        </div>
      </section>

      {/* ==================== SECTION 3: ENGINEERING HIGHLIGHT ICONS ==================== */}
      <section className="w-full bg-[#f3f4f6] py-12 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4 items-start justify-center">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center px-2 transition-transform duration-200 hover:scale-105"
            >
              {/* Icon Container */}
              <div className="mb-4 text-orange-500 flex items-center justify-center h-14">
                {feature.icon}
              </div>
              
              {/* Feature Title */}
              <p className="text-[#374151] font-medium text-[14px] sm:text-[15px] leading-snug max-w-[160px]">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ==================== SECTION 4: REPLICATED EXPERIENTIAL GALLERY ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
        <span className="text-[15px] md:text-orange-500 font-bold uppercase tracking-widest block mb-2">Visual Tour</span>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12">Experience IDONGSIK Living</h2>
        
        {/* Dynamic masonry/grid flow responsive structure layout */}
        
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {galleryImages.map((item, i) => (
    <div 
      key={i} 
      onClick={() => setLightboxIndex(i)} // Opens lightbox at this specific index
      className="bg-slate-100 border border-slate-200/60 aspect-[4/3] rounded-xl flex items-center justify-center relative overflow-hidden shadow-sm group cursor-pointer"
    >
      <img 
        src={item.src} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-slate-900/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-medium text-xs truncate w-full">
          {item.title}
        </p>
      </div>
    </div>
  ))}
</div>

{/* ==================== FULL SCREEN INTERACTIVE LIGHTBOX MODAL ==================== */}
{lightboxIndex !== null && (
  <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center select-none animate-fade-in">
    
    {/* Close button top right corner */}
    <button 
      onClick={() => setLightboxIndex(null)}
      className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>

    {/* Navigation Left Control Area */}
    <button 
      onClick={(e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      }}
      className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>

    {/* Full Screen Image Frame viewport display */}
    <div className="w-full max-w-5xl max-h-[80vh] px-4 flex items-center justify-center">
      <img 
        src={galleryImages[lightboxIndex].src} 
        alt={galleryImages[lightboxIndex].title} 
        className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl transition-all duration-300"
      />
    </div>

    {/* Title descriptor label bottom caption deck */}
    <div className="absolute bottom-8 text-center text-white/80 px-6 max-w-xl">
      <p className="text-sm font-medium tracking-wide mb-1">
        {galleryImages[lightboxIndex].title}
      </p>
      <span className="text-xs text-white/40 font-mono">
        {lightboxIndex + 1} / {galleryImages.length}
      </span>
    </div>

    {/* Navigation Right Control Area */}
    <button 
      onClick={(e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }}
      className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
)}
      </section>

      {/* ==================== SECTION 5: VIDEO PLAYLIST STREAM SELECTION FRAME ==================== */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
          <span className="text-[10px] md:text-[15px] text-orange-500 font-bold uppercase tracking-widest block">Video Gallery</span>
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Visual Tour of Our Production Journey</h3>
          <p className="text-sm md:text-xl text-slate-500  leading-relaxed">
            Our videos offer an in-depth look at our production, factory, and products. Get a clear understanding of our processes to inspire and guide your purchasing decisions.
          </p>
        </div>{/* Video dashboard row split player */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
          {/* Main Display Player */}
          <div className="md:col-span-7 bg-slate-900 aspect-video rounded-xl flex flex-col items-center justify-center text-center p-6 text-slate-400 relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-slate-800/80 flex flex-col items-center justify-center text-slate-300 text-xs p-4">
              <button className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-1"><path d="M8 5.14v14c0 .86.94 1.39 1.66.9l10-7c.61-.43.61-1.37 0-1.8l-10-7A1 1 0 0 0 8 5.14Z" /></svg>
              </button>
              <p className="font-semibold text-xl text-white">{productVideos[activeVideoIndex].title}</p>
              <span className="text-[13px] text-slate-400 mt-1">Click to render preview stream timeline</span>
            </div>
          </div>

          {/* Playlist Controls Sidebar Stack */}
          <div className="md:col-span-5 space-y-2">
            <div className="text-[15px] font-semibold text-slate-400 uppercase tracking-wider px-1 flex justify-between">
              <span>Playlist Tracks</span>
              <span>{productVideos.length} Videos</span>
             </div>
             {productVideos.map((video, idx) => (
              <div
                key={video.id}
                onClick={() => setActiveVideoIndex(idx)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${idx === activeVideoIndex ? 'bg-white shadow-sm border border-slate-200' : 'hover:bg-slate-200/50 border border-transparent'}`}
              >
                <div className="w-12 h-8 bg-slate-300 rounded flex-shrink-0 flex items-center justify-center text-[9px] text-slate-500 font-bold">PREVIEW</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-semibold text-slate-800 truncate">{video.title}</p>
                  <span className="text-[10px] text-slate-400 font-medium">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: WHY US - FEATURES GRID ==================== */}
      <section className=" py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="text-center mb-16">
            <div>
              <span className="text-[15px] md:text-[20px] text-orange-500 font-bold uppercase tracking-widest text-xs block mb-2">Why Us</span>
            <h2 className="text-2xl md:text-6xl font-semibold tracking-tight text-slate-900">The Science Behind Our IDONGSIK Designs</h2>          
            </div>
             <p className="text-[30px] sm:text-[20px] ml-auto mr-auto pt-[20px] font-semibold w-[500px] tracking-tight text-slate-500">
              Our C7 plus space IDONGSIK are designed
               <br/>
              to elevate your experience with
              <br/>
              exceptional quality and unmatched 
              <br/>
              performance. Explore how this solution
              <br/>
              redefines convenience and brings  
              <br/>
              lasting value to your everyday needs.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6h6M9 10h6M9 14h6m-6 4h6" /></svg>
              </div>
              <h4 className=" text-[15px] md:text-[20px] font-semibold text-slate-900">Quick Installation</h4>
              <p className="text-[15px] md:text-[20px] text-slate-500 leading-relaxed">It can be easily installed on various terrains like beaches, dense forests, or peaks without the need for a foundation. Perfect for diverse outdoor locations.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" /></svg>
              </div>
              <h4 className="text-[15px] md:text-[20px] font-semibold text-slate-900">Eco-Friendly Build</h4>
              <p className="text-[15px] md:text-[20px] text-slate-500 leading-relaxed">No damage to grass or wood, and zero construction waste, ensuring an environmentally responsible and sustainable design that protects natural landscapes.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6 6 0 015.208-5.93 3.285 3.285 0 004.184 0 6 6 0 015.208 5.93v.11c0 .577-.467 1.042-1.043 1.042H4.043C3.467 20.278 3 19.813 3 19.235z" /></svg>
              </div>
              <h4 className="text-[15px] md:text-[20px] font-semibold text-slate-900">Modular Assembly</h4>
              <p className="text-[15px] md:text-[20px] text-slate-500 leading-relaxed">Quick and easy to assemble, this modular design can be packed into containers for global shipping. Assemble like building blocks for versatile setups.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== SECTION 7: DETAILED STARRY SKY ROOM PARAMETERS ==================== */}
     
    </div>
  );
};

export default DeckCapsule;