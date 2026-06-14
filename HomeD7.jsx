import { useState, useEffect } from "react";
import React from "react";
import pic1 from "./picture/pic1.jpg";
import { Link } from "react-router-dom";
import useLogoSpin from "./hooks/useLogoSpin";
import "./styles/pageAnimations.css";
import pic11 from "./picture/pic11.png"
import pic22 from "./picture/pic22.png"
import Home6 from "./Home6";
import Home7 from "./Home7";
import Home8 from "./Home8";
import DeckCapsule4 from "./DeckCapsule4";
import Table4 from "./Table4";

const EyeOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const EyeClosedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 1-4.243-4.243m4.242 4.243L9.172 9.172"
    />
  </svg>
);

const HomeD7 = () => {
  const projects = [
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", // Replace with your local asset path
      altText: "Interior project showcase video thumbnail",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80", // Replace with your local asset path
      altText: "Aerial project showcase video thumbnail",
    },
  ];
  const contactSectionRef = React.useRef(null); // Or just useRef(null) if imported directly
  const scrollToContact = () => {
  contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
};
  // Password Visibility Toggle State
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState("CapsuleCastle2026");

  // Animated Numbers Counting States
  const [area, setArea] = useState(0);
  const [reduction, setReduction] = useState(0);
  const [units, setUnits] = useState(0);
  const [deliveries, setDeliveries] = useState(0);

  useEffect(() => {
    const duration = 1000; // 2 seconds total execution time
    const frameRate = 1000 / 60; // ~60fps rendering
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;

      // Progress ratio from 0 to 1
      const progress = frame / totalFrames;

      // Linear tracking up to original targets
      setArea(Math.floor(progress * 5000));
      setReduction(Math.floor(progress * 90));
      setUnits(Math.floor(progress * 50));
      setDeliveries(Math.floor(progress * 100));

      if (frame >= totalFrames) {
        // Guarantee clean landing numbers
        setArea(5000);
        setReduction(90);
        setUnits(50);
        setDeliveries(100);
        clearInterval(counterInterval);
      }
    }, frameRate);

    return () => clearInterval(counterInterval);
  }, []);

  const backgroundImages = [pic1];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLogoSpinning = useLogoSpin();

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
    }, 5000);

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Our resort in Brazil had a real problem with slow builds and crazy high costs. But then we found IDONGSIk JUTAEK's space IDONGSIk homes. The whole thing was way quicker, and the cost? Much lower! Guests love them, and shipping was way cheaper than we thought. Honestly, it's been a huge relief.",
      name: "Marco Silva",
      role: "CEO",
    },
    {
      text: "I've been into real estate for a long time, but IDONGSIk JUTAEK's space IDONGSIk homes are something else. The design is unique and gives my properties that extra edge. What I like most is how fast they go up, and the cost isn't bad either. It's been a great addition to my investments, and I'm looking forward to using them more.",
      name: "Yuki Tanaka",
      role: "Developer",
    },
    {
      text: "We were struggling with all the costs and waiting for construction to finish. When we tried IDONGSIk JUTAEK's modular space IDONGSIk, things changed. They were quick to set up and cost way less. Our visitors can't get enough of the Star Double Deck — the views are amazing! The whole thing's been a hit, and our camp is busier than ever.",
      name: "Maria Kostas",
      role: "Camp Owner",
    },
    {
      text: "As someone who builds backyard homes, I was looking for something easier, faster, and still good quality. IDONGSIk JUTAEK's homes fit the bill. Setting them up is so simple — like putting together a puzzle, really. My clients love them, and it saves so much time and money compared to normal builds. The quality's spot on too.",
      name: "Carlos Garcia",
      role: "Builder",
    },
  ];

  return (
    <aside>
      <div
        className={`relative w-full h-[400px] m-0 md:h-[700px] 
            bg-cover bg-center bg-no-repeat font-sans
             text-white select-none transition-all
              duration-1000 ease-in-out`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.5)), url('${backgroundImages[currentIdx]}')`,
        }}
      >      

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
        <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-27 md:pt-40 flex flex-col justify-between min-h-[calc(100vh-90px)]">
          <div className="max-w-4xl space-y-9">
            <h1 className="text-4xl text-center font-sans sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] md:text-left">
              
              Premium IDONGSIk 
              <br/>
              House D7
            </h1>
            <div className="flex justify-center md:block">
              <button onClick={scrollToContact} className="bg-orange-500 text-white px-9 py-4 rounded text-slx font-semibold tracking-wider btn-hover-lift animate-bounce-in">
                Request a Quote
              </button>
            </div>
          </div>
        </main>
      </div>
      <DeckCapsule4 />

<div className="bg-white font-sans text-slate-800 antialiased py-16 px-4 min-h-screen selection:bg-orange-200">
      <div className="max-w-9xl mx-auto text-center">
        
        {/* Document Header Section */}
        <p className="text-[15px] md:text-[20px] text-orange-500 font-bold uppercase tracking-widest mb-2 opacity-80">
          PRODUCT SPECIFICATIONS
        </p>
        
        {/* Main Title - Uses 'text-3xl md:text-4xl' as defined in VS Code editor */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight mb-10">
          The Science Behind Our IDONGSIk Designs
        </h1>
        
        {/* Master Parameters Blueprint Container */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-left">
          
          {/* Table Subtitle Banner - Color '#e26d43' used here */}
          <div className="border-b border-slate-200 bg-white px-6 py-4">
            <p className="text-orange-500 text-xs md:text-[14px] font-bold uppercase tracking-wider">
              IDONGSIk HOUSE D5 PARAMETERS
            </p>
          </div>

          <table className="w-full border-collapse text-xs md:text-sm">
            <tbody>
              
              {/* ================= TECHNICAL SPECIFICATIONS BLOCKS ================= */}
              <tr className="border-b border-slate-200">
                {/* Parameter Key Label - Color '#e26d43' */}
                <td rowSpan={6} className="text-[15px] md:text-[20px] text-orange-500 font-bold uppercase tracking-wider px-6 py-4 align-top border-r border-slate-200 text-[11px] md:text-xs bg-slate-50/10">
                  Specifications
                </td>
                
                {/* Unified Parameter Value Column */}
                <td className="text-[15px] md:text-[20px] px-6 py-3.5 text-slate-700 font-medium border-r border-slate-200 border-b border-slate-100 leading-relaxed">
                  <span className="text-[15px] md:text-[20px] text-slate-900">Product Model:</span> D-07
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="text-[15px] md:text-[20px]  px-6 py-3.5 text-slate-700 font-medium border-r border-slate-200 border-b border-slate-100 leading-relaxed">
                  <span className="text-[15px] md:text-[20px] text-slate-900">Dimensions(mm):</span> 11500×3300×3300
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="text-[15px] md:text-[20px] px-6 py-3.5 text-slate-700 font-medium border-r border-slate-200 border-b border-slate-100 leading-relaxed">
                  <span className="text-[15px] md:text-[20px] text-slate-900">Footprint(㎡):</span> 38
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="text-[15px] md:text-[20px] px-6 py-3.5 text-slate-700 font-medium border-r border-slate-200 border-b border-slate-100 leading-relaxed">
                  <span className="text-[15px] md:text-[20px] text-slate-900">ElectricPower(KW):</span> 12
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="text-[15px] md:text-[20px] px-6 py-3.5 text-slate-700 font-medium border-r border-slate-200 leading-relaxed">
                  <span className="text-[15px] md:text-[20px] text-slate-900">Quantity:</span> Approx. 8.5T
                </td>
              </tr>

              {/* ================= REFERENCE DRAWING TERMINAL REGION ================= */}
            
                {/* Terminal Section Header - Color '#e26d43' */}
                <td className="text-[15px] md:text-[20px] text-orange-500 font-bold uppercase tracking-wider px-6 py-4 align-top border-r border-slate-200 text-[11px] md:text-xs bg-slate-50/10">
                  Reference Drawing
                </td>
                
                {/* Interactive Blueprint Asset Injection Slots Block */}
                <td className="px-6 py-6 bg-slate-50/40">
                  {/* Grid holding the responsive asset injection boxes */}
                  <div className="flex flex-wrap gap-5 items-center justify-start">{/* Picture Slot 1 (Primary View) */}
                    <div className=" w-40 h-40 flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-200 transition-all duration-200 group cursor-pointer">
                      <div className="w-full h-28 flex items-center justify-center mb-2 group-hover:bg-orange-50/30 transition-colors">
                        {/* Example Placeholder Image Placeholder SVG */}
                        <img src={pic11} alt="" />
                      </div>
                      </div>

                     <div className=" w-40 h-40 flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-200 transition-all duration-200 group cursor-pointer">
                      <div className=" w-full h-28 flex items-center justify-center mb-2 group-hover:bg-orange-50/30 transition-colors">
                        <img src={pic22} alt="" />
                      </div>
                 </div>

                  </div>
                </td>

            </tbody>
          </table>
        </div>
      </div>
    </div>
      <Table4/>
      <br/>
    <br/>
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
          onClick={scrollToContact}
          type="button"
          className="mt-8 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base rounded shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Get Started
        </button>
      </div> 
     </div>





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
      <Home8/>
    </aside>
  );
};

export default HomeD7;
