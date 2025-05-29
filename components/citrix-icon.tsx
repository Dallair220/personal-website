import React from 'react';
import Image, { ImageProps } from 'next/image';
import citrixImg from '@/public/citrix.png';

export default function CitrixIcon(props: Omit<ImageProps, 'src' | 'alt'>) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        src={citrixImg}
        alt="Citrix Logo"
        width={28}
        height={28}
        style={{
          objectFit: 'contain',
          display: 'block',
          margin: 0,
          ...props.style,
        }}
        {...props}
      />
    </div>
  );
}