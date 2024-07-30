import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-36 bg-gray-200 text-black text-xs rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
