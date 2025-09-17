import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
  hoverColor?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ hoverColor }) => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  const pathNames: Record<string, string> = {
    'physical-activity': 'Физическая активность',
    'healthy-eating': 'Здоровое питание',
    'mental-health': 'Ментальное здоровье',
    'about-us': 'О нас',
    'training': 'Тренировки',
    'recipes': 'Рецепты',
    'methods': 'Методики'
  };

  let currentPath = '';

  return (
    <div className="hidden md:flex dark:text-white items-center text-sm mt-8 mb-6">
      <Link to="/" className="hover:text-customPink">
        Главная
      </Link>

      {paths.map((path, i) => {
        currentPath += `/${path}`;
        const isLast = i === paths.length - 1;
        const name = pathNames[path] || path.replace(/-/g, ' ');

        return (
          <div key={path} className="flex items-center">
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="font-medium">{name}</span>
            ) : (
              <Link
                to={currentPath}
                className="hover:[color:var(--hover-color)]"
                style={{ '--hover-color': hoverColor } as React.CSSProperties}
              >
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;