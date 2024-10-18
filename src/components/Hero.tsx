import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 text-white py-32">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Interior Design"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Elevate Your Space with Galla Interior</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">Transform your home into a masterpiece with our expert interior design services. We bring your vision to life, creating spaces that inspire and delight.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 text-center">
              Get Started
            </a>
            <a href="#portfolio" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 text-center">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;