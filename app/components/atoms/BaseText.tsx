import React, { VFC } from 'react';

type Props = {
  margin: string;
  text: string;
};

export const BaseText: VFC<Props> = ({ margin, text }) => {
  return <p className={`my-[${margin}] text-gray-400`}>{text}</p>;
};
