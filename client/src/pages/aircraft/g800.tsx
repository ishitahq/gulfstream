import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Shield, Wind, Zap, MapPin, Maximize, Users } from 'lucide-react';
import { Link } from 'wouter';

// Temporary type for the section navigation fix
type SectionType = {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  details?: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
  }>;
};

const G800DetailPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [showNav, setShowNav] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections: SectionType[] = [
    {
      id: 'hero',
      title: 'G800',
      subtitle: 'Elevate Your Journey',
      description: 'The ultra-long-range leader, designed for exceptional comfort and performance.'
    },
    {
      id: 'performance',
      title: 'Unrivaled Performance',
      subtitle: 'Range & Speed',
      details: [
        { 
          icon: <Wind />, 
          label: 'Maximum Speed', 
          value: 'Mach 0.925' 
        },
        { 
          icon: <Maximize />, 
          label: 'Range', 
          value: '8,000 nm' 
        },
        { 
          icon: <Shield />, 
          label: 'Ceiling', 
          value: '51,000 ft' 
        },
        { 
          icon: <Zap />, 
          label: 'Engines', 
          value: 'Rolls-Royce Pearl 700' 
        }
      ]
    },
    {
      id: 'cabin',
      title: 'Exquisite Cabin',
      subtitle: 'Uncompromising Luxury',
      description: 'Designed with an emphasis on comfort and wellness, the G800 offers a tranquil sanctuary in the sky with the lowest cabin altitude in business aviation.',
      details: [
        { 
          icon: <Maximize />, 
          label: 'Cabin Length', 
          value: '47.6 ft' 
        },
        { 
          icon: <Users />, 
          label: 'Passengers', 
          value: 'Up to 19' 
        },
        { 
          icon: <MapPin />, 
          label: 'Living Areas', 
          value: '4 distinct zones' 
        }
      ]
    }
  ];

  const specs = [
    { label: 'Range', value: '8,000 nautical miles' },
    { label: 'Maximum Speed', value: 'Mach 0.925' },
    { label: 'High-Speed Cruise', value: 'Mach 0.90' },
    { label: 'Long-Range Cruise', value: 'Mach 0.85' },
    { label: 'Maximum Operating Altitude', value: '51,000 ft' },
    { label: 'Engines', value: 'Rolls-Royce Pearl 700' },
    { label: 'Takeoff Distance', value: '6,000 ft' },
    { label: 'Initial Cruise Altitude', value: '41,000 ft' },
    { label: 'Maximum Passengers', value: '19' },
    { label: 'Cabin Length', value: '47.6 ft' },
    { label: 'Cabin Width', value: '8.2 ft' },
    { label: 'Cabin Height', value: '6.3 ft' }
  ];

  const features = [
    {
      title: 'Advanced Avionics',
      description: 'Featuring Gulfstream Symmetry Flight Deck™ with active control sidesticks and extensive use of touch-screen technology.'
    },
    {
      title: 'Whisper-Quiet Cabin',
      description: 'Industry-leading cabin sound levels create a peaceful environment for work or relaxation.'
    },
    {
      title: 'Air Purification',
      description: '100% fresh air replenished every 2-3 minutes and advanced HEPA filtration for exceptional air quality.'
    },
    {
      title: 'Panoramic Windows',
      description: 'Expansive Gulfstream panoramic oval windows, the largest in the industry, flood the cabin with natural light.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Floating Navigation */}
      <AnimatePresence>
        {showNav && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
          >
            <div className="container mx-auto py-4">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-light">G800</div>
                <div className="flex items-center gap-8">
                  {['Overview', 'Performance', 'Cabin', 'Specifications'].map((item, i) => (
                    <button 
                      key={item} 
                      className={`text-sm transition-colors ${i === currentSection ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
                      onClick={() => {
                        const section = document.getElementById(i === 0 ? 'hero' : sections[i === 3 ? 2 : i - 1]?.id || '');
                        if (section) {
                          window.scrollTo({
                            top: section.offsetTop - 100,
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium flex items-center gap-2"
                >
                  Configure Your G800
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="h-screen relative overflow-hidden flex items-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity, scale, y }}
        >
          <div 
            className="w-full h-full bg-center bg-cover"
            style={{ 
              backgroundImage: 'url(https://www.gulfstream.com/assets/images/aircraft/g800/g800.jpg)',
              filter: 'brightness(0.7)'
            }}
          />
        </motion.div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-thin tracking-tighter mb-6">
              {sections[0].title}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 mb-6">
              {sections[0].subtitle}
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-xl">
              {sections[0].description}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-black font-medium flex items-center gap-2"
              >
                Configure Your G800
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 font-light flex items-center gap-2"
              >
                Virtual Tour
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Discover More</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              {sections[1].title}
            </h2>
            <h3 className="text-xl text-white/80 font-light mb-4">
              {sections[1].subtitle}
            </h3>
            <p className="text-white/60 text-lg">
              Exceptional capabilities allow you to fly farther and faster, connecting you to more destinations with fewer stops.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-1/2 mb-12 md:mb-0 flex items-center justify-center"
            >
              <div className="relative h-[400px] w-full">
                <div 
                  className="absolute inset-0 bg-center bg-cover rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundImage: 'url(https://www.gulfstream.com/assets/images/aircraft/g800/g800-cabin.jpg)'
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {sections[1].details.map((detail, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      {detail.icon}
                    </div>
                    <h4 className="text-white/90 text-lg font-light mb-2">{detail.label}</h4>
                    <p className="text-2xl font-light">{detail.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cabin Section */}
      <section id="cabin" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              {sections[2].title}
            </h2>
            <h3 className="text-xl text-white/80 font-light mb-4">
              {sections[2].subtitle}
            </h3>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              {sections[2].description}
            </p>
          </motion.div>

          <div className="my-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[600px] w-full rounded-2xl overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{ 
                  backgroundImage: 'url(https://www.gulfstream.com/assets/images/aircraft/g800/g800-interior.jpg)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-10 md:p-16">
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Designed For Comfort
                  </h3>
                  <p className="text-white/80 text-lg max-w-xl">
                    Four versatile living areas provide space for work, entertainment, and rest, creating a comfortable home in the sky for long-range journeys.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-20">
            {sections[2].details.map((detail, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  {detail.icon}
                </div>
                <h4 className="text-white/90 text-lg font-light mb-2">{detail.label}</h4>
                <p className="text-2xl font-light">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-light text-center mb-16"
          >
            Exceptional Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-light mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-light text-center mb-16"
          >
            Technical Specifications
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {specs.map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="py-4 border-b border-white/10"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-light">{spec.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-lg rounded-3xl p-12 md:p-20 border border-white/10 text-center max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Experience the Ultimate in Business Aviation
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Take your next step toward owning the most advanced ultra-long-range business jet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-black font-medium flex items-center gap-2"
              >
                Configure Your G800
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 font-light flex items-center gap-2"
              >
                Request Information
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default G800DetailPage; 