import React, { useState } from "react";
import { FiMaximize2, FiMapPin, FiExternalLink } from "react-icons/fi";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <section className="bg-[#111] py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
              Visual Documentation
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase exo leading-none">
              Project <span className="text-orange-500">Exhibition</span>
            </h2>
            <div className="w-20 h-2 bg-orange-500 mt-6"></div>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm border-l border-gray-800 pl-6">
            A photographic journey through our core-sector engagements, showcasing the precision and scale of our turnkey deliveries across India.
          </p>
        </div>

        {/* Under Construction Heading */}
        <div className="flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center">
            Page Under{" "}
            <span className="text-orange-500">Construction</span>
          </h1>
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;