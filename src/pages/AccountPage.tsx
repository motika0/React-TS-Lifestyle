import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DropDownList from '../components/DropDownList/DropDownList';

const PageColor = "#000";

interface FavoriteItem {
  title: string;
  duration: string;
  image: string;
  category: string;
  detailPath: string;
}

const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  const getFavorites = (): FavoriteItem[] => {
    if (!currentUser?.email) return [];
    const favoritesKey = `favorites_${currentUser.email}`;
    return JSON.parse(localStorage.getItem(favoritesKey) || '[]') as FavoriteItem[];
  };

  const handleRemoveFromFavorites = (title: string) => {
    const favoritesKey = `favorites_${currentUser.email}`;
    const updatedFavorites = getFavorites().filter((item: FavoriteItem) => item.title !== title);
    localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    window.location.reload();
  };

  const favorites: FavoriteItem[] = getFavorites();

  const recipes = favorites.filter(item => item.category === 'recipe');
  const workouts = favorites.filter(item => item.category === 'workout');
  const methodologies = favorites.filter(item => item.category === 'methodology');
  const resourseaboutrec = favorites.filter(item => item.category === 'resourseaboutrec');
  const resourseaboutps = favorites.filter(item => item.category === 'resourseaboutps');

  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />
      
      <div className='py-4 px-6 md:py-6 md:pl-16 mt-12 md:mt-20 mx-4 md:ml-[200px] flex flex-col md:flex-row justify-between rounded-3xl md:rounded-full bg-white w-[80%] shadow-[0_0_40px_rgba(0,0,0,0.25)]'>
        <div className='text-base md:text-xl font-montserrat font-medium mb-4 md:mb-0'>
          <p>Имя: {currentUser.name || 'Не указано'}</p>
          <p>Телефон: {currentUser.phone || 'Не указан'}</p>
          <p>Email: {currentUser.email || 'Не указан'}</p>
        </div>
        <button
          onClick={handleLogout}
          className='px-5 py-3 md:py-0 md:h-[50px] bg-black text-white rounded-full hover:bg-gray-700 self-start md:self-center'
        >
          Выйти из аккаунта
        </button>
      </div>

      <div className="my-8 md:my-12 mx-4 md:ml-[200px] flex gap-6 md:gap-10 flex-col">
        <DropDownList title="Избранные рецепты" items={recipes} onRemove={handleRemoveFromFavorites} />
        <DropDownList title="Избранные тренировки" items={workouts} onRemove={handleRemoveFromFavorites} />
        <DropDownList title="Избранные методики" items={methodologies} onRemove={handleRemoveFromFavorites} />
        <DropDownList title="Избранные статьи о питании" items={resourseaboutrec} onRemove={handleRemoveFromFavorites} />
        <DropDownList title="Избранные статьи о психологии" items={resourseaboutps} onRemove={handleRemoveFromFavorites} />
      </div>

      <Footer phoneColor={PageColor} />
    </div>
  );
};

export default AccountPage;