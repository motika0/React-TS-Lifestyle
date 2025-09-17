import React, { useState } from 'react';

interface FilterOption {
  label: string;
  value: string;
}

const filterOptions = {
    levels: [
      { label: 'Начинающий', value: 'Начинающий' }, 
      { label: 'Средний', value: 'Средний' },
      { label: 'Продвинутый', value: 'Продвинутый' },
    ],
    durations: [
        { label: 'Менее 30 минут', value: 'less_30' },
        { label: '30-60 минут', value: '30_60' },
        { label: 'Более 60 минут', value: 'more_60' },
      ],
    goals: [
      { label: 'Уменьшение веса', value: 'Уменьшение веса' },
      { label: 'Увеличение веса', value: 'Увеличение веса' },
      { label: 'Улучшение выносливости', value: 'Улучшение выносливости' },
    ],
  };

const Filter: React.FC<{ onApplyFilters: (filters: any) => void }> = ({ onApplyFilters }) => {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleLevelChange = (value: string) => {
    setSelectedLevels(prev => {
      const newLevels = prev.includes(value) ? prev.filter(level => level !== value) : [...prev, value];
      onApplyFilters({ levels: newLevels, durations: selectedDurations, goals: selectedGoals });
      return newLevels;
    });
  };

  const handleDurationChange = (value: string) => {
    setSelectedDurations(prev => {
      const newDurations = prev.includes(value) ? prev.filter(duration => duration !== value) : [...prev, value];
      onApplyFilters({ levels: selectedLevels, durations: newDurations, goals: selectedGoals });
      return newDurations;
    });
  };

  const handleGoalChange = (value: string) => {
    setSelectedGoals(prev => {
      const newGoals = prev.includes(value) ? prev.filter(goal => goal !== value) : [...prev, value];
      onApplyFilters({ levels: selectedLevels, durations: selectedDurations, goals: newGoals });
      return newGoals;
    });
  };

  return (
    <div className="filter-container font-comfortaa w-full md:w-[328px] font-light p-4 rounded-[30px] mb-4 bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)]">
      <h2 className="text-[20px] mb-10">Фильтрация</h2>

      <div className="text-3 mb-4">
        <h4 className="text-4 mb-3">Уровень подготовки</h4>
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

      <div className="text-3 mb-4">
        <h4 className="text-4 mb-3">Длительность тренировки</h4>
        {filterOptions.durations.map(option => (
          <label key={option.value} className="block">
            <input
              type="checkbox"
              value={option.value}
              onChange={() => handleDurationChange(option.value)}
              className="mr-2 mb-2"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="text-3">
        <h4 className="text-4 mb-3">Цель тренировки</h4>
        {filterOptions.goals.map(option => (
          <label key={option.value} className="block">
            <input
              type="checkbox"
              value={option.value}
              onChange={() => handleGoalChange(option.value)}
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