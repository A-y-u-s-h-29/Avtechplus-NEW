import React, { useState } from 'react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      client: "BIHAR STATE EDUCATIONAL INFRASTRUCTURE DEVELOPMENT CORPORATION LTD.",
      scope: "Construction of +2 Level School Building (G+3)",
      status: "completed",
      category: "education",
      location: "Bihar"
    },
    {
      id: 2,
      client: "Jharia Rehabilitation and Development Authority, Dhanbad",
      scope: "Construction of 19+ buildings",
      status: "ongoing",
      category: "infrastructure",
      location: "Dhanbad, Jharkhand"
    },
    {
      id: 3,
      client: "Power Grid Corporation",
      scope: "Civil work for CSR activity",
      status: "completed",
      category: "csr",
      location: "Multiple Locations"
    },
    {
      id: 4,
      client: "L & T Construction",
      scope: "Civil work for GIS base substation 220 KVA, Gaya, Bihar",
      status: "completed",
      category: "power",
      location: "Gaya, Bihar"
    },
    {
      id: 5,
      client: "L & T - Carbon Lite Solution",
      scope: "Road construction 27 Km, Supply of bulk materials 20 Crore, Soil Embankment 1000000 Cub, SMC(Site-Mix-Concrete) 200000 Cub",
      status: "ongoing",
      category: "infrastructure",
      location: "Multiple Locations"
    },
    {
      id: 6,
      client: "Siemens Engineering",
      scope: "Civil work for GIS base substation 220 KVA, Gaya, Bihar",
      status: "completed",
      category: "power",
      location: "Gaya, Bihar"
    },
    {
      id: 7,
      client: "Alstom Transport",
      scope: "Civil work for boundary work & site office for E-Loco Factory",
      status: "completed",
      category: "industrial",
      location: "Madhepura, Bihar"
    },
    {
      id: 8,
      client: "Alstom Transport",
      scope: "Civil work for construction of Lucknow building for Metro project based on EPC mode",
      status: "completed",
      category: "transportation",
      location: "Lucknow, Uttar Pradesh"
    },
    {
      id: 9,
      client: "Tata Project Ltd",
      scope: "Civil work for Township, E-Loco Factory Madhepura",
      status: "completed",
      category: "industrial",
      location: "Madhepura, Bihar"
    },
    {
      id: 10,
      client: "Tata Project Ltd",
      scope: "Civil work for site office client office",
      status: "completed",
      category: "commercial",
      location: "Multiple Locations"
    },
    {
      id: 11,
      client: "Shapoorji Pallonji Ltd",
      scope: "Civil work for Vedant Hospital, Patna",
      status: "completed",
      category: "healthcare",
      location: "Patna, Bihar"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'status' ? project.status === 'ongoing' : project.category === filter
      );

  const statusCounts = {
    all: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    ongoing: projects.filter(p => p.status === 'ongoing').length
  };

  const categoryCounts = {
    infrastructure: projects.filter(p => p.category === 'infrastructure').length,
    power: projects.filter(p => p.category === 'power').length,
    industrial: projects.filter(p => p.category === 'industrial').length,
    transportation: projects.filter(p => p.category === 'transportation').length,
    healthcare: projects.filter(p => p.category === 'healthcare').length,
    education: projects.filter(p => p.category === 'education').length,
    csr: projects.filter(p => p.category === 'csr').length,
    commercial: projects.filter(p => p.category === 'commercial').length
  };

  const getStatusBadgeClass = (status) => {
    return status === 'completed' 
      ? 'bg-green-100 text-green-800 border-green-300' 
      : 'bg-yellow-100 text-yellow-800 border-yellow-300';
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      infrastructure: 'bg-blue-500',
      power: 'bg-purple-500',
      industrial: 'bg-amber-500',
      transportation: 'bg-cyan-500',
      healthcare: 'bg-pink-500',
      education: 'bg-indigo-500',
      csr: 'bg-teal-500',
      commercial: 'bg-gray-500'
    };
    return colorMap[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 exo">
      <header className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Your Vision <span className="text-blue-600">Our Goal</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Building the future, one project at a time
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Overview</h3>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{statusCounts.all}</div>
                <div className="text-sm text-gray-600">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{statusCounts.completed}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{statusCounts.ongoing}</div>
                <div className="text-sm text-gray-600">Ongoing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Our Project Portfolio</h2>
          <p className="text-gray-600 mb-6">
            Showcasing our expertise in diverse sectors including infrastructure, power, industrial, healthcare, 
            and transportation projects across India. We are committed to delivering excellence in every endeavor.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="text-gray-700 font-medium">Filter by:</span>
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-medium ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Projects ({statusCounts.all})
            </button>
            <button 
              onClick={() => setFilter('ongoing')}
              className={`px-4 py-2 rounded-full font-medium ${filter === 'ongoing' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Ongoing ({statusCounts.ongoing})
            </button>
            <button 
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-full font-medium ${filter === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Completed ({statusCounts.completed})
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(categoryCounts).map(([category, count]) => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-1 ${filter === category ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                style={{backgroundColor: filter === category ? '' : `${getCategoryColor(category)}20`}}
              >
                <span className={`h-3 w-3 rounded-full ${getCategoryColor(category)}`}></span>
                <span className="capitalize">{category} ({count})</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadgeClass(project.status)}`}>
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                  <span className="text-sm font-medium text-gray-500">{project.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{project.client}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`h-3 w-3 rounded-full ${getCategoryColor(project.category)}`}></span>
                  <span className="text-sm font-medium text-gray-600 capitalize">{project.category}</span>
                </div>
                
                <p className="text-gray-600 mb-5 line-clamp-3">{project.scope}</p>
                
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Project ID: <span className="font-semibold">#{project.id.toString().padStart(3, '0')}</span>
                  </div>
                  <div className={`text-xs font-semibold px-3 py-1 rounded ${project.status === 'completed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                    {project.status === 'completed' ? '✓ Delivered' : 'In Progress'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter to view projects.</p>
          </div>
        )}

       
      </main>

    
    </div>
  );
};

export default ProjectsPage;