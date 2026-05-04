import React from "react";
import { FiCheckCircle, FiAward, FiTarget, FiUsers } from "react-icons/fi";
import Vision from "../components/Vision";

const AboutAvtech = () => {
  const highlights = [
    {
      icon: <FiAward className="text-orange-500 w-6 h-6" />,
      title: "Legacy of Excellence",
      description: "Founded in 1981, delivering precision engineering for over four decades."
    },
    {
      icon: <FiTarget className="text-orange-500 w-6 h-6" />,
      title: "Techno-Commercial Expertise",
      description: "Bridging the gap between technical design and commercial viability."
    },
    {
      icon: <FiUsers className="text-orange-500 w-6 h-6" />,
      title: "Expert Consulting",
      description: "A core team of industry veterans dedicated to project success."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Content Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Site Engineering" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Experience Card */}
              <div className="absolute bottom-6 right-6 bg-orange-500 p-6 shadow-xl hidden md:block">
                <div className="text-white">
                  <span className="text-4xl font-black block leading-none">40+</span>
                  <span className="text-xs uppercase font-bold tracking-widest">Years of Experience</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Frames */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-8 border-gray-100 -z-0 rounded-2xl hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-100 -z-0 rounded-full blur-2xl opacity-60"></div>
          </div>

          {/* Text Content Side */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-orange-500 font-black text-sm uppercase tracking-[0.2em] mb-3 block">
                Since 1981
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase exo leading-tight">
                About <span className="text-orange-500 text-outline">AVtech</span> Plus LLP
              </h2>
              <div className="w-20 h-1.5 bg-orange-500 mb-8"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                AVtech Plus LLP is a premier techno-commercial consultancy firm specializing in the infrastructure sector. We provide end-to-end solutions that encompass planning, estimation, construction management, and forensic audits.
              </p>
              
              <p className="text-gray-500 leading-relaxed mb-8">
                Our legacy is built on a foundation of integrity and technical prowess. We assist project owners and contractors in navigating the complexities of large-scale civil engineering projects, ensuring efficiency, transparency, and high-quality delivery.
              </p>
            </div>

            {/* Icon Features */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-orange-50 p-3 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 uppercase exo tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-12 p-6 bg-gray-50 border-l-4 border-orange-500">
              <p className="italic text-gray-700 font-medium">
                "Our mission is to empower the infrastructure landscape through rigorous technical standards and innovative management strategies."
              </p>
            </div>
          </div>

        </div>

        {/* Values Horizontal Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-100">
          {[
            { label: "Integrity", desc: "Uncompromising ethics" },
            { label: "Innovation", desc: "Modern methodologies" },
            { label: "Quality", desc: "Excellence in detail" },
            { label: "Reliability", desc: "Consistent results" }
          ].map((val, i) => (
            <div key={i} className="text-center md:text-left">
              <span className="block text-orange-500 font-black text-xl uppercase mb-1">{val.label}</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">{val.desc}</span>
            </div>
          ))}
        </div>
        <Vision />
      </div>
    </section>
  );
};

export default AboutAvtech;