import React, { useState } from 'react';

interface Product {
  title: string;
  level: string;
  duration: string;
  goals: string[];
  image: string;
  buttonColor: string;
  textColor: string;
}

interface SearchProps {
  products: Product[];
  onSearch: (results: Product[]) => void;
}

const Search: React.FC<SearchProps> = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(term)
    );
    onSearch(filteredProducts);
  };

  return (
    <div className="flex items-center font-comfortaa border shadow-[0_4px_40px_rgba(0,0,0,0.25)] rounded-[30px] md:mt-3 p-3 md:p-[14px] mb-4 md:mb-[33px] bg-white">
      <input
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleSearch}
        className="flex-1 ml-2 md:ml-[20px] focus:outline-none"
      />
      <img src="/images/search.png" alt="Поиск" className="h-5 w-5 md:h-6 md:w-6 mr-1 md:mr-2" />
    </div>
  );
};

export default Search;