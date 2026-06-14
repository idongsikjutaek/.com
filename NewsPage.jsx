import { useState, useEffect } from "react";
import bright from "./picture/dark.jpg";
import { Link } from "react-router-dom";
import News1 from "./News1";       
import Home7 from "./Home7";
import Home8 from "./Home8";
import useLogoSpin from './hooks/useLogoSpin';
import './styles/pageAnimations.css';


const NewsPage = () => {
  const backgroundImages = [bright];
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
        <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-27 md:pt-40 flex flex-col justify-between min-h-[calc(100vh-90px)]">
          <div className="max-w-4xl space-y-9">
            <h1 className="text-4xl text-center font-sans sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] md:text-left">
             How news
            </h1>
            <p className="text-xl text-center md:text-left text-gray-300 max-w-1xl font-semibold leading-relaxed">
                Explore how our space IDONGSIk homes are revolutionizing industries, providing innovative, cost-effective, and sustainable housing solutions worldwide.
            </p>
          </div>
        </main>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        <News1/>
        <Home7/>
        <Home8/>
      </div>
        
      </aside>
  );
};

export default NewsPage;
