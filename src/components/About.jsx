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

          
        </div>
      </div>
    </div>
  );
}

export default About;