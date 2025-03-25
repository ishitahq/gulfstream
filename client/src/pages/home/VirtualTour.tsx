import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { INTERIOR_FEATURES, CABIN_HIGHLIGHTS } from '@/utils/constants';

const VirtualTour = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539683255143-73a6b838b106?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] to-[#0A0E1A]/70"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-light mb-6">
            <span className="text-[#E2BA5F]">Experience</span> Unparalleled Luxury
          </h2>
          <p className="text-[#7A8EA8] mb-8 leading-relaxed">
            Step inside the G800 and discover a seamless blend of form and function. 
            Our virtual tour showcases the meticulous craftsmanship and thoughtful design that defines the Gulfstream experience.
          </p>
          <motion.button 
            className="px-8 py-3 bg-[#E2BA5F] text-[#0A0E1A] font-montserrat font-medium tracking-wide hover:bg-[#F2D792] transition duration-300 interactive flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>LAUNCH VIRTUAL TOUR</span>
            <Play className="h-5 w-5 ml-2" />
          </motion.button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INTERIOR_FEATURES.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-[#040608]/80 backdrop-blur-md p-6 border border-[#5A6E8C]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-montserrat font-medium text-lg mb-3">{feature.title}</h3>
              <p className="text-[#7A8EA8] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {CABIN_HIGHLIGHTS.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-[#E2BA5F]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#E2BA5F] text-2xl font-montserrat font-light">{highlight.value}</span>
              </div>
              <div>
                <h4 className="font-montserrat text-lg mb-1">{highlight.label}</h4>
                <p className="text-[#7A8EA8] text-sm">{highlight.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTour;
