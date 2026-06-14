import { useState, useEffect } from "react";
import night from "./picture/night.jpg";
import certificate2 from "./picture/certificate2.jpg";
import certificate3 from "./picture/certificate3.jpg";
import { Link } from "react-router-dom";
import useLogoSpin from "./hooks/useLogoSpin";
import useCountUp from "./hooks/useCountUp";
import store from "./picture/store.jpg";
import indoor from "./picture/indoor.jpg";
import Home7 from "./Home7";
import Home8 from "./Home8";
import "./styles/pageAnimations.css";

const OurStory = () => {
  const backgroundImages = [night];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLogoSpinning = useLogoSpin();

  const [isLoaded, setIsLoaded] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  // Count up animations for metrics
  const factoryAreaCount = useCountUp(5000, showMetrics);
  const costReductionCount = useCountUp(90, showMetrics);
  const monthlyCapacityCount = useCountUp(50, showMetrics);
  const globalDeliveriesCount = useCountUp(100, showMetrics);

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

  // Trigger metrics count when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMetrics(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Sample data mapping the locations matching the pins in your video
  const mapLocations = [
    { id: "us", name: "United States", top: "35%", left: "22%" },
    { id: "br", name: "Brazil", top: "65%", left: "38%" },
    { id: "uk", name: "United Kingdom", top: "25%", left: "48%" },
    { id: "za", name: "South Africa", top: "72%", left: "57%" },
    { id: "ae", name: "United Arab Emirates", top: "42%", left: "62%" },
    { id: "in", name: "India", top: "48%", left: "69%" },
    { id: "cn", name: "China", top: "38%", left: "76%" },
    { id: "au", name: "Australia", top: "75%", left: "86%" },
    { id: "nz", name: "New Zealand", top: "82%", left: "92%" },
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
          <div className="max-w-4xl space-y-3 animate-fade-in-up text-center md:text-left">
            <h1 className="text-4xl text-center font-sans sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] md:text-left">
              Living in 3022? Nah, We Bring It to You Now!
            </h1>
            <p className="  sm:text-xl text-center md:text-left text-1xl text-gray-300 max-w-1xl font-semibold leading-relaxed">
              Quality-obsessed. Innovation focused. We build mind-blowing space
              IDONGSIk homes that rock your world.
            </p>
          </div>
        </main>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12"></div>
      <div className="bg-white min-h-screen font-sans text-gray-800 antialiased selection:bg-orange-100">
        {/* ================= SECTION 1: HERO / WHO WE ARE ================= */}
        <section className="max-w-7xl mx-auto px- md:px-12 md: grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 text-center md:text-left">
          <div className="mt-[20px] md:col-span-5  flex flex-col justify-start animate-fade-in-left  items-center md:items-start ">
            <span className="text-[10px] text-orange-500  md:text-orange-500 font-bold uppercase tracking-widest text-[15px] mb-3 block">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              Space Pods for Modern Nomads
            </h1>
          </div>
          <div className="px-5 md:col-span-7 flex flex-col justify-start space-y-6 text-gray-600 text-base md:text-lg leading-relaxed pt-2 md:pt-8 animate-fade-in-right items-center md:items-start">
            <p>
              Since 2020, we've been blowing minds with our stackable space
              pods. These aren't your grandma's tiny homes — these are high-tech
              havens solving the problems of living spaces worldwide! Our genius
              design? Simply snap 'em together, and voilà, you're living in the
              future. And your wallet will thank you!
            </p>
            <p>
              Our crew of 30 is on a mission to solve your space woes. Whether
              you're running a resort or need a backyard retreat, we've got you
              covered. Durable, customisable, and compact — that's the IDONGSIk
              JUTAEK promise.
            </p>
          </div>
        </section>

        {/* ================= SECTION 2: FUTURE VISION ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          {/* Left Side: Geodesic Dome Factory Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] relative animate-zoom-in-slow order-2 md:order-1">
            <img
              src={store}
              alt="IDONGSIk production factory floor"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Side: Text Context */}
          <div className="flex flex-col justify-center space-y-4 animate-fade-in-up order-1 md:order-2 items-center md:items-start">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs block">
              Future Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Living Large in Small Spaces
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                At IDONGSIk JUTAEK, we're not playing small ball. We're
                reinventing tiny homes with killer design and service that'll
                knock your socks off. Our modular magic beats wooden cabins and
                RVs hands down.
              </p>
              <p>
                Forget lengthy builds. Our 100% factory-made homes ship fast and
                assemble even faster. We're taking eco-friendly, top-notch
                living spaces that'll make you wonder why you've never heard of
                us! Ready to join the tiny revolution?
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: KEY METRICS BANNER ================= */}
        <section className="bg-gray-50 border-y border-gray-100 py-12 my-6 animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-zoom-in">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-1">
                {factoryAreaCount.toLocaleString()}m²
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                Factory Area
              </div>
            </div>
            <div className="animate-zoom-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-1">
                {costReductionCount}%
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                Cost Reduction
              </div>
            </div>
            <div className="animate-zoom-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-1">
                {monthlyCapacityCount}+
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                Monthly Capacity
              </div>
            </div>
            <div className="animate-zoom-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-1">
                {globalDeliveriesCount}+
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                Global Deliveries
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHY CHOOSE US ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start text-center lg:text-left">
            <div className="lg:col-span-5 animate-fade-in-left flex flex-col items-center lg:items-start">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                IDONGSIk JUTAEK Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Why Choose Our IDONGSIk Homes?
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6 animate-fade-in-right flex flex-col items-center lg:items-start">
              <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                Choosing us means trusting a company committed to transforming
                the future of living spaces. We focus on delivering exceptional
                solutions that meet your needs, creating lasting value and
                unforgettable experiences every time.
              </p>
            </div>
          </div>

          {/* 3-Column Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition hover:shadow-md animate-bounce-in flex flex-col items-center text-center"
              style={{ animationDelay: "0s" }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Easy Installation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modular design ensures fast, simple assembly, completed in just
                3 days with ease.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition hover:shadow-md animate-bounce-in flex flex-col items-center text-center"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Low Cost
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Achieve high returns with low cost construction, shipping, and
                maintenance options.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition hover:shadow-md animate-bounce-in flex flex-col items-center text-center"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Quality Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team offers exceptional after-sale support, ensuring your
                customers' satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: VIDEO / EXPERIENCE GALLERY ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-gray-100 animate-fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">
              Made to Move You
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Experience IDONGSIk Life Differently
            </h2>
          </div>

          {/* Video Thumbs Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Item 1 */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-slate-900 cursor-pointer animate-zoom-in-slow"
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Exterior IDONGSIk tour"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-current ml-1"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M4.516 7.548c0-.443.24-.853.625-1.071l6.113-3.486c.404-.23.904-.218 1.298.032l5.858 3.708c.365.23.578.632.578 1.06v7.358c0 .444-.241.854-.626 1.071l-6.113 3.486c-.404.23-.904.218-1.298-.032l-5.858-3.708c-.365-.23-.578-.632-.578-1.06V7.548z"
                      className="hidden"
                    />
                    <path d="M6.3 5.05a.75.75 0 011.05-.15l7.5 5.25a.75.75 0 010 1.22l-7.5 5.25a.75.75 0 01-1.2-.61V5.66a.75.75 0 01.15-.46z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Item 2 */}
            <div
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-slate-900 cursor-pointer animate-zoom-in-slow"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Interior architecture tour"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-current ml-1"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 5.05a.75.75 0 011.05-.15l7.5 5.25a.75.75 0 010 1.22l-7.5 5.25a.75.75 0 01-1.2-.61V5.66a.75.75 0 01.15-.46z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-12 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up">
            Ready to upgrade your idea of outdoor living? IDONGSIk JUTAEK
            delivers high-tech, ultra-stylish IDONGSIk houses that are anything
            but basic. From Apple cabins to the advanced C5 and C7 models, every
            unit is a masterclass in modular design, smart interiors, and luxury
            amenities, all built to move with you.
          </p>
          <br />
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up">
            With a powerful 1,500-unit annual output and a swift 25-day build
            cycle, these prefab homes bring serious innovation to the wild.
            Whether you’re glamping or launching a rental resort, IDONGSIk
            JUTAEK has your back; and your future.
          </p>
        </section>
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
            Explore our exceptional space IDONGSIk homes and place your order
            now for quick, reliable delivery and guaranteed satisfaction.
          </p>
        </div>
      </div>
      <div className="bg-white min-h-screen font-sans text-gray-800 antialiased selection:bg-orange-100">
        {/* ================= SECTION 1: INTERNATIONAL PRESENCE MAP ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">
            International Presence
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-12">
            Delivering to Every Corner Worldwide
          </h2>

          {/* Interactive Map Container */}
          <div className="relative w-full max-w-5xl mx-auto bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100 shadow-sm overflow-hidden">
            {/* Subtle World Map SVG Background Grid */}
            <svg
              className="w-full h-auto opacity-20 text-slate-400"
              viewBox="0 0 1000 500"
              fill="currentColor"
            >
              <path
                d="M150,150 Q200,100 300,150 T500,150 T700,150 T900,150 M100,250 Q250,200 400,250 T700,250 T900,250 M50,350 Q200,320 400,350 T800,350"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <circle
                cx="200"
                cy="160"
                r="40"
                fill="none"
                stroke="currentColor"
              />
              <circle
                cx="450"
                cy="220"
                r="80"
                fill="none"
                stroke="currentColor"
              />
              <circle
                cx="750"
                cy="180"
                r="60"
                fill="none"
                stroke="currentColor"
              />
              {/* Soft background shape indicating continents */}
              <path
                d="M120,120 L280,100 L320,180 L250,320 L180,380 L140,260 Z M420,100 L550,80 L620,180 L580,320 L480,400 Z M650,120 L850,140 L900,280 L800,420 L700,350 Z"
                opacity="0.15"
              />
            </svg>

            {/* Dynamic Map Pins */}
            {mapLocations.map((loc) => (
              <div
                key={loc.id}
                className="absolute cursor-pointer group z-10 transition-transform duration-200 hover:scale-125"
                style={{ top: loc.top, left: loc.left }}
                onMouseEnter={() => setHoveredCountry(loc.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Map Marker Pin Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 drop-shadow-md filter transition-colors duration-200 group-hover:text-orange-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                {/* Ping Ring Effect */}
                <span className="absolute top-0 left-0 h-6 w-6 sm:h-8 sm:w-8 bg-orange-400 rounded-full animate-ping opacity-25 pointer-events-none"></span>
              </div>
            ))}

            {/* Country Label Tooltip HUD */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg transition-all duration-300  min-w-[180px]">
              {hoveredCountry ? (
                <span className="text-white font-bold animate-fade-in">
                  📍 {hoveredCountry}
                </span>
              ) : (
                <span className="text-white">Hover over a pin location</span>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: BE OUR BRAND CHAMPION ================= */}
        <section
          className="max-w-7xl mx-auto 
        px-6 md:px-12 py-16 md:py-24 grid 
        grid-cols-1 lg:grid-cols-12 gap-12 
        items-center border-t border-gray-100"
        >
          {/* Left Copywrite Content */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            <span
              className="text-orange-500 font-bold 
            uppercase tracking-widest text-xs block"
            >
              Seize the Opportunity
            </span>
            <h2
              className="text-3xl md:text-5xl 
            font-semibold tracking-tight text-slate-900
             leading-tight"
            >
              Be Our Brand Champion
            </h2>
            <div
              className="text-gray-600 space-y-4 
            text-base md:text-lg leading-relaxed"
            >
              <p className="font-medium text-slate-800">
                Listen up! IDONGSIk JUTAEK is looking for serious project
                partners worldwide. We've got game-changing stargazing domes and
                a market that's begging to be conquered. Jump on this rocket
                ship and we'll hook you up with insider discounts and top-notch
                support.
              </p>
              <p>
                Entrepreneurs and tourism developers, this is your moment. We're
                gaining attention globally and need your extra fire. Ready to
                really make it big? Partner with us and let's make some noise in
                the dome world!
              </p>
            </div>
            <div className="pt-4">
              <button className="bg-orange-500 hover:bg-[#e07b00] text-white font-medium py-3 px-8 rounded shadow-lg transition duration-200 transform active:scale-95 text-sm md:text-base">
                Get Started Today
              </button>
            </div>
          </div>

          {/* Right Geometric Dome Geometry Image */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
            <img src={indoor} className="w-full h-full object-cover" />
          </div>
        </section>

        {/* ================= SECTION 3: TRUSTED GLOBAL CERTIFICATIONS ================= */}
        <section className="bg-gray-50 border-t border-gray-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">
              Quality You Can Rely On
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12">
              Trusted Global Certifications
            </h2>

            {/* Certificates Row Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Certificate 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                <img src={certificate2} alt="" />
              </div>

              {/* Certificate 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                <img src={certificate3} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Home7 />
      <Home8 />
    </aside>
  );
};

export default OurStory;
