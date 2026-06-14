import React, { useState, useEffect } from "react";
import insidePic from "./picture/inside.jpg";
import mountainPic from "./picture/mountain.jpg";
import starPic from "./picture/star.jpg";
import { Link } from "react-router-dom";
import useScrollAnimation from './hooks/useScrollAnimation';
import useLogoSpin from './hooks/useLogoSpin';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';
import WelcomeScreen from './WelcomeScreen';
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";
import Home8 from "./Home8";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const backgroundImages = [insidePic, mountainPic, starPic];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [containerRef, isVisible] = useScrollAnimation();
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
        { name: "Single Deck Space CapsIDONGSIKules C7", href: "/c7" },
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
    
    <div className="">
      
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
              Timeless Luxury.
              <br />
              Futuristic Pods That Will
              <br />
              Blow Your Mind
            </h1>
            <div className="flex justify-center md:block">
              <Link to="/get"> 
              <button className="bg-orange-500 
              text-white px-9 py-4 rounded text-slx 
              font-bold tracking-wider btn-hover-lift 
              animate-bounce-in">
                Get a Quote
              </button>
              </Link>
            </div>
          </div>

          {/* ---------------- BOTTOM STATUS BAR ---------------- */}
          <div className="w-full flex items-center gap-10 justify-end pr-[30px] pb-10   border-white/10">
            <div className="flex items-center space-x-3 w-full max-w-[280px]">
              {backgroundImages.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIdx(index)}
                  className={`h-[3px] rounded-full flex-1 cursor-pointer transition-all duration-500 ${
                    index === currentIdx
                      ? "bg-white scale-y-110"
                      : "bg-white/20"
                  }`}
                ></div>
              ))}
            </div>
            <div className=" text-right select-none">
              <span className="text-2xl font-light tracking-widest text-gray-100">
                0{currentIdx + 1}/03
              </span>
            </div>
          </div>
        </main>

        {/* ---------------- FLOATING WHATSAPP BUTTON ---------------- */}
      </div>

      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
        {showWelcome && (
    <div className="fixed inset-0 z-[9999]">
      <WelcomeScreen onStart={() => setShowWelcome(false)} />
    </div>
  )}
    </div> 
  );
};

export default Home;
