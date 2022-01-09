import React, { VFC } from 'react';

type Props = {
  text: string;
};
export const Title: VFC<Props> = ({ text }) => {
  return <h1 className='text-[1.5rem] text-gray-700'>{text}</h1>;
};
