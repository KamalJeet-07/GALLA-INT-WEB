import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace', title: 'Modern Living Room', category: 'living' },
    { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', title: 'Cozy Bedroom', category: 'bedroom' },
    { image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1', title: 'Elegant Dining Area', category: 'dining' },
    { image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae', title: 'Stylish Home Office', category: 'office' },
    { image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a', title: 'Luxurious Bathroom', category: 'bathroom' },
    { image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', title: 'Minimalist Kitchen', category: 'kitchen' },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Portfolio</h2>
        <div className="flex justify-center mb-8">
          <button onClick={() => setActiveFilter('all')} className={`mx-2 px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>All</button>
          <button onClick={() => setActiveFilter('living')} className={`mx-2 px-4 py-2 rounded-full ${activeFilter === 'living' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>Living Room</button>
          <button onClick={() => setActiveFilter('bedroom')} className={`mx-2 px-4 py-2 rounded-full ${activeFilter === 'bedroom' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>Bedroom</button>
          <button onClick={() => setActiveFilter('kitchen')} className={`mx-2 px-4 py-2 rounded-full ${activeFilter === 'kitchen' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>Kitchen</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 capitalize">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;