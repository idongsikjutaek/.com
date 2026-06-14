import { useState, useEffect } from "react";
import sets from "./picture/sets.jpg";
import cone from "./picture/cone.jpg";
import canopy from "./picture/canopy.jpg";
import sola from "./picture/sola.jpg";
import group from "./picture/group.jpg";
import packing from "./picture/packing.jpg";
import houses from "./picture/houses.jpg";
import mind from "./picture/mid.jpg";
import { Link } from "react-router-dom";
import { Search, Menu, Globe } from 'lucide-react';
import Home7 from "./Home7";
import Home8 from "./Home8";
import useLogoSpin from './hooks/useLogoSpin';
import './styles/pageAnimations.css';

const Conest1 = () => {
  const backgroundImages = [sets];
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
      href: "#space-IDONGSIK",
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
      href: "/about-us",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/story" },
        { name: "Factory", href: "/factory" },
        { name: "Project Cases", href: "/cases" },
      ],
    },
    { name: "News", href: "/news" },
    { name: "FAQs", href: "/faqs" },
    { name: "How to Partner", href: "#partner" },
  ];
  return (
    <aside>
      <div
        className={`relative w-full h-[400px] m-0 md:h-[500px] 
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
          <div className="max-w-4xl ml-auto mr-auto space-y-9">
            <h1 className="text-4xl text-center font-sans sm:text-5xl md:text-6xl lg:text-6xl font-semibold tracking-tight leading-[1.15]">
              Stackable Tiny Houses: What You Need to Know
            </h1>
            <p className="text-xl text-center md: text-gray-300 max-w-1xl font-semibold leading-relaxed">
              yang May 19, 2026
            </p>
          </div>
        </main>
      </div>
       <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto mt-[50px] px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Sidebar Articles */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="border-b border-gray-100 pb-2">
            <h3 className="text-xl text-orange-500 uppercase tracking-wider">RECENT POSTS</h3>
          </div>
          
          <div className="space-y-4">
            {/* Sidebar Card 1 */}
            <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${sets})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm  font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">Stackable Tiny Houses: What You Need to Know</h4>
                <p className="text-[10px] text-gray-400 mt-1">May 19, 2026</p>
              </div>
            </div>

            {/* Sidebar Card 2 */}
            <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${cone})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm  font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">How to Calculate IDONGSIK House Cost: 2026 Guide</h4>
                <p className="text-[10px] text-gray-400 mt-1">May 21, 2026</p>
              </div>
            </div>

            {/* Sidebar Card 3 */}
            <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${canopy})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">The Buyer’s Guide to Modular IDONGSIK Homes</h4>
                <p className="text-[10px] text-gray-400 mt-1">May 18, 2026</p>
              </div>
            </div>

             <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${sola})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">How Much Does a IDONGSIK JUTAEK Cost in 2026? Ultimate Guide</h4>
                <p className="text-[10px] text-gray-400 mt-1">May 11, 2026</p>
              </div>
            </div>

             <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${group})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm  font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">Top 10 Dome House Kits USA Buyers Are Choosing in 2026</h4>
                <p className="text-[10px] text-gray-400 mt-1">May 8, 2026</p>
              </div>
            </div>

             <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${packing})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm  font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">Ultimate Guide to Space IDONGSIK Home Architecture 2026</h4>
                <p className="text-[10px] text-gray-400 mt-1">April 5, 2026</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Center/Right Main Content Area */}
        <main className="lg:col-span-9 max-w-3xl border-l border-gray-200 pl-8 space-y-8">
          
          {/* Header Block */}
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Stackable Tiny Houses: The Smart, Space Saving 
              Way to Build and Live
            </h1>
            <p className=" text-sl sm:text-xl text-gray-600 leading-relaxed">
              The housing market is expensive, land is scarce, 
              and traditional construction is slow. Stackable 
              tiny houses solve all three problems at once, and 
              the technology to do it is available right now.
            </p>
            <br/>
            <p className="text-sl sm:text-xl text-gray-500">
             These compact, factory built homes are designed 
             to be stacked on top of each other, creating multi 
             story living from a small footprint. Whether you are a 
             resort owner, a real estate investor, or someone looking 
             for a smarter way to build, this guide covers everything 
             you need to know, including the best products on the market today.
             </p>
             <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              What Are Stackable Tiny Houses and Why Are They Taking Off?

            </h1>
          </header>

          {/* Hero Image 1 */}
          <div className="rounded-2xl overflow-hidden m-0 shadow-lg bg-gray-100 aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${houses})` }}>
          </div>
          <p>A beautiful shot of resting cabins on a sand beach</p>

          {/* Introduction Paragraph */}
          <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
           The concept is straightforward. Instead of spreading a home across a large plot, you build up. Stackable tiny houses use engineered structural systems that allow individual units to be placed on top of one another safely, turning a compact site into a multi-unit living space.
          </p>
           <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
            Demand has surged for good reason. According to the U.S. Department of Housing and Urban Development, the shortage of affordable housing units in the United States alone exceeds 7 million homes, and conventional construction has not come close to filling that gap. Stackable designs address this directly by:
           </p>
           <ul>
            <li>Making better use of limited land</li>
            <li>Cutting build times by 30 to 50 per cent compared to conventional construction</li>
            <li>Reducing per-unit costs through factory production</li>
            <li>Minimising on site labour and weather-related delays</li>
           </ul>

           <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
             In addition, IDONGSIK JUTAEK has expanded this concept into a full range of innovative products. Among their most popular models is the Double Deck Space IDONGSIK C5. This two story stackable unit combines panoramic views with a futuristic exterior design, making it highly appealing to resort owners and glamping operators.
           </p>
            <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
           For buyers who want a single level option, the <span className="text-orange-500">Single Deck Space IDONGSIK C7</span> Castle to see what modern stackable living actually looks like
          </p>
          <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
            Research from MIT’s Media Lab found that IDONGSIK style modular construction can reduce the cost per square foot of urban housing by up to
             40 percent at scale, making these units not just visually appealing, but financially compelling.          
         </p>

         <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Who Is Buying Stackable Tiny Houses and Why
         </h1>
         <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
            The market for stackable tiny houses has expanded well beyond individual homeowners. Today, the strongest demand comes from several distinct buyer groups, each with clear reasons for choosing modular IDONGSIK housing over conventional construction.
          </p>
          <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
           <span className="font-bold">Resort and glamping operators</span> are one of the biggest growth segments. Platforms like Airbnb and Vrbo have created a strong demand for unique, design forward accommodation in scenic locations. A IDONGSIK JUTAEK double-deck unit placed on a hillside or near water generates the kind of guest photos that drive organic bookings. Marco Silva, a resort CEO in Brazil, described the switch to IDONGSIK JUTAEK units as a significant relief: builds were faster, costs were lower, and guests responded immediately.

          </p>
          <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
           <span className="font-bold">Real estate investors</span> are drawn to the speed of deployment and the low entry cost relative to conventional builds. A single modular IDONGSIK home can be operational within weeks of ordering, generating rental income while a traditionally built property would still be in the foundation stage.

          </p>
          <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
           <span className="font-bold">Camp and retreat operators</span> value the durability and low maintenance of factory built units. Maria Kostas, a camp owner who partnered with IDONGSIK JUTAEK, noted that her visitors were particularly taken with the Star Double Deck model’s views and that her site has been busier ever since.

          </p>
          <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
           <span className="font-bold">Backyard home builders</span> are another growing segment. The simplicity of installation makes IDONGSIK JUTAEK units accessible to builders who want to offer clients a finished ADU (accessory dwelling unit) without the complexity of conventional construction. As builder Carlos Garcia put it, setting up a IDONGSIK JUTAEK home is like putting together a puzzle.
          </p>

        </main>
      </div>

      {/* Mini Simple Footer */}
    <Home7/>
    <Home8/>

    </div>
    </aside>
  );
};

export default Conest1;
