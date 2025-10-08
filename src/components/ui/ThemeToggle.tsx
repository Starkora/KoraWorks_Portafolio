'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="w-12 h-6 bg-gray-300 rounded-full" />;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="flex items-center justify-center w-4 h-4 bg-white rounded-full shadow-md"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-gray-800" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};