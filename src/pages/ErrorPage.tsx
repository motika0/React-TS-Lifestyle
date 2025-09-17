import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex dark:bg-gray-900 flex-col items-center justify-center h-screen bg-white relative">
      <div className="absolute top-0 right-0 p-4 hidden md:block">
        <img 
          src="/images/error.png" 
          alt="Decorative" 
          className="w-[340px] h-auto" 
        />
      </div>
      <div className="absolute bottom-0 left-0 p-4 hidden md:block">
        <img 
          src="/images/error.png" 
          alt="Decorative" 
          className="w-[340px] h-auto" 
        />
      </div>
      <div className="md:hidden w-[340px] h-auto mb-4">
        <img 
          src="/images/error.png" 
          alt="Decorative" 
          className="w-full h-auto" 
        />
      </div>
      <h1 className="text-4xl md:text-5xl dark:text-white font-bold mb-2 text-center">Ошибка 404</h1>
      <p className="text-lg mb-6 dark:text-white text-center">Страница не была найдена</p>
      <button 
        onClick={handleGoBack} 
        className="bg-gray-800 dark:bg-white dark:text-black text-white py-2 px-4 rounded-full hover:bg-gray-700"
      >
        Вернуться назад
      </button>
      <div className="md:hidden w-[340px] h-auto mt-4">
        <img 
          src="/images/error.png" 
          alt="Decorative" 
          className="w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default ErrorPage;