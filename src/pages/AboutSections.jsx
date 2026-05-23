import React from 'react';

const AboutSections = () => {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* IN HOUSE TEAM Section */}
        <div className="my-8 sm:my-12 md:my-16 lg:my-20">
          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              IN <span className="text-orange-500">HOUSE TEAM</span>
            </h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Image */}
          <div className="mb-6 sm:mb-8">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/IN HOUSE TEAM.png" 
                alt="In House Team"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Description Line */}
          <div className="text-center max-w-3xl mx-auto px-4">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Our team members are <span className="text-orange-500 font-semibold">Skill-Based Allocated</span> to projects keeping in view the complexity, ensuring precision and maximum impact.
            </p>
          </div>
        </div>

        {/* ORGANISATION DESIGN MEMBERS Section */}
        <div className="my-8 sm:my-12 md:my-16 lg:my-20">
          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              ORGANISATION <span className="text-orange-500">DESIGN MEMBERS</span>
            </h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Image */}
          <div className="mb-6 sm:mb-8">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/ORGANISATION DESIGN MEMBERS.png" 
                alt="Organisation Design Members"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Text with Bullet Points */}
          <div className="text-center px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-gray-700 text-sm sm:text-base md:text-lg font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"></span>
                Professionalism
              </span>
              <span className="hidden sm:inline text-orange-500">•</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"></span>
                High Standards of Governance
              </span>
              <span className="hidden sm:inline text-orange-500">•</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"></span>
                Sustainability
              </span>
            </div>
          </div>
        </div>

        {/* Working Strength Section */}
        <div className="my-8 sm:my-12 md:my-16 lg:my-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              WORKING <span className="text-orange-500">STRENGTH</span>
            </h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Text Content */}
            <div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Latest analytical tool i.e. Primavera, MS Project, Auto-CAD, STAAD Pro, SAP ERP system etc.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">Sufficient Hardware: 06 Laptops and 02 Window, Plotter & Printer: 04 Nos.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">Collaboration with potential partner and customer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/WORKING STRENGTH.png" 
                  alt="Working Strength"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Text below the image */}
              <p className="text-gray-600 italic mt-4 sm:mt-6 text-center md:text-left text-sm sm:text-base">
                "Every aspect of our businesses is characterized by professionalism and high standards of governance. Sustainability is embedded into our long-term strategy for growth."
              </p>
            </div>
          </div>
        </div>

        {/* Key Competence Section */}
        <div className="my-8 sm:my-12 md:my-16 lg:my-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              KEY <span className="text-orange-500">COMPETENCE</span>
            </h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Bullet Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">A set of knowledgeable people working collaboratively</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">End-to-end complete solutions delivered with precision</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">High-end project execution driven by thoughtful leadership</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Readiness to work at every nook and corner</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Focus on Quality, Cost & Delivery</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] sm:text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Sustainable and green initiative</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/Key Competence 2.png" 
                  alt="Key Competence"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise in Projects - Bulb Image */}
        <div className="w-full flex items-center justify-center my-8 sm:my-12 md:my-16">
          <div className="flex items-center justify-center px-4">
            <img
              src="/images/Expertise in Project.jpg"
              alt="Expertise"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] h-auto object-contain"
            />
          </div>
        </div>

        {/* How We Work Section */}
        <div className="my-8 sm:my-12 md:my-16 lg:my-20 mx-4 sm:mx-6 md:mx-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              HOW <span className="text-orange-500">WE WORK</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Image at the bottom - Smaller on tablet and laptop */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl 
                            w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3">
              <img 
                src="/images/HOW WE WORK.png" 
                alt="How We Work"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Happy to Serve You Section */}
        <div className="my-8 sm:my-12 md:my-16 lg:my-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Heading */}
            <div className="text-center md:text-left px-4 md:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
                HAPPY TO <span className="text-orange-500">SERVE YOU</span>
              </h2>
              <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto md:mx-0 mt-3 sm:mt-4"></div>
              <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-6 max-w-md mx-auto md:mx-0">
                Committed to delivering excellence and building lasting relationships with our valued clients.
              </p>
            </div>

            {/* Right Side - Image */}
            <div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/download.jpg" 
                  alt="Happy to Serve You"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSections;