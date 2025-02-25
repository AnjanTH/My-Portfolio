'use client'

import { motion } from 'framer-motion'

export default function ScrollReveal({ children, className, delay = 0 }) {
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}
