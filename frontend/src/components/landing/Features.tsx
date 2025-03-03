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
    icon: <FileText className="feature-icon" />,
    title: 'Multi-Format Support',
    description: 'Access and view PDF, DOC, PPT, and image files seamlessly within the platform.'
  },
  {
    icon: <Search className="feature-icon" />,
    title: 'Advanced Search & Filters',
    description: 'Find exactly what you need with powerful search capabilities and smart filters.'
  },
  {
    icon: <Sparkles className="feature-icon" />,
    title: 'AI-Powered Notes Generator',
    description: 'Generate concise summaries and study notes automatically with our AI technology.'
  },
  {
    icon: <BookOpen className="feature-icon" />,
    title: 'Flashcards & Quizzes',
    description: 'Create interactive flashcards and quizzes to enhance your learning experience.'
  },
  {
    icon: <Users className="feature-icon" />,
    title: 'Collaborative Notes',
    description: 'Share and collaborate on notes in real-time with classmates and study groups.'
  },
  {
    icon: <MessageSquare className="feature-icon" />,
    title: 'Student Discussion Forum',
    description: 'Connect with peers, ask questions, and participate in academic discussions.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-dark-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Powerful Features for <span className="text-primary-400">Effective Studying</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Zenith Notes combines powerful tools and innovative features to transform how you study, making learning more efficient and effective.
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
              className="feature-card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;