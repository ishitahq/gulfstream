import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const AIRCRAFT_MODELS = [
  {
    id: 'g800',
    name: 'G800',
    description: 'Ultra-long-range excellence with unmatched efficiency.',
    range: '8,000 nm',
    speed: 'Mach 0.925',
    image: '/images/g800.jpg'
  },
  {
    id: 'g700',
    name: 'G700',
    description: 'The new standard in business aviation.',
    range: '7,500 nm',
    speed: 'Mach 0.925',
    image: '/images/g700.webp'
  },
  {
    id: 'g650',
    name: 'G650ER',
    description: 'The aircraft that revolutionized business aviation.',
    range: '7,500 nm',
    speed: 'Mach 0.925',
    image: '/images/g650er.webp'
  },
  // Add more aircraft models as needed
];

const AircraftFleet: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % AIRCRAFT_MODELS.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <main className="pt-24">
      {/* Hero Section with Slider */}
      <section 
        className="relative h-[80vh] min-h-[600px] flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src={AIRCRAFT_MODELS[activeIndex].image}
              alt={AIRCRAFT_MODELS[activeIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        <div className="container-custom relative z-20">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-xl mb-6">
              Gulfstream <span className="text-primary">{AIRCRAFT_MODELS[activeIndex].name}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mb-8">
              {AIRCRAFT_MODELS[activeIndex].description}
            </p>
            <div className="flex gap-4 mb-8">
              <div className="text-white">
                <span className="text-primary">Range:</span> {AIRCRAFT_MODELS[activeIndex].range}
              </div>
              <div className="text-white">
                <span className="text-primary">Speed:</span> {AIRCRAFT_MODELS[activeIndex].speed}
              </div>
            </div>
            <Link href={`/aircraft/${AIRCRAFT_MODELS[activeIndex].id}`}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-primary interactive"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </Link>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {AIRCRAFT_MODELS.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-primary' : 'bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </section>

      {/* Aircraft Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-12 text-center"
          >
            Our Complete <span className="text-primary">Fleet</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AIRCRAFT_MODELS.map((aircraft, index) => (
              <motion.div
                key={aircraft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-secondary/20 rounded-lg overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[300px] overflow-hidden"
                >
                  <img
                    src={aircraft.image}
                    alt={aircraft.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-light mb-2">
                    Gulfstream {aircraft.name}
                  </h3>
                  <p className="text-muted mb-4">{aircraft.description}</p>
                  <div className="flex justify-between text-sm text-primary mb-6">
                    <span>Range: {aircraft.range}</span>
                    <span>Speed: {aircraft.speed}</span>
                  </div>
                  <Link href={`/aircraft/${aircraft.id}`}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-primary interactive"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Missions */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                Special <span className="text-primary">Missions</span>
              </h2>
              <p className="text-muted mb-8">
                Gulfstream aircraft are trusted by governments and organizations
                worldwide for specialized missions requiring exceptional
                performance, reliability, and versatility.
              </p>
              <Link href="/special-missions">
                <motion.a
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-primary interactive"
                >
                  Explore Special Missions <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img
                src="/images/special-missions.webp"
                alt="Special Missions"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AircraftFleet; 