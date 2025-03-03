import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  Sparkles, 
  BookOpen, 
  Users, 
  MessageSquare 
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary-400" />,
    title: 'Multi-Format Support',
    description: 'Access study materials in various formats including PDF, DOC, PPT, and Images.'
  },
  {
    icon: <Search className="h-10 w-10 text-primary-400" />,
    title: 'Advanced Search & Filters',
    description: 'Find exactly what you need with powerful search capabilities and smart filters.'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary-400" />,
    title: 'AI-Powered Notes Generator',
    description: 'Generate concise summaries and study notes automatically with our AI technology.'
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary-400" />,
    title: 'Flashcards & Quizzes',
    description: 'Create interactive flashcards and quizzes to enhance your learning experience.'
  },
  {
    icon: <Users className="h-10 w-10 text-primary-400" />,
    title: 'Collaborative Notes',
    description: 'Share and collaborate on notes in real-time with classmates and study groups.'
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary-400" />,
    title: 'Student Discussion Forum',
    description: 'Connect with peers, ask questions, and participate in academic discussions.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-dark-900 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-lg gradient-text mb-4"
          >
            Powerful Features for Effective Learning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to excel in your studies, all in one platform.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 p-8 rounded-xl border border-dark-700 hover:border-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;