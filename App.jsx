import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import NewsPage from './NewsPage';
import React, { useState, useEffect } from "react";
import FAQs from "./FAQs";
import useVibratingButton from './hooks/useVibratingButton';
import Conest from "./Conest";
import Partner from "./Partner";
import ListHouse from "./listHouse";
import OurStory from "./ourStory";
import OurFactory from "./Factory";
import Cases from "./Cases";
import HomeC5 from "./HomeC5";
import HomeC7 from "./HomeC7";
import HomeC77 from "./HomeC77";
import HomeD5 from "./HomeD5";
import HomeD7 from "./HomeD7";
import HomeD8 from "./HomeD8";
import Home20 from "./Home20";
import Quote from "./Quote";
import Conest1 from "./Conest1";
import Submit1 from "./Submit1";

const App = () => {
  const isVibrating = useVibratingButton();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if navbar should be in "compact" mode (scrolled down)
  const isScrolled = scrollY > 100;
  const isAtTop = scrollY < 100;

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Space IDONGSIK Houses",
      href: "/space-IDONGSIK",
      hasDropdown: true,
      dropdownItems: [
        { name: "Double Deck Space IDONGSIK C5", href: "/c5" },
        { name: "Single Deck Space Capsules C7", href: "/c7" },
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

  return (  
    <div className="App">
      <Router>
        {/* Adaptive Navigation Header */}
        <header className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white shadow-lg py-3' 
            : 'bg-transparent shadow-none py-5'
        }`}>
          <div className="flex items-center justify-between px-5 md:px-12 lg:px-16 w-full max-w-[1600px] mx-auto">
            {/* Brand Logo */}
            <div className="flex items-center space-x-2.5 cursor-pointer group">
              <div className="grid grid-cols-2 gap-0.5 w-6 h-6 transform transition-transform group-hover:rotate-90 duration-300">
                <span className={`rounded-sm opacity-95 transition-colors duration-500 ${
                  isScrolled ? 'bg-orange-500' : 'bg-white'
                }`}></span>
                <span className={`rounded-sm opacity-95 transition-colors duration-500 ${
                  isScrolled ? 'bg-orange-500' : 'bg-white'
                }`}></span>
                <span className={`rounded-sm opacity-95 transition-colors duration-500 ${
                  isScrolled ? 'bg-orange-500' : 'bg-white'
                }`}></span>
                <span className={`rounded-sm opacity-95 transition-colors duration-500 ${
                  isScrolled ? 'bg-orange-500' : 'bg-white'
                }`}></span>
              </div>
              <Link to="/" className={`flex flex-col leading-none font-bold tracking-wide text-lg transition-colors duration-500 hover:text-orange-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span>IDONGSIK</span>
                <span>JUTAEK.</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group py-2">
                  <Link
                    to={link.href}
                    className={`flex items-center space-x-1 pb-1 border-b-2 border-transparent hover:border-orange-500 transition-all duration-300 font-medium ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-orange-500' 
                        : 'text-white hover:text-orange-300'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <svg
                        className="w-3 h-3 opacity-70 mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded-md shadow-xl min-w-65 z-50 py-2 border border-gray-100 
                     opacity-0 invisible translate-y-2
                     group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                     transition-all duration-300 delay-150 ease-out">
                      {link.dropdownItems.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-150 font-normal"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Controls & Mobile Toggle */}
            <div className="flex items-center space-x-4 md:space-x-7">
              <a
                href="tel:+19364456496"
                className={`hidden lg:flex items-center space-x-2 text-[14px] font-medium tracking-wide transition-all duration-500 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-orange-400' 
                    : 'text-white hover:text-orange-300'
                }`}
              >
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 9364456496</span>
              </a>

              <button className="hidden lg:inline-block bg-orange-500 text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wider hover:bg-orange-600 transition active:scale-95 shadow-md">
                Contact
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`block lg:hidden focus:outline-none p-2 relative z-50 transition-colors duration-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
 
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
  <div className="fixed inset-0 z-40 lg:hidden flex justify-end">
    {/* Semi-transparent Backdrop Overlay */}
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null); // Resets open toggles when menu closes
      }}
    />

    {/* Right-Aligned Glassmorphism Sidebar Container */}
    <div className="relative z-50 w-full max-w-[300px] h-full bg-black/60 backdrop-blur-md border-l border-white/10 px-6 py-20 flex flex-col justify-between text-white">
      
      {/* Navigation Links */}
      <div className="flex flex-col space-y-5">
        {navLinks.map((link, index) => {
          const hasDropdown = link.dropdownItems && link.dropdownItems.length > 0;
          const isDropdownOpen = activeDropdown === index;

          return (
            <div key={index} className="border-b border-white/10 pb-3 last:border-none">
              {/* Parent Menu Item */}
              {hasDropdown ? (
                // Tapping items with sub-links (like Space IDONGSIK Houses or About Us) triggers the toggle
                <button
                  onClick={() => setActiveDropdown(isDropdownOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left text-lg font-medium text-white/90 hover:text-orange-400 transition-colors focus:outline-none"
                >
                  <span>{link.name}</span>
                  {/* Chevron indicator to show open/close state visually */}
                  <svg
                    className={`w-4 h-4 text-white/50 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                // Standard solo links (like Home or News) navigate instantly
                <Link
                  to={link.href}
                  className="block text-lg font-medium text-white/90 hover:text-orange-400 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  {link.name}
                </Link>
              )}

              {/* Collapsible Dropdown Sub-items Container */}
              {hasDropdown && (
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden pl-4 flex flex-col space-y-1.5 ${
                    isDropdownOpen ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {link.dropdownItems.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subLink.href || subLink.path}
                      className="block text-sm text-white/70 hover:text-orange-400 transition-colors py-1"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveDropdown(null); // Clean up open states on selection
                      }}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Phone Number Area */}
      <div className="mt-auto pt-6">
        <a
          href="tel:+19364454696"
          className="block text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors"
        >
          Call Us: +1 9364454696
        </a>
      </div>

    </div>
  </div>
)}
        </header>
         
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/news" element={<NewsPage />}/>
          <Route path="/faqs" element={<FAQs />}/>
          <Route path ="/constant" element={<Conest/>}/>
          <Route path="/sets" element={<Conest1 />}/>
          <Route path="/partner" element={<Partner/>}/>
          <Route path="/space-IDONGSIK" element={<ListHouse/>}/>
          <Route path="/story" element={<OurStory/>}/>
          <Route path="/factory" element={<OurFactory/>}/>
          <Route path="/cases" element={<Cases/>}/>
          <Route path="/c5" element={<HomeC5/>}/>
          <Route path="/c7" element={<HomeC7/>} />
          <Route path="/c7-plus" element={<HomeC77/>} />
          <Route path="/d5" element={<HomeD5/>} />
          <Route path="/d7" element={<HomeD7/>}/>
          <Route path="/d8" element={<HomeD8/>}/>
          <Route path="/e20" element={<Home20/>}/>
          <Route path="/get" element={<Quote/>}/>
          <Route path="/sub" element={<Submit1/>}/>
        </Routes>
      </Router>
      <a
        href="https://wa.me/19364456496"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isVibrating ? 'animate-vibrate' : ''
        }`} 
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
 
export default App;