import { useState } from 'react';
import { motion } from 'framer-motion';
import Blueprint from '@/components/Blueprint';
import { AIRCRAFT_SPECS, BLUEPRINT_HOTSPOTS } from '@/utils/constants';

const BlueprintShowcase = () => {
  const [activeTab, setActiveTab] = useState('aerodynamics');

  const blueprintImageUrl = "https://images.unsplash.com/photo-1576019644586-b4b912a8b141?q=80&w=2000&auto=format&fit=crop";

  return (
    <section id="blueprint-section" className="relative min-h-screen py { useState } from 'react';
import { motion } from 'framer-motion';
import Blueprint from '@/components/Blueprint';
import { AIRCRAFT_SPECS, BLUEPRINT_HOTSPOTS } from '@/utils/constants';

const BlueprintShowcase = () => {
  const [activeTab, setActiveTab] = useState('aerodynamics');

  const blueprintImageUrl = "https://images.unsplash.com/photo-1576019644586-b4b912a8b141?q=80&w=2000&auto=format&fit=crop";

  return (
    <section id="blueprint-section" className="relative min-h-screen py-24 overflow-hidden blueprint-grid">
      <div className="absolute inset-0 bg-[#0A0E1A] z-0"></div>
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 186, 95, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 186, 95, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-light mb-6">
            <span className="text-[#E2BA5F]">Engineered</span> for Excellence
          </h2>
          <p className="text-[#7A8EA8] mb-8 leading-relaxed">
            Every component of the G800 is meticulously designed with performance and luxury in mind. 
            Explore the blueprint to discover innovative engineering solutions that set a new standard in aviation.
          </p>
          <div className="flex flex-wrap gap-4 items-center text-sm text-[#5A6E8C]">
            <div 
              className={`flex items-center cursor-pointer interactive px-3 py-1 rounded-sm transition ${activeTab === 'aerodynamics' ? 'bg-[#3A9AFF]/10' : ''}`} 
              onClick={() => setActiveTab('aerodynamics')}
            >
              <div className="w-3 h-3 bg-[#3A9AFF] mr-2"></div>
              <span className={activeTab === 'aerodynamics' ? 'text-[#3A9AFF]' : ''}>Aerodynamics</span>
            </div>
            <div 
              className={`flex items-center cursor-pointer interactive px-3 py-1 rounded-sm transition ${activeTab === 'innovation' ? 'bg-[#E2BA5F]/10' : ''}`}
              onClick={() => setActiveTab('innovation')}
            >
              <div className="w-3 h-3 bg-[#E2BA5F] mr-2"></div>
              <span className={activeTab === 'innovation' ? 'text-[#E2BA5F]' : ''}>Innovative Features</span>
            </div>
            <div 
              className={`flex items-center cursor-pointer interactive px-3 py-1 rounded-sm transition ${activeTab === 'comfort' ? 'bg-white/10' : ''}`}
              onClick={() => setActiveTab('comfort')}
            >
              <div className="w-3 h-3 bg-white mr-2"></div>
              <span className={activeTab === 'comfort' ? 'text-white' : ''}>Comfort Elements</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Blueprint 
            hotspots={BLUEPRINT_HOTSPOTS.filter(h => activeTab === 'all' || h.type === activeTab)}
            blueprintImageUrl={blueprintImageUrl}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AIRCRAFT_SPECS.map((spec, index) => (
            <motion.div 
              key={spec.label}
              className="bg-[#1A2038]/50 border border-[#5A6E8C]/20 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-montserrat font-light text-[#E2BA5F] mb-2">
                {spec.value}<span className="text-base text-white ml-1">{spec.unit}</span>
              </div>
              <div className="text-sm text-[#5A6E8C]">{spec.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueprintShowcase;
