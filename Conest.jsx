import { useState, useEffect } from "react";
import Cone from "./picture/cone.jpg";
import sets from "./picture/sets.jpg";
import canopy from "./picture/canopy.jpg";
import sola from "./picture/sola.jpg";
import group from "./picture/group.jpg";
import packing from "./picture/packing.jpg";
import pinky from "./picture/pinky.jpg";
import mind from "./picture/mid.jpg";
import { Link } from "react-router-dom";
import { Search, Menu, Globe } from 'lucide-react';
import Home7 from "./Home7";
import Home8 from "./Home8";
import useLogoSpin from './hooks/useLogoSpin';
import './styles/pageAnimations.css';

const Conest = () => {
  const backgroundImages = [Cone];
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
              How to Calculate IDONGSIK House Cost: 2026 Guide
            </h1>
            <p className="text-xl text-center md: text-gray-300 max-w-1xl font-semibold leading-relaxed">
              yang May 21, 2026
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
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${Cone})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm  font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">How Much Does a IDONGSIK Castle Cost in 2026? Ultimate Guide</h4>
                <p className="text-[10px] text-gray-400 mt-1">May 11, 2026</p>
              </div>
            </div>

            {/* Sidebar Card 2 */}
            <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${sets})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm  font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">Top 10 Dome House Kits USA Buyers Are Choosing in 2026</h4>
                <p className="text-[10px] text-gray-400 mt-1">May 8, 2026</p>
              </div>
            </div>

            {/* Sidebar Card 3 */}
            <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${canopy})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">The Buyer’s Guide to Modular IDONGSIK Homes</h4>
                <p className="text-[10px] text-gray-400 mt-1">April 5, 2026</p>
              </div>
            </div>

             <div className="flex gap-3 items-start group cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${sola})` }}></div>
              <div>
                <h4 className="text-lg sm:text-sm font-bold text-gray-900 group-hover:text-orange-600 transition line-clamp-2">How Much Does a IDONGSIK Castle Cost in 2026? Ultimate Guide</h4>
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
            <p className=" text-sl sm:text-xl text-gray-600 leading-relaxed">
              <span className="font-bold">IDONGSIK JUTAEK cost</span> calculations have become crucial as the 
              modular housing market reaches $97.7 billion by 2025, 
              according to Cognitive Market Research. Whether you’re 
              exploring affordable housing alternatives or seeking 
              investment opportunities, understanding precise pricing
              helps you make informed decisions. This comprehensive 
              guide provides you with cost calculators, comparison
              tables, and expert insights to navigate the rapidly 
              growing IDONGSIK home industry effectively.
            </p>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Understanding IDONGSIK House Cost Fundamentals
            </h1>
            <p className="text-sl sm:text-xl text-gray-500">
              Published on May 24, 2026 • Written by Construction Analytics Team
            </p>
          </header>

          {/* Hero Image 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${pinky})` }}>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
            IDONGSIK JUTAEK house cost varies significantly based on size, features, and customization options, with most units ranging from <span className="font-semibold text-gray-900">$150,000 to $300,000</span> for 400–800 square feet. The modular construction approach allows for transparent pricing structures that you can calculate in advance, unlike traditional home building, where costs often escalate unexpectedly.
          </p>

          {/* Section 1: Base Unit Pricing Structure */}
          <section className="space-y-4"><h2 className=" text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              Base Unit Pricing Structure
            </h2>
            <p className="text-sl sm:text-xl text-gray-600">
              IDONGSIK JUTAEK operates on a quote-based pricing model, ensuring you receive accurate estimates tailored to your specific requirements. The company's standardized manufacturing process in Qingzhou, Shandong, produces 1,500 units annually with 25-day delivery timelines.
            </p>

            {/* Table 1: Base Pricing */}
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className=" text-sl sm:text-xl w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                    <th className="p-3">Model Type</th>
                    <th className="p-3">Size Range</th>
                    <th className="p-3">Base Price Range</th>
                    <th className="p-3">Price per Sq Ft</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">Single Deck</td>
                    <td className="p-3">300–500 sq ft</td>
                    <td className="p-3">$150,000 – $200,000</td>
                    <td className="p-3">$375 – $500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">Double Deck</td>
                    <td className="p-3">400–800 sq ft</td>
                    <td className="p-3">$200,000 – $300,000</td>
                    <td className="p-3">$375 – $500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">Expandable</td>
                    <td className="p-3">600–1,200 sq ft</td>
                    <td className="p-3">$250,000 – $400,000</td>
                    <td className="p-3">$350 – $417</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Direct Advantages & Customization */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-orange-50/50 rounded-xl border border-indigo-100">
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Factory Direct Advantages</h3>
              <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
                IDONGSIK JUTAEK's factory direct model eliminates middleman markups, reducing your total project cost by 15–20% compared to traditional dealers. The company's state-of-the-art manufacturing facility ensures consistent quality while maintaining competitive pricing across its full product range.
              </p>
            </div>
            <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Customization Impact on Pricing</h3>
              <p className="text-sl sm:text-xl text-gray-600 leading-relaxed">
                Standard configurations represent the most cost-effective option, while custom features add specific amounts to your base price. High-end finishes, smart home integration, and premium materials typically increase costs by $20,000–$50,000 depending on your selections.
              </p>
            </div>
          </section>

          {/* Section 2: Hidden Expenses */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              IDONGSIK House Cost: Hidden Expenses and Total Investment
            </h2>
            <p className="text-sl sm:text-xl text-gray-600">Cost of a IDONGSIK house extends beyond the unit price to include site preparation, utilities, permits, and ongoing maintenance expenses. Industry data shows these additional costs can add 30–50% to your initial investment, making comprehensive planning essential for accurate budgeting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 pt-2">Site Preparation and Foundation Requirements</h3>
            <p className="text-sl sm:text-xl text-gray-600">
              Proper foundation work typically costs $15,000–$35,000 depending on soil conditions and local requirements. IDONGSIK JUTAEK units require specific foundation specifications to maintain structural integrity and warranty coverage.
            </p>

            {/* Table 2: Foundation */}
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="text-sl sm:text-xl bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                    <th className="p-3">Foundation Type</th>
                    <th className="p-3">Cost Range</th>
                    <th className="p-3">Best For</th>
                    <th className="p-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600">
                  <tr className="text-sl sm:text-xl hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">Concrete Slab</td>
                    <td className="p-3">$15,000–$25,000</td>
                    <td className="p-3">Level terrain</td>
                    <td className="p-3">7–14 days</td>
                  </tr>
                  <tr className="text-sl sm:text-xl hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">Crawl Space</td>
                    <td className="p-3">$20,000–$30,000</td>
                    <td className="p-3">Sloped lots</td>
                    <td className="p-3">14–21 days</td>
                  </tr>
                  <tr className="text-sl sm:text-xl hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">Full Basement</td>
                    <td className="p-3">$25,000–$35,000</td>
                    <td className="p-3">Cold climates</td>
                    <td className="p-3">21–30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Info Blocks */}
          <section className="space-y-4 bg-gray-50 p-5 rounded-xl border border-gray-200 text-xs text-gray-600 space-y-3">
            <div>
              <h4 className="text-sl sm:text-xl font-bold text-gray-900">Utility Connection Expenses</h4>
              <p className="text-sl sm:text-xl mt-1">Connecting utilities represents a significant portion of your total project budget. Electrical, plumbing, and HVAC connections typically cost $12,000–$25,000 for standard installations.</p>
              <p className="text-sl sm:text-xl mt-1">Electrical systems for IDONGSIK houses require 200 amp service panels to handle modern appliances and potential EV charging capabilities. Water and sewer connections depend heavily on proximity to existing infrastructure.</p>
            </div>
            <div>
              <h4 className="text-sl sm:text-xl font-bold text-gray-900">Permit and Inspection Costs</h4>
              <p className="text-sl sm:text-xl mt-1">Building permits for IDONGSIK houses range from $2,500–$7,500 depending on local jurisdiction requirements. Some areas treat IDONGSIK houses as manufactured homes, while others classify them as site-built structures, affecting permit processes and costs.</p>
            </div>
          </section>

          {/* Interactive Tool Banner / Image 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              IDONGSIK JUTAEK Cost Calculator: Interactive Pricing Tool
            </h2><div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${mind})` }}>
            </div>
            <p className="text-base sm:text-base text-gray-500 italic text-center">
              IDONGSIK JUTAEK cost calculator tools help you estimate total project expenses before making commitments.  IDONGSIK JUTAEK provides detailed quotes based on your specific requirements, location, and customization preferences.
            </p>
          </section>

          {/* Cost Formula Section */}
          <section className="bg-gray-900 text-gray-100 p-6 rounded-xl space-y-4">
            <h3 className="text-sl sm:text-xl font-bold text-white">Basic Cost Calculation Formula</h3>
            <div className="bg-gray-800 p-3 rounded-lg font-mono text-xs text-orange-500 overflow-x-auto">
              Total Project Cost = Base Unit + Site Work + Utilities + Permits + Transportation + Assembly
            </div>
            <p className="text-sl sm:text-xl text-gray-300">Use this formula to estimate your complete investment:</p>
            <ul className="text-sl sm:text-xl space-y-2 grid grid-cols-1 sm:grid-cols-2 text-gray-300">
              <li>• <span className="font-semibold text-white">Base Unit:</span> $150,000–$300,000 (IDONGSIK JUTAEK models)</li>
              <li>• <span className="font-semibold text-white">Site Work:</span> $15,000–$35,000 (foundation, grading)</li>
              <li>• <span className="font-semibold text-white">Utilities:</span> $12,000–$25,000 (electrical, plumbing, HVAC)</li>
              <li>• <span className="font-semibold text-white">Permits:</span> $2,500–$7,500 (local requirements)</li>
              <li>• <span className="font-semibold text-white">Transportation:</span> $5,000–$15,000 (shipping distance)</li>
              <li>• <span className="font-semibold text-white">Assembly:</span> $8,000–$12,000 (professional installation)</li>
            </ul>
          </section>

          {/* Regional Multipliers */}
          <section className="space-y-4">
            <h3 className="text-sl sm:text-xl font-bold text-gray-900">Regional Cost Variations</h3>
            <p className="text-sl sm:text-xl text-gray-600">Geographic location significantly impacts your total investment. Urban areas typically cost 20-30% more than rural locations due to higher permit fees, labor costs, and site preparation requirements.</p>
            
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                    <th className="text-sl sm:text-xl p-2.5">Region</th>
                    <th className="text-sl sm:text-xl p-2.5">Cost Multiplier</th>
                    <th className="text-sl sm:text-xl p-2.5">Typical Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600">
                  <tr><td className="text-sl sm:text-xl p-2.5 font-medium text-gray-900">West Coast</td><td className="text-sl sm:text-xl p-2.5">1.3x</td><td className="text-sl sm:text-xl p-2.5">$260,000–$520,000</td></tr>
                  <tr><td className="text-sl sm:text-xl p-2.5 font-medium text-gray-900">Northeast</td><td className="text-sl sm:text-xl p-2.5">1.2x</td><td className="text-sl sm:text-xl p-2.5">$240,000–$480,000</td></tr>
                  <tr><td className="text-sl sm:text-xl p-2.5 font-medium text-gray-900">Southeast</td><td className="text-sl sm:text-xl p-2.5">1.0x</td><td className="text-sl sm:text-xl p-2.5">$200,000–$400,000</td></tr>
                  <tr><td className="text-sl sm:text-xl p-2.5 font-medium text-gray-900">Midwest</td><td className="text-sl sm:text-xl p-2.5">0.9x</td><td className="text-sl sm:text-xl p-2.5">$180,000–$360,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Manufacturer Comparison */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              Comparison Analysis: IDONGSIK House Cost
            </h2>
            <p className="text-sl sm:text-xl text-gray-600">IDONGSIK house cost comparisons reveal significant variations between manufacturers, with IDONGSIK JUTAEK positioned competitively in the mid to premium segment. The U.S. prefabricated buildings market, valued at $41.45 billion in 2025, offers numerous options across different price points.
            </p>
            <h3 className="text-sl sm:text-xl font-bold text-gray-900">Manufacturer Pricing Comparison</h3>

            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                    <th className="text-sl sm:text-xl p-3">Manufacturer</th>
                    <th className="text-sl sm:text-xl p-3">Price Range</th>
                    <th className="text-sl sm:text-xl p-3">Production Capacity</th>
                    <th className="text-sl sm:text-xl p-3">Delivery Time</th>
                    <th className="text-sl sm:text-xl p-3">Key Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600">
                  <tr className="hover:bg-gray-50">
                    <td className="text-sl sm:text-xl p-3 font-bold text-orange-600">IDONGSIK JUTAEK</td>
                    <td className="text-sl sm:text-xl p-3">$150K–$300K</td>
                    <td className="text-sl sm:text-xl p-3">1,500 units/year</td>
                    <td className="text-sl sm:text-xl p-3">25 days</td>
                    <td className="text-sl sm:text-xl p-3">Custom quotes, premium packages</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="text-sl sm:text-xl p-3 font-bold text-gray-900">LUBAN CABIN</td>
                    <td className="text-sl sm:text-xl p-3">$36.8K–$42.8K</td>
                    <td className="text-sl sm:text-xl p-3">1,000 units/year</td>
                    <td className="text-sl sm:text-xl p-3">30–45 days</td>
                    <td className="text-sl sm:text-xl p-3">Transparent pricing, basic customization</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="text-sl sm:text-xl p-3 font-bold text-gray-900">VESSEL</td>
                    <td className="text-sl sm:text-xl p-3">Contact for pricing</td>
                    <td className="text-sl sm:text-xl p-3">Custom production</td>
                    <td className="text-sl sm:text-xl p-3">Variable</td>
                    <td className="text-sl sm:text-xl p-3">Luxury focus, high-end design</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="text-sl sm:text-xl p-3 font-bold text-gray-900">Traditional Tiny Homes</td>
                    <td className="text-sl sm:text-xl p-3">$50K–$120K</td>
                    <td className="text-sl sm:text-xl p-3">Variable</td>
                    <td className="text-sl sm:text-xl p-3">60–120 days</td>
                    <td className="text-sl sm:text-xl p-3">Local builders, design flexibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="space-y-2 text-xs text-gray-600">
            <h3 className="text-sl sm:text-xl font-bold text-gray-900">Value Proposition Analysis</h3>
            <p className="text-sl sm:text-xl p-3">IDONGSIK JUTAEK's higher pricing reflects superior materials, advanced manufacturing processes, and comprehensive warranty coverage. The company's factory direct model ensures quality control while eliminating dealer markups.</p>
            <ul className="text-sl sm:text-xl list-disc pl-4 space-y-1 mt-2">
              <li>Grade A steel framing with enhanced corrosion resistance</li>
              <li>Triple pane windows for superior insulation</li>
              <li>Smart home integration, ready wiring, and HVAC systems</li>
              <li>Extended warranties covering structure and major systems</li>
            </ul>
          </section>

          {/* FAQ Accordion Segment */}
          <section className="space-y-4 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">FAQ</h2>
            
            <div className="space-y-4 divide-y divide-gray-100">
              <div className="pt-3"><h4 className=" text-sl sm:text-xl font-bold  text-gray-900">How do I calculate the total cost of a IDONGSIK house project?</h4>
                <p className="text-sl sm:text-xl text-gray-600 mt-1">Calculate the total IDONGSIK house project by adding base unit price, site preparation, utilities, permits, transportation, and assembly costs. Most projects range from $200,000–$450,000 for complete installation.</p>
              </div>

              <div className="pt-3">
                <h4 className="text-sl sm:text-xl font-bold text-gray-900">What factors most significantly impact IDONGSIK house pricing?</h4> 
                <p className="text-sl sm:text-xl text-gray-600 mt-1">Size, customization level, and location are the primary cost drivers for IDONGSIK houses. Standard models in rural areas cost the least, while custom urban installations cost the most. Site conditions, utility access, and local permit requirements can add 30-50% to base unit prices, making thorough site evaluation essential.</p>
              </div>

              <div className="pt-3">
                <h4 className="text-sl sm:text-xl font-bold text-gray-900">Are IDONGSIK houses more cost effective than traditional homes?</h4>
                <p className="text-sl sm:text-xl text-gray-600 mt-1">IDONGSIK houses offer 20-30% cost savings compared to traditional construction per square foot. Factory production eliminates weather delays and reduces labor costs. However, total project costs depend heavily on site conditions and local requirements. IDONGSIK JUTAEK units provide predictable pricing, unlike stick built homes.</p>
              </div>

              <div className="pt-3">
                <h4 className="text-sl sm:text-xl font-bold text-gray-900">How much does shipping add to my IDONGSIK house cost?</h4>
                <p className="text-sl sm:text-xl text-gray-600 mt-1">Shipping costs range from $5,000–$15,000 depending on distance and transportation accessibility. IDONGSIK JUTAEK optimizes container dimensions to minimize transportation expenses. International shipping to Europe or other continents adds $8,000–$20,000. Remote locations requiring special equipment increase delivery costs significantly.</p>
              </div>

              <div className="pt-3">
                <h4 className="text-sl sm:text-xl font-bold text-gray-900">What financing options are available for IDONGSIK houses?</h4>
                <p className="text-sl sm:text-xl text-gray-600 mt-1">IDONGSIK units qualify for traditional mortgages when permanently affixed to foundations. FHA, VA, and conventional loans are available, though some lenders require additional documentation for modular construction. Interest rates for IDONGSIK houses typically match traditional home mortgages, currently ranging from 6.5-7.5% for qualified buyers with 20% down payments. Interest rates to permanent loans may be required for complex installations.</p>
              </div>

              <div className="pt-3">
                <h4 className="text-sl sm:text-xl font-bold  text-gray-900">Do IDONGSIK houses hold their value like traditional homes?</h4>
                <p className="text-sl sm:text-xl text-gray-600 mt-1">IDONGSIK houses appreciate at rates similar to manufactured homes typically 2-4% annually. Location and local property values significantly impact resale value. IDONGSIK Castle's premium construction and materials support better value retention than lower-end alternatives. Proper installation and foundation are crucial for protecting asset value over time.</p>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Mini Simple Footer */}
    <Home7/>
    <Home8/>

    </div>
    </aside>
  );
};

export default Conest;
