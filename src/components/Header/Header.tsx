import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import AccountButton from '../AccountButton/AccountButton';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

type SectionType = 'physicalActivity' | 'healthyEating' | 'mentalHealth' | 'aboutUs' | 'main';

const sectionColors: Record<SectionType, string> = {
    physicalActivity: '#0077FF',
    healthyEating: '#64D370',
    mentalHealth: '#A364D3',
    aboutUs: '#64D3B8',
    main: '#D364AA' 
};

export default function Header() {
    const location = useLocation(); 
    const currentPath = location.pathname; 

    const getCurrentSection = () => {
        if (currentPath === '/') return 'main';
        if (currentPath.startsWith('/physical-activity')) return 'physicalActivity';
        if (currentPath.startsWith('/healthy-eating')) return 'healthyEating';
        if (currentPath.startsWith('/mental-health')) return 'mentalHealth';
        if (currentPath === '/about-us') return 'aboutUs';
        return null;
    };

    const [submenuVisible, setSubmenuVisible] = useState<SectionType | null>(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const currentSection = getCurrentSection(); 

    const handleMouseEnter = (section: SectionType) => {
        setSubmenuVisible(section);
    };

    const handleMouseLeave = () => {
        setSubmenuVisible(null);
    };

    return (
        <header className='flex items-center pt-[47px] z-[1000]'>
            <div className='xl:w-[1451px] md:w-[851px] w-[451px] h-[52px] mx-[30px] 2xl:ml-[205px] md:ml-[80px] sm:ml-[50px] flex bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)] rounded-[190px]'>
                <nav className='flex items-center w-full'>
                    <button className="md:hidden ml-[10px] sm:mr-[200px] mr-[15px]" onClick={() => setMenuOpen(!isMenuOpen)}>
                        <img src="/images/burger.png" alt="бургер" className="w-6 h-6"/>
                    </button>
                    <Link to="/" className=' text-white font-comfortaa xl:text-[20px] border-0 rounded-full xl:py-[4px] xl:px-[41.5px] py-[2px] px-[20px] sm:text-[16px] cursor-pointer 2xl:ml-[72.5px] lg:ml-[10px] sm:ml-[5px] 2xl:mr-[211px] xl:mr-[100px] lg:mr-[40px] md:mr-[10px] font-bold' 
                        style={{ 
                            backgroundColor: currentSection === 'main' ? sectionColors.main : sectionColors[currentSection as SectionType] || '#000', 
                            textDecoration: 'none',
                        }}
                    >
                        ЗОЖ
                    </Link>

                    <ul className={`list-none flex p-0 m-0 2xl:gap-[70px] xl:gap-[30px] lg:gap-[10px] md:gap-[5px] 2xl:text-[14px] xl:text-[14px] sm:text-[12px] font-normal ${isMenuOpen ? 'flex flex-col' : 'hidden'} md:flex`}>
                        <li>
                            <Link to="/about-us" className='text-black hover:underline' 
                                style={{
                                    color: currentSection === 'aboutUs' ? sectionColors.aboutUs : 'initial',
                                    fontWeight: currentSection === 'aboutUs' ? '500' : 'normal'
                                }}
                            >
                                О нас
                            </Link>
                        </li>
                        <li 
                            onMouseEnter={() => handleMouseEnter('physicalActivity')} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/physical-activity" className='text-black hover:underline' 
                                style={{
                                    color: currentSection === 'physicalActivity' ? sectionColors.physicalActivity : 'initial',
                                    fontWeight: currentSection === 'physicalActivity' ? '500' : 'normal'
                                }}
                            >
                                Физическая активность
                            </Link>
                            {submenuVisible === 'physicalActivity' && (
                                <div className="absolute bg-white rounded-[10px] pt-[18px] pb-[18px] pl-[10px] pr-0 z-[1100] flex flex-col gap-[18px] -ml-[10px] w-[197px]">
                                    <Link to="/physical-activity/training" className="text-black no-underline font-normal text-[14px] hover:font-medium">Тренировки</Link>
                                </div>
                            )}
                        </li>
                        <li 
                            onMouseEnter={() => handleMouseEnter('healthyEating')} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/healthy-eating" className='text-black hover:underline' 
                                style={{
                                    color: currentSection === 'healthyEating' ? sectionColors.healthyEating : 'initial',
                                    fontWeight: currentSection === 'healthyEating' ? '500' : 'normal'
                                }}
                            >
                                Здоровое питание
                            </Link>
                            {submenuVisible === 'healthyEating' && (
                                <div className="absolute bg-white rounded-[10px] pt-[18px] pb-[18px] pl-[10px] pr-0 z-[1100] flex flex-col gap-[18px] -ml-[10px] w-[197px]">
                                    <Link to="/healthy-eating/recipes" className="text-black no-underline font-normal text-[14px] hover:font-medium">Рецепты</Link>
                                    <Link to="/healthy-eating/articles" className="text-black no-underline font-normal text-[14px] hover:font-medium">Статьи о питании</Link>
                                </div>
                            )}
                        </li>
                        <li 
                            onMouseEnter={() => handleMouseEnter('mentalHealth')} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/mental-health" className='text-black hover:underline' 
                                style={{
                                    color: currentSection === 'mentalHealth' ? sectionColors.mentalHealth : 'initial',
                                    fontWeight: currentSection === 'mentalHealth' ? '500' : 'normal'
                                }}
                            >
                                Ментальное здоровье
                            </Link>
                            {submenuVisible === 'mentalHealth' && (
                                <div className="absolute bg-white rounded-[10px] pt-[18px] pb-[18px] pl-[10px] pr-0 z-[1100] flex flex-col gap-[18px] -ml-[10px] w-[197px]">
                                    <Link to="/mental-health/methods" className="text-black no-underline font-normal text-[14px] hover:font-medium">Методики</Link>
                                    <Link to="/mental-health/articles" className="text-black no-underline font-normal text-[14px] hover:font-medium">Статьи о психологии</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex items-center gap-[15px]'>
                <AccountButton />
                <ThemeSwitcher />
            </div>
        </header>
    );
}