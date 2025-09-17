import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Registration from '../Registration/Registration';

export default function AccountButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email);
    
    if (!user) {
      setError('Пользователь с таким email не найден');
      return;
    }
    
    if (user.password !== password) {
      setError('Неверный пароль');
      return;
    }

    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/account', { state: user });
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    if (!localStorage.getItem('loggedIn')) {
      setIsModalOpen(!isModalOpen);
    } else {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      navigate('/account', { state: user });
    }
  };

  const handleSwitchToRegistration = () => {
    setIsLogin(false);
    setError('');
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
    setError('');
  };

  return (
    <div>
      <a className='AccountButton' href='#' onClick={toggleModal} role="button">
        <div className='flex items-center justify-center rounded-[190px] w-[55px] h-[55px] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)]'>
          <img src="/images/user-circle.png" alt="Аккаунт" />
        </div>
      </a>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white dark:bg-gray-900 rounded-[30px] p-12 relative w-[520px]'>
            <h2 className='text-center dark:text-white font-comfortaa font-bold text-[30px] mb-4'>
              {isLogin ? 'Вход' : 'Регистрация'}
            </h2>
            
            {isLogin ? (
              <>
                <p className='text-center dark:text-white font-montserrat text-[16px] mb-7'>
                  Для удобной нахождения информации просим зарегистрироваться
                </p>
                <form onSubmit={handleLogin}>
                  <div className='mb-4'>
                    <label className='block font-bold font-comfortaa mb-1 dark:text-white' htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className='border-2 rounded-full w-full py-2 px-4 focus:ring-2 focus:ring-green-500'
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block dark:text-white font-bold font-comfortaa mb-1' htmlFor="password">
                      Пароль
                    </label>
                    <input
                      type="password"
                      id="password"
                      className='border-2 rounded-full w-full py-2 px-4 focus:ring-2 focus:ring-green-500'
                      placeholder="Пароль"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                  <button
                    type="submit"
                    className='w-full text-xl mt-6 font-comfortaa font-bold py-3 bg-customGreen text-white rounded-full hover:bg-green-600'
                  >
                    Войти
                  </button>
                </form>
                <p className='text-center dark:text-white mt-4'>
                  Нет аккаунта?{' '}
                  <span 
                    className='text-customGreen cursor-pointer font-semibold' 
                    onClick={handleSwitchToRegistration}
                  >
                    Создать аккаунт
                  </span>
                </p>
              </>
            ) : (
              <Registration onSwitch={handleSwitchToLogin} />
            )}
            
            <button
              onClick={toggleModal}
              className='absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800'
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}