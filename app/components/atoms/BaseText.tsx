import React, { VFC } from 'react';

type Props = {
  text: string;
};

export const BaseText: VFC<Props> = ({ text }) => {
  return <p className='graytext'>{text}</p>;
};
