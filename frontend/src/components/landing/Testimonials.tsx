import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Computer Science Student',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: '"Zenith Notes has completely transformed how I prepare for exams. The AI-powered summaries save me hours of work, and the flashcard feature helps me retain information better."'
  },
  {
    name: 'Sarah Williams',
    role: 'Medical Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: '"As a medical student with tons of material to go through, Zenith Notes has been a lifesaver. The collaborative features let me share notes with my study group effortlessly."'
  },
  {
    name: 'Michael Chen',
    role: 'Engineering Student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: '"The lab manuals and assignment resources on Zenith Notes are incredibly well-organized. I can find exactly what I need for my engineering courses in seconds."'
  },
  {
    name: 'Priya Patel',
    role: 'Business Administration Student',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: '"The flashcard feature has been instrumental in helping me memorize key business concepts and terminology. Zenith Notes is now an essential part of my study routine."'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            What <span className="text-primary-400">Students Say</span> About Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Hear from students who have transformed their study habits with Zenith Notes.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-800 rounded-xl p-8 border border-dark-700"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="inline-block h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6 text-lg">{testimonials[currentIndex].quote}</p>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-600"
                />
              </div>
              
              <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
              <p className="text-primary-400 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-dark-800 hover:bg-primary-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-500 w-4' : 'bg-dark-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-dark-800 hover:bg-primary-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;