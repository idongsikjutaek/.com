import React, { useState } from "react";
import useScrollAnimation from "./hooks/useScrollAnimation";
import "./styles/waterFlow.css";
import "./styles/pageAnimations.css";
import Cone from "./picture/cone.jpg";
import sets from "./picture/sets.jpg";
import canopy from "./picture/canopy.jpg";
import sola from "./picture/sola.jpg";
import group from "./picture/group.jpg";
import packing from "./picture/packing.jpg";
import double from "./picture/double.jpg";
import rent from "./picture/rent.jpg";
import couples from "./picture/couples.jpg";
import bed from "./picture/bed.jpg";
import big from "./picture/big.jpg";
import fish from "./picture/fish.jpg";
import white from "./picture/white.jpg";
import pink from "./picture/pink.jpg";
import around from "./picture/around.jpg";
import { Link } from "react-router-dom";

// Sample mock data matching the articles in your video
const initialArticles = [
  {
    id: 1,
    category: "INDUSTRY INSIGHTS, UNCATEGORIZED",
    title: "How to Calculate IDONGSIk House Cost: 2026 Guide",
    excerpt:
      "IDONGSIk house cost calculations have become crucial as the modular housing market reaches $97.7 billion by 2025, according to Cognitive Market Research. Whether [...]",
    author: "YANG",
    date: "MAY 21, 2026",
    image: Cone, // Replace with your actual asset path
    href: "/constant",
  },
  {
    id: 2,
    category: "FEATURES & BENEFITS",
    title: "Stackable Tiny Houses: What You Need to Know",
    excerpt:
      "Stackable Tiny Houses: The Smart, Space Saving Way to Build and Live The housing market is expensive, land is scarce, and traditional [...]",
    author: "YANG",
    date: "MAY 19, 2026",
    image: sets, // Replace with your actual asset path
    href: "/sets",
  },
  {
    id: 3,
    category: "FEATURES & BENEFITS",
    title: "The Buyer's Guide to Modular IDONGSIk Homes",
    excerpt:
      "The way people think about housing is changing, and modular IDONGSIk homes are sitting right at the centre of that shift. Once seen [...]",
    author: "YANG",
    date: "MAY 17, 2026",
    image: canopy, // Replace with your actual asset path
   
  },
  {
    id: 4,
    category: "FEATURES & BENEFITS",
    title: "How Much Does a IDONGSIk JUTAEK Cost in 2026? Ultimate Guide",
    excerpt:
      'If you\'ve searched "IDONGSIk JUTAEK price," "IDONGSIk JUTAEK cost," or "how much is a IDONGSIk JUTAEK home," you\'ve likely landed on several [...]',
    author: "DEMO",
    date: "MAY 11, 2026",
    
  },
  {
    id: 5,
    category: "INDUSTRY INSIGHTS",
    title: "Top 10 Dome House Kits USA Buyers Are Choosing in 2026",
    excerpt:
      "Dome house kits USA buyers are reshaping how Americans think about shelter, sustainability, and architectural freedom. Whether you're drawn to the storm-resistant [...]",
    author: "YANG",
    date: "MAY 9, 2026",
    image: group, // Replace with your actual asset path
    
  },
  {
    id: 6,
    category: "INDUSTRY INSIGHTS",
    title: "Ultimate Guide to Space IDONGSIk Homes Architecture 2026",
    excerpt:
      "Space IDONGSIk homes are transforming modern architecture through innovative design principles that combine with sustainable living solutions. The global prefabricated construction market reached [...]",
    author: "YANG",
    date: "APRIL 11, 2026",
    image: packing, // Replace with your actual asset path
   
  },
  {
    id: 7,
    category: "INDUSTRY INSIGHTS",
    title: "Affordable Expandable Houses for Future-Ready Living",
    excerpt:
      "As housing costs rise and lifestyles become more dynamic, many people are rethinking what a “forever home” looks like. Instead of buying […]",
    author: "YANG",
    date: "April 7, 2026",
    image: double, // Replace with your actual asset path
    
  },
  {
    id: 8,
    category: "INDUSTRY INSIGHTS",
    title: "Is It Better to Rent or Buy a Prefab House?",
    excerpt:
      "The question “is it better to rent or buy a house” is becoming increasingly common as prefab construction gains mainstream acceptance. Once […]",
    author: "YANG",
    date: "April 6, 2026",
    image: rent, // Replace with your actual asset path
    
  },
  {
    id: 9,
    category: "INDUSTRY INSIGHTS",
    title: "How to Maximize Small Living Spaces in IDONGSIk Houses",
    excerpt:
      "The rise of IDONGSIk houses has transformed the vacation rental market. With travelers increasingly seeking affordable, unique, and sustainable stays, maximizing small […]",
    author: "YANG",
    date: "March 31, 2026",
    image: couples,
  },
  {
    id: 10,
    category: "INDUSTRY INSIGHTS",
    title: "IDONGSIk House Hygiene 101: Keep Your Home Fresh and Clean",
    excerpt:
      "Space IDONGSIk homes are transforming modern architecture through innovative design principles that combine with sustainable living solutions. The global prefabricated construction market reached [...]",
    author: "YANG",
    date: "FEBURARY 28, 2026",
    image: bed, // Replace with your actual asset path
   
  },
  {
    id: 11,
    category: "INDUSTRY INSIGHTS",
    title: "How Are Prefabricated Houses Constructed: A Step Guide",
    excerpt:
      "Prefabricated homes are becoming popular as people look for faster, cheaper, and greener ways to build. This article explores how are prefabricated […]",
    author: "YANG",
    date: "FEBURARY 24, 2026",
    image: big, // Replace with your actual asset path
    
  },
  {
    id: 12,
    category: "INDUSTRY INSIGHTS",
    title: "What to Know Before Buying a Prefab House in 2025",
    excerpt:
      "Prefab homes are gaining popularity for their lower costs and quick construction. If you’re wondering what to know before buying a prefab […]",
    author: "YANG",
    date: "FEBURARY 20, 2026",
    image: fish, // Replace with your actual asset path
    
  },
  {
    id: 13,
    category: "INDUSTRY INSIGHTS",
    title: "What is a IDONGSIk House? An Affordable Luxurious Living",
    excerpt:
      "Want a luxury home that’s stylish, small, and sustainable—but also affordable? It almost feels too good to be true. But guess what—it’s […]",
    author: "YANG",
    date: "FEBURARY 17, 2026",
    image: white, // Replace with your actual asset path
    
  },
  {
    id: 14,
    category: "INDUSTRY INSIGHTS",
    title: "Navigating Dome Home Laws in the USA: A Guide",
    excerpt:
      "Ever wondered if your dream dome could be more than just an Instagram-worthy structure? Dome homes are redefining living spaces for hotels, […]",
    author: "The IDONSIK Team",
    date: "FEBURARY 12, 2026",
    image: pink, // Replace with your actual asset path
    
  },
  {
    id: 15,
    category: "INDUSTRY INSIGHTS",
    title: "The Top 10 Benefits of a Dome House You Need to Know",
    excerpt:
      "The benefits of a dome house are undeniable, offering everything from sustainability to long-term savings. Whether you’re an eco-conscious builder or a […]",
    author: "YANG",
    date: "FEBURARY 5, 2025",
    image: around, // Replace with your actual asset path
    
  },
]

