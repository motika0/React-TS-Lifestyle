import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CardGrid from '../components/CardGrid/CardGrid';
import Pagination from '../components/Pagination/Pagination';
import Footer from "../components/Footer/Footer";
import Search from '../components/Search/Search';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import BreadСrumbs from '../components/BreadСrumbs/assets/BreadCrumbs';
import FilterRecipes from '../components/Filter/FilterRecipes'

const PageColor = "#64D370";
const allCards = [
  {
    title: 'Бизнес-ланч "Рыбный"',
    level: '345 калл',
    duration: '30 мин',
    goals: ['Завтрак', 'Обед'],
    image: '/images/recipe1.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "recipes-details",
    category: "recipe"
  },
  {
    title: 'Бизнес-ланч "Мясной"',
    level: '420 калл',
    duration: '65 мин',
    goals: ['Ужин', 'Обед'],
    image: '/images/recipe3.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "recipes-details",
    category: "recipe"
  },
  {
    title: 'Бизнес-ланч "Куриный"',
    level: '350 калл',
    duration: '25 мин',
    goals: ['Обед'],
    image: '/images/recipe4.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "recipes-details",
    category: "recipe"
  },
  {
    title: 'Салат с киноа и авокадо',
    level: '425 калл',
    duration: '45 мин',
    goals: ['Завтрак','Закуска'],
    image: '/images/salat.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "recipes-details",
    category: "recipe"
  },
  {
    title: 'Овсяные панкейки с бананом',
    level: '250 калл',
    duration: '15 мин',
    goals: ['Завтрак'],
    image: '/images/pank.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "recipes-details",
    category: "recipe"
  },
  {
    title: 'Бизнес-ланч "Для вегана"',
    level: '250 калл',
    duration: '45 мин',
    goals: ['Закуска'],
    image: '/images/recipe2.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "recipes-details",
    category: "recipe"
  },
  {
    title: 'Запечённый лосось с овощами',
    level: '360 калл',
    duration: '75 мин',
    goals: ['Ужин'],
    image: '/images/los.jpg',
    buttonColor: PageColor,
    textColor: PageColor,
    detailPath: "recipes-details",
    category: "recipe"
  },
];

const sortOptions = [
  { label: 'По популярности', value: 'popularity' },
  { label: 'По возрастанию времени', value: 'timeup' },
  { label: 'По убыванию времени', value: 'timedown' },
  { label: 'По убыванию калорий', value: 'kalldown' },
  { label: 'По возрастанию калорий', value: 'kallup' },
];

const items_per_page = 6;

export default function Recipes() {
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
      else if (value === 'kallup') {
        sortedCards.sort((a, b) => {
          const aTime = parseInt(a.level.split(' ')[0]);
          const bTime = parseInt(b.level.split(' ')[0]);
          return aTime - bTime;
        });
      }
      else if (value === 'kalldown') {
      sortedCards.sort((a, b) => {
        const aTime = parseInt(a.level.split(' ')[0]);
        const bTime = parseInt(b.level.split(' ')[0]);
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
      const levelMatch = parseInt(card.level) >= filters.calories.min && parseInt(card.level) <= filters.calories.max;
      
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
        <FilterRecipes onApplyFilters={handleApplyFilters} />
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