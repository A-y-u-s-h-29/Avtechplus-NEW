import React, { useState } from "react";
import { FiMaximize2, FiMapPin, FiExternalLink } from "react-icons/fi";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      id: 1,
      title: "E-Loco Factory Township",
      location: "Madhepura, Bihar",
      category: "Industrial",
      size: "col-span-2 row-span-2", // Large Featured
      url: "/images/gallery.jpg"
    },
    {
      id: 2,
      title: "+2 Level School Building",
      location: "Bihar",
      category: "Education",
      size: "col-span-1 row-span-1",
      url: "/images/gallery1.avif"
    },
    {
      id: 3,
      title: "GIS Base Substation 220 KVA",
      location: "Gaya, Bihar",
      category: "Power",
      size: "col-span-1 row-span-1",
      url: "/images/gallery2.jpg"
    },
    {
      id: 4,
      title: "Road Construction Project",
      location: "27 KM Stretch",
      category: "Infrastructure",
      size: "col-span-1 row-span-2", // Tall
      url: "/images/gallery3.jpg"
    },
    {
      id: 5,
      title: "Vedant Hospital",
      location: "Patna, Bihar",
      category: "Healthcare",
      size: "col-span-1 row-span-1",
      url: "/images/gallery4.jpg"
    }
  ];

  return (
    <section className="bg-[#111] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
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

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`relative overflow-hidden group rounded-xl ${img.size}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover "
              />

              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2 block">
                    {img.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase exo mb-2 leading-tight">
                    {img.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
                    <FiMapPin className="text-orange-500" />
                    <span className="uppercase font-bold tracking-tighter">{img.location}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded hover:bg-orange-600 transition-colors">
                      <FiMaximize2 /> View Large
                    </button>
                    <button className="p-2 border border-white/20 text-white rounded hover:bg-white hover:text-black transition-all">
                      <FiExternalLink />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Corner Tag (Visible when not hovered) */}
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded text-[9px] font-black text-white uppercase tracking-widest group-hover:opacity-0 transition-opacity">
                0{index + 1} // {img.category}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Capabilities Bottom Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-800">
            <div className="flex flex-col gap-2">
                <h4 className="text-white font-black uppercase exo text-sm">Industrial Scale</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Images represent 1,000,000+ Cub of soil embankment and critical Site-Mix-Concrete (SMC) operations.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-white font-black uppercase exo text-sm">Civil Precision</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Visual documentation of G+3 educational facilities and complex GIS base substations for PGCIL/L&T.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-white font-black uppercase exo text-sm">Pan-India Mobilization</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Project sites span Bihar, Jharkhand, and Uttar Pradesh, executed through our elite centralized resource pool.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;