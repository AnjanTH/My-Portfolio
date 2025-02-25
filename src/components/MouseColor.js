'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from '../styles/MouseColor.module.css'

export default function MouseColor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const getColor = (x, y) => {
    if (!mounted) return 'hsl(0, 70%, 70%)';
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    const hue = ((Math.atan2(y - centerY, x - centerX) + Math.PI) / (2 * Math.PI)) * 360;
    return `hsl(${hue}, 70%, 70%)`;
  };

  if (!mounted) return null;

  return (
    <>
      <motion.div 
        className={styles.cursor}
        style={{
          left: x,
          top: y,
          background: getColor(mousePosition.x, mousePosition.y),
        }}
      />
      <motion.div 
        className={styles.cursorBlur}
        style={{
          left: x,
          top: y,
          background: getColor(mousePosition.x + 50, mousePosition.y - 50),
        }}
      />
      <motion.div 
        className={styles.cursorTrail}
        style={{
          left: x,
          top: y,
          background: getColor(mousePosition.x - 50, mousePosition.y + 50),
        }}
      />
    </>
  );
}
