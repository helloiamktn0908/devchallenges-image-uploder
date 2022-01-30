import Image from 'next/image';
import React from 'react';
import src from '../../public/image.svg';
import { BaseText } from '../atoms/BaseText';

export const DropZone = () => {
  return (
    <div className='image'>
      <Image src={src} alt='' />
      <BaseText margin='2rem' text='Drag & Drop your image here' />
    </div>
  );
};
