import React from 'react';
import { motion } from 'framer-motion';

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Backdrop({ children, onClick }: BackdropProps) {
  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
