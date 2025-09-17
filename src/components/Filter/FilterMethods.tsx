import React, { useState } from 'react';

interface FilterOption {
  label: string;
  value: string;
}

const filterOptions = {
  levels: [
    { label: 'Снижение стресса', value: 'Снижение стресса' },
    { label: 'Повышение концентрации', value: 'Повышение концентрации' },
    { label: 'Улучшение самооценки', value: 'Улучшение самооценки' },
  ],
};

const Filter: React.FC<{ onApplyFilters: (filters: any) => void }> = ({ onApplyFilters }) => {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const handleLevelChange = (value: string) => {
    setSelectedLevels(prev => {
      const newLevels = prev.includes(value) ? prev.filter(level => level !== value) : [...prev, value];
      onApplyFilters({ levels: newLevels });
      return newLevels;
    });
  };

  return (
    <div className="filter-container font-comfortaa w-full md:w-[328px] font-light p-4 rounded-[30px] mb-4 bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)]">
      <h2 className="text-[20px] mb-10">Фильтрация</h2>
      <div className="text-3 mb-4">
        <h4 className="text-3 mb-3">Выбранные изменения</h4>
        {filterOptions.levels.map(option => (
          <label key={option.value} className="block">
            <input
              type="checkbox"
              value={option.value}
              onChange={() => handleLevelChange(option.value)}
              className="mr-2 mb-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;