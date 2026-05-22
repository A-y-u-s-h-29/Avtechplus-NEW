import React from "react";
import { FiCheckCircle, FiAward, FiTarget, FiUsers, FiBriefcase, FiCpu } from "react-icons/fi";
import Vision from "../components/Vision";

const AboutAvtech = () => {
  const highlights = [
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Techno-Commercial Expertise",
      description: "Experts in bridging the gap between complex engineering design and commercial project feasibility."
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32 exo">
  
  {/* Background Decorative Element */}
  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[120px] opacity-40"></div>

  <div className="max-w-7xl mx-auto px-5 md:px-8">
    
    {/* Reduced Gap */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      
      {/* Image Content Side */}
      <div className="relative flex justify-center">
        
        {/* Reduced Image Container */}
        <div className="relative z-10 w-[85%] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group">
          
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
            alt="Infrastructure Engineering" 
            className="w-full h-[420px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Experience Card */}
          <div className="absolute bottom-6 left-6 bg-gray-900 text-white p-6 rounded-2xl shadow-2xl border-b-4 border-orange-500">
            <div className="flex flex-col">
              <span className="text-4xl font-black block leading-none mb-2">
                35+
              </span>

              <span className="text-[10px] uppercase font-black tracking-[0.3em] text-orange-500">
                YEARS OF INDUSTRY EXPERIENCE
              </span>
            </div>
          </div>
        </div>

        {/* Reduced Decorative Frame */}
        <div className="absolute -bottom-8 -right-2 w-48 h-48 border-[12px] border-gray-50 -z-0 rounded-[3rem] hidden lg:block"></div>
      </div>

      {/* Text Content Side */}
      <div className="flex flex-col">
        
        <div className="mb-10">
          
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-orange-500"></span>

            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em]">
              The AVtech Plus Legacy
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 uppercase leading-[0.95] italic">
            Engineering <br />
            <span className="text-orange-500">Solutions</span> <br />
            Since 2009
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 text-xl font-bold leading-relaxed">
              AVtech Plus LLP is a specialized consultancy firm providing techno-commercial expertise for Building, Infrastructure and Industrial Projects.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
  
  {/* Icon Features + MSME Certificate - Responsive Horizontal */}
<div className="flex flex-col sm:flex-row gap-8 sm:gap-6 items-start">
  
  {/* Icon Features + MSME Certificate - Always Horizontal */}
<div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
  
  {/* Techno-Commercial Expertise - Takes more space */}
  <div className="flex-[3]">
    {highlights.map((item, index) => (
      <div key={index} className="flex gap-3 sm:gap-6 items-start group">
        
        <div className="flex-shrink-0 bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-100 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
          <span className="text-orange-500 group-hover:text-white transition-colors">
            {React.cloneElement(item.icon, { className: "w-5 h-5 sm:w-7 sm:h-7" })}
          </span>
        </div>

        <div>
          <h4 className="font-black text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2 uppercase tracking-tight italic">
            {item.title}
          </h4>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* MSME Certificate - Fixed width */}
  <div className="flex-shrink-0">
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-3 sm:p-5 bg-orange-50 rounded-2xl border-l-4 border-orange-500 h-full min-w-[120px] sm:min-w-[180px]">
      
      <FiAward className="text-2xl sm:text-3xl text-orange-600 flex-shrink-0" />

      <p className="text-[10px] sm:text-sm font-bold text-gray-800 uppercase tracking-wide leading-tight text-center sm:text-left">
        MSME Certified Entity
      </p>
    </div>
  </div>
</div>
</div>
</div>
      </div>
    </div>

    {/* Values Horizontal Grid */}
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-t border-gray-100">
      {[
        { label: "Precision", desc: "Technical accuracy in every calculation" },
        { label: "Governance", desc: "Rigorous contract & audit management" },
        { label: "Agility", desc: "Rapid problem solving on-site" },
        { label: "Integrity", desc: "Zero-compromise ethics" }
      ].map((val, i) => (
        <div key={i} className="flex flex-col">
          
          <span className="text-orange-500 font-black text-2xl uppercase italic mb-2 tracking-tighter">
            {val.label}
          </span>

          <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
            {val.desc}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default AboutAvtech;