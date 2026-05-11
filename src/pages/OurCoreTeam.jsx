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
  
  <div className="flex justify-center">
    
    <div className="w-full max-w-4xl">
      <div className="mt-6 bg-gray-900 rounded-lg p-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
          
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center">
              <FiTrendingUp className="text-orange-500 text-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <h3 className="text-white text-xl font-semibold mb-2">
              We have an experienced team.
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Our team members are{" "}
              <span className="text-orange-500 font-medium">
                Skill-Based Allocated
              </span>{" "}
              to projects keeping in view the complexity, ensuring precision and maximum impact.
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>

  {/* Bottom Footer Note */}
  <div className="mt-16 flex justify-center">
    <p className="text-gray-500 text-[13px] uppercase font-bold tracking-[0.4em] text-center">
      Professionalism • High Standards of Governance • Sustainability
    </p>
  </div>

</div>
      </div>
    </section>
  );
};

export default CoreLeadership;