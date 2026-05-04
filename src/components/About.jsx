import React from "react";

function About() {
  // Company strengths data
  const strengths = [
    { title: "25+ Years", description: "Industry Experience" },
    { title: "1981", description: "Legacy Since" },
    { title: "End-to-End", description: "Project Delivery" },
    { title: "Risk Minimization", description: "Approach" },
  ];

  // Core expertise areas
  const expertiseAreas = [
    "Project Management",
    "Contracts Management",
    "Civil Construction",
    "Planning & Design",
    "Procurement & Execution",
    "Financial Modelling",
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-5 bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/about.jpg"
                className="w-full h-full object-cover"
                alt="AVtech Plus Engineering Project"
              />
              {/* Overlay with years badge */}
              <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-5 py-2 rounded-lg">
                <span className="font-bold text-lg">Est. 2009</span>
              </div>
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10">
            {/* Badge */}
            <div className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              About AVtech Plus LLP
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engineering Excellence,<br />
              Building Success Together
            </h2>
            
            {/* Subheading */}
            <p className="text-orange-500 font-medium mb-4">
              Let's dream & build together.
            </p>
            
            {/* Main description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              AVtech Plus LLP is a techno-commercial firm built on integrity, innovation, and expertise. 
              With a legacy dating back to 1981 and over 25+ years of industry experience, we have played 
              a key role in delivering landmark projects across India.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              We operate in core and critical sectors of the economy, providing end-to-end solutions from 
              design to delivery. Our customer-focused approach ensures world-class quality, transparency, 
              and efficiency in every project we undertake.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              We combine technical precision with commercial insight to deliver solutions that are efficient, 
              reliable, and transformative. We don't just build projects — we build trust, progress, and 
              long-lasting partnerships.
            </p>

            {/* Key Strengths Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {strengths.map((item, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-bold text-orange-500 text-lg">{item.title}</div>
                  <div className="text-gray-500 text-xs">{item.description}</div>
                </div>
              ))}
            </div>

           

           

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;