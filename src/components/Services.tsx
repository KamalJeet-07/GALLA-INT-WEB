import React from 'react';
import { PaintBucket, Sofa, Lightbulb, Ruler, Home, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <PaintBucket className="w-12 h-12 mb-4 text-indigo-500" />, title: 'Color Consultation', description: 'Expert advice on color schemes to enhance your space' },
    { icon: <Sofa className="w-12 h-12 mb-4 text-indigo-500" />, title: 'Furniture Selection', description: 'Curated furniture choices to match your style and needs' },
    { icon: <Lightbulb className="w-12 h-12 mb-4 text-indigo-500" />, title: 'Lighting Design', description: 'Innovative lighting solutions to create the perfect ambiance' },
    { icon: <Ruler className="w-12 h-12 mb-4 text-indigo-500" />, title: 'Space Planning', description: 'Optimize your layout for functionality and flow' },
    { icon: <Home className="w-12 h-12 mb-4 text-indigo-500" />, title: 'Home Staging', description: 'Prepare your property for a quick and profitable sale' },
    { icon: <Palette className="w-12 h-12 mb-4 text-indigo-500" />, title: 'Custom Design', description: 'Tailored design solutions for unique spaces and needs' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;