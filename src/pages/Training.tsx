import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CardGrid from '../components/CardGrid/CardGrid';
import Pagination from '../components/Pagination/Pagination';
import Footer from "../components/Footer/Footer";
import Search from '../components/Search/Search';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import BreadСrumbs from '../components/BreadСrumbs/assets/BreadCrumbs';
import Filter from '../components/Filter/Filter';

const PageColor = "#0077FF";
const allCards = [
  {
    title: 'Силовая тренировка',
    level: 'Продвинутый',
    duration: '30 мин',
    goals: ['Увеличение веса', 'Улучшение выносливости'],
    image: '/images/arm.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },
  {
    title: 'Легкая тренировка',
    level: 'Начинающий',
    duration: '20 мин',
    goals: ['Уменьшение веса', 'Улучшение выносливости'],
    image: '/images/Volga.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },
  {
    title: 'Быстрая тренировка',
    level: 'Начинающий',
    duration: '15 мин',
    goals: ['Уменьшение веса'],
    image: '/images/fast.jpeg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },
  {
    title: 'Крутая тренировка',
    level: 'Средний',
    duration: '45 мин',
    goals: ['Улучшение выносливости'],
    image: '/images/cool.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },
  {
    title: 'Домашняя тренировка',
    level: 'Начинающий',
    duration: '25 мин',
    goals: ['Улучшение выносливости'],
    image: '/images/homa.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },
  {
    title: 'Тренировка ног',
    level: 'Средний',
    duration: '20 мин',
    goals: ['Увеличение веса','Улучшение выносливости'],
    image: '/images/lag.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },
  {
    title: 'Тренировка спины',
    level: 'Средний',
    duration: '45 мин',
    goals: ['Улучшение выносливости'],
    image: '/images/spine.png',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },  {
    title: 'Тренировка икр ног',
    level: 'Продвинутый',
    duration: '65 мин',
    goals: ['Улучшение выносливости','Увеличение веса'],
    image: '/images/icr.png',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },  {
    title: 'Тренировка на похудение',
    level: 'Продвинутый',
    duration: '75 мин',
    goals: ['Уменьшение веса'],
    image: '/images/tail.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "training-details",
    category: "workout"
  },
];

const sortOptions = [
  { label: 'По популярности', value: 'popularity' },
  { label: 'По возрастанию времени', value: 'timeup' },
  { label: 'По убыванию времени', value: 'timedown' },
];

const items_per_page = 6;

export default function Training() {
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
    } else if (value === 'timeup') {
      sortedCards.sort((a, b) => {
        const aTime = parseInt(a.duration.split(' ')[0]);
        const bTime = parseInt(b.duration.split(' ')[0]);
        return aTime - bTime;
      });
    } else if (value === 'timedown') {
      sortedCards.sort((a, b) => {
        const aTime = parseInt(a.duration.split(' ')[0]);
        const bTime = parseInt(b.duration.split(' ')[0]);
        return bTime - aTime;
      });
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
      const durationMatch = filters.durations.length === 0 || 
        (filters.durations.includes('less_30') && parseInt(card.duration) < 30) ||
        (filters.durations.includes('30_60') && parseInt(card.duration) >= 30 && parseInt(card.duration) <= 60) ||
        (filters.durations.includes('more_60') && parseInt(card.duration) > 60);
      
      const goalMatch = filters.goals.length === 0 || filters.goals.some((goal: string) => card.goals.includes(goal));

      return levelMatch && durationMatch && goalMatch;
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
          <Filter onApplyFilters={handleApplyFilters} />
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