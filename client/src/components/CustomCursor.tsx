import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(target.closest('.interactive') !== null);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        transition: {
          type: "spring",
          damping: 30,
          mass: 0.5,
          stiffness: 400
        }
      }}
    >
      <div className="custom-cursor-dot" />
      <div className="custom-cursor-plane" />
    </motion.div>
  );
};

export default CustomCursor;

