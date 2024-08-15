import React from 'react';

const Button = ({ width, height, text, onClick }) => {
  return (
    <button
      className={`flex justify-center items-center gap-3 rounded-full bg-black text-white`}
      style={{ width, height }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
