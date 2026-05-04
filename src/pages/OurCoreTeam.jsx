import React from "react";
import { FiUser, FiSettings, FiBriefcase, FiUsers, FiAward, FiCheckCircle } from "react-icons/fi";

const CoreTeam = () => {
  const leadership = {
    name: "Mr. A.K. Khurana",
    role: "Managing Director & Principal Consultant",
    experience: "30+ Years",
    bio: "A seasoned senior management professional with over 30 years of diverse experience across prestigious organizations. Mr. Khurana has successfully led and completed landmark projects throughout India, bringing invaluable leadership to the firm.",
    expertise: [
      "Contracts & Arbitration",
      "Method Engineering",
      "Resource Planning",
      "Site Management"
    ]
  };

  const organizationDesign = [
    { category: "Field & Survey", strength: 8, icon: <FiSettings /> },
    { category: "Estimation & Costing", strength: 7, icon: <FiBriefcase /> },
    { category: "SCM Experts", strength: 7, icon: <FiUsers /> },
    { category: "Architecture & Draftsmen", strength: 5, icon: <FiAward /> },
    { category: "Support Services", strength: 4, icon: <FiUser /> },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
            Expert Leadership & Governance
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase exo leading-none">
            Our <span className="text-orange-500">Core Team</span>
          </h2>
          <div className="w-20 h-2 bg-orange-500 mt-6"></div>
          <p className="mt-8 text-gray-600 max-w-3xl leading-relaxed">
            Every aspect of our business is characterized by professionalism and high standards of governance. 
            Sustainability is embedded into our long-term strategy for growth, ensuring that our technical 
            precision is always matched by commercial insight.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Principal Leadership Card with Image Space */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* IMAGE PLACEHOLDER - Add your image path in src */}
              <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl mb-6 overflow-hidden relative border border-gray-100">
                <img 
                  src="/images/ceo.png" 
                  alt="Mr. A.K. Khurana" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display='none' }} // Hides broken icon if no image
                />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-xs font-bold uppercase tracking-widest">Photo of Mr. A.K. Khurana</span>
                </div>
              </div>

              <div className="relative bg-gray-900 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-6">
                  <div className="text-orange-500 opacity-20 text-7xl font-black">30+</div>
                </div>
                
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2 block">
                  Senior Management
                </span>
                <h3 className="text-3xl font-black text-white uppercase exo mb-1">
                  {leadership.name}
                </h3>
                <p className="text-gray-400 text-sm font-bold uppercase mb-6 tracking-tight">
                  Guided by Excellence
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-8 italic border-l-2 border-orange-500 pl-4">
                  "{leadership.bio}"
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {leadership.expertise.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-orange-100 font-bold uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Organization Design & Working Strength */}
          <div className="lg:col-span-7">
            <div className="mb-8 p-8 bg-orange-50 border border-orange-100 rounded-xl">
              <h4 className="text-xl font-black text-gray-900 uppercase exo mb-3">Our Strategic Approach</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                AVtech Plus LLP operates through a <strong>Centralized Pool of Expertise</strong>. Unlike traditional firms, our 
                elite construction specialists are allocated based on project complexity. This ensures precision, 
                maximum impact, and the highest standards of technical delivery across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {organizationDesign.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-5 bg-white border border-gray-100 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-orange-500 bg-orange-50 p-3 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-gray-700 uppercase text-xs tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-gray-900">
                      {item.strength}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Members</span>
                  </div>
                </div>
              ))}
              
              {/* Deployment Strategy Box */}
              <div className="md:col-span-2 p-6 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center font-black text-orange-500">
                    31
                  </div>
                  <div>
                    <h5 className="font-black uppercase exo text-sm leading-tight">Total Technical Strength</h5>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Dynamic resource optimization</p>
                  </div>
                </div>
                <div className="flex gap-2">
                    <div className="h-1 w-8 bg-orange-500"></div>
                    <div className="h-1 w-8 bg-orange-500 opacity-50"></div>
                    <div className="h-1 w-8 bg-orange-500 opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Added General Info Section */}
            <div className="mt-12 space-y-6">
                <div className="flex gap-4">
                    <FiCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-500 text-sm italic">
                        Our key experts have worked with India's largest companies—helping them rise as global champions and accelerating value creation for dynamic projects.
                    </p>
                </div>
                <div className="flex gap-4">
                    <FiCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-500 text-sm italic">
                        AVtech Plus is engaged in core and critical sectors of the economy, ensuring unmatched expertise across Engineering, Construction, and Infrastructure.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;