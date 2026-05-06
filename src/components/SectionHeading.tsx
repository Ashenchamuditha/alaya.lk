import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionHeading = ({ children, subtitle }: SectionHeadingProps) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-500 font-mono text-sm uppercase tracking-[0.2em]"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;
