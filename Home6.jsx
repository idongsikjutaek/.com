import React, { useState, useEffect } from "react";
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';

const testimonialsData = [
  {
    id: 1,
    quote:
      "Our resort in Brazil had a real problem with slow builds and crazy high costs. But then we found  IDONGSIK JUTAEK's space IDONGSIK homes. The whole thing was way quicker, and the cost? Much lower! Guests love them.",
    name: "Marco Silva",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop",
  },
  {
    id: 2,
    quote:
      "I've been into real estate for a long time, but IDONGSIK JUTAEK's space IDONGSIK homes are something else. The design is super unique and gives my properties that extra edge. What I like most is how fast they go up.",
    name: "Yuki Tanaka",
    role: "Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop",
  },
  {
    id: 3,
    quote:
      "We were struggling with all the costs and waiting for construction to finish. When we tried IDONGSIK JUTAEK's modular space IDONGSIKs, things changed. They were quick to set up and cost way less. Our visitors love it.",
    name: "Maria Kostas",
    role: "Camp Owner",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&fit=crop",
  },
  {
    id: 4,
    quote:
      "As someone who builds backyard homes, I was looking for something easier, faster, and still good quality. IDONGSIK JUTAEK's homes fit the bill. Setting them up is so simple — like putting together a puzzle, really.",
    name: "Carlos Garcia",
    role: "Builder",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&fit=crop",
  },
  {
    id: 5,
    quote:
      "The structural integrity combined with the futuristic design completely blew us away. Shipping execution was flawless, and the setup was completed right on schedule. Highly recommended team!",
    name: "Alex Chen",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&fit=crop",
  },
];

const Home6 = () => {
  const [containerRef, isVisible] = useScrollAnimation();
  // Store the order of item indices in state
  const [items, setItems] = useState([0, 1, 2, 3, 4]);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    // Set up a 2-second interval timer
    const interval = setInterval(() => {
      // 1. Trigger the sliding animation css window
      setIsSliding(true);

      // 2. Wait for the 500ms CSS transition to finish, then cycle the array
      setTimeout(() => {
        setItems((prevItems) => {
          const [first, ...rest] = prevItems;
          return [...rest, first]; // Moves the left-most index item to the end of the line
        });
        // Reset translation position seamlessly
        setIsSliding(false);
      }, 700); // This duration matches the Tailwind duration-700 class below
    }, 3000); // 3000ms = 3 seconds event loop ticking rate

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`bg-white py-10 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden transition-all duration-1000 ${
        isVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
      }`}
    >
      <span className="text-xls uppercase tracking-widest font-bold text-orange-500 block mb-3 animate-fade-in-down">
        PROVEN SUCCESS
      </span>
      <h2 className="text-4xl text-center sm:text-5xl font-medium tracking-tight text-slate-900 mb-20 animate-fade-in-down entrance-delay-2">
        Success Stories <br /> From Our Partners
      </h2>

      {/* Outer viewport container limiting visibility to 3 cards width max */}
      <div className="w-full max-w-5xl overflow-hidden mb-[12px]">
        {/* Animated Moving Track */}
        <div
          className={`flex gap-6 transition-transform ease-out ${
            isSliding
              ? "duration-700 -translate-x-[calc(33.333%+16px)]" // Shifts left by exactly 1 card slot width + gap adjustment
              : "duration-0 translate-x-0"
          }`}
          style={{ width: "133.333%" }} // Extra width allocation for the 4th upcoming preview card buffer
        >
          {items.map((dataIndex) => {
            const item = testimonialsData[dataIndex];
            return (
              <div
                key={item.id}
                className="w-1/4 flex flex-col items-center text-center bg-white/40 p-6 rounded-2xl border border-white/60 shadow-sm shrink-0"
              >
                {/* Circular Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 font-normal leading-relaxed text-[14px] mb-6 line-clamp-4">
                  "{item.quote}"
                </p>

                {/* Name */}
                <h4 className="text-slate-900 font-semibold text-sm mb-0.5">
                  {item.name}
                </h4>

                {/* Role */}
                <span className="text-slate-400 text-[11px] font-medium tracking-wide uppercase">
                  {item.role}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home6;
