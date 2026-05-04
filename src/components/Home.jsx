import React, { useState, useEffect } from "react";
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
          <div className="w-full lg:w-3/5 relative z-10">
            <div className="inline-flex items-center gap-3 bg-gray-900 text-white text-xs font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Engineering the Future
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-6xl font-black text-gray-900 leading-[0.9] mb-8 uppercase italic">
              Let's dream<br />
              <span className="text-orange-500">&</span> <br />
        build together.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed border-l-8 border-gray-100 pl-8 font-medium">
              AVtech Plus LLP delivers end-to-end engineering and infrastructure 
              solutions with a legacy of precision since 1981.
            </p>

            {/* Feature Tags */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
               {[
                 { icon: <FiShield />, text: "Safety First" },
                 { icon: <FiAward />, text: "Quality Driven" },
                 { icon: <FiCheckCircle />, text: "Legacy 1981" },
                 { icon: <FiAward />, text: "EPC Experts" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="text-orange-500 text-xl">{item.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{item.text}</span>
                 </div>
               ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <a
                href="tel:+919717293621"
                className="group flex items-center justify-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl hover:bg-orange-500 transition-all duration-300 font-black uppercase text-sm tracking-widest shadow-2xl"
              >
                <FiPhone className="text-orange-500 group-hover:text-white" />
                Request Consultation
              </a>
              <a
                href="/services"
                className="group flex items-center justify-center gap-4 bg-white border-2 border-gray-200 text-gray-900 px-10 py-5 rounded-2xl hover:border-gray-900 transition-all duration-300 font-black uppercase text-sm tracking-widest"
              >
                View Portfolio
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em]">
              Trusted Partner: Reliance • Tata Projects • CPWD • Alstom
            </p>
          </div>

          {/* Right Column: Industrial Slider */}
          <div className="w-full lg:w-2/5 relative">
            {/* Architectural Frame Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border-t-8 border-r-8 border-orange-500/20 rounded-tr-[5rem] pointer-events-none hidden lg:block"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] bg-gray-100 aspect-[4/5]">
              {/* Image Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-110"
                style={{
                  backgroundImage: `url('${sliderImages[currentImageIndex]}')`,
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>

              {/* Slider UI Elements */}
              <div className="absolute bottom-10 left-0 w-full px-10">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                     <p className="text-orange-500 font-black text-xs uppercase tracking-[0.5em]">Current Project</p>
                     <h3 className="text-white text-3xl font-black uppercase tracking-tight italic">Structural Excellence</h3>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))}
                      className="bg-white/10 backdrop-blur-md hover:bg-orange-500 text-white p-4 rounded-xl transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))}
                      className="bg-white/10 backdrop-blur-md hover:bg-orange-500 text-white p-4 rounded-xl transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 mt-8">
                  {sliderImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        index === currentImageIndex ? 'bg-orange-500 w-12' : 'bg-white/20 w-4'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Years of Experience Floating Card */}
            <div className="absolute -bottom-6 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
               <p className="text-4xl font-black text-gray-900 mb-1">25+</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Years of<br/>Expertise</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;