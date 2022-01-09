import React from 'react';
import { BaseButton } from '../atoms/BaseButton';
import { BaseText } from '../atoms/BaseText';
import { Title } from '../atoms/Title';
import { DropZone } from '../molecules/DropZone';

export const BaseUploader = () => {
  const upload = () => {
    console.log('click!');
  };
  return (
    <div className='box'>
      <Title text='Upload your image' />
      <BaseText margin='1.5rem' text='File shoudl be Jpeg,Png...' />
      <DropZone />
      <BaseText margin='1.5rem' text='Or' />
      <BaseButton text='Choose a file' onClick={upload} />
    </div>
  );
};
