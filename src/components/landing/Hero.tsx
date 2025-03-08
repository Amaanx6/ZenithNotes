import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-8 md:pt-32 md:pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-xl mb-6"
          >
            <span className="gradient-text">Zenith Notes</span> – Your Ultimate Study Companion
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Access assignments, question papers, question banks, and lab manuals – all in one place.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/auth" className="btn btn-primary text-lg px-8 py-3 rounded-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="#features" className="btn btn-outline text-lg px-8 py-3 rounded-lg">
              Learn More
            </a>
          </motion.div>
        </div>
        
        {/* Hero image/mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="bg-dark-800 rounded-xl overflow-hidden shadow-2xl border border-dark-700">
            <img 
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Zenith Notes Dashboard" 
              className="w-full h-auto rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;