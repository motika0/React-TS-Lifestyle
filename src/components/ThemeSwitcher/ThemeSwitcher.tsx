import React, { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.classList.add('transition-colors', 'duration-500');
    document.documentElement.classList.add('transition-colors', 'duration-500');
    
    if (isDarkTheme) {
      document.body.className = 'bg-gray-900 transition-colors duration-500';
      document.documentElement.classList.add('dark');
    } else {
      document.body.className = 'bg-white transition-colors duration-500';
      document.documentElement.classList.remove('dark');
    }

    const timer = setTimeout(() => {
      document.body.classList.remove('transition-colors', 'duration-500');
      document.documentElement.classList.remove('transition-colors', 'duration-500');
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isDarkTheme]);

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      <div className='flex items-center justify-center rounded-full w-14 h-14 bg-white shadow-lg transition-all duration-300'>
        <img 
          src="/images/light-theme.png" 
          alt="Светлая тема" 
          className={`absolute transition-opacity duration-300 ${
            !isDarkTheme ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        <img 
          src="/images/dark-theme.png" 
          alt="Темная тема" 
          className={`absolute transition-opacity duration-300 ${
            isDarkTheme ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>
    </button>
  );
}