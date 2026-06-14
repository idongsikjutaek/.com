import React, { useState } from 'react';

// Relative path imports matching your local directory structure
import space1 from './picture/space1.jpg';
import space2 from './picture/space2.jpg';
import space3 from './picture/space3.jpg';
import space4 from './picture/space4.jpg';
import space5 from './picture/space5.png';
import space6 from './picture/space6.png';

const Continue = () => {
  // Navigation and dynamic interface states
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Static unified gallery data registry
  const galleryImages = [
    { title: "Exterior Resort Setup Grid View", src: space1 },
    { title: "Twin Sphere Modular High Angle Mountain Ridge", src: space2 },
    { title: "Interior Panoramic Dome View Frame", src: space3 },
    { title: "Lower Level Exterior Pod Foundation Setup", src: space4 },
    { title: "Top Tier Double Deck Symmetrical Dining Area", src: space5 },
    { title: "Night Sky Starry Backdrop Long-Exposure Frame", src: space6 }
  ];

  // Core structured spec datasheet mapping matrix
  const specTableData = [
    { category: "Structural System", label: "Structural System", desc: "Framework structure with wooden frame system", qty: "1 set" },
    { category: "Structural System", label: "Support System", desc: "Steel support with external cladding", qty: "3 sets" },
    { category: "Structural System", label: "Exterior Cladding", desc: "Aluminum single plate decorative panel modules", qty: "65 pieces" },
    { category: "Structural System", label: "Glass", desc: "Double-glazed Low-E tempered glass", qty: "40 pieces" },
    { category: "Structural System", label: "Wall", desc: "Composite wood grain panel / tempered glass", qty: "1 set" },
    { category: "Structural System", label: "Entrance Door", desc: "Remote-controlled opening and closing", qty: "1 set" },
    { category: "Interior Decoration", label: "Interior Cladding", desc: "Wood grain panels", qty: "1 set" },
    { category: "Interior Decoration", label: "Flooring", desc: "High-grade SPC waterproof floor", qty: "1 set" },
    { category: "Interior Decoration", label: "Bathroom", desc: "Integrated bathroom (including sink, faucet, shower head, toilet, and floor drain)", qty: "1 set" },
    { category: "Interior Decoration", label: "Lighting", desc: "Remote-controlled LED dimmable ceiling lights", qty: "1 set" },
    { category: "Interior Decoration", label: "Electrical Switches", desc: "Wireless smart switches", qty: "1 set" },
    { category: "Interior Decoration", label: "Control Panel", desc: "Wireless remote control", qty: "1 set" },
    { category: "Interior Decoration", label: "Ventilation", desc: "Triangular skylights", qty: "2 pieces" },
    { category: "Interior Decoration", label: "Bed", desc: "Multi-functional dual-use bed", qty: "1 set" },
    { category: "Interior Decoration", label: "Curtains", desc: "Aluminum track panoramic curtains", qty: "1 set" },
    { category: "Window", label: "Panoramic Window", desc: "Double-glazed Low-E glass", qty: "1 set" },
    { category: "Support", label: "Load-bearing Supports", desc: "Load-bearing supports", qty: "3 sets" },
    { category: "Stairs", label: "Entrance Stairs", desc: "Entrance stairs", qty: "1 set" },
    { category: "Electrical & Plumbing", label: "Electrical & Plumbing Systems", desc: "Electrical and plumbing systems", qty: "1 set" },
    { category: "Accessories", label: "Hooks / Connectors / Transport Packaging Film", desc: "Hooks, connectors, and transport packaging film", qty: "1 set" },
  ];

  return (
    <div className="bg-[#fcfbf9] min-h-screen font-sans text-slate-800 antialiased selection:bg-orange-200">
      
      {/* ==================== SECTION 1: HERO & EXPLANATORY INTRO ==================== */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[#e26d43] font-bold uppercase tracking-widest text-xs block animate-fade-in">
            Magical Dreams Above Stars
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
            Luxury Awaits in Double Deck IDONGSIK
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl">
            The Star double deck space IDONGSIK is our best-selling model, featuring a sci-fi-inspired double-layer design. Its 360° panoramic windows, aluminum shell, and solid wood interiors offer unmatched quality and comfort. Experience the beauty of nature with a stunning overhead view, blending innovative aesthetics and functionality for a truly immersive and luxurious living experience under the stars.
          </p>

          {/* Core Feature Metric Grid Card Block */}
          <div className="grid grid-cols-2 gap-px bg-slate-200/60 rounded-xl overflow-hidden mt-8 max-w-xl shadow-sm border border-slate-200/40">
            <div className="bg-white p-5 space-y-1">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">Low MOQ</span>
              <p className="text-sm font-medium text-slate-800">Fits 3 units per 40ft container.</p>
            </div>
            <div className="bg-white p-5 space-y-1">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">Quick Delivery</span>
              <p className="text-sm font-medium text-slate-800">Ready in just 30 days.</p>
            </div>
            <div className="bg-white p-5 space-y-1">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">Stock Availability</span>
              <p className="text-sm font-medium text-slate-800">Reliable stock for immediate purchase.</p>
            </div>
            <div className="bg-white p-5 space-y-1">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">Custom Colors</span>
              <p className="text-sm font-medium text-slate-800">Choose from vibrant color shades.</p>
            </div>
          </div>
        </div>

        {/* Hero Responsive Media Framework Wrapper */}
        <div className="w-full max-w-full lg:max-w-[500px] lg:h-[560px] lg:col-span-5 aspect-[4/3] bg-slate-100 rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-center relative overflow-hidden group mx-auto">
          <img 
            src={space1} 
            alt="Hero IDONGSIK Architecture Master Render" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* ==================== SECTION 2: ROW OF METRIC ICON FEATURES ==================== */}
      <section className="bg-white border-y border-slate-100 py-10 my-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {[
            { label: "Aluminum panel", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            { label: "Waterproof Flooring", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
            { label: "Double Layer Hollow Low-E Glass", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M9 4v16 M15 4v16" },
            { label: "Fluorocarbon Coating", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3.172a2 2 0 00-1.414.586l-2.828 2.828A2 2 0 0111.828 15H7" },
            { label: "Electric staircase", icon: "M13 5l7 7-7 7M5 5l7 7-7 7" }
          ].map((feat, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 text-[#e26d43] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e26d43] group-hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-wide text-slate-700 max-w-[140px] leading-tight">
                {feat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 3: IMMERSIVE IMAGE LIGHTBOX GALLERY ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[#e26d43] font-bold uppercase tracking-widest text-xs block">
            Visual Tour
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Experience IDONGSIK Living
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, i) => (
            <div 
              key={i} 
              onClick={() => setLightboxIndex(i)} 
              className="group relative rounded-2xl bg-slate-100 border border-slate-200/60 aspect-[4/3] flex items-center justify-center overflow-hidden shadow-sm cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white font-medium text-xs tracking-wide truncate w-full">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 4: VIDEOS INTRO & EMBEDDED SIDEBAR SELECTION ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[#e26d43] font-bold uppercase tracking-widest text-xs block">
              Video Gallery
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Visual Tour of Our Production Journey
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our videos offer an in-depth look at our production, factory, and products. Get a clear understanding of our processes to inspire and guide your purchasing decisions.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-4 bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm">
            {/* Primary Main Video Player Component Panel */}
            <div className="md:col-span-8 aspect-video w-full rounded-xl bg-slate-950 flex items-center justify-center relative overflow-hidden group shadow-inner">
              <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
              <div className="absolute top-4 left-4 bg-black/40 text-white font-medium text-xs px-3 py-1.5 rounded-md z-20 backdrop-blur-sm tracking-wide">
                {activeVideoIndex === 0 ? "C5 Introduction Video" : "Factory Production Pipeline Walkthrough"}
              </div><button className="w-16 h-16 rounded-full bg-[#e26d43] hover:bg-[#c95932] text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 z-20 relative left-px">
                <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-center text-white/90 text-xs px-4 py-2 rounded-lg z-20 backdrop-blur-sm">
                "the shell is made of aerospace grade aluminum..."
              </div>
            </div>

            {/* Sidebar Media Playlist Tracks Controller */}
            <div className="md:col-span-4 flex flex-col space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-1">
                Double Deck Space IDONGSIK (1/2)
              </span>
              {[
                { step: "1", label: "C5 Introduction Video", runtime: "Introduction setup video" },
                { step: "2", label: "Factory Introduction Video", runtime: "Production line showcase workflow" }
              ].map((vid, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-start space-x-3 ${
                    activeVideoIndex === idx 
                      ? 'bg-orange-50/50 border-orange-200 shadow-sm' 
                      : 'bg-transparent border-transparent hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-md font-mono text-xs flex items-center justify-center flex-shrink-0 ${
                    activeVideoIndex === idx ? 'bg-[#e26d43] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {vid.step}
                  </span>
                  <div className="space-y-0.5 min-w-0">
                    <p className={`text-xs font-semibold tracking-tight truncate ${activeVideoIndex === idx ? 'text-slate-900' : 'text-slate-700'}`}>
                      {vid.label}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium truncate">{vid.runtime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: CORE BENEFIT METRIC PROFILE CARDS ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[#e26d43] font-bold uppercase tracking-widest text-xs block">Why Us</span>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Our Features That Redefine Luxury
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl lg:pt-3">
              Our double deck space IDONGSIK are designed to elevate your experience with exceptional quality and unmatched performance. Explore how this solution redefines convenience and brings lasting value to your everyday needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Quick Installation", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", desc: "It can be easily installed on various terrains like beaches, dense forests, or peaks without the need for a foundation. Perfect for diverse outdoor locations." },
            { title: "Eco-Friendly Build", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z", desc: "No damage to grass or wood, and zero construction waste, ensuring an environmentally responsible and sustainable design that protects natural landscapes." },
            { title: "Modular Assembly", icon: "M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h5.586A1 1 0 019 2.293L11 4z", desc: "Quick and easy to assemble, this modular design can be packed into containers for global shipping. Assemble like building blocks for versatile setups." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm space-y-4 hover:border-orange-200 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-50 text-[#e26d43] rounded-xl flex items-center justify-center border border-orange-100 group-hover:bg-[#e26d43] group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 6: DESIGN BLUEPRINT DATA ROW SYSTEM ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[#e26d43] font-bold uppercase tracking-widest text-[10px] block">
            Product Specifications
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            The Science Behind Our IDONGSIK Designs
          </h2>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider pt-2">
            STARRY SKY ROOM (DOUBLE-LAYER MODEL) PARAMETERS
          </div>
        </div>

        <div className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-sm max-w-4xl mx-auto divide-y divide-slate-100">
          {[
            { label: "Dimensions", val: "Diameter 4.16 meters" },
            { label: "Body Height", val: "4.5 meters" },
            { label: "Specifications", val: "Load-bearing Structure: 140mm diameter seamless circular tube + 20mm thick steel plate" },
            { label: "", val: "External Cladding Material: Aluminum single plate" },
            { label: "", val: "Surface Treatment of Profiles: High temperature fluorocarbon coating" },
            { label: "", val: "Base Structure: Galvanized pipe + waterproof board + OSB (Oriented Strand Board) + aluminum plastic board + floor" },
            { label: "Glass", val: "Glass Material: Double-glazed Low-E glass" },
            { label: "", val: "Glass Thickness: 22mm" },
            { label: "", val: "Specification: 5mm+12A+5mm" },
            { label: "", val: "Transmittance: 60%" },
            { label: "", val: "Glass Film: Single-sided Low-E film" },
            { label: "", val: "Temperature Resistance: -30°C to 60°C" },
            { label: "Fixing Method", val: "Concrete platform with reserved bolt holes according to provided site drawings and templates, using high-strength bolts for fixation." },
            { label: "Reference drawing", val: "Blueprint layout visualization reference maps loaded in system panels." }
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs py-3.5 px-6 items-start gap-2 hover:bg-slate-50/40 transition-colors">
              <div className="md:col-span-3 font-bold text-slate-400 uppercase tracking-wider text-[10px] md:pt-0.5">
                {row.label}
              </div>
              <div className="md:col-span-9 text-slate-700 font-medium leading-relaxed">{row.val}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 7: DETAILED MATRIX PARAMETER CONFIG SHEET ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[#e26d43] font-bold uppercase tracking-widest text-[10px] block">
            Feature Layout
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Configurations Built to Fit Your Needs
          </h2>
        </div>

        <div className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-4 px-6 w-[20%]">Category</th>
                <th className="py-4 px-6 w-[25%]">Configuration</th>
                <th className="py-4 px-6 w-[45%]">Configuration Description</th>
                <th className="py-4 px-6 w-[10%] text-right">Quantity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {specTableData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-6 font-semibold text-slate-400 uppercase tracking-wide text-[10px]">
                    {row.category}
                  </td>
                  <td className="py-3.5 px-6 font-semibold text-slate-900">{row.label}</td>
                  <td className="py-3.5 px-6 text-slate-500 leading-relaxed">{row.desc}</td>
                  <td className="py-3.5 px-6 text-right font-mono text-slate-600 font-semibold">{row.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ==================== FULL-SCREEN INTERACTIVE LIGHTBOX OVERLAY MODAL ==================== */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center select-none">
          
          {/* Close trigger action control element */}
          <button 
            onClick={() => setLightboxIndex(null)} 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-50 transition-colors backdrop-blur-md border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow Navigation Loop Control */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
            }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-50 transition-colors backdrop-blur-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image Display Content Canvas Sandbox */}
          <div className="w-full max-w-5xl max-h-[85vh] px-4 flex flex-col items-center justify-center space-y-4">
            <img 
              src={galleryImages[lightboxIndex].src} 
              alt={galleryImages[lightboxIndex].title} 
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/5" 
            />{/* Descriptive Content Tracking Indicator Overlay Foot Deck */}
            <div className="text-center text-white/80 max-w-xl px-4 pt-2">
              <p className="text-sm font-medium tracking-wide mb-1">
                {galleryImages[lightboxIndex].title}
              </p>
              <span className="text-xs text-white/40 font-mono tracking-widest">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Right Arrow Navigation Loop Control */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-50 transition-colors backdrop-blur-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      )}

    </div>
  );
};

export default Continue;