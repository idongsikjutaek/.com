import React, { useState, useEffect } from "react";
import insidePic from "./picture/inside.jpg";
import { Link } from "react-router-dom";
import business from "./picture/business.jpg";
import room from "./picture/room.jpg";
import weout from "./picture/weout.jpg";
import farm from "./picture/farm.jpg";
import chilling from "./picture/chilling.jpg";
import outside from  "./picture/outside.jpg";
import condo from "./picture/condo.jpg";
import map from "./picture/map.webp";
import useScrollAnimation from './hooks/useScrollAnimation';
import useLogoSpin from './hooks/useLogoSpin';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';

const Partner = () => {
  const backgroundImages = [insidePic];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [containerRef, isVisible] = useScrollAnimation();
  const isLogoSpinning = useLogoSpin();
  const contactSectionRef = React.useRef(null); // Or just useRef(null) if imported directly
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
        className={`sticky relative h-[480px] md:min-h-screen w-full bg-cover bg-center bg-no-repeat font-sans text-white select-none transition-all duration-1000 ease-in-out 
        ${isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.02] blur-md"}`}
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
          <div className="max-w-2xl space-y-9">
            <h1 className="text-4xl text-center font-semibold sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] md:text-left">
              Join Our Global Partner Crew
            </h1>
            <div className="flex justify-center md:block">
              <p className="text- sm: text-[20px]">
                We are expanding our global network, seeking partners to help bring our dome homes to life all over the planet.
              </p>
            </div>
          </div>

          {/* ---------------- BOTTOM STATUS BAR ---------------- */}
          <div className="w-full flex items-center gap-10 justify-end pr-[30px] pb-10   border-white/10">
          </div>
        </main>

        {/* ---------------- FLOATING WHATSAPP BUTTON ---------------- */}
      </div>
       <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* 1. Header / Navbar */}


      {/* 2. Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase block mb-3">
            Join the IDONGSIk Movement
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Let's Make Space Cool Again
          </h1>
        </div>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Ready to kick off something exciting? Join us in bringing world-class modular residential 
            products to resorts, Airbnb, and tourism projects around the globe. There's a huge 
            market out there — and tons of potential to grow together.
          </p>
          <p>
            With smart mobile hotel solutions, our cabins are designed with prefabricated 
            structural components to keep things simple on-site and easy on the environment. 
            These smart little homes work in any climate — humid beaches, cold mountains, 
            or arid deserts. With multiple exterior styles, they're easy, comfortable, and convenient.
          </p>
          <p>
            Want to be in? Just make an initial payment for sample rooms and showcase what's 
            possible. As an official project partner, once you're onboard, you'll get expert 
            support and a real shot at long-term success and solid returns.
          </p>
        </div>
      </section>

      <hr className="border-gray-100 max-w-7xl mx-auto px-6" />

      {/* 3. Process Section ("The Lowdown on Our Process") */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase block mb-2">
            How We Roll
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">
            The Lowdown on Our Process
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {/* Step 1 */}
          <div className="grid md:grid-cols-3 py-10 items-start">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-4xl font-black text-gray-300">01</span>
              <span className="p-2 bg-orange-50 text-orange-600 rounded">🔖</span>
              <h3 className="text-xl font-bold text-gray-900">Project Check-Up</h3>
            </div><div className="md:col-span-2 text-gray-600 leading-relaxed">
              We'll assess the basics — your project, land conditions, and if it's for tourism, 
              resorts, or Airbnb. We'll consider whether it's a personal or institutional investment 
              to assist in estimating potential returns.
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-3 py-10 items-start">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-4xl font-black text-gray-300">02</span>
              <span className="p-2 bg-orange-50 text-orange-600 rounded">🔖</span>
              <h3 className="text-xl font-bold text-gray-900">Planning It Out</h3>
            </div>
            <div className="md:col-span-2 text-gray-600 leading-relaxed">
              By nailing down the project's vibe, we pick the right designs, plan the feasibility 
              of house selection, and check if the investment makes sense for your goals.
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-3 py-10 items-start">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-4xl font-black text-gray-300">03</span>
              <span className="p-2 bg-orange-50 text-orange-600 rounded">🔖</span>
              <h3 className="text-xl font-bold text-gray-900">Building IDONGSIk Homes</h3>
            </div>
            <div className="md:col-span-2 text-gray-600 leading-relaxed">
              Choose from a bunch of customizable products that meet local permits and certifications. 
              Depending on complexity, the production takes about 30 to 50 days to build. You can always 
              check in on how it's going.
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-3 py-10 items-start">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-4xl font-black text-gray-300">04</span>
              <span className="p-2 bg-orange-50 text-orange-600 rounded">🔖</span>
              <h3 className="text-xl font-bold text-gray-900">Getting the Foundation Ready</h3>
            </div>
            <div className="md:col-span-2 text-gray-600 leading-relaxed">
              Before your house comes, we'll send you all the blueprints and drawings you need. 
              We'll help you plan ahead for water, electricity, and other important stuff so 
              everything goes smoothly.
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid md:grid-cols-3 py-10 items-start">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-4xl font-black text-gray-300">05</span>
              <span className="p-2 bg-orange-50 text-orange-600 rounded">🔖</span>
              <h3 className="text-xl font-bold text-gray-900">Delivery & Setup</h3>
            </div>
            <div className="md:col-span-2 text-gray-600 leading-relaxed">
              Your house can arrive as a whole unit or in modular parts. Whichever works best. 
              We'll handle shipping, and we'll make installation easy with clear videos and 
              step-by-step guides to walk you through it.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expectations / Who We Work With */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            {/* Mocking the group photo with capsule backgrounds shown in video */}
            <span className="text-gray-400 font-medium"><img src={business} alt="business" /></span>
          </div>
        </div>
        <div className="md:col-span-7"><span className="text-xs font-bold tracking-widest text-orange-600 uppercase block mb-2">
            Our Expectations
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Who We're Excited to Work With?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We're looking for partners who share our passion for innovation and growth, including:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-gray-700">
              <span className="text-orange-500 mt-1">✔️</span>
              <span>Resort developers and tourism project planners</span>
            </li>
            <li className="flex items-start space-x-3 text-gray-700">
              <span className="text-orange-500 mt-1">✔️</span>
              <span>Teams ready to manage on-site installations and project operations</span>
            </li>
            <li className="flex items-start space-x-3 text-gray-700">
              <span className="text-orange-500 mt-1">✔️</span>
              <span>Investors interested in mobile hotel solutions</span>
            </li>
            <li className="flex items-start space-x-3 text-gray-700">
              <span className="text-orange-500 mt-1">✔️</span>
              <span>Airbnb hosts and vacation rental entrepreneurs</span>
            </li>
            <li className="flex items-start space-x-3 text-gray-700">
              <span className="text-orange-500 mt-1">✔️</span>
              <span>Creative partners looking to bring our prefab homes to life in local markets</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-orange-600 text-white rounded-2xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 z-10">
            <h2 className="text-4xl font-extrabold tracking-tight">The Future is Modular.</h2>
            <h2 className="text-4xl font-extrabold tracking-tight text-orange-200">Are You In?</h2>
            <p className="pt-2 text-orange-100 font-medium">Jingxiu Space Co., Ltd. China</p>
          </div>
          <button onClick={scrollToContact} className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl shadow-lg transition whitespace-nowrap z-10">
            Join Now
          </button>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-500 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </section>

      {/* 6. Space Capsules Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Space IDONGSIk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Homestay Options", bg: "bg-gray-100", img: room },
            { title: "Backyard Homes", bg: "bg-gray-200", img: outside },
            { title: "Tourist Attractions", bg: "bg-gray-100", img:chilling},
            { title: "Outdoor Camps", bg: "bg-gray-200", img: farm },
            { title: "Motorhome Rentals", bg: "bg-gray-100", img: weout },
            { title: "Medical Solutions", bg: "bg-gray-200", img: condo },
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className={`h-64 ${item.bg} flex items-center justify-center text-gray-400 font-light`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 border-t border-gray-50">
                <h4 className="font-bold text-gray-800 text-lg group-hover:text-orange-600 transition">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Join Our Network CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Join Our Global Network Today!</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Represent your country as our official agent and enjoy exclusive partnership benefits in a diverse industry.
        </p>
        <button 
        onClick={scrollToContact}
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-md">
          Get Started
        </button>
      </section>

      {/* 9. Inquiry Form & Contact Info Section */}
      <div  className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        




        
        {/* Left Column: Contact Information */}
        <div ref={contactSectionRef} className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#f28e2b] uppercase block mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Reach Out for Inquiries
            </h1>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              Please fill out the form for any inquiries, and our team will get back to you.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            
            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="text-[#f28e2b] mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25 2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Email Us</h4>
                <a href="mailto:IDONGSIKJUTAEK@gmail.com" className="text-xs text-gray-500 hover:text-[#f28e2b] transition-colors break-all">
                  IDONGSIKJUTAEK@gmail.com
                </a>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start space-x-3">
              <div className="text-[#f28e2b] mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.48-5.144-3.8-6.62-6.62l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Call Us</h4>
                <p className="text-xs text-gray-500">+1 9364456496</p>
              </div>
            </div>

            {/* Wechat */}
            <div className="flex items-start space-x-3">
              <div className="text-[#f28e2b] mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.023c-.09-.057-.179-.118-.267-.182C2.624 16.334 1.5 14.302 1.5 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Wechat</h4>
                <p className="text-xs text-gray-500">9364456496</p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex items-start space-x-3">
              <div className="text-[#f28e2b] mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 2.12.735 4.07 1.961 5.618l-1.025 3.73 3.84-1.007A8.963 8.963 0 0012 20.25z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Whatsapp</h4>
                <p className="text-xs text-gray-500">+1 9364456496</p>
              </div>
            </div>

          </div>

          {/* Visit Us (Full width inside left column) */}
          <div className="flex items-start space-x-3 pt-2 border-t border-gray-200">
            <div className="text-[#f28e2b] mt-1 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Visit Us</h4>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                Jingxu Space Company, Huanglou Town, Qingzhou City, Shandong Province, China
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form Box */}
        <div ref={contactSectionRef} className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-xl border border-gray-100 shadow-sm">
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
    </div>

      {/* 10. Footer Footer */}
      <footer className="border-t border-gray-100 bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="text-center">
              Copyright © 2026 | IDONGSIk JUTAEKE All rights reserved.
          </div>
          <div className="flex items-center space-x-2 border border-gray-200 rounded px-2 py-1 text-gray-600 cursor-pointer hover:bg-gray-50 transition">
            <span>🇬🇧</span>
            <span>EN ▾</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
    </div>
      </aside>
  );
};

export default Partner;
