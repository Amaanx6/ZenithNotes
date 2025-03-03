import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm mb-6">
              <Sparkles size={16} className="mr-2" />
              <span>The Ultimate Study Platform for Students</span>
            </div>
            
            <h1 className="heading text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="gradient-text">Zenith Notes</span> – Your Ultimate Study Companion
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Access assignments, question papers, question banks, and lab manuals – all in one place. Elevate your academic performance with our comprehensive study platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary group w-full sm:w-auto text-lg">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn-outline w-full sm:w-auto text-lg">
                <BookOpen className="mr-2" size={20} />
                Learn More
              </button>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Student studying with Zenith Notes" 
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-dark-card p-4 rounded-lg shadow-lg border border-dark-light animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI-Powered</p>
                    <p className="text-xs text-gray-400">Smart Notes</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-dark-card p-4 rounded-lg shadow-lg border border-dark-light animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">All-in-One</p>
                    <p className="text-xs text-gray-400">Study Materials</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;