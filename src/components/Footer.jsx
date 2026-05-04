import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-grey py-12 px-4 border-t border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Logo & Company Info */}
          <div className="space-y-4">
            <img
              src="/images/logofi.png"
              alt="Balaji Ingenieria Logo"
              className="h-30 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed exo">
             AVtech Plus is a professionally managed
              civil and infrastructure engineering company delivering
              quality-driven construction solutions since 2009.
            </p>
            <p className="text-gray-500 text-sm italic">
              Your Vision, Our Engineering Excellence
            </p>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-[#E66436] pl-3">
              Our Services
            </h4>
            <div className="grid grid-cols-1 gap-2">
              <span className="text-gray-600 text-md exo py-1">
                Building Construction
              </span>
              <span className="text-gray-600 text-md exo py-1">
                Road & Highway Projects
              </span>
              <span className="text-gray-600 text-md exo py-1">
                Substation & Power Projects
              </span>
              <span className="text-gray-600 text-md exo py-1">
                Industrial Infrastructure
              </span>
              <span className="text-gray-600 text-md exo py-1">
                Civil Engineering Solutions
              </span>
            </div>
          </div>

          {/* Find Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-[#E66436] pl-3">
              Find Us
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 exo space-y-1">
              <p>Plot No: 1</p>
              <p> Colony</p>
              <p>add</p>
              <p> India</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-[#E66436] pl-3">
              Contact Us
            </h4>

            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-1">
                  Mail us
                </h5>
                <a
                  href="mailto:r_rishi1@rediffmail.com"
                  className="text-[#E66436] hover:text-orange-700 transition-colors duration-300 text-sm font-medium"
                >
                 AVtechPlus@gmail.com
                </a>
              </div>

              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-1">
                  Call us
                </h5>
                <a
                  href="tel:+91756490"
                  className="text-[#E66436] hover:text-orange-700 transition-colors duration-300 text-sm font-medium block"
                >
                  +91 63153615371
                </a>
                <a
                  href="tel:+9167513753"
                  className="text-[#E66436] hover:text-orange-700 transition-colors duration-300 text-sm font-medium block"
                >
                  +91 3113653615371
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} AVtech Plus
              All rights reserved.
            </p>
            <div className="text-gray-500 text-sm">
              Design & Developed by{" "}
              <a
                href="https://digitalexpressindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E66436] hover:text-orange-700 transition-colors duration-300 font-medium"
              >
                DigitalExpressIndia
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
