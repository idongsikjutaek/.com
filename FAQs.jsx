import { useState, useEffect } from "react";
import bright from "./picture/garden.jpg";
import { Link } from "react-router-dom";
import Home7 from "./Home7";
import Home8 from "./Home8";
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';

const FAQs = () => {        
  const [openId, setOpenId] = useState(null);
  const [containerRef, isVisible] = useScrollAnimation();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqData = [
    {
      category: "Shipping & Delivery",
      questions: [
        {
          id: 1,
          question: "Where does IDONGSIK JUTAEK ship from?",
          answer:
            "The IDONGSIK JUTAEK factory is located in Qingdao, Shandong Province, China. The primary shipping ports used are Qingdao Port and Shanghai Port.",
        },
        {
          id: 2,
          question: "How long does delivery take?",
          answer:
            "Delivery timelines depend on your location and the customization options chosen. Typically, standard shipping and production take roughly 8-12 weeks.",
        },
        {
          id: 3,
          question: "What shipping methods are available?",
          answer:
            "We offer ocean freight and specialized flat-rack container shipping to safely transport the IDONGSIK units directly to your site or nearest port.",
        },
        {
          id: 4,
          question:
            "Are the houses delivered as a complete unit or in modular form?",
          answer:
            "Most units are shipped fully assembled as complete, pre-engineered structural blocks, allowing for instant setup once connected to utilities.",
        },
      ],
    },
    {
      category: "Installation & Land",
      questions: [
        {
          id: 5,
          question: "Can I put a IDONGSIK house on my land?",
          answer:
            "From a structural standpoint, yes. IDONGSIK JUTAEK units are designed to be placed on virtually any terrain without a traditional foundation. They can be installed on mountain peaks, in forest clearings, on beaches, and in desert environments. Whether you are legally permitted to do so depends on your local planning and zoning rules. IDONGSIK JUTAEK recommends consulting with local authorities or a contractor to confirm what is allowed on your specific plot before ordering.",
        },
        {
          id: 6,
          question: "Does IDONGSIK JUTAEK install the units on-site?",
          answer:
            "We provide detailed guidelines and remote support, but on-site placement and crane operations must be handled by your local certified contractor.",
        },
        {
          id: 7,
          question: "What utilities do I need to connect on-site?",
          answer:
            "You will need standard hookups for electricity, water supply, and a sewage/septic system. The units come ready to plug into these local grids.",
        },
        {
          id: 8,
          question: "Does the IDONGSIK house require a concrete foundation?",
          answer:
            "No concrete foundation is required. A simple concrete pad, strip foundation, or steel screw piles are sufficient to keep the unit level and secure.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          id: 9,
          question: "How much does a IDONGSIK JUTAEK house cost?",
          answer:
            "Pricing varies extensively based on the model size, specific layouts, and choice of custom premium materials. Please contact our sales team for an exact quote.",
        },
        {
          id: 10,
          question: "What are the payment terms?",
          answer:
            "We typically require an initial deposit to begin custom manufacturing, with the remaining balance due upon quality checks prior to shipping.",
        },
      ],
    },
    {
      category: "Legal Permits & Regulations",
      questions: [
        {
          id: 11,
          question:
            "Do I need planning permission or a building permit for a IDONGSIK house?",
          answer:
            "Yes, permits may be required depending on where you are. Permit requirements vary significantly by country, region, and the intended use of the structure. IDONGSIK JUTAEK recommends consulting with local authorities or a licensed general contractor to understand what zoning approvals, planning permissions, or building permits apply to your specific location before ordering. The IDONGSIK JUTAEK team can also guide you through the compliance process to help ensure a smooth installation. For more information, read this guide on Dome Home Laws in the USA.",
        },
        {
          id: 12,
          question: "Is a IDONGSIK house legal to live in?",
          answer:
            "In most jurisdictions, yes, provided they comply with local residential codes, safety rules, and accessory dwelling unit (ADU) parameters.",
        },
      ],
    },
    {
      category: "Product & Customization",
      questions: [
        {
          id: 13,
          question: "Can I customize my IDONGSIK house?",
          answer:
            "Yes. While the core modular structure is fixed, internal finishes and exterior colour can be tailored. Available exterior colour options include orange, yellow, white, pink, and blue. These options make it practical to match your IDONGSIK to a resort brand identity, an Airbnb aesthetic, or personal preference.",
        },
        {
          id: 14,
          question: "What use cases are IDONGSIK houses suitable for?",
          answer:
            "They are highly versatile and widely utilized for glamping sites, backyard guest houses, eco-resorts, remote offices, or unique vacation rentals.",
        },
      ],
    },
    {
      category: "Partnering & Reselling",
      questions: [
        {
          id: 15,
          question: "How do I become a IDONGSIK JUTAEK dealer or agent?",
          answer:
            "IDONGSIK JUTAEK is actively building its global partner network. The company works with resort developers, tourism planners, Airbnb operators, mobile hotel investors, and entrepreneurs who want to bring modular homes to local markets. Partners begin with an initial sample unit purchase and gain access to free factory training, expert project support, and exclusive partnership benefits. Contact the team at IDONGSIKJUTAEK@gmail.com or via WhatsApp at +1 9364456469 to start the conversation.",
        },
        {
          id: 16,
          question: "Can I visit the factory before placing an order?",
          answer:
            "Absolutely! We highly encourage visits. Please schedule an appointment with our team ahead of time to arrange a full factory and showroom tour.",
        },
      ],
    },
  ];

  const backgroundImages = [bright];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
      href: "/about-us",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/story" },
        { name: "Factory", href: "/factory" },
        { name: "Project Cases", href: "/cases" },
      ],
    },
    { name: "News", href: "/news" },
    { name: "FAQs", href: "#faqs" },
    { name: "How to Partner", href: "/partner" },
  ];
  return (
    <aside>
      <div
        className={`relative w-full h-[450px] m-0 md:h-[700px] 
            bg-cover bg-center bg-no-repeat font-sans
             text-white select-none transition-all
              duration-1000 ease-in-out`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), 
          rgba(0, 0, 0, 0.5)), url('${backgroundImages[currentIdx]}')`,
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
          <div className="max-w-xl space-y-9">
            <h1 className="text-3xl w-[500px] text-center font-sans sm:text-5xl md: w-full text-4xl lg:text-7xl font-semibold tracking-tight leading-[1.15] md:text-left">
              Get the answer you need
            </h1>
            <p className="text-lg text-center md:text-left text-gray-300 max-w-2xl font-semibold leading-relaxed">
              Browse through our frequently asked questions to find helpful
              answers and gain better understanding of our products and
              services.
            </p>
          </div>
        </main>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12"></div>
      <div 
        ref={containerRef}
        className={`min-h-screen bg-[#FDFDFD] text-[#333333] font-sans antialiased selection:bg-[#E59446]/20 transition-all duration-1000 ${
          isVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6  md:py-4">
          {/* Header Block Section */}
          <div className="grid grid-cols-1 text-left md:grid-cols-12 gap-8 border-b border-[#EAEAEA] pb-12 mb-16">
            <div className="md:col-span-7">
              <span className="text-[13px] md:text-[20px] font-bold tracking-widest uppercase text-[#A5A5A5] block mb-3">
                Solutions to your queries
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#111111]">
                Frequently Asked <br />
                Questions
              </h1>
            </div>
            <div className="md:col-span-5 flex items-end">
              <p className="text-[15px] md:text-[20px] text-[#666666] leading-relaxed font-light">
                Our FAQ section is designed to provide clarity and support,
                helping you easily navigate our services and make informed
                decisions with confidence.
              </p>
            </div>
          </div>

          {/* Categories and Accordions Grid */}
          <div className="space-y-16">
            {faqData.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 first:pt-0"
              >
                {/* Category Sidebar Title */}
                <div className="md:col-span-4">
                  <h2 className="text-[15px] md:text-[18px] font-bold tracking-wide text-[#fc8d26] sticky top-8">
                    {section.category}
                  </h2>
                </div>

                {/* Accordion List */}
                <div className="md:col-span-8 space-y-4">
                  {section.questions.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div
                        key={item.id}
                        className="border-b border-[#EAEAEA] pb-4 transition-colors duration-200"
                      >
                        <button
                          onClick={() => toggleAccordion(item.id)}
                          className="w-full flex justify-between items-start text-left hover: py-2 group focus:outline-none"
                        >
                          <span
                            className={`text-[15px] md:text-[25px] font-medium tracking-tight transition-colors duration-200 ${isOpen ? "text-[#0e0d0d]" : "text-[#444444] group-hover:text-[#111111]"}`}
                          >
                            • &nbsp; {item.question}
                          </span>
                          <span className="ml-4 text-xl text-[#A5A5A5] font-light leading-none">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {/* Smooth expandable item description panel */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 mt-2"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed pl-5 pb-2 font-normal whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Home7 />
      <Home8 />
    </aside>
  );
};

export default FAQs;
