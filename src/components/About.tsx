import React from 'react';
import { Award, Users, Smile } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8 text-indigo-600" />, value: '10+', label: 'Years of Experience' },
    { icon: <Users className="w-8 h-8 text-indigo-600" />, value: '500+', label: 'Happy Clients' },
    { icon: <Smile className="w-8 h-8 text-indigo-600" />, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="About Galla Interior" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Galla Interior</h2>
            <p className="text-gray-600 mb-6">
              At Galla Interior, we believe that your home should be a reflection of your personality and lifestyle. With over a decade of experience, our team of passionate designers works tirelessly to transform spaces into beautiful, functional homes that inspire and delight.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  {stat.icon}
                  <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;