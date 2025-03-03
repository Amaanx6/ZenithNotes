import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const features = [
  'Access to all study materials in one place',
  'AI-powered note generation and summaries',
  'Collaborative study tools and discussion forums',
  'Flashcards and quiz creation for better retention',
  'Regular updates with new features and improvements'
];

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your <span className="text-primary-400">Study Experience</span>?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of students who are already using Zenith Notes to improve their academic performance and study more efficiently.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/auth" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center">
                Join Zenith Notes Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="#features" className="bg-dark-800 hover:bg-dark-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-dark-800 rounded-xl p-8 border border-dark-700">
              <h3 className="text-xl font-bold mb-6 text-center">Sign Up For Free</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-dark-700 border border-dark-600 rounded-md py-2 px-4 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-dark-700 border border-dark-600 rounded-md py-2 px-4 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full bg-dark-700 border border-dark-600 rounded-md py-2 px-4 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Create a password"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-md font-medium transition-all duration-300"
                >
                  Create Your Account
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By signing up, you agree to our <a href="#" className="text-primary-400 hover:text-primary-300">Terms of Service</a> and <a href="#" className="text-primary-400 hover:text-primary-300">Privacy Policy</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;