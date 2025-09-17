import React, { useState } from 'react';

interface SortOption {
  label: string;
  value: string;
}

interface SortDropdownProps {
  options: SortOption[];
  onSortChange: (sortValue: string) => void;
  activeColor: string;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ options, onSortChange, activeColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options.find(option => option.value === 'popularity') || options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SortOption) => {
    setSelectedOption(option);
    onSortChange(option.value);
    setIsOpen(false);
  };

  return (
  <div className=" mb-4 md:mb-[40px]">
    <button className="flex items-center justify-between w-full md:w-[260px] p-2 rounded-[30px] bg-white text-black shadow-[0_4px_40px_rgba(0,0,0,0.25)] text-left focus:outline-none" onClick={toggleDropdown}>
      <span className="text-sm md:text-base">{selectedOption.label}</span>
      <span>{isOpen ? '▲' : '▼'}</span>
    </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-[250px] rounded-[30px] bg-white border border-gray-300 shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left p-2 ${selectedOption.value === option.value ? `bg-[${activeColor}] rounded-[30px] text-white` : 'text-black'}`}
              style={{ backgroundColor: selectedOption.value === option.value ? activeColor : 'transparent' }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;