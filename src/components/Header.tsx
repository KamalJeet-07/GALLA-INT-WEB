import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Galla Interior Logo" className="w-10 h-10 mr-2" />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} transition-colors duration-300`}>Galla Interior</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
                } transition-colors duration-300 text-sm uppercase tracking-wider font-semibold`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#contact"
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white text-indigo-600 hover:bg-indigo-100'
              }`}
            >
              Get a Quote
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none transition-colors duration-300`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-300`}
      >
        <nav className="container mx-auto px-6 py-4">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-800 hover:text-indigo-600 transition-colors duration-300 text-sm uppercase tracking-wider font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full text-center text-sm uppercase tracking-wider font-semibold hover:bg-indigo-700 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;