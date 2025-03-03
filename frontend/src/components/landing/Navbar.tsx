import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-6 w-6 text-primary-500" />
              <span className="ml-2 text-lg font-bold text-white">Zenith Notes</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
            <div className="flex space-x-2">
              <Link to="/auth" className="px-4 py-1.5 text-sm text-white hover:text-primary-400 transition-colors">Login</Link>
              <Link to="/auth" className="px-4 py-1.5 text-sm bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors">Sign Up</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-900"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-800">Home</Link>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-800">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-800">How It Works</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-800">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-800">Contact</a>
            <Link to="/auth" className="block px-3 py-2 rounded-md text-base font-medium text-primary-400 hover:text-primary-300">Login</Link>
            <Link to="/auth" className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700">Sign Up</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;