const News1 = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [containerRef, isVisible] = useScrollAnimation();
  const [hasLoaded, setHasLoaded] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Show only first 6 articles initially, or all if expanded
  const displayedArticles = isExpanded ? articles : articles.slice(0, 6);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Container matching your layout alignment */}
      <div
        ref={containerRef}
        className={`max-w-[1200px] mx-auto px-3 py-6 md:px-0 md:py-0 lg:px-4 lg:py-12 lg:pb-12 transition-all duration-1000 ${
          hasLoaded ? "animate-water-flow-up" : "animate-water-flow-up"
        }`}
      >
        {/* Main 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8  gap-y-12">
          {displayedArticles.map((article, index) => {
            const isNewArticle = index >= 6;
            const staggerIndex = isNewArticle ? index - 6 : 0;
            const animationClass =
              isNewArticle && isExpanded
                ? "animate-water-flow-up"
                : isNewArticle && !isExpanded
                  ? "animate-water-flow-out-down"
                  : "";

            return (
              <article
                key={article.id}
                className={`flex flex-col group cursor-pointer ${animationClass}`}
                style={{
                  animationDelay: `${staggerIndex * 80}ms`,
                }}
              >
                {/* Image Container with Hover Effect */}
                <Link to={article.href || "/constant"}>
                 
                  <div
                    className="overflow-hidden rounded-md 
              mb-4 h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-200"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover 
                  transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Category Tag */}
                <span
                  className="text-[13px] p-2 font-bold uppercase 
              tracking-wider text-orange-500 mb-2"
                >
                  {article.category}
                </span>

                {/* Title */}
                <h2
                  className="text-xl p-2 font-bold text-slate-800 
              leading-snug mb-3 hover:text-orange-500 
              transition-colors duration-200 line-clamp-2"
                >
                  <Link to={article.href || "/constant"}>{article.title}</Link>
                </h2>

                {/* Description Paragraph */}
                <p
                  className=" md:text-[17px] p-2 text-gray-500 leading-relaxed 
              mb-4 flex-grow line-clamp-3"
                >
                  {article.excerpt}
                </p>

                {/* Metadata Footer */}
                <div
                  className="flex p-2  items-center text-[11px] font-bold
              text-gray-400 gap-2 uppercase 
              tracking-wide pt-2 border-t border-gray-100"
                >
                  <span className="text-gray-600">{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More Button Wrapper */}
        <div className="flex justify-center mt-16 mb-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2.5 border border-orange-500 text-orange-500 rounded text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 uppercase tracking-wider"
          >
            {isExpanded ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default News1;
