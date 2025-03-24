import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Set cursor to visible after first movement
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('interactive') || 
          target.closest('.interactive') ||
          target.tagName === 'BUTTON' || 
          target.tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div 
        className="custom-cursor hidden md:block fixed w-6 h-6 border-2 border-[#E2BA5F] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: position.x, 
          top: position.y,
          backgroundColor: isHovering ? 'rgba(226, 186, 95, 0.1)' : 'transparent'
        }}
        animate={{ 
          width: isHovering ? 40 : 24, 
          height: isHovering ? 40 : 24, 
          x: -20, 
          y: -20,
          borderColor: isHovering ? '#F2D792' : '#E2BA5F'
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div 
        className="cursor-dot hidden md:block fixed w-2 h-2 bg-[#E2BA5F] rounded-full pointer-events-none z-50"
        style={{ 
          left: position.x, 
          top: position.y
        }}
        animate={{ 
          x: -1, 
          y: -1 
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;

