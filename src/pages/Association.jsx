import React, { useState, useEffect } from "react";
import { FiBriefcase, FiUsers, FiAward, FiGlobe, FiCheckCircle, FiStar, FiTrendingUp } from "react-icons/fi";

const Associations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Trusted Clients
  const trustedClients = [
    { name: "Reliance Industries Limited", sector: "Energy & Infrastructure", icon: "🏭", size: "Fortune 500" },
    { name: "Alstom India Limited", sector: "Rail & Metro", icon: "🚆", size: "Multinational" },
    { name: "CPWD India", sector: "Government Infrastructure/Real Estate Projects", icon: "🏛️", size: "Central Govt" },
    { name: "Tata Projects Limited", sector: "Construction & Engineering", icon: "🏗️", size: "Industry Leader" },
  ];

  // International Partners
  const internationalPartners = [
    { name: "JICA Japan", country: "Japan", focus: "Infrastructure Development" },
    { name: "Isolux Corsan", country: "Spain", focus: "Engineering & Construction" },
  ];

  // Government Associations
  const governmentAssociations = [
  {
    name: "CPWD",
    fullForm: "Central Public Works Department",
    focus: "Government Infrastructure",
  },
  {
    name: "State PWDs",
    fullForm: "State Public Works Departments",
    focus: "State Infrastructure",
  },
  {
    name: "NHAI",
    fullForm: "National Highways Authority of India",
    focus: "Road Projects",
  },
  {
    name: "Government of Maharashtra",
    fullForm: "DDJAY Project",
    focus: "Government Development Projects",
  },
  {
    name: "National Building Corporation of India",
    fullForm: "Affordable Housing",
    focus: "Housing Infrastructure",
  },
  {
    name: "Indian Railways",
    fullForm: "Dedicated Freight Corridor",
    focus: "Electrification Projects",
  },
];

  // Industry Associations
  const technicalCollaborations = [
  {
    name: "Nivedita & Uday Pandey",
    fullForm: "Architects",
    focus: "Architectural Design"
  },
  {
    name: "NNC India",
    fullForm: "Structural Consultant",
    focus: "Structural Engineering"
  },
  {
    name: "STPL Ltd.",
    fullForm: "Structural Consultant",
    focus: "Structural Engineering"
  },
  {
    name: "Orrion",
    fullForm: "Landscaping Consultant",
    focus: "Landscape Design"
  },
  {
    name: "Behera Associates",
    fullForm: "MEP Consultant",
    focus: "MEP Services"
  },
  {
    name: "Sai-Geotec",
    fullForm: "Geo-technical Investigations & Survey",
    focus: "Soil Investigation & Survey"
  },
  {
    name: "Foundtek Consultants",
    fullForm: "Geo-technical Investigations & Survey",
    focus: "Soil Investigation & Survey"
  }
];

  // Key Statistics
  const stats = [
    { value: "20+", label: "Trusted Clients", icon: <FiUsers /> },
    { value: "100+", label: "Projects Delivered", icon: <FiBriefcase /> },
    { value: "25+", label: "Years of Trust", icon: <FiStar /> },
    { value: "6", label: "International Partners", icon: <FiGlobe /> },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3">
            Trusted <span className="text-orange-500">Associations</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Privileged to partner with India's most respected organizations and international collaborators
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Trusted Clients Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our Trusted Clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partnering with industry leaders to deliver engineering excellence
            </p>
            <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {trustedClients.map((client, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="text-2xl md:text-3xl">{client.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1">{client.name}</h3>
                    <p className="text-orange-500 text-[10px] md:text-xs font-semibold mb-2">{client.sector}</p>
                    <div className="inline-block bg-gray-200 text-gray-600 text-[10px] md:text-xs px-2 py-0.5 rounded-full">
                      {client.size}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Associations & Technical Collaborations */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-16">
          {/* Technical Collaborations - Now on the left */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <FiAward className="text-white text-sm md:text-base" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900">Technical Collaborations</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              {technicalCollaborations.map((association, index) => (
                <div key={index} className="bg-white rounded-xl p-2 md:p-4">
                  <h4 className="font-bold text-gray-800 text-xs md:text-sm">{association.name}</h4>
                  <p className="text-gray-500 text-[10px] md:text-xs">{association.fullForm}</p>
                  <span className="inline-block mt-1 md:mt-2 text-[8px] md:text-xs bg-purple-100 text-purple-600 px-1.5 md:px-2 py-0.5 rounded-full">
                    {association.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Government Associations - Now on the right */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <FiBriefcase className="text-white text-sm md:text-base" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900">Government Associations</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              {governmentAssociations.map((association, index) => (
                <div key={index} className="bg-white rounded-xl p-2 md:p-4">
                  <h4 className="font-bold text-gray-800 text-xs md:text-sm">{association.name}</h4>
                  <p className="text-gray-500 text-[10px] md:text-xs">{association.fullForm}</p>
                  <span className="inline-block mt-1 md:mt-2 text-[8px] md:text-xs bg-green-100 text-green-600 px-1.5 md:px-2 py-0.5 rounded-full">
                    {association.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* International Partners & Our Credentials */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12">
          {/* International Partners - Now on the left */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <FiGlobe className="text-white text-sm md:text-base" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900">International Partners</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              {internationalPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-2 md:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs md:text-sm">{partner.name}</h4>
                      <p className="text-gray-500 text-[10px] md:text-sm">{partner.country}</p>
                    </div>
                    <span className="text-[8px] md:text-xs bg-blue-100 text-blue-600 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                      {partner.focus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Statement / Our Credentials - Now on the right */}
          <div className="bg-[#232F72] rounded-2xl p-4 md:p-6 text-white">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <FiTrendingUp className="text-white text-sm md:text-base" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">Our Credentials</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-1.5 md:gap-2">
                <FiCheckCircle className="text-orange-400 mt-0.5 flex-shrink-0 text-xs md:text-base" />
                <p className="text-gray-300 text-[10px] md:text-sm">Trusted by Fortune 500 companies and government bodies</p>
              </div>
              <div className="flex items-start gap-1.5 md:gap-2">
                <FiCheckCircle className="text-orange-400 mt-0.5 flex-shrink-0 text-xs md:text-base" />
                <p className="text-gray-300 text-[10px] md:text-sm">Successfully delivered 100+ projects across India</p>
              </div>
              <div className="flex items-start gap-1.5 md:gap-2">
                <FiCheckCircle className="text-orange-400 mt-0.5 flex-shrink-0 text-xs md:text-base" />
                <p className="text-gray-300 text-[10px] md:text-sm">Recognized for excellence in engineering and project management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Philosophy */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 md:p-8 text-center">
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
            Building Long-lasting Partnerships
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-4 md:mb-6 text-xs md:text-base">
            We believe in creating value for our clients through transparent, efficient, and quality-driven project execution. 
            Our associations are built on trust, integrity, and mutual growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a
              href="/contact"
              className="bg-white text-orange-500 px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Become Our Partner
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white text-white px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associations;