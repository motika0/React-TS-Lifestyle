import React from 'react';
import { Link } from 'react-router-dom';

interface LearnMoreButtonProps {
  to: string; 
  color: string;
  count: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ to, color, count }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center">
      <Link to={to} className="bg-[#0077FF] text-white font-['Comfortaa'] border-0 rounded-full 
                      px-6 py-2 flex items-center justify-center 
                      text-lg md:text-xl font-bold no-underline cursor-pointer 
                      leading-[133.8%] tracking-[1%] 
                      shadow-[0_4px_40px_rgba(0,0,0,0.25)]" style={{background: color}}>
        Узнать больше
      </Link>
      <div className="flex flex-col text-center md:text-left">
        <span className="text-sm md:text-base dark:text-white font-normal mt-1">Всего</span>
        <span style={{color: color}} className="text-xl md:text-2xl text-[#0077FF] font-bold">{count}</span>
      </div>
    </div>
  );
};

export default LearnMoreButton;