import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('blueprint-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ opacity, y: translateY }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div 
          className="mb-4 opacity-75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-[#E2BA5F] text-[#E2BA5F] text-xs tracking-widest font-montserrat">
            INTRODUCING
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-light mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          The <span className="text-[#E2BA5F] font-medium">G800</span><br />
          <span className="font-light text-3xl md:text-5xl">Redefining Private Aviation</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-[#7A8EA8] max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Unrivaled range. Uncompromising luxury. Unprecedented performance.
          The future of private aviation has arrived.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="w-full md:w-auto px-8 py-3 bg-[#E2BA5F] text-[#0A0E1A] font-montserrat font-medium tracking-wide hover:bg-[#F2D792] transition duration-300 interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE G800
          </motion.button>
          <motion.button 
            className="w-full md:w-auto px-8 py-3 border-2 border-white/30 hover:border-white/80 font-montserrat tracking-wide transition duration-300 interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW SPECIFICATIONS
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer interactive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={handleScrollDown}
      >
        <motion.div 
          className="scroll-prompt"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-[#E2BA5F]" />
        </motion.div>
      </motion.div>
      
      {/* Hero background image with parallax effect */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
