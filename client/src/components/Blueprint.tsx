import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type BlueprintHotspot } from '@shared/types';

interface BlueprintProps {
  hotspots: BlueprintHotspot[];
  blueprintImageUrl: string;
}

const Blueprint = ({ hotspots, blueprintImageUrl }: BlueprintProps) => {
  const [activeHotspot, setActiveHotspot] = useState<BlueprintHotspot | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (activeHotspot && containerRef.current) {
        updateTooltipPosition(activeHotspot);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeHotspot]);

  const updateTooltipPosition = (hotspot: BlueprintHotspot) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Calculate absolute positions based on percentages
    const x = (hotspot.x / 100) * containerRect.width;
    const y = (hotspot.y / 100) * containerRect.height;
    
    // Adjust tooltip position to be above the hotspot
    setTooltipPosition({
      x: Math.min(Math.max(20, x), containerRect.width - 280),
      y: Math.max(20, y - 120)
    });
  };

  const handleHotspotMouseEnter = (hotspot: BlueprintHotspot) => {
    setActiveHotspot(hotspot);
    updateTooltipPosition(hotspot);
  };

  const handleHotspotMouseLeave = () => {
    setActiveHotspot(null);
  };

  const getHotspotColor = (type: string) => {
    switch (type) {
      case 'aerodynamics': return 'bg-[#3A9AFF]';
      case 'innovation': return 'bg-[#E2BA5F]';
      case 'comfort': return 'bg-white';
      default: return 'bg-[#E2BA5F]';
    }
  };

  return (
    <div ref={containerRef} className="relative h-[600px] md:h-[700px] lg:h-[800px] interactive">
      {/* Blueprint Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={blueprintImageUrl} 
          alt="G800 Blueprint Schematic" 
          className="max-w-full max-h-full object-contain opacity-80"
        />
      </div>
      
      {/* Interactive Blueprint Dots */}
      {hotspots.map((hotspot) => (
        <motion.div
          key={hotspot.id}
          className={`blueprint-dot absolute ${getHotspotColor(hotspot.type)} cursor-pointer z-10 interactive`}
          style={{ 
            top: `${hotspot.y}%`, 
            left: `${hotspot.x}%`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 10px ${hotspot.type === 'aerodynamics' ? '#3A9AFF' : hotspot.type === 'innovation' ? '#E2BA5F' : 'white'}`
          }}
          onMouseEnter={() => handleHotspotMouseEnter(hotspot)}
          onMouseLeave={handleHotspotMouseLeave}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-5 h-5 border border-current rounded-full transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      ))}
      
      {/* Blueprint Info Display */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div 
            className="blueprint-info absolute z-20 bg-[#0A0E1A]/90 border border-[#E2BA5F] p-3 rounded-sm pointer-events-none"
            style={{ 
              left: tooltipPosition.x,
              top: tooltipPosition.y,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-[#E2BA5F] text-sm font-montserrat font-medium mb-1">
              {activeHotspot.title}
            </h4>
            <p className="text-xs leading-relaxed text-white">
              {activeHotspot.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blueprint;
