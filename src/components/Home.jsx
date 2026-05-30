import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone, FiCheckCircle, FiShield, FiAward } from "react-icons/fi";

function Home() {
  const sliderImages = [
    "/images/home1.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/home4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="w-full bg-white min-h-screen exo overflow-hidden">
      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-20 md:pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Content */}
<div className="w-full lg:w-3/5 relative z-10 text-center">
  <div className="inline-flex items-center gap-3 bg-gray-900 text-white text-xs font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-8 mx-auto">
    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
    Engineering the Future
  </div>

  <h1 className="text-2xl md:text-3xl lg:text-6xl font-black text-gray-900 leading-[1.1] md:leading-[0.9] mb-8 uppercase italic">
    Let's dream<br />
    <span className="text-orange-500">&</span> <br />
    build together.
  </h1>

  <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed border-l-8 border-gray-100 pl-8 font-medium mx-auto lg:pl-8">
    AVtech Plus LLP delivers end-to-end engineering and infrastructure 
    solutions with a legacy of precision.
  </p>
</div>

         {/* Right Column: Industrial Image */}
<div className="w-full lg:w-2/5 relative">
  {/* Architectural Frame Decoration */}
  <div className="absolute -top-10 -right-10 w-64 h-64 border-t-8 border-r-8 border-orange-500/20 rounded-tr-[5rem] pointer-events-none hidden lg:block"></div>
  
  <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] bg-gray-100 aspect-[4/5]">
    {/* Image Layer */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('/images/hero1.jpeg')`,
      }}
    />
    
    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>

    {/* Static UI Elements
    <div className="absolute bottom-10 left-0 w-full px-10">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <p className="text-orange-500 font-black text-xs uppercase tracking-[0.5em]">Featured Project</p>
          <h3 className="text-white text-3xl font-black uppercase tracking-tight italic">MAIN Project</h3>
        </div>
      </div>
    </div> */}
  </div>
</div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;