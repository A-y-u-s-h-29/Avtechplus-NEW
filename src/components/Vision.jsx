import React, { useState } from 'react';

const Vision = () => {
  // State management for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    const formData = new FormData(e.target);
    
    // Web3Forms configuration parameters
    // Get your key from https://web3forms.com
    formData.append("access_key", "cb1d11bc-66b4-4107-89e4-d46b02a88c25");
    formData.append("subject", "New Consultation Request - AVtech Plus");
    formData.append("from_name", "AVtech Plus Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! Your inquiry has been sent successfully. Our experts will contact you soon.'
        });
        e.target.reset(); // Reset form fields on success
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.message || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            VISION AND MISSION
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Guiding Our Journey towards Engineering Excellence and Nation Building
          </p>
          <div className="relative inline-block">
            <p className="text-orange-500 text-xl md:text-2xl italic font-medium">
              “We make the spaces for businesses to recognize their vision”
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
        </div>

        {/* About Section with Text Left and Images Right */}
        <div className="grid lg:grid-cols-2 gap-4 items-start mb-16 m-14">
          {/* Left Side - About Text */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-orange-600">AVtech Plus LLP</span> stands as a symbol of excellence in the Techno-Commercial domain — a firm built on integrity, innovation, and expertise. With a legacy dating back to 1981 and over 25 years of industry experience, AVtech Plus LLP has been instrumental in shaping landmark projects across India and is guided by principles of transparency, efficiency, and innovation.
              </p>
              
              <p>
                AVtech Plus is engaged in core and critical sectors of the economy and our capabilities span the entire spectrum from design till delivery. With over two decades of a strong, customer focused approach and a continuous quest for world-class quality, we have unmatched expertise across Engineering, Construction, Infrastructure Projects.
              </p>
              
              <p>
                Our team of seasoned professionals combines technical precision with commercial insight to deliver solutions that are not only efficient but transformative.
              </p>
              
              <p>
                AVtech Plus LLP continues to empower businesses, minimize risks, and create lasting value for stakeholders. We don't just build projects — we build trust, progress, and partnerships that stand the test of time.
              </p>
            </div>
          </div>

          {/* Right Side - Circular Images */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
  {/* First Circle Image */}
  <div className="relative">
    <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-84 lg:h-84 rounded-full overflow-hidden">
      <img 
        src="/images/OUR VISION.png" 
        alt="Construction Project"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Second Circle Image */}
  <div className="relative">
    <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-84 lg:h-84 rounded-full overflow-hidden">
      <img 
        src="/images/OUR MISSION.png" 
        alt="Engineering Team"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
        </div>

        {/* Get a Free Consultation Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get a Free <span className="text-orange-500">Consultation</span>
              </h2>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Hello, if you want to discuss about your requirement of construction or property feel free to fill this form and our expert will get in touch with you.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* HoneyPot Anti-Spam protection field (Hidden from human users) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mobile Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Enquiry *</label>
                  <textarea 
                    name="message"
                    rows="4"
                    placeholder="Please describe your construction or property requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submission Notifications */}
                {submitMessage.text && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Send Message'}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  By submitting, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Vision;