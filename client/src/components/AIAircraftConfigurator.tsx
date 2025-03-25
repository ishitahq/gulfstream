import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ConfigOption {
  category: string;
  title: string;
  description: string;
  options: string[];
  selectedOption: string;
}

const AIAircraftConfigurator: React.FC = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [configuration, setConfiguration] = useState<ConfigOption[]>([
    {
      category: 'Exterior',
      title: 'Paint Scheme',
      description: 'Select your preferred exterior design',
      options: ['Classic White', 'Pearl Metallic', 'Custom Design'],
      selectedOption: 'Classic White'
    },
    {
      category: 'Interior',
      title: 'Cabin Layout',
      description: 'Choose your ideal cabin configuration',
      options: ['Executive', 'Conference', 'Multi-Zone'],
      selectedOption: 'Executive'
    },
    {
      category: 'Technology',
      title: 'Avionics Suite',
      description: 'Select your preferred flight deck configuration',
      options: ['Standard', 'Enhanced', 'Ultimate'],
      selectedOption: 'Standard'
    }
  ]);

  const aiRecommendations = [
    'Consider upgrading to the Enhanced Avionics Suite for better performance.',
    'The Pearl Metallic paint scheme is popular among our customers.',
    'The Multi-Zone cabin layout offers the best flexibility for different use cases.'
  ];

  useEffect(() => {
    const videoElement = document.getElementById('intro-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  const handleOptionSelect = (index: number, option: string) => {
    const newConfig = [...configuration];
    newConfig[index].selectedOption = option;
    setConfiguration(newConfig);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <video id="intro-video" src="/public/videos/hero-transition.mp4" className="w-full h-auto mb-8" />
      <h2 className="heading-lg mb-8">AI-Powered Aircraft Configuration</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {configuration.map((config, index) => (
            <motion.div
              key={config.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-medium mb-2">{config.title}</h3>
              <p className="text-muted mb-4">{config.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {config.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(index, option)}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      config.selectedOption === option
                        ? 'bg-sky-500 dark:bg-sky-400 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="card h-fit md:col-span-2">
          <h3 className="text-xl font-medium mb-4">AI Recommendations</h3>
          <ul className="space-y-3">
            {aiRecommendations.map((recommendation, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
                <span>{recommendation}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIAircraftConfigurator;