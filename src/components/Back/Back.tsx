import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="flex items-center justify-center mx-auto w-[120px] bg-white rounded-full p-1  shadow-[0_4px_40px_rgba(0,0,0,0.25)] mb-[75px] "
      aria-label="Назад"
    >
      <span className="font-comfortaa text-[18px] font-bold">Назад</span>
    </button>
  );
};

export default BackButton;