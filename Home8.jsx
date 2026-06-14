import React from "react";
import logs from "./picture/osha.jpg";
import useScrollAnimation from "./hooks/useScrollAnimation";
import "./styles/waterFlow.css";
import "./styles/pageAnimations.css";

// Icons used in the Contact Card & Footer
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

const Home8 = () => {
  const [containerRef, isVisible] = useScrollAnimation();
  return (
    <div
      ref={containerRef}
      className={`bg-white min-h-screen font-sans antialiased flex flex-col justify-between px-4 pt-8 sm:pt-9 lg:pt-10 transition-all duration-1000 ${
        isVisible ? "animate-water-flow-up" : "water-flow-hidden"
      }`}
    >
      {/* 2. BOTTOM SECTION: The Site Footer */}
      <footer className="w-full bg-white  py-16 mr-[20px] px-6 sm:px-1">
        {/* Changed grid-cols from md:grid-cols-12 to sm:grid-cols-12 so the grid activates on small screens */}
        <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-6 md:gap-30 items-start">
          {/* Brand Identity Section */}
          <div className="  sm:col-span-12   md:col-span-5 space-y-6">
            <img
              src={logs}
              alt="Logo"
              className=" mr-auto ml-auto h-14 animate-fade-in"
            />

            <p className=" text-[19px] sm:text-slate-500 text-center w-full text-sm leading-relaxed font-normal">
              Want to disrupt the housing problem? We’re talking next-level
              living spaces designed to completely transform the way people
              experience comfort, style, and modern living. Create homes that
              don’t just meet expectations but exceed them spaces so innovative
              and visually stunning they leave your customers speechless. From
              smart designs to unforgettable interiors, this is your opportunity
              to lead the future of housing and stand out from the competition.
              Ready to dominate the industry and redefine modern living?
            </p>

            <div className="flex space-x-5 w-[100%] text-slate-400 pt-2">
              <span className="font-medium text-slate-400/80 mr-auto ml-auto uppercase">
                Follow us on:
              </span>
              <div className="flex space-x-4 mr-auto ml-auto">
                <a
                  href="#facebook"
                  className="hover:text-[#f28e2b] font-semibold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z" />
                  </svg>
                </a>
                <a
                  href="#instagram"
                  className="hover:text-[#f28e2b] font-semibold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#tiktok"
                  className="hover:text-[#110c0c] font-semibold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.14 1.02.9 2.33 1.42 3.7 1.43v3.91c-1.3-.01-2.58-.34-3.72-1-.29-.17-.57-.36-.83-.58v5.6c0 1.94-.53 3.84-1.54 5.42-1.46 2.18-3.99 3.52-6.62 3.48-2.88-.13-5.51-1.92-6.55-4.62-1.25-3.05-.29-6.73 2.36-8.73 1.49-1.09 3.33-1.61 5.17-1.44v3.96c-.95-.15-1.94.12-2.67.76-.92.74-1.31 1.97-1 3.11.31 1.25 1.4 2.17 2.69 2.23 1.34.03 2.56-.8 2.94-2.08.11-.38.16-.77.16-1.17V0z" />
                  </svg>
                </a>
                <a
                  href="#youtube"
                  className="hover:text-[#f28e2b] font-semibold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#linkedin"
                  className="hover:text-[#f28e2b] font-semibold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Nav Links Column: Quick Links (Now visible on sm: via sm:col-span-4) */}
          <div className=" hidden md:block  md:col-span-2 space-y-4 sm:col-span-4 mt-20 ">
            <h4 className="text-slate-900 font-bold text-[18px] tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[15px] text-gray-700 font-normal">
              <li>
                <a
                  href="#home"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  Project Cases
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column: Products Portfolio options */}
          <div className="hidden md:block md:col-span-2 space-y-4 sm:col-span-4 mt-20">
            <h4 className="text-slate-900 font-bold text-[20px] tracking-wide">
              Products
            </h4>
            <ul className="space-y-2.5 text-gray-700 font-normal">
              <li>
                <a
                  href="#IDONGSIK"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  Space IDONGSIK Houses
                </a>
              </li>
              <li>
                <a
                  href="#double"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  Double Deck Space IDONGSIK
                </a>
              </li>
              <li>
                <a
                  href="#single"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  Single Deck Space IDONGSIK
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column: Miscellaneous Resources */}
          <div className="hidden md:block md:col-span-2 space-y-4 sm:col-span-4 mt-20">
            <h4 className="text-slate-900 font-bold text-[20px] tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2.5 text-[15px] text-gray-700 font-normal">
              <li>
                <a
                  href="#news"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-[18px] font-semibold hover:text-[#f28e2b] transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>

            <div className="sm:pt-4">
              <button
                className="inline-flex items-center space-x-2 border border-slate-200 bg-slate-50/50 hover:bg-slate-50 px-3 py-1.
     5 rounded-lg text-xs text-slate-700 font-medium transition-colors"
              >
                <span>🇬🇧</span>
                <span>EN</span>
                <span className="text-[10px] text-slate-400">▲</span>
              </button>
            </div>
          </div>
        </div>
        <p className="text-[15px] font-base text-slate-400 text-center mt-12">
          Copyright © 2026 | IDONGSIk JUTAEKE All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home8;
