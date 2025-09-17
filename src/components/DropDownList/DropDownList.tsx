import React, { useState } from 'react';

interface DropDownListProps {
  title: string;
  items: { title: string; duration: string; image: string; detailPath: string; category: string }[];
  onRemove: (title: string) => void;
}

const DropDownList: React.FC<DropDownListProps> = ({ title, items, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getDetailPath = (item: { title: string; category: string; detailPath: string; image: string }) => {
    let basePath;
    
    switch (item.category) {
      case 'recipe':
        basePath = '/healthy-eating/recipes';
        break;
      case 'workout':
        basePath = '/physical-activity/training';
        break;
      case 'methodology':
        basePath = '/mental-health/methods';
        break;
      default:
        basePath = '/';
    }

    const encodedTitle = encodeURIComponent(item.title);
    const encodedImage = encodeURIComponent(item.image.replace(/^\//, ''));
    return `${basePath}/${item.detailPath}/${encodedTitle}/${encodedImage}`;
  };

  return (
    <div className="bg-white rounded-[20px] md:rounded-[30px] w-[90%] px-4 py-3 md:px-6 md:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:shadow-[0_4px_40px_rgba(0,0,0,0.25)] relative overflow-hidden">
      <button 
        onClick={toggleDropdown} 
        className="flex font-montserrat font-medium justify-between items-center w-full text-base md:text-lg text-left focus:outline-none"
      >
        <span>{title}</span>
        <span className="ml-2 transform transition-transform duration-200">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-3 md:mt-4 transition-all duration-300 ease-in-out">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 overflow-x-auto pb-2">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="p-3 md:p-4 bg-gray-50 hover:bg-gray-100 rounded-md flex flex-col transition-colors duration-200 min-w-[200px]"
                >
                  <div 
                    onClick={() => window.location.href = getDetailPath(item)} 
                    className="flex-grow cursor-pointer"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-40 sm:h-48 md:h-60 lg:h-72 object-cover rounded-md mb-2"
                    />
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{item.duration}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(item.title);
                    }}
                    className="mt-2 w-full py-1 md:py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-xs sm:text-sm"
                  >
                    Убрать из избранного
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4 text-sm md:text-base">
              Нет избранных элементов.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDownList;