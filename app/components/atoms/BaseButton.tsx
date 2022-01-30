import React, { VFC } from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

export const BaseButton: VFC<Props> = ({ text, onClick }) => {
  return (
    <button className='py-[0.5rem] px-[1rem] text-white bg-[#2f80ed] rounded-lg' onClick={onClick}>
      {text}
    </button>
  );
};
