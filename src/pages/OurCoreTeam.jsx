import React from "react";
import { FiCheckCircle, FiTrendingUp, FiSettings, FiBriefcase, FiUsers, FiAward } from "react-icons/fi";

const CoreLeadership = () => {
  const leadership = {
    name: "Mr. A.K. Khurana",
    role: "Managing Director & Principal Consultant",
    experience: "30+ Years",
    bio: "A seasoned senior management professional with over 30 years of diverse experience across prestigious organizations. Mr. Khurana has successfully led and completed landmark projects throughout India, bringing invaluable expertise and leadership to AVtech Plus LLP.",
    expertise: [
      "Project Management",
      "Contracts & Arbitration",
      "Modern Construction Methodologies",
      "Resource Planning"
    ]
  };

  const organizationDesign = [
    { category: "Field & Survey", strength: 8, icon: <FiSettings /> },
    { category: "Estimation & Costing", strength: 7, icon: <FiBriefcase /> },
    { category: "SCM Experts", strength: 7, icon: <FiUsers /> },
    { category: "Architecture & Draftsmen", strength: 5, icon: <FiAward /> }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block text-center md:text-left">
            Leadership & Governance
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase exo leading-none text-center md:text-left">
            Our <span className="text-orange-500">Core Team</span>
          </h2>
          <div className="w-20 h-2 bg-orange-500 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* Top Section: Image Left, Bio Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* LEFT: Image Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gray-50 rounded-2xl -z-10 group-hover:bg-orange-50 transition-colors duration-500"></div>
            <div className="aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden shadow-2xl border-4 border-white relative">
              <img 
                src="/images/ceo.png" 
                alt="Mr. A.K. Khurana" 
                className="w-full h-full object-cover "
                onError={(e) => { e.target.style.display='none' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 pointer-events-none">
                <span className="text-xs font-bold uppercase tracking-widest">Photograph of Mr. A.K. Khurana</span>
              </div>
            </div>
          </div>

          {/* RIGHT: About A.K. Khurana */}
          <div className="space-y-6">
            <div>
              <span className="bg-orange-500 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block mb-4">
                Principal Leadership
              </span>
              <h3 className="text-4xl font-black text-gray-900 uppercase exo leading-tight">
                {leadership.name}
              </h3>
              <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
                {leadership.role}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-orange-500 pl-6">
              "{leadership.bio}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {leadership.expertise.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-orange-500" />
                  <span className="text-xs font-bold text-gray-700 uppercase">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: General Organization Info */}
        <div className="border-t border-gray-100 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Column 1: Firm Capability */}
            <div className="space-y-4">
              <h4 className="text-xl font-black text-gray-900 uppercase exo tracking-tighter">Sector Engagement</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                AVtech Plus is engaged in core and critical sectors of the economy. Our capabilities span the entire spectrum from design till delivery, providing instrumental value in shaping landmark projects across India.
              </p>
              <div className="flex gap-2 pt-2">
                <span className="text-[10px] font-black bg-gray-100 px-2 py-1 uppercase text-gray-600">Engineering</span>
                <span className="text-[10px] font-black bg-gray-100 px-2 py-1 uppercase text-gray-600">Construction</span>
                <span className="text-[10px] font-black bg-gray-100 px-2 py-1 uppercase text-gray-600">Audit</span>
              </div>
            </div>

            {/* Column 2: Organizational Strength Grid */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-black text-gray-900 uppercase exo tracking-tighter mb-6">Centralized Pool of Expertise</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {organizationDesign.map((item, i) => (
                  <div key={i} className="p-4 bg-gray-50 text-center group hover:bg-orange-500 transition-all duration-300">
                    <div className="text-orange-500 group-hover:text-white mb-2 flex justify-center text-xl">
                      {item.icon}
                    </div>
                    <div className="text-xl font-black text-gray-900 group-hover:text-white leading-none">
                      {item.strength}
                    </div>
                    <div className="text-[9px] font-bold uppercase text-gray-400 group-hover:text-orange-100 tracking-tighter">
                      {item.category}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                <FiTrendingUp className="text-orange-500 text-2xl" />
                <p className="text-white text-xs font-medium">
                  Our team members are <span className="text-orange-500">Skill-Based Allocated</span> to projects based on complexity, ensuring precision and maximum impact.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.4em]">
              Professionalism • High Standards of Governance • Sustainability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreLeadership;