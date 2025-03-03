import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700 max-w-5xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-6">Ready to Transform Your <span className="gradient-text">Study Experience</span>?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already using Zenith Notes to excel in their academic journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth" className="btn btn-primary text-lg px-8 py-3 rounded-lg">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="#features" className="btn btn-outline text-lg px-8 py-3 rounded-lg">
              Explore Features
            </a>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p>No credit card required. Start with our free plan today.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;