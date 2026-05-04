import React from "react";
import { FiBox, FiTrendingUp, FiShield, FiCpu, FiTool, FiCheckCircle } from "react-icons/fi";

const TurnkeyServices = () => {
  const servicePhases = [
    {
      title: "Conceptualization & Design",
      desc: "Architectural planning, structural design, and method engineering customized for industrial requirements.",
      icon: <FiCpu />,
    },
    {
      title: "Procurement & SCM",
      desc: "Leveraging our centralized SCM experts for bulk material supply and resource optimization.",
      icon: <FiBox />,
    },
    {
      title: "Execution & Civil Works",
      desc: "Precision construction of G+3 buildings, townships, GIS substations, and site offices.",
      icon: <FiTool />,
    },
    {
      title: "Quality & Governance",
      desc: "Strict adherence to safety standards and high-governance project management protocols.",
      icon: <FiShield />,
    }
  ];

  const highlights = [
    "Single Point Responsibility",
    "Optimized Resource Allocation",
    "Cost-Effective Engineering",
    "Timely Milestone Delivery"
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: The Concept */}
          <div className="lg:w-1/3">
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
              EPC Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase exo leading-none mb-6">
              Turnkey <span className="text-orange-500 text-outline">Services</span>
            </h2>
            <div className="w-20 h-2 bg-orange-500 mb-8"></div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              AVtech Plus LLP provides comprehensive <strong>Turnkey Solutions</strong> that integrate design, engineering, and execution. By acting as a single point of responsibility, we accelerate value creation for our clients.
            </p>

            <div className="space-y-4">
              {highlights.map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <FiCheckCircle className="text-orange-600 text-xs" />
                  </div>
                  <span className="text-xs font-black text-gray-800 uppercase tracking-tight">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-2xl relative overflow-hidden group">
               <FiTrendingUp className="absolute -right-4 -bottom-4 text-white/10 text-9xl group-hover:scale-110 transition-transform duration-700" />
               <h4 className="text-white font-black uppercase exo text-xl mb-2 relative z-10">30% Faster</h4>
               <p className="text-gray-400 text-xs leading-relaxed relative z-10">Average reduction in mobilization time through our centralized resource pool deployment.</p>
            </div>
          </div>

          {/* Right: The Service Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicePhases.map((phase, index) => (
              <div 
                key={index} 
                className="group p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:border-orange-500 transition-all duration-500 relative"
              >
                <div className="text-4xl text-gray-300 group-hover:text-orange-500 mb-6 transition-colors duration-300">
                  {phase.icon}
                </div>
                
                <div className="absolute top-8 right-8 text-4xl font-black text-gray-100 group-hover:text-orange-500/10 transition-colors">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-black text-gray-900 uppercase exo mb-4">
                  {phase.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {phase.desc}
                </p>

                <div className="mt-8 flex items-center gap-2">
                    <div className="h-px w-8 bg-orange-500"></div>
                    <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Phase Standard
                    </span>
                </div>
              </div>
            ))}

            {/* General Capabilities Info Card */}
            <div className="md:col-span-2 mt-4 p-8 bg-orange-500 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-md">
                    <h5 className="font-black uppercase exo text-lg leading-tight">Total Project Lifecycle Management</h5>
                    <p className="text-orange-100 text-[11px] font-bold uppercase tracking-widest mt-1">From Greenfield concepts to Brownfield optimizations</p>
                </div>
                <button className="whitespace-nowrap px-8 py-3 bg-gray-900 hover:bg-black text-white font-black uppercase text-xs tracking-[0.2em] transition-all">
                    View Capability Document
                </button>
            </div>
          </div>

        </div>

        {/* Bottom General Text for length */}
        <div className="mt-20 pt-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
                <h6 className="font-black text-gray-900 uppercase text-sm tracking-tighter">Instrumental Value Creation</h6>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Our turnkey model ensures that every aspect—from soil embankment and bulk material supply (up to 20 Crore) to Site-Mix-Concrete (SMC)—is managed under a unified governance structure. We don't just build; we optimize the entire commercial ecosystem of the project.
                </p>
            </div>
            <div className="space-y-4">
                <h6 className="font-black text-gray-900 uppercase text-sm tracking-tighter">Techno-Commercial Excellence</h6>
                <p className="text-gray-500 text-sm leading-relaxed">
                    By combining technical precision with professional management, we provide turnkey services for diverse sectors including Education (School Buildings), Health (Hospitals), and Power (GIS Substations). Our expertise in EPC mode allows us to navigate complex regulatory landscapes with ease.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TurnkeyServices;