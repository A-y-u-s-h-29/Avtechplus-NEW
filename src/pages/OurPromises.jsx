import React from "react";
import { FiShield, FiClock, FiLayers, FiSearch, FiTrendingUp, FiUserCheck } from "react-icons/fi";

const OurPromises = () => {
  const promises = [
    {
      id: 1,
      icon: <FiShield className="w-8 h-8" />,
      title: "Uncompromising Integrity",
      description: "We maintain the highest ethical standards in every audit and consultancy, ensuring unbiased reporting and transparent communication.",
      tag: "TRUST"
    },
    {
      id: 2,
      icon: <FiClock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Infrastructure projects are time-sensitive. We promise strict adherence to project milestones and delivery schedules without quality compromise.",
      tag: "SPEED"
    },
    {
      id: 3,
      icon: <FiLayers className="w-8 h-8" />,
      title: "Technical Accuracy",
      description: "Leveraging four decades of engineering data to provide precise estimations, designs, and techno-commercial validations.",
      tag: "PRECISION"
    },
    {
      id: 4,
      icon: <FiSearch className="w-8 h-8" />,
      title: "Forensic Detail",
      description: "Our approach to audits is granular. We identify hidden risks and cost overruns that typical oversight might miss.",
      tag: "DETAIL"
    },
    {
      id: 5,
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Value Optimization",
      description: "We don't just manage; we optimize. We promise to find cost-effective solutions that enhance the commercial viability of your project.",
      tag: "ROI"
    },
    {
      id: 6,
      icon: <FiUserCheck className="w-8 h-8" />,
      title: "Expert Supervision",
      description: "Every project is overseen by senior consultants with deep domain expertise in Road, Rail, and Building infrastructure.",
      tag: "EXPERTISE"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
              The AVtech Commitment
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase exo leading-[0.9]">
              Our <span className="text-orange-500">Promises</span>
            </h2>
            <div className="w-24 h-2 bg-orange-500 mt-6"></div>
          </div>
          <p className="text-gray-500 font-medium text-lg md:max-w-xs border-l-2 border-gray-200 pl-6">
            We don't just sign contracts; we build partnerships based on these core pillars.
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-2xl">
          {promises.map((promise) => (
            <div 
              key={promise.id} 
              className="bg-white p-10 md:p-12 transition-all duration-500 group hover:bg-gray-900"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                  {promise.icon}
                </div>
                <span className="text-[10px] font-black tracking-widest text-gray-300 group-hover:text-orange-500 transition-colors">
                  {promise.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase exo group-hover:text-white transition-colors">
                {promise.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                {promise.description}
              </p>
              
              <div className="mt-8 w-8 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Guarantee Seal / CTA */}
        <div className="mt-20 flex flex-col items-center">
          <div className="bg-white border-2 border-dashed border-gray-300 p-8 md:p-12 text-center max-w-4xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-50 px-4 text-orange-500 font-bold uppercase text-xs tracking-widest">
              Standard of Operations
            </div>
            <h4 className="text-2xl md:text-3xl font-black text-gray-900 uppercase exo mb-4">
              Your Project, Our <span className="text-orange-500">Responsibility</span>
            </h4>
            <p className="text-gray-500 max-w-2xl mx-auto">
              At AVtech Plus LLP, we ensure that every techno-commercial aspect of your infrastructure project is handled with 100% transparency. If a risk exists, we find it. If a saving is possible, we realize it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromises;