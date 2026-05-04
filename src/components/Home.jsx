import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Home() {
  // Array of professional engineering/construction images for right side slider
  const sliderImages = [
    "/images/home1.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/home4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect for right side image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="w-full bg-[#FEF9F0] min-h-screen">
      {/* Navbar - clean and professional */}
      <div className="relative z-20">
        <Navbar />
      </div>
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2">
            {/* Small badge / tagline */}
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              AVtech Plus LLP
            </div>
            
            {/* Main Heading - Using tagline from company details */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:leading-[1.2] mb-5">
              Let's dream & <br />
              build together.
            </h1>
            
            {/* Subheading - Using core message from company details */}
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-lg leading-relaxed">
              We make the spaces for businesses to recognize their vision — 
              delivering end-to-end engineering, construction, and infrastructure 
              solutions with precision, safety, and innovation.
            </p>
            
            {/* Trust Line - Updated with correct experience and legacy */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-orange-500 font-semibold text-sm md:text-base">✓</span>
              <span className="text-gray-600 text-sm md:text-base">
                25+ Years of Industry Experience | Legacy Since 1981 | Trusted Across India
              </span>
            </div>
            
            {/* CTA Buttons - Updated phone number */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="tel:+919717293621"
                className="bg-orange-500 text-white px-7 py-3.5 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold text-sm md:text-base shadow-md hover:shadow-lg"
              >
                Request Consultation
              </a>
              <a 
                href="#services"
                className="bg-white border border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300 font-semibold text-sm md:text-base"
              >
                View Services
              </a>
            </div>
            
            {/* Trust Badges - Updated with company strengths */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-sm font-medium">✓</span>
                <span className="text-gray-600 text-sm">Quality Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-sm font-medium">✓</span>
                <span className="text-gray-600 text-sm">Safety Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-sm font-medium">✓</span>
                <span className="text-gray-600 text-sm">End-to-End Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-sm font-medium">✓</span>
                <span className="text-gray-600 text-sm">Risk Minimization</span>
              </div>
            </div>
            
            {/* Trust text - Updated with client names from company details */}
            <p className="text-gray-500 text-xs md:text-sm border-l-3 border-orange-400 pl-3">
              Trusted by Reliance Industries, Alstom India, Tata Projects, CPWD, and more
            </p>
          </div>
          
          {/* Right Column - Image Slider */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#FFF5E6]">
              {/* Slider Image */}
              <div 
                className="w-full h-80 md:h-96 lg:h-[450px] bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: `url('${sliderImages[currentImageIndex]}')`,
                  backgroundColor: "#FFF0E0",
                }}
              >
                {/* Warm overlay for better blend */}
                <div className="w-full h-full bg-gradient-to-t from-[#FEF9F0]/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Slider Controls - Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-[#FEF9F0]/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex 
                        ? 'bg-orange-500 w-6 h-2' 
                        : 'bg-gray-400 w-2 h-2 hover:bg-gray-500'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentImageIndex((prev) => prev === 0 ? sliderImages.length - 1 : prev - 1)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#FEF9F0]/80 hover:bg-[#FEF9F0] rounded-full p-2 transition-colors duration-300 shadow-md"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => prev === sliderImages.length - 1 ? 0 : prev + 1)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FEF9F0]/80 hover:bg-[#FEF9F0] rounded-full p-2 transition-colors duration-300 shadow-md"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Image caption / counter */}
            <div className="text-center mt-3 text-sm text-gray-500">
              {currentImageIndex + 1} / {sliderImages.length} — Engineering excellence in action
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;