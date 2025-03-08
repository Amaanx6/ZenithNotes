import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  Sparkles, 
  FlaskConical, 
  Users, 
  MessageSquare 
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Multi-Format Support',
    description: 'Access and view PDF, DOC, PPT, and image files seamlessly within the platform.',
    delay: 0.1
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'Advanced Search & Filters',
    description: 'Find exactly what you need with powerful search capabilities and customizable filters.',
    delay: 0.2
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'AI-Powered Notes Generator',
    description: 'Automatically generate summaries and highlights from your study materials.',
    delay: 0.3
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: 'Flashcards & Quizzes',
    description: 'Create interactive learning tools to test your knowledge and improve retention.',
    delay: 0.4
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Collaborative Notes',
    description: 'Share and edit notes in real-time with classmates for group study sessions.',
    delay: 0.5
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: 'Student Discussion Forum',
    description: 'Ask questions, provide answers, and engage with peers in subject-specific forums.',
    delay: 0.6
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-3xl md:text-4xl mb-4">
            Powerful Features for <span className="gradient-text">Effective Studying</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Zenith Notes combines powerful tools and innovative features to transform how you study, 
            making learning more efficient and effective.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;