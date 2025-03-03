import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-dark-950 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-primary-900/30 text-primary-400 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <Sparkles className="h-3 w-3 mr-1" />
                The Ultimate Study Platform for Students
              </div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-primary-400">Zenith Notes</span> — Your Ultimate Study Companion
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 mb-8 text-lg"
            >
              Access assignments, question papers, question banks, and lab materials — all in one place. Elevate your academic performance with our comprehensive study platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/auth" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="#features" className="bg-dark-800 hover:bg-dark-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center">
                Learn More
              </a>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="relative"
            >
              <div className="bg-dark-800 rounded-xl overflow-hidden shadow-2xl border border-dark-700 relative">
                <img 
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Zenith Notes Dashboard" 
                  className="w-full h-auto rounded-t-xl"
                />
                
                {/* Feature badges */}
                <div className="absolute top-4 right-4 bg-dark-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-400 flex items-center">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI-Powered
                </div>
                <div className="absolute bottom-4 left-4 bg-dark-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-300 flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                  All-in-One Study Platform
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;