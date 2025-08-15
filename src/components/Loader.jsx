import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/orbitron/700.css'; // Orbitron bold from Google Fonts

const Loader = ({ onFinish }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at center, #000000 60%, #0a0a0a 100%)',
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-wider"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#00F0FF',
              textShadow: `
                0 0 5pxrgb(0, 13, 255),
                0 0 10pxrgb(4, 0, 255),
                0 0 20pxrgb(0, 34, 255),
                0 0 40pxrgb(0, 47, 255)
              `,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.2, 1, 0.8, 1],
              scale: [0.95, 1.05, 1],
              textShadow: [
                '0 0 5pxrgb(17, 0, 255), 0 0 10pxrgb(0, 13, 255), 0 0 20px #00F0FF, 0 0 40px #00F0FF',
                '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF, 0 0 60px #00D4FF',
                '0 0 5pxrgb(4, 0, 255), 0 0 10pxrgb(0, 4, 255), 0 0 20pxrgb(0, 8, 255), 0 0 40pxrgb(0, 55, 255)',
              ],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            YR IT SOLUTIONS
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
