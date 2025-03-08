import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-12 w-12 text-primary-400" />,
    title: 'Create an Account',
    description: 'Sign up for free and set up your student profile with your academic details.'
  },
  {
    icon: <Search className="h-12 w-12 text-primary-400" />,
    title: 'Find Study Materials',
    description: 'Search for assignments, question papers, and other resources by course, subject, or topic.'
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary-400" />,
    title: 'Study Smarter',
    description: 'Access, download, or generate notes to enhance your learning experience.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-dark-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-900/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-lg gradient-text mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get started with Zenith Notes in three simple steps
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex-1 relative"
            >
              <div className="bg-dark-700 rounded-xl p-8 h-full border border-dark-600 hover:border-primary-700 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-dark-800 p-4 rounded-full">{step.icon}</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-white">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
              
              {/* Connector line between steps (only for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;