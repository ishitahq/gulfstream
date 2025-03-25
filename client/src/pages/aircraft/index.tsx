import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const AircraftFleet: React.FC = () => {
  const aircraftModels = [
    {
      id: 'g800',
      name: 'G800',
      description: 'The ultra-long-range leader, designed for exceptional comfort and performance.',
      image: 'https://www.gulfstream.com/assets/images/aircraft/g800/g800.jpg',
      specs: [
        { label: 'Range', value: '8,000 nm' },
        { label: 'Maximum Speed', value: 'Mach 0.925' },
        { label: 'Passengers', value: 'Up to 19' }
      ]
    },
    {
      id: 'g700',
      name: 'G700',
      description: 'Setting a new standard in business aviation with the industry\'s most spacious cabin.',
      image: 'https://www.gulfstream.com/assets/images/aircraft/g700/g700.jpg',
      specs: [
        { label: 'Range', value: '7,750 nm' },
        { label: 'Maximum Speed', value: 'Mach 0.925' },
        { label: 'Passengers', value: 'Up to 19' }
      ]
    },
    {
      id: 'g650',
      name: 'G650',
      description: 'The jet that revolutionized business aviation, with speed, comfort and advanced technology.',
      image: 'https://www.gulfstream.com/assets/images/aircraft/g650/g650.jpg',
      specs: [
        { label: 'Range', value: '7,000 nm' },
        { label: 'Maximum Speed', value: 'Mach 0.925' },
        { label: 'Passengers', value: 'Up to 19' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-thin mb-6">Aircraft Fleet</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover the pinnacle of aviation excellence with our fleet of ultra-long-range business jets.
          </p>
        </motion.div>

        <div className="space-y-32">
          {aircraftModels.map((aircraft, index) => (
            <motion.div
              key={aircraft.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <img 
                    src={aircraft.image} 
                    alt={`Gulf Stream ${aircraft.name}`} 
                    className="object-cover w-full h-full transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-4xl font-light mb-2">{aircraft.name}</h2>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-light mb-4">{aircraft.name}</h3>
                <p className="text-lg text-white/80 mb-6">{aircraft.description}</p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {aircraft.specs.map((spec, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                      <div className="text-white/60 text-sm mb-1">{spec.label}</div>
                      <div className="text-lg font-light">{spec.value}</div>
                    </div>
                  ))}
                </div>
                
                <Link href={`/aircraft/${aircraft.id}`}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-lg font-light"
                  >
                    {aircraft.id === 'g800' ? (
                      <span className="px-6 py-3 bg-white text-black rounded-full font-normal flex items-center gap-2">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                        Coming Soon <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AircraftFleet; 