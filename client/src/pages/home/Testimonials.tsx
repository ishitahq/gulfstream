import { useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '@/utils/constants';

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  
  useEffect(() => {
    const startMarquee = async () => {
      // Wait for component to mount
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.scrollWidth;
      const viewWidth = containerRef.current.offsetWidth;
      
      // Only animate if content is wider than container
      if (containerWidth > viewWidth) {
        await controls.start({
          x: [0, -containerWidth / 2],
          transition: { 
            duration: 60,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    };
    
    startMarquee();
  }, [controls]);

  return (
    <section className="relative py-16 overflow-hidden bg-[#1A2038]/30">
      <div className="container mx-auto px-6 relative z-10 mb-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-montserrat font-light mb-2">
            What <span className="text-[#E2BA5F]">Owners</span> Say
          </h2>
        </motion.div>
      </div>
      
      <div className="marquee-container overflow-hidden w-full">
        <motion.div 
          ref={containerRef}
          className="inline-flex"
          animate={controls}
        >
          {/* Double the testimonials to ensure continuous loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <motion.div 
              key={index}
              className="w-80 md:w-96 mx-4 p-6 bg-[#040608]/80 backdrop-blur-sm border border-[#5A6E8C]/20 h-64 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 % 0.4 }}
            >
              <MessageSquare className="h-8 w-8 text-[#E2BA5F]/50 mb-4" />
              <p className="text-sm text-[#7A8EA8] italic mb-6 flex-grow">{testimonial.quote}</p>
              <div>
                <div className="font-montserrat text-sm">{testimonial.author}</div>
                <div className="text-xs text-[#5A6E8C]">{testimonial.position}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
