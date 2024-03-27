import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Backdrop from './backdrop';

type ModalProps = {
  children: React.ReactNode;
  handleClose: () => void;
};

const appear = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Modal({ children, handleClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleClose]);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        // className='w-1/2 md:w-auto md:max-w-[700px] h-1/2 md:h-auto md:max-h-[300px] m-auto p-8 rounded-lg flex flex-col items-center'
        variants={appear}
        initial='hidden'
        animate='visible'
      >
        <div className='bg-gray-100 border border-black/5 rounded-lg px-8 py-6'>
          {children}
          <button
            onClick={handleClose}
            className='text-xs mt-8 hover:text-gray-950 underline hover:no-underline'
          >
            Schließen
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
}
