import React, { useState, useEffect } from "react";
import groups  from "./picture/groups.jpg";
import {useRef} from "react";
import { Link } from "react-router-dom";
import Homee1 from "./Homee1";
import Homee2 from "./Homee2";
import Home7 from "./Home7";
import Homee5 from "./Homee5"
import Home6 from "./Home6";
import useScrollAnimation from "./hooks/useScrollAnimation";
import useLogoSpin from "./hooks/useLogoSpin";
import "./styles/waterFlow.css";
import "./styles/pageAnimations.css";

const ListHouse = () =>{
  const backgroundImages = [groups];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [containerRef, isVisible] = useScrollAnimation();
  const isLogoSpinning = useLogoSpin();
  const contactSectionRef = useRef(null)
  const scrollToContact = () => {
  contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); 
   };
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
  }, []);
  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Space IDONGSIk Houses",
      href: "/space-IDONGSIk",
      hasDropdown: true,
      dropdownItems: [
        { name: "Double Deck Space IDONGSIk C5", href: "/c5" },
        { name: "Single Deck Space IDONGSIk C7", href: "/c7" },
        { name: "IDONGSIk House C7 Plus", href: "/c7-plus" },
        { name: "IDONGSIk House D5", href: "/d5" },
        { name: "IDONGSIk House D7", href: "/d7" },
        { name: "Expandable House D8", href: "/d8" },
        { name: "Expandable House E20", href: "/e20" },
        ],
    },
    {
      name: "About Us",
      href: "",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/story" },
        { name: "Factory", href: "/factory" },
        { name: "Project Cases", href: "/cases" },
      ],
    },
    { name: "News", href: "/news" },
    { name: "FAQs", href: "/faqs" },
    { name: "How to Partner", href: "/partner" },
  ];
  const WrenchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-12 h-12 ml-auto mr-auto text-orange-500 mb-6 size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      />
    </svg>
  );

  const CoinsIcon = () => (
    <svg
      className="w-12 h-12 ml-auto mr-auto text-orange-500 mb-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.854-1.106-2.24 0-3.094l.018-.015c1.172-.879 3.07-.879 4.242 0 .417.313.76.712.982 1.156M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
       </svg>
     );

     const BoxIcon = () => (
     <svg
      className="w-12 h-12 ml-auto mr-auto text-orange-500 mb-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9"
      />
     </svg>
     );
     return ( 
      
      <aside>
      <div
        className={`sticky relative h-[480px] md:min-h-screen w-full bg-cover bg-center bg-no-repeat font-sans text-white select-none transition-all duration-1000 ease-in-out 
        ${isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.02] blur-md"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.5)), url('${backgroundImages[currentIdx]}')`,
        }}
      >
        {/* ---------------- NAVIGATION HEADER ---------------- */}
        


        {/* ---------------- MOBILE MENU OVERLAY ---------------- */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity  duration-800  lg:hidden ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`fixed inset-0 h-[470px] w-[300px] ml-auto rounded-[1px] pt-[60px] bg-white/10% backdrop-blur-md z-40 flex flex-col justify-center px-8 transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col space-y-6 text-xl font-semibold tracking-wide">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`pb-1 border-b border-white/10 ${link.isActive ? "text-orange-500 font-bold hover" : "text-gray-200"}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+19364456496"
              className="text-sm pt-4 text-orange-400 font-medium"
            >
              Call Us: +1 9364456496
            </a>
          </nav>
        </div>

        {/* ---------------- MAIN HERO CONTENT ---------------- */}
        <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-32 flex flex-col justify-between min-h-[calc(100vh-90px)]">
          <div className="max-w-4xl space-y-9">
            <h1 className="text-4xl text-center font-semibold sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] md:text-left animate-fade-in-down">
              Innovative Space IDONGSIk Houses for a Modern Lifestyle
            </h1>
            <div className="flex justify-center md:block">
              <button onClick={scrollToContact}  className="bg-orange-500 text-white px-9 py-4 rounded text-slx font-bold tracking-wider">
                View Products
              </button>
            </div>
          </div>

          {/* ---------------- BOTTOM STATUS BAR ---------------- */}
        </main>

        {/* ---------------- FLOATING WHATSAPP BUTTON ---------------- */}
      </div>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* --- HEADER NAVBAR --- */}
        <Homee1 />
        <Homee2 />
        <Home7 />
        {/* --- HERO / INTRODUCTION SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 px-10 flex flex-col justify-between md: flex gap-12 items-center">
          <div>
            <span className="text-sm text-center md: text-xl font-bold tracking-widest text-orange-500 uppercase block mb-3">
              Our Specialities
            </span>
            <h1 className="text-3xl max-w-3xl p-3 text-center md: text-4xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
              Why Our IDONGSIk Lead the Market
            </h1>
          </div>
          <div className=" md: p-2 space-y-6 text-gray-600  leading-relaxed">
            <p className="  text-center md: text-[20px]">
              Our space IDONGSIk homes redefine modern living through
              groundbreaking design and precision engineering. Discover how they
              blend efficiency, versatility, and style with unparalleled
              craftsmanship for a truly unique and innovative experience.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 px-5 pb-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300">
            <WrenchIcon />
            <h3 className="text-xl text-center font-semibold text-slate-900 mb-4">
              All-Terrain Installation
            </h3>
            <p className="text-slate-500 text-center leading-relaxed text-[15px]">
              Easily installed on any terrain, including peaks, forests, and
              beaches, without damaging the environment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CoinsIcon />
            <h3 className="text-xl text-center font-semibold text-slate-900 mb-4">
              Modular Assembly
            </h3>
            <p className="text-slate-500 text-center leading-relaxed text-[15px]">
              Quickly assemble modular IDONGSIk-like building blocks and ship
              them globally in convenient containers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300">
            <BoxIcon />
            <h3 className="text-xl text-center font-semibold text-slate-900 mb-4">
              Innovative Design
            </h3>
            <p className="text-slate-500 text-center leading-relaxed text-[15px]">
              Eye-catching original tiny IDONGSIk house design leads to market
              trends, ensuring exceptional quality and functionality.
            </p>
          </div>
        </div>
        <Homee5/>
        <Home6/>
        <div className="relative w-full h-[400px] min-h-[300px] overflow-hidden font-sans select-none">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" 
          alt="Premium Space IDONGSIk Resort Aerial View" 
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
        />
        {/* Subtle dark vignette overlay to mirror the lighting in the reference image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
          Order Premium Space IDONGSIk Homes Today!
        </h1>

        {/* Subparagraph */}
        <p className="mt-6 text-white text-base sm:text-lg md:text-xl font-medium max-w-3xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] opacity-95">
          Explore our exceptional space IDONGSIk homes and place your order now for quick, 
          reliable delivery and guaranteed satisfaction.
        </p>

        {/* Call to Action Button */}
        <button 
          type="button"
          className="mt-8 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base rounded shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Get Started
        </button>
      </div>
     </div>
     <div className="w-full h-screen md:h-screen lg:auto bg-white py-12 
     px-4 sm:px-6 lg:px-8 font-sans">
      <div className="pt-15 flex flex-col lg:flex-row justify-center lg:justify-between max-w-6xl mx-auto w-full gap-12">
        
        {/* Left Column: Contact Information */}
        <div className="w-full lg:w-[45%] pt-5 lg:pt-15 space-y-8 text-center lg:text-left">
          <div>
            <span className="text-xls font-bold tracking-widest text-orange-500 uppercase block mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 leading-tight">
              Reach Out for Inquiries
            </h1>
            <p className="text-[15px] md:text-[20px] mt-4 text-gray-500 leading-relaxed">
              Please fill out the form for any inquiries, and our team will get back to you.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:text-left">
            
            {/* Email */}
            <div className="flex items-center lg:items-start justify-center lg:justify-start space-x-3">
              <div className="text-orange-500 mt-1 shrink-0">
                <svg className="w-8 h-11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25 2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className=" text-[15px] md:text-[20px] font-semibold text-gray-900 ">Email Us</h4>
                <a href="mailto:IDONGSIKJUTAEK@gmail.com" className="text-[10px] md:text-[15px] text-gray-500 hover:text-orange-500 transition-colors break-all">
                  IDONGSIKJUTAEK@gmail.com
                </a>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-center lg:items-start justify-center lg:justify-start space-x-3">
              <div className="text-orange-500 mt-1 shrink-0">
                <svg className="w-8 h-11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.48-5.144-3.8-6.62-6.62l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h4 className=" text-[15px] md:text-[20px] font-semibold text-gray-900 ">Call Us</h4>
                <p className="text-[10px] md:text-[15px] text-gray-500">+1 9364456496</p>
              </div>
            </div>

            {/* Wechat */}
            <div className="flex items-center lg:items-start justify-center lg:justify-start space-x-3">
              <div className="text-orange-500 mt-1 shrink-0">
                <svg className="w-8 h-11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.023c-.09-.057-.179-.118-.267-.182C2.624 16.334 1.5 14.302 1.5 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div>
                <h4 className=" text-[15px] md:text-[20px] font-semibold text-gray-900 ">Wechat</h4>
                <p className="text-[10px] md:text-[15px] text-gray-500">9364456496</p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex items-center lg:items-start justify-center lg:justify-start space-x-3">
              <div className="text-orange-500 mt-1 shrink-0">
                <svg className="w-8 h-11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 2.12.735 4.07 1.961 5.618l-1.025 3.73 3.84-1.007A8.963 8.963 0 0012 20.25z" />
                </svg>
              </div>
              <div>
                <h4 className=" text-[15px] md:text-[20px] font-semibold text-gray-900 ">Whatsapp</h4>
                <p className="text-[10px] md:text-[15px] text-gray-500">+1 9364456496</p>
              </div>
            </div>

          </div>

          {/* Visit Us (Full width inside left column) */}
          <div className="flex items-center lg:items-start justify-center lg:justify-start space-x-3 pt-2 border-t border-gray-200">
            <div className="text-orange-500 mt-1 shrink-0">
              <svg className="w-8 h-11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h4 className=" text-[15px] md:text-[20px] font-semibold text-gray-900 ">Visit Us</h4>
              <p className="text-[10px] md:text-[15px] text-gray-500 leading-relaxed max-w-sm">
                Jingxu Space Company, Huanglou Town, Qingzhou City, Shandong Province, China
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form Box */}
        <div  ref={contactSectionRef} className="w-full lg:w-[45%] pt-5 lg:pt-15 space-y-8 bg-white p-6 sm:p-10 rounded-xl border border-gray-100 shadow-sm mx-auto lg:mx-0">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name*"
                required
                className="w-full px-4 py-3 bg-gray-50 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f28e2b]/50 focus:border-[#f28e2b] transition-all placeholder-gray-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                required
                className="w-full px-4 py-3 bg-gray-50 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f28e2b]/50 focus:border-[#f28e2b] transition-all placeholder-gray-400"
              />
            </div>

            {/* User Option Dropdown */}
            <div>
              <label htmlFor="userOption" className="block text-sm font-medium text-gray-700 mb-1">
                User Option *
              </label>
              <select
                id="userOption"
                name="userOption"
                className="w-full px-4 py-3 bg-gray-50 text-sm border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f28e2b]/50 focus:border-[#f28e2b] transition-all"
              >
                <option value="commercial">Commercial Option</option>
                <option value="personal">Personal Option</option>
              </select>
            </div>

            {/* Product Name Input */}
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
             defaultValue="Double Deck Space Capsules"
                className="w-full px-4 py-3 bg-gray-50 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f28e2b]/50 focus:border-[#f28e2b] transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 bg-gray-50 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f28e2b]/50 focus:border-[#f28e2b] transition-all placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* ReCAPTCHA Box Mockup */}
            <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-md max-w-xs">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 text-[#f28e2b] bg-white border-gray-300 rounded focus:ring-[#f28e2b] cursor-pointer"
                />
                <span className="text-xs font-medium text-gray-600">I'm not a robot</span>
              </label>
              <div className="flex flex-col items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg" 
                  alt="reCAPTCHA" 
                  className="w-6 h-6 object-contain"
                />
                <span className="text-[9px] text-gray-400 mt-0.5">reCAPTCHA</span>
              </div>
            </div>

            {/* Submit Button */}
            <div>
               <Link to="/sub">
                            <button
                              type="submit"
                              className="w-32 py-3 bg-[#f28e2b] hover:bg-[#e07d1a] text-white font-semibold text-sm rounded shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                            >
                              Submit
                            </button>
                            </Link>
            </div>
          </form>
        </div>
      </div>
      <footer className="border-t border-gray-100 bg-white py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col  sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <div>
              Copyright © 2026 | IDONGSIk JUTAEKE All rights reserved.
            </div>
            <div className="flex items-center space-x-1 border rounded px-2 py-1 text-gray-600 cursor-pointer hover:bg-gray-50">
              <span>🇬🇧 EN ▾</span>
            </div>
          </div>
        </footer>
    </div>


        {/* --- FOOTER --- */}
        
      </div>
      <div>
      
        </div>
    </aside>
     );
}


export default ListHouse;
