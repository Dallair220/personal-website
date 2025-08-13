'use client';

import React, { useState } from 'react';
import Modal from './modal';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className='pb-10 px-4 text-center text-gray-500'>
      <small className='text-xs'>&copy; {new Date().getFullYear()} Paul Hermann. </small>

      <button
        onClick={() => setModalOpen(true)}
        className='text-xs underline hover:text-gray-950 hover:no-underline'
      >
        Impressum
      </button>

      {modalOpen && (
        <Modal handleClose={() => setModalOpen(false)}>
          <h3 className='text-2xl font-medium text-gray-950 mb-8'>Impressum</h3>
          <ul className='text-gray-950 text-left ml-2'>
            <li className='font-medium'>Paul Hermann</li>
            <li>Kendenicher Str. 4</li>
            <li>50969 Köln</li>
            <li>Deutschland</li>
          </ul>
        </Modal>
      )}
    </footer>
  );
}
