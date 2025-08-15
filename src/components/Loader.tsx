import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onFinish: () => void;
}

const Loader = ({ onFinish }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onFinish();
    }, 1500);

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
            background: 'black',
          }}
        >
          {/* Zap / Lightning text effect */}
          <motion.h1
            className="text-5xl font-extrabold text-yellow-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0.7, 1],
              scale: [0.8, 1.2, 1],
              textShadow: [
                '0 0 5px #fff',
                '0 0 20px #ff0',
                '0 0 5px #fff'
              ]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            ⚡ YR IT Solutions ⚡
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
