import React, { VFC } from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

export const BaseButton: VFC<Props> = ({ text, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
};
