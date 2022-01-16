import React, { useCallback } from 'react';
import { BaseButton } from '../atoms/BaseButton';
import { BaseText } from '../atoms/BaseText';
import { Title } from '../atoms/Title';
import { DropZone } from '../molecules/DropZone';

export const BaseUploader = () => {
  const upload = useCallback(async () => {
    await fetch('/api/image', {
      method: 'POST',
      body: JSON.stringify({ image: 'test' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);
  return (
    <div className='box'>
      <Title text='Upload your image' />
      <BaseText text='File shoudl be Jpeg,Png...' />
      <DropZone />
      <BaseText text='Or' />
      <BaseButton text='Choose a file' onClick={upload} />
    </div>
  );
};
