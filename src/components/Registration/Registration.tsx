import React, { useState } from 'react';

const Registration: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+375');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = 'Обязательное поле';
    if (!/^\+375\d{9}$/.test(phone)) newErrors.phone = 'Формат: +375XXXXXXXXX';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Некорректный email';
    if (password.length < 6) newErrors.password = 'Минимум 6 символов';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Пароли не совпадают';

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((u: any) => u.email === email)) {
      newErrors.email = 'Email уже используется';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('375')) {
      setPhone(`+${value.slice(0, 12)}`);
    }
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newUser = { name, phone, email, password };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    onSwitch();
  };

  return (
    <form onSubmit={handleRegistration} className="space-y-4">
      <div>
        <label className='block dark:text-white font-comfortaa font-bold mb-1' htmlFor="name">
          Имя
        </label>
        <input
          type="text"
          id="name"
          className='w-full py-2 px-4 border-2 rounded-full focus:ring-2 focus:ring-green-500'
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1 ml-2">{errors.name}</p>}
      </div>

      <div>
        <label className='block font-comfortaa dark:text-white font-bold mb-1' htmlFor="phone">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          className='w-full py-2 px-4 border-2 rounded-full focus:ring-2 focus:ring-green-500'
          placeholder="+375291234567"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={13}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1 ml-2">{errors.phone}</p>}
      </div>

      <div>
        <label className='block font-comfortaa dark:text-white font-bold mb-1' htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className='w-full py-2 px-4 border-2 rounded-full focus:ring-2 focus:ring-green-500'
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>}
      </div>

      <div>
        <label className='block font-comfortaa dark:text-white font-bold mb-1' htmlFor="password">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          className='w-full py-2 px-4 border-2 rounded-full focus:ring-2 focus:ring-green-500'
          placeholder="Не менее 6 символов"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1 ml-2">{errors.password}</p>}
      </div>

      <div>
        <label className='block font-comfortaa dark:text-white font-bold mb-1' htmlFor="confirmPassword">
          Подтвердите пароль
        </label>
        <input
          type="password"
          id="confirmPassword"
          className='w-full py-2 px-4 border-2 mb-6 rounded-full focus:ring-2 focus:ring-green-500'
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1 ml-2">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        className='w-full py-3 bg-customGreen text-white font-comfortaa font-bold rounded-full hover:bg-green-600'
      >
        Зарегистрироваться
      </button>

      <p className='text-center dark:text-white mt-4'>
        Уже есть аккаунт?{' '}
        <span 
          className='text-customGreen cursor-pointer font-semibold'
          onClick={onSwitch}
        >
          Войти
        </span>
      </p>
    </form>
  );
};

export default Registration;