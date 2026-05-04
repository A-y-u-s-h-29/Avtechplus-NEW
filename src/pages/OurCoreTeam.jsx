import React from "react";
import { FiUser, FiSettings, FiBriefcase, FiUsers, FiAward, FiCheckCircle, FiMapPin, FiPhone, FiMail, FiStar } from "react-icons/fi";

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
      "Site Management",
      "Project Leadership",
      "Risk Management"
    ],
    quote: "Engineering excellence is not just about technical precision—it's about building trust, creating value, and delivering promises that stand the test of time.",
    location: "New Delhi, India",
    phone: "+91-9717293621",
    email: "ak.khurana@avtechplus.com"
  };

  const organizationDesign = [
    { category: "Field & Survey", strength: 8, icon: <FiSettings />, color: "bg-orange-50" },
    { category: "Estimation & Costing", strength: 7, icon: <FiBriefcase />, color: "bg-blue-50" },
    { category: "SCM Experts", strength: 7, icon: <FiUsers />, color: "bg-green-50" },
    { category: "Architecture & Draftsmen", strength: 5, icon: <FiAward />, color: "bg-purple-50" },
    { category: "Support Services", strength: 4, icon: <FiUser />, color: "bg-gray-50" },
  ];

  return (
    <section className="bg-[#F6F7F9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Our Leadership</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3">
            Our <span className="text-orange-500">Core Team</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced professionals driving engineering excellence and project success
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column - Leadership Profile */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Profile Header with Image */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-5xl">👔</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{leadership.name}</h2>
              <p className="text-white/90 text-sm mt-1">{leadership.role}</p>
              <div className="inline-block bg-white/20 rounded-full px-3 py-1 mt-3">
                <span className="text-white text-xs font-semibold">{leadership.experience} Experience</span>
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="p-6">
              {/* Quote */}
              <div className="bg-orange-50 rounded-xl p-4 mb-6 border-l-4 border-orange-500">
                <FiStar className="text-orange-500 mb-2" />
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{leadership.quote}"
                </p>
              </div>
              
              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {leadership.bio}
              </p>
              
              {/* Expertise */}
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Core Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {leadership.expertise.map((skill, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Contact */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FiMapPin className="text-orange-500" />
                  <span>{leadership.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FiPhone className="text-orange-500" />
                  <span>{leadership.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FiMail className="text-orange-500" />
                  <span>{leadership.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Organization Strength */}
          <div className="space-y-6">
            {/* Strategic Approach */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                Our Strategic Approach
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AVtech Plus LLP operates through a <strong className="text-orange-600">Centralized Pool of Expertise</strong>. 
                Unlike traditional firms, our elite construction specialists are allocated based on project complexity. 
                This ensures precision, maximum impact, and the highest standards of technical delivery across India.
              </p>
            </div>

            {/* Team Strength Grid */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                Team Composition
              </h3>
              <div className="space-y-3">
                {organizationDesign.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-orange-500`}>
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-700 text-sm">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-gray-900">{item.strength}</span>
                      <span className="text-gray-400 text-xs ml-1">Members</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total Strength */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between p-3 bg-gray-900 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <FiUsers className="text-white" />
                    </div>
                    <span className="font-semibold text-white text-sm">Total Technical Strength</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-orange-400">31</span>
                    <span className="text-gray-400 text-xs ml-1">Experts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Why Choose Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FiCheckCircle className="text-white" />
                  <span>25+ Years of Industry Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiCheckCircle className="text-white" />
                  <span>Legacy Since 1981</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiCheckCircle className="text-white" />
                  <span>Pan India Project Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiCheckCircle className="text-white" />
                  <span>Trusted by Industry Leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiUsers className="text-orange-500" />
            </div>
            <h4 className="font-bold text-gray-800">30+ Years</h4>
            <p className="text-gray-500 text-xs">Leadership Experience</p>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiBriefcase className="text-orange-500" />
            </div>
            <h4 className="font-bold text-gray-800">100+ Projects</h4>
            <p className="text-gray-500 text-xs">Successfully Completed</p>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiAward className="text-orange-500" />
            </div>
            <h4 className="font-bold text-gray-800">20+ Partners</h4>
            <p className="text-gray-500 text-xs">Trusted Clients Nationwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;