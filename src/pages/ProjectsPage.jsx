import React, { useState } from 'react';
import { FiFilter, FiCheckCircle, FiClock, FiMapPin, FiLayers, FiArrowUpRight } from 'react-icons/fi';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    { id: 1, client: "BIHAR STATE EDUCATIONAL INFRASTRUCTURE DEVELOPMENT CORPORATION LTD.", scope: "Construction of +2 Level School Building (G+3)", status: "completed", category: "education", location: "Bihar" },
    { id: 2, client: "Jharia Rehabilitation and Development Authority, Dhanbad", scope: "Construction of 19+ buildings", status: "ongoing", category: "infrastructure", location: "Dhanbad, Jharkhand" },
    { id: 3, client: "Power Grid Corporation", scope: "Civil work for CSR activity", status: "completed", category: "csr", location: "Multiple Locations" },
    { id: 4, client: "L & T Construction", scope: "Civil work for GIS base substation 220 KVA, Gaya, Bihar", status: "completed", category: "power", location: "Gaya, Bihar" },
    { id: 5, client: "L & T - Carbon Lite Solution", scope: "Road construction 27 Km, Supply of bulk materials 20 Crore, Soil Embankment 1000000 Cub, SMC(Site-Mix-Concrete) 200000 Cub", status: "ongoing", category: "infrastructure", location: "Multiple Locations" },
    { id: 6, client: "Siemens Engineering", scope: "Civil work for GIS base substation 220 KVA, Gaya, Bihar", status: "completed", category: "power", location: "Gaya, Bihar" },
    { id: 7, client: "Alstom Transport", scope: "Civil work for boundary work & site office for E-Loco Factory", status: "completed", category: "industrial", location: "Madhepura, Bihar" },
    { id: 8, client: "Alstom Transport", scope: "Civil work for construction of Lucknow building for Metro project based on EPC mode", status: "completed", category: "transportation", location: "Lucknow, Uttar Pradesh" },
    { id: 9, client: "Tata Project Ltd", scope: "Civil work for Township, E-Loco Factory Madhepura", status: "completed", category: "industrial", location: "Madhepura, Bihar" },
    { id: 10, client: "Tata Project Ltd", scope: "Civil work for site office client office", status: "completed", category: "commercial", location: "Multiple Locations" },
    { id: 11, client: "Shapoorji Pallonji Ltd", scope: "Civil work for Vedant Hospital, Patna", status: "completed", category: "healthcare", location: "Patna, Bihar" }
  ];

  const categories = ['infrastructure', 'power', 'industrial', 'transportation', 'healthcare', 'education', 'csr', 'commercial'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'ongoing') return project.status === 'ongoing';
    if (filter === 'completed') return project.status === 'completed';
    return project.category === filter;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 exo pb-20">
      {/* --- HERO HEADER --- */}
      <header className="relative bg-gray-900 pt-20 pb-32 px-5 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl">
                <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
                    Our Landmark Portfolio
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6">
                    Your Vision <span className="text-orange-500">Our Goal</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-xl">
                    Engineering solutions across India's core critical sectors—from massive industrial townships to precision power infrastructure.
                </p>
            </div>
            
            {/* Stats Dashboard */}
            <div className="flex gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="px-4 border-r border-white/10">
                    <span className="block text-3xl font-black text-orange-500">{projects.length}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Total Works</span>
                </div>
                <div className="px-4 border-r border-white/10">
                    <span className="block text-3xl font-black text-white">{projects.filter(p => p.status === 'completed').length}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Delivered</span>
                </div>
                <div className="px-4">
                    <span className="block text-3xl font-black text-white">{projects.filter(p => p.status === 'ongoing').length}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Active</span>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FILTER NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 -mt-12 shadow-sm px-4">
        <div className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
                <button 
                    onClick={() => setFilter('all')}
                    className={`whitespace-nowrap px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    All Work
                </button>
                <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>
                {categories.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`whitespace-nowrap px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-orange-500'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex gap-2">
                <button 
                    onClick={() => setFilter('ongoing')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase transition-all ${filter === 'ongoing' ? 'bg-yellow-500 border-yellow-500 text-white' : 'border-gray-200 text-gray-400'}`}
                >
                    <FiClock /> Ongoing
                </button>
                <button 
                    onClick={() => setFilter('completed')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase transition-all ${filter === 'completed' ? 'bg-green-600 border-green-600 text-white' : 'border-gray-200 text-gray-400'}`}
                >
                    <FiCheckCircle /> Completed
                </button>
            </div>
        </div>
      </nav>

      {/* --- PROJECT GRID --- */}
      <main className="max-w-7xl mx-auto px-5 md:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Background Decor */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FiLayers size={80} />
              </div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                    project.status === 'completed' ? 'text-green-600 border-green-100 bg-green-50' : 'text-yellow-600 border-yellow-100 bg-yellow-50'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <FiMapPin size={12} />
                    <span className="text-[10px] font-bold uppercase">{project.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-gray-900 uppercase exo leading-tight mb-4 group-hover:text-orange-500 transition-colors">
                  {project.client}
                </h3>

                <div className="w-10 h-1 bg-gray-200 group-hover:w-full transition-all duration-700 mb-6"></div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {project.scope}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Sector</span>
                    <span className="text-xs font-bold text-gray-700 uppercase">{project.category}</span>
                </div>
                <button className="p-3 bg-gray-50 text-gray-400 group-hover:bg-orange-500 group-hover:text-white transition-all rounded-lg">
                    <FiArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-40 border-2 border-dashed border-gray-200 rounded-3xl">
            <FiFilter size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-black text-gray-900 uppercase exo">No Projects Found</h3>
            <p className="text-gray-500">Adjust your filters to explore our extensive portfolio.</p>
          </div>
        )}
      </main>

      {/* --- CTA FOOTER --- */}
      <footer className="max-w-4xl mx-auto mt-20 px-5">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h4 className="text-2xl md:text-3xl font-black uppercase exo mb-4">Have a project in mind?</h4>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Let's combine technical precision with commercial insight to build your next landmark.</p>
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 font-black uppercase tracking-widest text-sm transition-all rounded-xl">
                Start Consultation
            </button>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;