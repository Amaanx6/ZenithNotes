import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-12 w-12 text-primary-400" />,
    title: 'Create Your Account',
    description: 'Sign up for free and set up your student profile with your academic interests and courses.'
  },
  {
    icon: <Search className="h-12 w-12 text-primary-400" />,
    title: 'Find Study Materials',
    description: 'Search for assignments, question papers, and other resources specific to your courses.'
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary-400" />,
    title: 'Study Smarter',
    description: 'Use our advanced tools to organize notes, create flashcards, and collaborate with peers.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            How <span className="text-primary-400">Zenith Notes</span> Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Get started with Zenith Notes in just three simple steps and transform your study experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="step-card"
            >
              <div className="step-number">{index + 1}</div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;