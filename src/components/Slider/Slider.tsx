import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SliderProps {
  currentColor: string; 
}

const Slider: React.FC<SliderProps> = ({ currentColor }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const pages = ['about-us', 'physical-activity', 'healthy-eating', 'mental-health'];

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      navigate(`/${pages[index]}`);
    }
  };

  useEffect(() => {
    const currentPath = window.location.pathname.split('/')[1];
    const pageIndex = pages.indexOf(currentPath);
    if (pageIndex !== -1) {
      setCurrentIndex(pageIndex);
    }
  }, [pages]);

  return (
    <div className="lg:flex hidden justify-center  items-center my-10 mb-[198px]">
      {pages.map((page, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
          className="cursor-pointer transition-all duration-300 ease-in-out rounded-full mx-2"
          style={{
            width: currentIndex === index ? '20px' : '15px',
            height: currentIndex === index ? '20px' : '15px',
            backgroundColor: currentIndex === index ? currentColor : 'transparent',
            border: currentIndex === index ? 'none' : `3px solid ${currentColor}`,
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default Slider;