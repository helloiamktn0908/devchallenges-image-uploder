import React, { VFC } from 'react';

type Props = {
  text: string;
};
export const Title: VFC<Props> = ({ text }) => {
  return <h1 className='text'>{text}</h1>;
};
