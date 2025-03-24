import React, { useState } from 'react';
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

  const [aiRecommendations, setAiRecommendations] = useState<string[]>([]);

  const handleOptionSelect = async (index: number, option: string) => {
    const newConfig = [...configuration];
    newConfig[index].selectedOption = option;
    setConfiguration(newConfig);

    // Get AI recommendations when an option is selected
    setLoading(true);
    try {
      const response = await fetch('/api/configure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ configuration: newConfig })
      });

      const data = await response.json();
      setAiRecommendations(data.recommendations);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
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

        <div className="card h-fit">
          <h3 className="text-xl font-medium mb-4">AI Recommendations</h3>
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-sky-500 dark:bg-sky-400 animate-bounce" />
                <div className="w-3 h-3 rounded-full bg-sky-500 dark:bg-sky-400 animate-bounce delay-100" />
                <div className="w-3 h-3 rounded-full bg-sky-500 dark:bg-sky-400 animate-bounce delay-200" />
              </div>
            </div>
          ) : aiRecommendations.length > 0 ? (
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
          ) : (
            <p className="text-muted">
              Select your preferences, and our AI will provide personalized recommendations
              for your aircraft configuration.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAircraftConfigurator; 