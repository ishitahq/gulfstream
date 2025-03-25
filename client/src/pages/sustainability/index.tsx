import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Zap, Factory, Wind, BarChart3, Droplets, Sun } from 'lucide-react';

const INITIATIVES = [
  {
    icon: Leaf,
    title: 'Sustainable Aviation Fuel',
    description: 'Leading the industry in SAF adoption and advocacy.'
  },
  {
    icon: Recycle,
    title: 'Waste Reduction',
    description: 'Implementing comprehensive recycling and waste management programs.'
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Optimizing aircraft performance and facility operations.'
  },
  {
    icon: Factory,
    title: 'Green Manufacturing',
    description: 'Sustainable practices in our production facilities.'
  }
];

const ACHIEVEMENTS = [
  {
    icon: Wind,
    title: 'Carbon Neutral',
    stat: '2025',
    description: 'Target year for carbon neutral operations'
  },
  {
    icon: BarChart3,
    title: 'Emissions Reduction',
    stat: '30%',
    description: 'Reduction in carbon emissions since 2015'
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    stat: '45%',
    description: 'Reduction in water usage across facilities'
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    stat: '75%',
    description: 'Facilities powered by renewable sources'
  }
];

const Sustainability: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/images/sustainability-hero.webp"
          alt="Sustainability"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container-custom relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-6"
          >
            Our <span className="text-primary">Commitment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl"
          >
            Leading the aviation industry towards a sustainable future.
          </motion.p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Sustainability <span className="text-primary">Initiatives</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INITIATIVES.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-secondary/10 rounded-lg"
              >
                <initiative.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-light mb-2">{initiative.title}</h3>
                <p className="text-muted">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Our <span className="text-primary">Achievements</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-light text-primary mb-2">
                  {achievement.stat}
                </h3>
                <h4 className="text-xl font-light mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Aviation */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src="/images/sustainable-aviation.webp"
                alt="Sustainable Aviation"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="heading-lg mb-6"
              >
                Sustainable <span className="text-primary">Aviation</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted mb-8"
              >
                Gulfstream is committed to leading the business aviation industry
                in sustainability. Through innovative technologies, sustainable
                aviation fuel initiatives, and efficient operations, we're
                working to reduce our environmental impact while maintaining the
                exceptional performance our customers expect.
              </motion.p>
              <ul className="space-y-4 text-muted">
                <li className="flex items-center">
                  <Leaf className="w-5 h-5 text-primary mr-3" />
                  100% SAF capability across fleet
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-primary mr-3" />
                  Advanced aerodynamics for fuel efficiency
                </li>
                <li className="flex items-center">
                  <Recycle className="w-5 h-5 text-primary mr-3" />
                  Sustainable materials in aircraft design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability; 