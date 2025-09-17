import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  phoneColor: string;
}

const Footer: React.FC<FooterProps> = ({ phoneColor }) => {
  return (
    <footer className="bg-white p-4 md:p-[40px_352px_30px_388px] shadow-[0_4px_40px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col sm:flex-row justify-between max-w-[1180px] mx-auto">
        <div className="flex flex-col gap-2 font-[Comfortaa] sm:block hidden text-sm md:text-lg font-bold">
          <ul className="flex flex-col gap-2">
            <li><Link to="/about-us" className="text-[#020202] no-underline">О нас</Link></li>
            <li><Link to="/physical-activity" className="text-[#020202] no-underline">Физическая активность</Link></li>
            <li><Link to="/healthy-eating" className="text-[#020202] no-underline">Здоровое питание</Link></li>
            <li><Link to="/mental-health" className="text-[#020202] no-underline">Ментальное здоровье</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Link to="/">
            <img src='/images/logo.png' alt="ЗОЖ" className="w-[100px] md:block hidden h-auto mb-0" />
          </Link>
          <h2 className="font-[Comfortaa] text-sm md:text-lg md:block hidden font-bold mt-2">ЗОЖ</h2>
        </div>

        <div className="flex flex-col items-end">
          <h3 className="font-[Comfortaa] text-sm md:text-lg font-bold mb-2 text-right">Условия <br /> сотрудничества</h3>
          <div className="flex gap-2 mb-2 justify-end">
            <a href="https://instagram.com">
              <img src='/images/instagram.png' alt="Instagram" className="w-[25px] h-auto" />
            </a>
            <a href="https://facebook.com">
              <img src='/images/facebook.png' alt="Facebook" className="w-[25px] h-auto" />
            </a>
            <a href="https://viber.com">
              <img src='/images/viber.png' alt="Viber" className="w-[25px] h-auto" />
            </a>
            <a href="https://telegram.org">
              <img src='/images/telegram.png' alt="Telegram" className="w-[25px] h-auto" />
            </a>
          </div>
          <p style={{ color: phoneColor }} className="font-[Montserrat] text-sm md:text-lg font-bold text-right text-[#0077FF]">
            +375 (33) 659 - 72 - 34
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;