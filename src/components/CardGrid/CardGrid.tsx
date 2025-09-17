import React from 'react';
import Card from '../Card/Card';

interface CardData {
  title: string;
  level: string;
  duration: string;
  goals: string[];
  image: string;
  buttonColor: string; 
  textColor: string; 
  detailPath: string; 
  category: string;
}

interface CardGridProps {
  cards: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid gap-6 grid-cols-1 
                    sm:gap-8
                    md:grid-cols-2 md:gap-x-6 md:gap-y-10
                    lg:gap-x-8 lg:gap-y-12
                    custom-xl:grid-cols-2 custom-xl:gap-x-8 custom-xl:gap-y-14
                    xl:grid-cols-custom xl:gap-x-10 xl:gap-y-16
                    2xl:gap-x-12 2xl:gap-y-20">
      {cards.length === 0 ? (
        <p className="text-center text-red-600 col-span-full">Ничего не найдено</p>
      ) : (
        cards.map((card, index) => (
          <Card key={index} {...card} />
        ))
      )}
    </div>
  );
};

export default CardGrid;