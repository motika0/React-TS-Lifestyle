import React from 'react';
import { Link } from 'react-router-dom';
import AddToFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton';

interface CardProps {
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

const Card: React.FC<CardProps> = ({ title, level, duration, goals, image, buttonColor, textColor, detailPath, category }) => {
  const item = { title, duration, image, category, detailPath };

  return (
    <div className="flex dark:text-white flex-col w-full max-w-full 
                    sm:max-w-[500px] sm:mx-auto
                    md:max-w-full
                    lg:max-w-[500px]
                    custom-xl:max-w-[520px]
                    xl:w-full xl:max-w-none">
      <Link to={`${detailPath}/${encodeURIComponent(title)}/${encodeURIComponent(image.replace(/^\//, ''))}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-52 lg:h-60 xl:h-72
                     object-cover rounded-2xl sm:rounded-3xl
                     shadow-md sm:shadow-lg
                     mb-4 sm:mb-5 md:mb-6"
        />
      </Link>

      <div className="flex flex-col px-3 sm:px-4 md:px-5">
        <div className="sm:hidden flex flex-col mb-2">
          <h2 className="text-lg font-bold font-comfortaa">{title}</h2>
          <div className="flex justify-between mt-2">
            <p className={`text-${textColor} font-bold`}>{level}</p>
            <p className={`text-${textColor} font-medium font-montserrat`}>{duration}</p>
          </div>
        </div>

        <div className="hidden sm:flex justify-between items-start mb-2 md:mb-3 font-comfortaa">
          <h2 className="text-lg md:text-xl lg:text-xl font-bold">{title}</h2>
          <div className="flex items-end">
            <p className={`text-${textColor} font-bold mr-3 md:mr-4 lg:mr-5`}>{level}</p>
            <p className={`text-${textColor} font-medium font-montserrat text-lg md:text-xl`}>{duration}</p>
          </div>
        </div>

        <div className="mb-3 md:mb-4">
          <ol className="list-decimal pl-4 pr-2 sm:pl-5 sm:pr-4 font-medium font-montserrat">
            {goals.map((goal, index) => (
              <li className='text-sm sm:text-base' key={index}>{goal}</li>
            ))}
          </ol>
        </div>
      </div>

      <AddToFavoritesButton buttonColor={buttonColor} item={item} />
    </div>
  );
};

export default Card;