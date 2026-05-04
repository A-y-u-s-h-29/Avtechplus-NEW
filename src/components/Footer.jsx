import React from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiLinkedin, FiTwitter, FiShield } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Building Construction",
    "Road & Highway Projects",
    "Substation & Power Projects",
    "Industrial Infrastructure",
    "Civil Engineering Solutions"
  ];

  return (
    <footer className="w-full bg-gray-900 text-white exo pt-20 pb-10 px-5 md:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* --- BRAND COLUMN (4 Cols) --- */}
          <div className="lg:col-span-4 space-y-8">
            <img
              src="/images/logofi.png"
              alt="AVtech Plus Logo"
              className="h-16 md:h-20 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              A professionally managed civil and infrastructure engineering firm. 
              Delivering <span className="text-white font-bold">high-governance construction solutions</span> since 2009.
            </p>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 w-fit">
               <FiShield className="text-orange-500 text-2xl" />
               <div>
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-500 leading-none mb-1">Status</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white">Certified EPC Contractor</p>
               </div>
            </div>
          </div>

          {/* --- SERVICES COLUMN (3 Cols) --- */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-black uppercase tracking-widest text-white mb-8 border-b-2 border-orange-500 pb-2 w-fit">
              Expertise
            </h4>
            <ul className="space-y-4">
              {services.map((item, index) => (
                <li key={index} className="group flex items-center gap-3 cursor-pointer">
                  <FiArrowRight className="text-orange-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="text-gray-400 group-hover:text-white transition-colors text-base font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT & ACCESS (5 Cols) --- */}
          <div className="lg:col-span-5 space-y-10">
            <h4 className="text-xl font-black uppercase tracking-widest text-white mb-8 border-b-2 border-orange-500 pb-2 w-fit">
              Command Centers
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Communication Hub */}
              <div className="space-y-6">
                <div className="group">
                  <h5 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-3">Priority Mail</h5>
                  <a href="mailto:r_rishi1@rediffmail.com" className="text-lg font-bold text-white hover:text-orange-500 transition-colors flex items-center gap-2">
                    <FiMail className="text-orange-500" /> mesinfa@gmail.com
                  </a>
                </div>
                <div className="group">
                  <h5 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-3">Project Helpline</h5>
                  <div className="space-y-2 text-lg font-bold text-white transition-colors">
                    
                     <a href="tel:+919717293621 " className="hover:text-orange-500 block">+91 9717293621</a>
                  </div>
                </div>
              </div>

              {/* Location Hub */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group">
                <FiMapPin className="text-3xl text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-2">Registered HQ</h5>
                <p className="text-sm font-bold text-gray-200 leading-relaxed">
                  C9/9345 – Vasant Kunj New Delhi <br />
                 - India Pin code: 110070
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SUB-FOOTER --- */}
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
              © {currentYear} AVtech Plus LLP. All Rights Reserved.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <FiLinkedin className="text-xs" />
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all">
                  <FiTwitter className="text-xs" />
               </a>
            </div>
          </div>

          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
            Engineered by <a href="https://digitalexpressindia.com" className="text-white hover:text-orange-500 transition-colors">DigitalExpressIndia</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;