import React from 'react';

const Vision = () => {
  // Mission points from company details
  const missionPoints = [
    "Deliver excellence through highest standards of quality, safety & efficiency",
    "Maintain complete transparency in cost optimization and project execution",
    "Utilize modern construction techniques and advanced technology for durability",
    "Build long-term partnerships based on trust and reliability with clients",
    "Ensure safe and healthy workplace for all employees and workers",
    "Drive continuous improvement through innovation, teamwork and customer feedback"
  ];

  // Key expertise areas
  const expertiseAreas = [
    { name: "Project Management", icon: "📊" },
    { name: "Contracts Management", icon: "📑" },
    { name: "Civil Construction", icon: "🏗️" },
    { name: "Planning & Design", icon: "✏️" },
    { name: "Procurement & Execution", icon: "⚙️" },
    { name: "Financial Modelling", icon: "💰" },
    { name: "Supply Chain Management", icon: "🚚" },
    { name: "Arbitration & Contract Handling", icon: "⚖️" }
  ];

  // Project types
  const projectTypes = ["Road Projects", "Rail & Metro Projects", "Building Projects", "Irrigation Projects"];

  return (
    <section className="bg-white py-16 md:py-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            AVtech Plus LLP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Guiding our journey towards engineering excellence and nation-building
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Vision Section - Featured */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-white rounded-2xl p-8 md:p-10 border border-orange-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <div className="w-16 h-1 bg-orange-500 mb-4"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-800 text-xl leading-relaxed mb-4">
                  <span className="font-bold text-orange-600">To provide world-class techno-commercial solutions,</span> understand business needs, and minimize risk for stakeholders.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We aspire to become one of India's most trusted infrastructure development companies by delivering 
                  innovative, sustainable, and high-quality engineering solutions that contribute to nation-building 
                  and long-term economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To become a front-runner in the techno-commercial field through excellence and leadership
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white">
            <p className="text-white text-xl leading-relaxed mb-8 text-center">
              To become a front-runner in the techno-commercial field by delivering consistent superior solutions through core engineering expertise and leadership excellence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Expertise Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Core Expertise</h3>
            <p className="text-gray-600">Leveraging 25+ years of industry experience across diverse domains</p>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 hover:bg-orange-50 transition-colors rounded-xl p-5 text-center border border-gray-100">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h4 className="font-semibold text-gray-900">{area.name}</h4>
              </div>
            ))}
          </div>
        </div>


       

        
      </div>
    </section>
  );
};

export default Vision;