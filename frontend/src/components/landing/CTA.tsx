import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Access to all study materials in one place',
  'AI-powered note generation and summaries',
  'Collaborative study tools and discussion forums',
  'Flashcards and quiz creation for better retention',
  'Regular updates with new features and improvements'
];

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
          
          <motion.div 
            className="relative bg-dark-card rounded-3xl overflow-hidden border border-dark-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-2/3 mb-10 lg:mb-0">
                  <h2 className="heading text-3xl md:text-4xl mb-6">
                    Ready to Transform Your <span className="gradient-text">Study Experience</span>?
                  </h2>
                  
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                    Join thousands of students who are already using Zenith Notes to improve their academic performance and study more efficiently.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mr-3" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="btn-primary group text-lg">
                      Join Zenith Notes Today
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <button className="btn-outline text-lg">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-1/3 lg:pl-12">
                  <div className="bg-dark p-6 rounded-xl border border-dark-light">
                    <h3 className="text-xl font-bold mb-4 text-center">Sign Up For Free</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input 
                          type="password" 
                          id="password" 
                          className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Create a password"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        Create Free Account
                      </button>
                      <p className="text-xs text-gray-400 text-center mt-4">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
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

export default CTA;