import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const HomePage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Show content after video transition
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); // 5 seconds for the video

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* Video Transition */}
      <AnimatePresence>
        {!showContent && !videoError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => setShowContent(true)}
              onError={() => setVideoError(true)}
            >
              <source src="/videos/hero-transition.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Section */}
            <section className="relative h-screen flex items-center">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <img
                  src="/images/hero-troop.webp"
                  alt="Gulfstream Aircraft"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </motion.div>
              <div className="container-custom relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <h1 className="heading-xl mb-6">
                    The Future of <span className="text-primary">Business Aviation</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted max-w-2xl mb-8">
                    Experience unparalleled luxury, performance, and innovation with Gulfstream's world-class aircraft.
                  </p>
                  <Link href="/aircraft">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-primary interactive"
                    >
                      Explore Our Fleet <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Featured Aircraft Grid */}
            <section className="py-20">
              <div className="container-custom">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-lg mb-12 text-center"
                >
                  Featured <span className="text-primary">Aircraft</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'G800',
                      description: 'Ultra-long-range excellence with unmatched efficiency.',
                      image: '/images/g800.jpg'
                    },
                    {
                      name: 'G700',
                      description: 'The new standard in business aviation.',
                      image: '/images/g700.webp'
                    },
                    {
                      name: 'G650ER',
                      description: 'The aircraft that revolutionized business aviation.',
                      image: '/images/g650er.webp'
                    }
                  ].map((aircraft, index) => (
                    <motion.div
                      key={aircraft.name}
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
                        <Link href={`/aircraft/${aircraft.name.toLowerCase()}`}>
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

            {/* Image Grid Section */}
            <section className="py-20 bg-secondary/10">
              <div className="container-custom">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-lg mb-12 text-center"
                >
                  Experience <span className="text-primary">Excellence</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    '/images/grid-1.webp',
                    '/images/grid-2.webp',
                    '/images/grid-3.webp',
                    '/images/grid-4.webp'
                  ].map((image, index) => (
                    <motion.div
                      key={image}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative aspect-square group overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`Grid image ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="text-white text-center p-4"
                        >
                          <h3 className="text-xl font-light mb-2">Discover More</h3>
                          <Link href="/gallery">
                            <motion.a
                              whileHover={{ x: 5 }}
                              className="inline-flex items-center text-primary interactive"
                            >
                              View Gallery <ArrowRight className="ml-2 w-4 h-4" />
                            </motion.a>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Masonry Image Grid */}
            <section className="py-20 bg-secondary/5">
              <div className="container-custom">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-lg mb-12 text-center"
                >
                  Explore Our <span className="text-primary">World</span>
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    {
                      src: '/images/gallery/interior-1.webp',
                      alt: 'Luxury Interior',
                      span: 'col-span-2 row-span-2'
                    },
                    {
                      src: '/images/gallery/exterior-1.webp',
                      alt: 'Aircraft Exterior'
                    },
                    {
                      src: '/images/gallery/cockpit-1.webp',
                      alt: 'Modern Cockpit'
                    },
                    {
                      src: '/images/gallery/detail-1.webp',
                      alt: 'Design Detail',
                      span: 'col-span-2'
                    },
                    {
                      src: '/images/gallery/aerial-1.webp',
                      alt: 'Aerial View'
                    },
                    {
                      src: '/images/gallery/lounge-1.webp',
                      alt: 'Private Lounge',
                      span: 'row-span-2'
                    },
                    {
                      src: '/images/gallery/night-1.webp',
                      alt: 'Night Flight'
                    },
                    {
                      src: '/images/gallery/cabin-1.webp',
                      alt: 'Cabin View',
                      span: 'col-span-2'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.alt}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative group overflow-hidden rounded-lg ${item.span || ''}`}
                      style={{ minHeight: item.span?.includes('row-span-2') ? '400px' : '200px' }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="text-white text-center p-4"
                        >
                          <h3 className="text-xl font-light">{item.alt}</h3>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Innovation Section */}
            <section className="py-20">
              <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="heading-lg mb-6">
                      Innovation at <span className="text-primary">Every Level</span>
                    </h2>
                    <p className="text-muted mb-8">
                      From advanced aerodynamics to cutting-edge cabin technology,
                      Gulfstream continues to push the boundaries of what's possible
                      in business aviation.
                    </p>
                    <Link href="/innovation">
                      <motion.a
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center text-primary interactive"
                      >
                        Discover Innovation <ArrowRight className="ml-2 w-4 h-4" />
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
                      src="/images/innovation.webp"
                      alt="Innovation"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* AI Features Section */}
            <section className="py-20">
              <div className="container-custom">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-lg mb-12 text-center"
                >
                  Intelligent <span className="text-primary">Solutions</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Virtual Aircraft Assistant',
                      description: 'Our AI-powered assistant provides instant answers about aircraft specifications, maintenance schedules, and flight planning.',
                      features: [
                        'Real-time aircraft status monitoring',
                        'Predictive maintenance insights',
                        'Flight route optimization',
                        'Weather pattern analysis'
                      ]
                    },
                    {
                      title: 'Smart Cabin Control',
                      description: 'Advanced AI system that learns passenger preferences and automatically adjusts cabin environment.',
                      features: [
                        'Personalized temperature control',
                        'Automated lighting adjustment',
                        'Voice-activated systems',
                        'Smart entertainment suggestions'
                      ]
                    },
                    {
                      title: 'Performance Analytics',
                      description: 'Sophisticated AI algorithms analyze flight data to optimize aircraft performance and efficiency.',
                      features: [
                        'Fuel efficiency optimization',
                        'Performance trend analysis',
                        'Cost reduction insights',
                        'Environmental impact tracking'
                      ]
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="card backdrop-blur-sm bg-white/5"
                    >
                      <div className="p-6">
                        <h3 className="heading-md mb-4 text-primary">{item.title}</h3>
                        <p className="text-gray-300 mb-6">{item.description}</p>
                        <ul className="space-y-3">
                          {item.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + idx * 0.1 }}
                              className="flex items-center text-sm text-gray-400"
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-6 text-primary flex items-center text-sm font-light"
                        >
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Final Image Grid */}
            <section className="py-20 bg-secondary/10">
              <div className="container-custom">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-lg mb-12 text-center"
                >
                  Luxury <span className="text-primary">Redefined</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      image: '/images/luxury-1.webp',
                      title: 'Interior Excellence',
                      description: 'Unparalleled comfort and sophistication'
                    },
                    {
                      image: '/images/luxury-2.webp',
                      title: 'Advanced Technology',
                      description: 'State-of-the-art systems and connectivity'
                    },
                    {
                      image: '/images/luxury-3.webp',
                      title: 'Global Reach',
                      description: 'Unmatched range and performance'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-light mb-2">{item.title}</h3>
                          <p className="text-sm text-muted">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default HomePage; 