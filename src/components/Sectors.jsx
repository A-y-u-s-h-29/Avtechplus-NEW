import React, { useState, useEffect } from "react";

const Sectors = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectors = [
    {
      id: 1,
      name: "Road Projects",
      icon: "🛣️",
      description: "Comprehensive road infrastructure development including highways, expressways, rural roads, and urban road networks.",
      features: [
        "Highway Construction",
        "Rural Road Development",
        "Urban Road Networks",
        "Bridge & Flyover Construction",
        "Road Widening & Upgradation"
      ],
      image: "/images/sector1.jpg",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 2,
      name: "Rail & Metro Projects",
      icon: "🚆",
      description: "Specialized railway infrastructure and metro rail systems development with precision engineering.",
      features: [
        "Railway Track Construction",
        "Metro Rail Systems",
        "Station Infrastructure",
        "Electrification Support",
        "Railway Bridge Construction"
      ],
      image: "/images/sector2.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Building Projects",
      icon: "🏢",
      description: "End-to-end building construction for commercial, industrial, and institutional sectors.",
      features: [
        "Commercial Complexes",
        "Industrial Buildings",
        "Institutional Structures",
        "Residential Towers",
        "Warehouse & Logistics Centers"
      ],
      image: "/images/sector3.jpg",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Irrigation Projects",
      icon: "💧",
      description: "Water management and irrigation infrastructure for sustainable agricultural development.",
      features: [
        "Canal Construction",
        "Dam & Reservoir Projects",
        "Water Distribution Networks",
        "Lift Irrigation Schemes",
        "Flood Control Systems"
      ],
      image: "/images/sector4.jpg",
      color: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { value: "25+", label: "Years of Experience", icon: "📅" },
    { value: "1981", label: "Legacy Since", icon: "🏛️" },
    { value: "100+", label: "Projects Completed", icon: "✅" },
    { value: "20+", label: "Client Partners", icon: "🤝" }
  ];

  const trustedClients = [
    "Reliance Industries Limited",
    "Alstom India Limited",
    "CPWD India",
    "Tata Projects Limited",
    "JICA Japan",
    "Isolux Corsan Spain"
  ];

  return (
    <div className="bg-[#F6F7F9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3">
            Sectors We <span className="text-orange-500">Serve</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering engineering excellence across diverse infrastructure domains
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-orange-500">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Icon & Content Side */}
                <div className="flex-1 p-6 md:p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-300`}>
                    <span className="text-2xl">{sector.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {sector.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {sector.description}
                  </p>
                  
                  <div className="space-y-2">
                    {sector.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        <span className="text-gray-700 text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Real Image Side */}
                <div className="md:w-56 lg:w-48 relative overflow-hidden h-48 md:h-auto">
                  <img 
                    src={sector.image} 
                    alt={sector.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Overlay to make text pop if needed, though here it's for style */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Process Section */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-16 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
              Our Work Approach
            </h2>
            <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stage: "01", title: "Pre-construction", items: ["Site Analysis", "Planning", "Costing", "Risk Evaluation"] },
              { stage: "02", title: "Construction", items: ["Execution", "Supervision", "Quality Control", "Resource Management"] },
              { stage: "03", title: "Monitoring & Control", items: ["Performance Tracking", "Reporting", "Optimization", "Compliance"] },
              { stage: "04", title: "Completion", items: ["Documentation", "Validation", "Project Handover", "Client Sign-off"] }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
                    <span className="text-white font-bold text-sm">{process.stage}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase">{process.title}</h4>
                  <ul className="space-y-1.5">
                    {process.items.map((item, idx) => (
                      <li key={idx} className="text-gray-500 text-[13px]">{item}</li>
                    ))}
                  </ul>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Clients Section */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Trusted By Industry Leaders
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto mt-4"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
                {trustedClients.map((client, index) => (
                <span
                    key={index}
                    className="bg-white/5 border border-white/10 text-gray-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-default"
                >
                    {client}
                </span>
                ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sectors;