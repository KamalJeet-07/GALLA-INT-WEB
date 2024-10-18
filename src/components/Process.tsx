import React from 'react';
import { Clipboard, PenTool, Palette, Truck } from 'lucide-react';

const Process = () => {
  const steps = [
    { icon: <Clipboard className="w-12 h-12 text-indigo-600" />, title: 'Consultation', description: 'We start by understanding your vision, needs, and budget.' },
    { icon: <PenTool className="w-12 h-12 text-indigo-600" />, title: 'Design', description: 'Our team creates a custom design plan tailored to your preferences.' },
    { icon: <Palette className="w-12 h-12 text-indigo-600" />, title: 'Selection', description: 'We help you choose the perfect materials, colors, and furnishings.' },
    { icon: <Truck className="w-12 h-12 text-indigo-600" />, title: 'Implementation', description: 'We manage the entire process, from ordering to installation.' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;