import { useState, useEffect } from "react";
import roling from "./picture/roling.jpg";
import { Link } from "react-router-dom";
import News1 from "./News1";       
import Home7 from "./Home7";
import Home8 from "./Home8";
import useLogoSpin from './hooks/useLogoSpin';
import './styles/pageAnimations.css';


const Quote = () => {
  const backgroundImages = [roling];
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
        className={`relative w-full h-[400px] m-0 md:h-[550px] 
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
            <h1 className="text-5xl text-center font-sans sm:text-5xl md:text-6xl lg:text-7xl font-smibold tracking-tight leading-[1.15] md:text-left">
             How news
            </h1>
            <p className="text-[20px] text-center md:text-left text-gray-300 max-w-1xl font-semibold leading-relaxed">
             Got questions or need help? We’re all ears!
             Reach out and our friendly team will be happy to assist.
             No fuss, just quick responses and friendly support!            
            </p>
          </div>
        </main>
      </div>
        <div className="w-full bg-orange-500 text-white font-sans">
      {/* Top Heading Section */}

      {/* Grid Container */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/20 divide-y divide-white/20 sm:divide-y-0 sm:grid-rows-2 lg:grid-rows-1 lg:divide-x">
        
        {/* Email Box */}
        <div className="flex flex-col items-center justify-center p-8 text-center hover:bg-black/5 transition-colors duration-200">
          <div className="mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className=" text-lg sm:text-[23px] font-semibold mb-2">Email Us</h3>
          <a href="mailto:IDONGSIKJUTAEK@gmail.com" className="text-sm sm:text-[15px] opacity-90 hover:opacity-100 underline underline-offset-4">
            IDONGSIKJUTAEK@gmail.com
          </a>
        </div>

        {/* Message Us Box */}
        <div className="flex flex-col items-center justify-center p-8 text-center hover:bg-black/5 transition-colors duration-200 border-t sm:border-t-0 sm:border-l lg:border-l-0">
          <div className="mb-4">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.405.002 12.008 0c3.199.001 6.205 1.243 8.465 3.499 2.258 2.257 3.498 5.266 3.496 8.467-.005 6.654-5.351 12-11.954 12-2.004-.001-3.973-.503-5.727-1.458L0 24zm6.59-3.57c1.65.98 3.268 1.496 4.821 1.497 5.462-.001 9.906-4.394 9.91-9.793.002-2.617-1.017-5.077-2.871-6.932C16.596 3.346 14.142 2.326 11.53 2.324c-5.467 0-9.911 4.394-9.915 9.793-.001 1.744.475 3.447 1.378 4.962l-.999 3.649 3.753-.974zm11.004-7.511c-.265-.133-1.567-.768-1.81-.855-.243-.088-.419-.133-.596.133-.177.265-.685.855-.839 1.032-.155.177-.309.199-.574.066-.265-.133-1.121-.413-2.134-1.314-.789-.701-1.32-1.568-1.475-1.833-.155-.265-.017-.409.116-.541.12-.119.265-.309.398-.464.133-.155.177-.265.265-.442.088-.177.044-.332-.022-.464-.066-.133-.596-1.428-.816-1.959-.215-.515-.432-.446-.596-.454-.155-.007-.332-.008-.508-.008-.177 0-.464.066-.707.332-.243.265-.928.905-.928 2.209 0 1.304.95 2.563 1.083 2.74.133.177 1.87 2.831 4.529 3.963.633.27 1.128.431 1.513.553.636.202 1.215.173 1.673.105.51-.077 1.567-.64 1.787-1.259.221-.619.221-1.149.155-1.259-.066-.11-.243-.177-.508-.31z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-[23px] font-semibold mb-2">Message Us</h3>
          <a href="https://wa.me/19364456496" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-[15px] opacity-90 hover:opacity-100">
            +1 9364456496
          </a>
        </div>

        {/* Call Us Box */}
        <div className="flex flex-col items-center justify-center p-8 text-center hover:bg-black/5 transition-colors duration-200 border-t lg:border-t-0 lg:border-l">
          <div className="mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H13.5M10.5 22.5H13.5M19.5 3.75V20.25C19.5 21.493 18.493 22.5 17.25 22.5H6.75C5.507 22.5 4.5 21.493 4.5 20.25V3.75C4.5 2.507 5.507 1.5 6.75 1.5H17.25C18.493 1.5 19.5 2.507 19.5 3.75Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75h.008v.008H12v-.008Z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-[23px] font-semibold mb-2">Call Us</h3>
          <a href="tel:+8615753054507" className="text-sm sm:text-[15px] opacity-90 hover:opacity-100">
            +86 15753054507
          </a>
        </div>

        {/* Visit Us Box */}
        <div className="flex flex-col items-center justify-center p-8 text-center hover:bg-black/5 transition-colors duration-200 border-t sm:border-l lg:border-l-0">
          <div className="mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-[23px font-semibold mb-2">Visit Us</h3>
          <p className="text-sm sm:text-[15px] opacity-90 max-w-[200px] leading-relaxed">
            Jingqiu Space Company, Huanglou Town, Qingzhou City, Shandong Province, China
          </p>
        </div>
          
      <div className="mx-auto ">
      </div>
    </div>
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
      </div>
        <Home8/>
      </aside>
  );
};

export default Quote ;
