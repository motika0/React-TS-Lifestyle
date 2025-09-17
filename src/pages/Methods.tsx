import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CardGrid from '../components/CardGrid/CardGrid';
import Pagination from '../components/Pagination/Pagination';
import Footer from "../components/Footer/Footer";
import Search from '../components/Search/Search';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import BreadСrumbs from '../components/BreadСrumbs/assets/BreadCrumbs';
import FilterMethods from '../components/Filter/FilterMethods';

const PageColor = "#A364D3";
const allCards = [
  {
    title: 'Зеркало - мой друг',
    level: 'Улучшение самооценки',
    duration: '',
    goals: ['Посмотрите в зеркало', 'Выскажите своему отражению, все о чем думаете о себе','Скажите отражению - ты самый лучший'],
    image: '/images/mirrow.webp',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "methods-details",
    category: "methodology"
  },
  {
    title: 'Осознанное дыхание',
    level: 'Снижение стресса',
    duration: '',
    goals: ['Сосредоточьтесь на своем дыхании', 'Почувствуйте каждое вдох и выдох', 'Позвольте себе расслабиться и отпустить напряжение'],
    image: '/images/breath.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "methods-details",
    category: "methodology"
  },  
  {
    title: 'Природные прогулки',
    level: 'Повышение концентрации',
    duration: '',
    goals: ['Выходите на прогулку на свежем воздухе', 'Обратите внимание на окружающую природу', 'Сосредоточьтесь на своих чувствах и ощущениях'],
    image: '/images/natural.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "methods-details",
    category: "methodology"
  },
  {
    title: 'Журнал благодарности',
    level: 'Улучшение самооценки',
    duration: '',
    goals: ['Записывайте три вещи, за которые вы благодарны', 'Отмечайте свои достижения и положительные моменты', 'Развивайте привычку видеть позитивное в жизни'],
    image: '/images/jurn.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "methods-details",
    category: "methodology"
  },
  {
    title: 'Медитация сострадания',
    level: 'Снижение стресса',
    duration: '',
    goals: ['Сядьте в тихом месте и сосредоточьтесь на своих чувствах', 'Практикуйте доброту и сострадание к себе', 'Развивайте позитивное отношение к окружающим'],
    image: '/images/med.webp',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "methods-details",
    category: "methodology"
  },
];

const sortOptions = [
  { label: 'По популярности', value: 'popularity' },
];

const items_per_page = 4;

export default function Methods() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCards, setFilteredCards] = useState(allCards);
  const [sortValue, setSortValue] = useState(sortOptions[0].value); 

  const totalPages = Math.ceil(filteredCards.length / items_per_page);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value: string) => {
    setSortValue(value);
    sortCards(value);
  };

  const sortCards = (value: string) => {
    let sortedCards = [...filteredCards];
  
    if (value === 'popularity') {
      sortedCards = allCards; 
    } 
  
    setFilteredCards(sortedCards);
  };

  const handleSearchResults = (results: any[]) => {
    setFilteredCards(results);
    setCurrentPage(1); 
  };
  const handleApplyFilters = (filters: any) => {
    const newFilteredCards = allCards.filter(card => {
      const levelMatch = filters.levels.length === 0 || filters.levels.includes(card.level);
      return levelMatch;
    });
    setFilteredCards(newFilteredCards);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * items_per_page;
  const currentCards = filteredCards.slice(startIndex, startIndex + items_per_page);

  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row max-w-[1571px] mx-auto gap-[60px] px-4 md:px-0'>
        <div className='mt-[40px] md:mt-[88px] md:ml-[80px]'>
          <FilterMethods onApplyFilters={handleApplyFilters} />
        </div>
        <div className='max-w-[1200px] w-full'>
          <div className="hidden lg:block">
            <BreadСrumbs hoverColor={PageColor} />
          </div>
          <Search products={allCards} onSearch={handleSearchResults} />
          
          <div className="flex flex-col items-start mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
              <SortDropdown options={sortOptions} onSortChange={handleSortChange} activeColor={PageColor} />
            </div>
          </div>
          
          <CardGrid cards={currentCards} />
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            activeColor={PageColor}
            className="mt-[25px]"
          />
        </div>
      </div>
      <Footer phoneColor={PageColor} />
    </div>
  );
}
