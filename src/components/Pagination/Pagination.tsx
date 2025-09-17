import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  activeColor: string;
  className?: string;
}

const Pagination = ({ currentPage, totalPages, onPageChange, activeColor, className }: PaginationProps) => {
  const getButtonStyle = (isActive: boolean) => {
    return {
      backgroundColor: isActive ? activeColor : 'white',
      color: isActive ? 'white' : 'black',
    };
  };

  return (
 <div className={`flex items-center md:ml-[33px] mb-4 md:mb-[40px] ${className}`}>
      <button
        className="mx-2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        <img 
          src="/images/pagin-left.png" 
          alt="Left Arrow" 
        />
      </button>
      
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className="mx-2 w-[30px] h-[30px] flex items-center justify-center rounded-full transition duration-300 ease-in-out font-montserrat font-medium text-[14px]"
          style={getButtonStyle(currentPage === index + 1)}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        className="mx-2 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img 
          src="/images/pagin-right.png" 
          alt="Right Arrow" 
        />
      </button>
    </div>
  );
};

export default Pagination;