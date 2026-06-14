import { useState, useEffect } from "react";
import space from "./picture/space.jpg";
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
import Home6 from "./Home6";
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

const Cases = () => {
     const projects = [
    {
      id: 1,
      imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80', // Replace with your local asset path
      altText: 'Interior project showcase video thumbnail',
    },
    {
      id: 2,
      imageSrc: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80', // Replace with your local asset path
      altText: 'Aerial project showcase video thumbnail',
    }
  ];
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

  const backgroundImages = [space];
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
      name: "IDONGSIK space house",
      href: "/space-IDONGSIK",
      hasDropdown: true,
      dropdownItems: [
        { name: "Double Deck Space IDONGSIK C5", href: "/c5" },
        { name: "Single Deck Space IDONGSIK C7", href: "/c7" },
        { name: "IDONGSIK House C7 Plus", href: "/c7-plus" },
        { name: "IDONGSIK  House D5", href: "/d5" },
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
   const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Our resort in Brazil had a real problem with slow builds and crazy high costs. But then we found IDONGSIK Castle's space IDONGSIK homes. The whole thing was way quicker, and the cost? Much lower! Guests love them, and shipping was way cheaper than we thought. Honestly, it's been a huge relief.",
      name: "Marco Silva",
      role: "CEO"
    },
    {
      text: "I've been into real estate for a long time, but IDONGSIK Castle's space IDONGSIK homes are something else. The design is unique and gives my properties that extra edge. What I like most is how fast they go up, and the cost isn't bad either. It's been a great addition to my investments, and I'm looking forward to using them more.",
      name: "Yuki Tanaka",
      role: "Developer"
    },
    {
      text: "We were struggling with all the costs and waiting for construction to finish. When we tried IDONGSIK Castle's modular space IDONGSIKs, things changed. They were quick to set up and cost way less. Our visitors can't get enough of the Star Double Deck — the views are amazing! The whole thing's been a hit, and our camp is busier than ever.",
      name: "Maria Kostas",
      role: "Camp Owner"
    },
    {
      text: "As someone who builds backyard homes, I was looking for something easier, faster, and still good quality. IDONGSIK Castle's homes fit the bill. Setting them up is so simple — like putting together a puzzle, really. My clients love them, and it saves so much time and money compared to normal builds. The quality's spot on too.",
      name: "Carlos Garcia",
      role: "Builder"
    }
  ];

  return (
    <aside>
      <div
        className={`relative w-full h-[400px] m-0 md:h-[700px] 
            bg-cover bg-center bg-no-repeat font-sans
             text-white select-none transition-all
              duration-1000 ease-in-out`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45),  rgba(0, 0, 0, 0.5)), url('${backgroundImages[currentIdx]}')`,
        }}
      >
        {/* ---------------- MAIN HERO CONTENT ---------------- */}
        <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-32 flex flex-col justify-between min-h-[calc(100vh-90px)]">
          <div className="max-w-4xl space-y-9">
            <h1 className="text-4xl text-center font-sans sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] md:text-left">
             Turning Ideas into Real Projects
            </h1>
            <div className="flex justify-center md:block">
              <button className="bg-orange-500 text-white px-9 py-4 rounded text-slx font-semibold tracking-wider btn-hover-lift animate-bounce-in">
                View Project Cases
              </button>
            </div>
          </div>
        </main>
      </div>
       <section className="relative min-h-screen w-full bg-white px-4 py-16 flex flex-col items-center justify-center font-sans select-none">
      
      {/* Header Container */}
      <div className="text-center max-w-3xl mb-12">
        {/* Small Orange Subtitle */}
        <p className="text-[11px] sm:text-xs tracking-widest text-[#D97706] font-semibold uppercase mb-3">
          Turning Ideas Into Real Projects From Concept To Completion
        </p>
        
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-gray-900 leading-tight">
          Explore the Projects <br className="hidden sm:inline" /> That Shape Our Story
        </h2>
      </div>

      {/* Grid Layout for Video Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-2 sm:px-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="relative group aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Background Thumbnail Image */}
            <img 
              src={project.imageSrc} 
              alt={project.altText} 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Dark subtle overlay for contrast */}
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

            {/* Centered Orange Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#E67E22] text-white shadow-lg transition-transform duration-200 group-hover:scale-110 focus:outline-none"
                aria-label="Play project video"
              >
                {/* SVG Play Triangle icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6 sm:w-7 sm:h-7 ml-1"
                >
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-0 py-12">
        <Home6/>
        <Home7 />
        <Home8 />
      </div>
    </aside>
  );
};

export default Cases;
