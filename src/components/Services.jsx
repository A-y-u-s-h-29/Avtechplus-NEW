import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: 1,
      title: "Detailed Project Report (DPR)",
      description: "Comprehensive site surveys, feasibility studies, and business strategy development for infrastructure projects.",
      image: "/images/services1.jpg",
      category: "consulting",
      features: ["Site Survey & Analysis", "Feasibility Study", "Business Strategy", "Risk Assessment"]
    },
    {
      id: 2,
      title: "Estimation & Costing",
      description: "Accurate project cost estimation including CTC cost analysis and S-Curve-based cost tracking.",
      image: "/images/services2.avif",
      category: "consulting",
      features: ["CTC Cost Analysis", "S-Curve Tracking", "Budget Planning", "Cost Optimization"]
    },
    {
      id: 3,
      title: "Forensic & Techno-commercial Audit",
      description: "Independent assessment of project health, cost overruns, and commercial risk identification.",
      image: "/images/services3.jpg",
      category: "audit",
      features: ["Project Health Assessment", "Cost Overrun Analysis", "Risk Identification", "Compliance Check"]
    },
    {
      id: 4,
      title: "Project Construction Management",
      description: "Real-time dashboards, contract management, and performance tracking for active projects.",
      image: "/images/services4.jpg",
      category: "management",
      features: ["Real-time Dashboards", "Contract Management", "Performance Tracking", "Progress Reporting"]
    },
    {
      id: 5,
      title: "Supply Chain Management",
      description: "Strategic sourcing, material planning, and logistics optimization for construction projects.",
      image: "/images/services4.avif",
      category: "management",
      features: ["Strategic Sourcing", "Material Planning", "Logistics Optimization", "Inventory Control"]
    },
    {
      id: 6,
      title: "Design & Drawing / Architectural Modelling",
      description: "Technical drawings, 3D modelling, and design validation for civil engineering projects.",
      image: "/images/services5.avif",
      category: "design",
      features: ["Technical Drawings", "3D Modelling", "Design Validation", "Structural Analysis"]
    },
    {
      id: 7,
      title: "Project Management Consulting",
      description: "End-to-end project oversight from initiation to closure with expert guidance.",
      image: "/images/services6.avif",
      category: "consulting",
      features: ["Project Initiation", "Resource Planning", "Risk Management", "Quality Control"]
    },
    {
      id: 8,
      title: "Contracts Management",
      description: "Contract negotiation, administration, and dispute resolution services.",
      image: "/images/services7.jpg",
      category: "management",
      features: ["Contract Negotiation", "Administration", "Dispute Resolution", "Legal Compliance"]
    },
    {
      id: 9,
      title: "Planning & Design",
      description: "Architectural and structural planning for roads, buildings, and infrastructure projects.",
      image: "/images/services8.avif",
      category: "design",
      features: ["Architectural Planning", "Structural Design", "Infrastructure Layout", "Technical Specifications"]
    }
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "consulting", name: "Consulting" },
    { id: "management", name: "Management" },
    { id: "design", name: "Design & Planning" },
    { id: "audit", name: "Audit & Risk" }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.2em]">Our Expertise</span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-3 mb-4 uppercase exo">
            Engineering <span className="text-orange-500">& Services</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Professional techno-commercial solutions tailored for complex infrastructure and construction lifecycles.
          </p>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                activeTab === category.id
                  ? "bg-orange-500 border-orange-500 text-white shadow-lg"
                  : "bg-transparent border-gray-200 text-gray-500 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-52 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-tighter">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase exo group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wide">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar - Rounded corners */}
        <div className="mt-20 bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-white text-2xl font-bold exo uppercase mb-2">Need a custom techno-commercial audit?</h4>
            <p className="text-gray-400">Our experts are ready to analyze your project health and risk factors.</p>
          </div>
          <button className="relative z-10 bg-orange-500 text-white px-8 py-4 font-black uppercase tracking-widest text-xs rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            Contact Our Team
          </button>
          <div className="absolute top-0 right-0 w-32 h-full bg-orange-500/10 -skew-x-12 translate-x-10"></div>
        </div>

      </div>
    </div>
  );
};

export default Services;