import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white exo">
      {/* --- HERO SECTION: LARGER TEXT --- */}
      <div className="relative h-[450px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-5 md:px-8">
          <span className="text-orange-500 font-black text-sm uppercase tracking-[0.4em] mb-6 block">
            Global Network • Local Presence
          </span>
          {/* Increased to text-9xl for impact */}
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase leading-[0.8] mb-8">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          {/* Increased to text-xl */}
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl border-l-8 border-orange-500 pl-8 font-medium italic">
            Ready to mobilize our resource pool for your next landmark project. 
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT BOX --- */}
      <main className="max-w-7xl mx-auto px-5 md:px-8 -mt-24 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-[2rem] overflow-hidden bg-white border border-gray-100">
          
          {/* Left Column: HQ Information */}
          <div className="lg:col-span-5 bg-gray-900 p-10 md:p-16 text-white">
            <h3 className="text-3xl font-black uppercase mb-12 tracking-tight exo">Corporate Office</h3>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center">
                  <FiMapPin className="text-orange-500 text-3xl" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-3">Registered Address</h4>
                  {/* Increased to text-xl */}
                  <p className="text-gray-200 text-xl leading-relaxed font-bold">
                    Strategic Operations across<br />
                    Bihar & Jharkhand
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center">
                  <FiMail className="text-orange-500 text-3xl" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-3">Email Inquiries</h4>
                  {/* Increased to text-2xl */}
                  <p className="text-white font-black text-2xl">info@avtechplus.com</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center">
                  <FiPhone className="text-orange-500 text-3xl" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-3">Business Relations</h4>
                  <p className="text-white font-black text-2xl">+91 [Official Number]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 p-10 md:p-16">
            <div className="mb-12">
              <h3 className="text-4xl font-black uppercase text-gray-900 mb-4 exo">Project Inquiry</h3>
              {/* Increased to text-lg */}
              <p className="text-gray-500 text-lg font-medium">Please provide your technical requirements for a priority consultation.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-gray-400 tracking-[0.2em]">Full Name</label>
                {/* Increased to text-lg and py-4 */}
                <input type="text" className="w-full bg-gray-50 border-b-4 border-gray-100 py-4 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg font-bold" placeholder="Your Name" />
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-gray-400 tracking-[0.2em]">Organization</label>
                <input type="text" className="w-full bg-gray-50 border-b-4 border-gray-100 py-4 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg font-bold" placeholder="Company Name" />
              </div>

              <div className="md:col-span-2 space-y-3">
                <label className="text-xs font-black uppercase text-gray-400 tracking-[0.2em]">Project Overview</label>
                <textarea rows="5" className="w-full bg-gray-50 border-b-4 border-gray-100 py-4 px-0 focus:outline-none focus:border-orange-500 transition-colors resize-none text-lg font-bold" placeholder="Describe scope, location, and timeline..."></textarea>
              </div>

              <div className="md:col-span-2 pt-8">
                {/* Button text increased to text-sm/base and padding increased */}
                <button className="group w-full md:w-auto flex items-center justify-center gap-6 bg-gray-900 text-white px-16 py-6 font-black uppercase text-base tracking-[0.3em] hover:bg-orange-500 transition-all rounded-2xl shadow-2xl">
                  <FiSend className="text-orange-500 group-hover:text-white text-xl" />
                  Transmit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* --- FOOTER REGISTRATION --- */}
      <footer className="py-20 border-t border-gray-100 text-center">
         <p className="text-xs font-black text-gray-400 uppercase tracking-[0.6em] mb-4">
           Professionalism • Governance • Sustainability
         </p>
         <p className="text-lg font-black text-gray-900 uppercase">
           LLP Identification No: ACV 5839
         </p>
      </footer>
    </div>
  );
};

export default ContactPage;