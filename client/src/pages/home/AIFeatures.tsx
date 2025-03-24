import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP capabilities for understanding and processing human language',
    icon: '🤖'
  },
  {
    title: 'Real-time Analysis',
    description: 'Instant analysis and feedback for rapid decision making',
    icon: '⚡'
  },
  {
    title: 'Data Visualization',
    description: 'Beautiful and intuitive visualizations of complex data',
    icon: '📊'
  }
];

const AIFeatures = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Powerful AI Features
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#1A1F35] p-6 rounded-lg hover:bg-[#252B45] transition-colors"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AIFeatures;
