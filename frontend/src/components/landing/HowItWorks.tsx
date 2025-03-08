import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-12 w-12 text-primary" />,
    title: 'Create Your Account',
    description: 'Sign up for free and set up your student profile with your academic interests and courses.',
    delay: 0.1
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: 'Find Study Materials',
    description: 'Search for assignments, question papers, and other resources specific to your courses.',
    delay: 0.2
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: 'Study Smarter',
    description: 'Use our AI-powered tools to generate notes, create flashcards, and collaborate with peers.',
    delay: 0.3
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-3xl md:text-4xl mb-4">
            How <span className="gradient-text">Zenith Notes</span> Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get started with Zenith Notes in just three simple steps and transform your study experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <div className="card flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-dark-light rounded-full relative">
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;