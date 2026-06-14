import { useState, useEffect } from "react";
import lavenda from "./picture/lavenda.jpg";
import { Link } from "react-router-dom";
import useLogoSpin from "./hooks/useLogoSpin";
import "./styles/pageAnimations.css";
import Factory1 from "./picture/Factory1.jpg";
import Factory2 from "./picture/Factory2.jpg";
import Factory3 from "./picture/Factory3.jpg";
import Factory4 from "./picture/Factory4.jpg";
import Factory5 from "./picture/Factory5.jpg";
import Factory6 from "./picture/Factory6.jpg";
import Factory7 from "./picture/Factory7.jpg";
import Factory8 from "./picture/Factory8.jpg";
import Factory9 from "./picture/Factory9.jpg";
import Home7 from "./Home7";
import Home8 from "./Home8";

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

const OurFactory = () => {
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

  const backgroundImages = [lavenda];
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
      name: "Space IDONGSIK Houses",
      href: "/space-IDONGSIK",
      hasDropdown: true,
      dropdownItems: [
        { name: "Double Deck Space IDONGSIK C5", href: "/c5" },
        { name: "Single Deck Space IDONGSIK C7", href: "/c7" },
        { name: "IDONGSIK House C7 Plus", href: "/c7-plus" },
        { name: "IDONGSIK House D5", href: "/d5" },
        { name: "IDONGSIK House D7", href: "/d7" },
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
        <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-32 flex flex-col justify-between min-h-[calc(100vh-90px)]">
          <div className="max-w-4xl space-y-9">
            <h1 className="text-4xl text-center font-sans sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] md:text-left">
              Where Innovation Meets Manufacturing Precision
            </h1>
            <p className="text-xl text-center md:text-left text-gray-300 max-w-1xl font-semibold leading-relaxed">
              Discover our advanced manufacturing facility where innovation,
              precision, and quality come together to create superior products.
            </p>
          </div>
        </main>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12">
      <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
        {/* SECTION 1: HEADER HERO SPLIT */}
        {/* Mobile standard layout is flex-col (Left/Top component first, Right/Bottom component second) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side (Top on small screen sizes, flips to left side on 'lg') */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs block">
              Production Excellence
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Leading-Edge Factory
              <br />
              Operations
            </h1>

            {/* Interactive Secure Field Mockup with clean non-emoji Eye Icon */}
            
          </div>

          {/* Right Side (Bottom on small screens, flips to right side on 'lg') */}
          <div className="lg:col-span-6 text-slate-600 space-y-4 text-base md:text-lg leading-relaxed text-center lg:text-left">
            <p className="font-medium text-slate-800">
              Our factory in China is built on a foundation of innovation and
              efficiency. Equipped with advanced technology and high-precision
              machinery, we ensure top-tier production quality.
            </p>
            <p>
              Our skilled workforce drives excellence, while sustainable
              practices guide our process. We offer exceptional customer service
              and after-sale support. With a focus on continuous improvement and
              industry-leading standards, our factory is dedicated to delivering
              high-quality products on time.
            </p>
          </div>
        </section>
        

        {/* SECTION 2: SYNCHRONIZED COUNTING METRICS */}
        <section className="border-y border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-bold text-orange-500 tracking-tight">
                {area.toLocaleString()}m²
              </div>
              <div className="text-xs md:text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">
                Factory Area
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-orange-500 tracking-tight">
                {reduction}%
              </div>
              <div className="text-xs md:text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">
                Cost Reduction
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-orange-500 tracking-tight">
                {units}+
              </div>
              <div className="text-xs md:text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">
                Units Per Month
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-orange-500 tracking-tight">
                {deliveries}+
              </div>
              <div className="text-xs md:text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">
                Global Deliveries
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: IMAGE PRODUCTION GALLERY GRID */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs block mb-2">
              Factory Showcase
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Explore the Heart of Production
            </h2>
          </div>

          {/* Responsive Photo Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, img: Factory1, title: "Production Line Dome Shells" },
              {
                id: 2,
                img: Factory2,
                title: "Client Board Consultation Assembly",
              },
              {
                id: 3,
                img: Factory3,
                title: "Structural Shell Architecture Row",
              },
              {
                id: 4,
                img: Factory4,
                title: "Exterior Prototype Framework Frame",
              },
              {
                id: 5,
                img: Factory5,
                title: "Interior Dome High-Angle Perspective",
              },
              {
                id: 6,
                img: Factory6,
                title: "Finished Pod Loading Bay Station",
              },
              {
                id: 7,
                img: Factory7,
                title: "Orange Accent Unit Production Station",
              },
              {
                id: 8,
                img: Factory8,
                title: "Team Assembly Inspection Discussion",
              },
              {
                id: 9,
                img: Factory9,
                title: "Completed Sphere Modular Installation",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden shadow-sm bg-slate-100 aspect-[4/3] border border-slate-200/60"
              >
                {/* 1. THE ACTUAL IMAGE TAG */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* 2. THE TEXT OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PRODUCTION JOURNEY PLAYLIST VIDEOS */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-slate-100 pt-16">
            {/* Left Column Text Content */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs block">
                Video Gallery
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
                Visual Tour of Our
                <br />
                Production Journey
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Our videos offer an in-depth look at our factory, processes, and
                products. Get a clear understanding of our processes to inspire
                and guide your purchasing decisions.
              </p>
            </div>

            {/* Right Column Layout: Simulated Media Player Display and Playlist View */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
              {/* Playlist Sidebar Selection Menu (Mobile-first, fits on top/bottom based on scaling) */}
              <div className="md:col-span-5 max-h-[320px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-1 flex justify-between">
                  <span>Playlist</span>
                  <span>17 Videos</span>
                </div>
                {[
                  { time: "0:23", active: true },
                  { time: "1:01", active: false },
                  { time: "0:33", active: false },
                  { time: "0:46", active: false },
                  { time: "1:44", active: false },
                ].map((vid, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${vid.active ? "bg-white shadow-sm border border-slate-200" : "hover:bg-slate-200/50"}`}
                  >
                    <div className="w-16 h-10 bg-slate-300 rounded flex-shrink-0 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                      PREVIEW
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-800 truncate">
                        Product Video Showcase
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {vid.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Player Display Screen View Frame */}
              <div className="md:col-span-7 bg-slate-900 rounded-xl aspect-[16/10] flex flex-col items-center justify-center relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 bg-slate-800/80 flex flex-col items-center justify-center text-slate-400 text-xs text-center p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 text-white/90 mb-2 drop-shadow-md"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white font-medium">
                    Production Video Player Module
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1">
                    Click to play active preview file stream
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <Home7 />
        <Home8 />
      </div>
    </aside>
  );
};

export default OurFactory;
