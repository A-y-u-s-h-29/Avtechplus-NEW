import React from "react";
import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-12 pb-6 px-6 md:px-12 font-sans border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center pb-12">
          
          {/* Left: Logo Only */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/logofi.png"
              alt="AVtech Plus"
              className="h-50 w-auto brightness-0 invert object-contain"
            />
          </div>

          {/* Center: Identity & Contact Info */}
          <div className="text-center space-y-4">
            <div>
              <h3 className="text-lg  tracking-tight text-white uppercase">
                AVtech Plus LLP
              </h3>
              <h3 className="ext-lg  text-white0 mt-1">
                C9/9345, Vasant Kunj, New Delhi – 110070
              </h3>
            </div>
            
            <div className="flex flex-col items-center space-y-2 pt-2">
              <a href="mailto:info@avtechplus.in" className="flex items-center gap-2 text-sm text-gray-300 hover:text-orange-500 transition-colors">
                <FiMail className="text-orange-500" /> info@avtechplus.in
              </a>
              <a href="https://www.avtechplus.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-orange-500 transition-colors">
                <FiGlobe className="text-orange-500" /> www.avtechplus.in
              </a>
              <a href="tel:+919717293621" className="flex items-center gap-2 text-sm text-gray-300 hover:text-orange-500 transition-colors">
                <FiPhone className="text-orange-500" /> +91 97172 93621
              </a>
            </div>
          </div>

          {/* Right: Registration Details Vertically Centered */}
          <div className="flex flex-col justify-center items-center md:items-end space-y-4 text-center md:text-right border-l md:border-l-0 border-white/10">
            <div className="space-y-0.5">
              <span className="block text-[10px] font-black uppercase tracking-widest text-gray-200">LLP Identification No.: ACV-5839</span>
            </div>
            <div className="space-y-0.5">
              <span className="block text-[10px] font-black uppercase tracking-widest text-gray-200">GST: 06ACNFA3833C1ZO</span>
            </div>
            <div className="space-y-0.5">
              <span className="block text-[10px] font-black uppercase tracking-widest text-gray-200">MSME Regn.: UDYAM-HR-05-0186143</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[11px] tracking-[0.2em] uppercase font-semibold">
            © {currentYear} AVtech Plus LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;