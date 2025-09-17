import React, { useState } from 'react';

interface FilterOption {
  label: string;
  value: string;
}

const filterOptions = {
  durations: [
    { label: 'Менее 30 минут', value: 'less_30' },
    { label: '30-60 минут', value: '30_60' },
    { label: 'Более 60 минут', value: 'more_60' },
  ],
  goals: [
    { label: 'Завтрак', value: 'Завтрак' },
    { label: 'Ужин', value: 'Ужин' }, 
    { label: 'Закуска', value: 'Закуска' },
    { label: 'Обед', value: 'Обед' },
  ],
};

const FilterRecipes: React.FC<{ onApplyFilters: (filters: any) => void }> = ({ onApplyFilters }) => {
  const [caloriesRange, setCaloriesRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleDurationChange = (value: string) => {
    setSelectedDurations(prev => {
      const newDurations = prev.includes(value) ? prev.filter(duration => duration !== value) : [...prev, value];
      onApplyFilters({ calories: caloriesRange, durations: newDurations, goals: selectedGoals });
      return newDurations;
    });
  };

  const handleGoalChange = (value: string) => {
    setSelectedGoals(prev => {
      const newGoals = prev.includes(value) ? prev.filter(goal => goal !== value) : [...prev, value];
      onApplyFilters({ calories: caloriesRange, durations: selectedDurations, goals: newGoals });
      return newGoals;
    });
  };

  const handleCaloriesChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    let value = e.target.value;

    if (value === '') {
      value = '0';
    } else if (value.startsWith('0') && value.length > 1) {
      value = value.replace(/^0+/, '');
    }

    const numericValue = Math.max(0, parseInt(value));

    setCaloriesRange(prev => {
      const newRange = { ...prev, [type]: numericValue };
      onApplyFilters({ calories: newRange, durations: selectedDurations, goals: selectedGoals });
      return newRange;
    });
  };

  return (
  <div className="filter-container font-comfortaa w-full md:w-[328px] font-light p-4 rounded-[30px] mb-4 bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)]">
    <h2 className="text-[20px] mb-6 md:mb-10">Фильтрация</h2>

      <div className="mb-4">
        <h4 className="text-4 mb-3">Число калорий</h4>
        <div className="flex justify-center gap-3 mb-2">
          <label className="flex items-center">
            <span className="mr-2">от</span>
            <input
              type="text"
              value={caloriesRange.min}
              onChange={(e) => handleCaloriesChange(e, 'min')}
              className="border rounded-full p-1 w-16"
              placeholder="0"
            />
          </label>
          <label className="flex items-center">
            <span className="mr-2">до</span>
            <input
              type="text"
              value={caloriesRange.max}
              onChange={(e) => handleCaloriesChange(e, 'max')}
              className="border rounded-full p-1 w-16"
              placeholder="1000"
            />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-4 mb-3">Время приготовления</h4>
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

      <div>
        <h4 className="text-4 mb-3">Тип блюда</h4>
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

export default FilterRecipes;