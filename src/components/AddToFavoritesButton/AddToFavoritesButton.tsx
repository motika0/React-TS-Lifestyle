import React, { useEffect, useState } from 'react';

interface FavoriteItem {
  title: string;
  duration: string;
  image: string;
  category: string;
  detailPath: string;
}

interface AddToFavoritesButtonProps {
  buttonColor: string;
  item: FavoriteItem;
}

const AddToFavoritesButton: React.FC<AddToFavoritesButtonProps> = ({ buttonColor, item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  useEffect(() => {
    if (currentUser?.email) {
      const favoritesKey = `f0avorites_${currentUser.email}`;
      const favorites = JSON.parse(localStorage.getItem(favoritesKey) || '[]') as FavoriteItem[];
      setIsFavorite(favorites.some((fav) => fav.title === item.title));
    }
  }, [item.title, currentUser.email]);

  const toggleFavorite = () => {
    if (!currentUser?.email) return;
    
    const favoritesKey = `favorites_${currentUser.email}`;
    const favorites: FavoriteItem[] = JSON.parse(localStorage.getItem(favoritesKey) || '[]');

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.title !== item.title);
      localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem(favoritesKey, JSON.stringify([...favorites, item]));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className={`mt-3 md:mt-4 w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[245px]
                 h-[36px] sm:h-[38px] md:h-[40px]
                 py-[4px] sm:py-[4.5px] md:py-[5px]
                 px-[10px] sm:px-[12px] md:px-[15px]
                 rounded-full transition-colors duration-300 ease-in-out
                 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:shadow-[0_4px_30px_rgba(0,0,0,0.2)] lg:shadow-[0_4px_40px_rgba(0,0,0,0.25)]
                 border text-[12px] sm:text-[13px] md:text-[14px]`}
      onClick={toggleFavorite}
      style={{
        backgroundColor: isFavorite ? 'transparent' : buttonColor,
        borderColor: buttonColor,
        color: isFavorite ? buttonColor : 'white',
      }}
    >
      {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
    </button>
  );
};

export default AddToFavoritesButton;