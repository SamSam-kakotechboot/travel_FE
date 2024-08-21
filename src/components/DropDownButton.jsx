import React, { useState } from 'react';
import CheckIcon from './icons/CheckIcon';

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Latest');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event, option) => {
    event.preventDefault(); // 기본 이벤트 방지
    setSelectedOption(option);
    onSelect(option); // 선택된 옵션을 부모 컴포넌트로 전달
    setIsOpen(false);
  };

  const options = ['Price', 'Rating', 'Latest'];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-28 h-[32px] px-[24px] py-[4px] rounded-full border border-gray-300 bg-white"
      >
        <span className="text-black text-sm font-medium leading-6 tracking-wide">
          Order by
        </span>
      </button>
      {isOpen && (
        <div
          className="origin-bottom-left absolute left-0 bottom-full mb-2 w-28 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map(option => (
              <button
                key={option}
                onClick={event => handleOptionClick(event, option)}
                className="flex justify-between items-center px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                <span className="text-center">{option}</span>
                {selectedOption === option && <CheckIcon className="ml-2" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
