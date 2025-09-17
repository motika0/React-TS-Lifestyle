import React, { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: 'Как ЗОЖ влияет на твое состояние?',
      a: 'Здоровый образ жизни улучшает физическое и ментальное состояние, повышает энергию и продуктивность.'
    },
    {
      q: 'Стоит ли начать заниматься спортом?',
      a: 'Да, регулярные физические нагрузки укрепляют здоровье и улучшают качество жизни.'
    },
    {
      q: 'Как улучшить свое ментальное здоровье?',
      a: 'Практикуйте медитацию, соблюдайте режим сна, общайтесь с близкими и уменьшайте стресс.'
    },
    {
      q: 'Что делать, если лень готовить, но есть хочется?',
      a: 'Используйте простые рецепты, готовьте на несколько дней или выбирайте здоровые готовые варианты.'
    },
    {
      q: 'Что делать если я не вижу прогресса в своем теле?',
      a: 'Проверьте питание и программу тренировок, возможно нужно скорректировать подход.'
    },
    {
      q: 'В чем смысл жизни?',
      a: 'Смысл жизни — это глубокая и индивидуальная концепция, которая может включать в себя стремление к счастью, поиску своего призвания, развитию отношений с близкими, духовный рост и вклад в общество. Многие люди находят его в любви, реализации своих талантов, познании мира и помощи другим. В конечном счете, смысл жизни каждый определяет для себя сам.'
    },
    {
      q: 'У меня аллергия и непереносимость определенных продуктов',
      a: 'Консультируйтесь с врачом, ведите пищевой дневник и находите безопасные аналоги продуктов.'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl dark:text-white font-bold mb-8 text-center font-comfortaa text-gray-800">
        Часто задаваемые вопросы
      </h2>
      
      <div className="flex flex-col items-center space-y-4 md:mb-[135px] mb-8">
        {questions.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-full w-full max-w-[680px] px-6 py-3 transition-all duration-200
                      shadow-[0_4px_20px_rgba(86,86,86,0.2)] hover:shadow-[0_6px_24px_rgba(86,86,86,0.25)]
                      border border-gray-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-base font-medium text-black">{item.q}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openIndex === index && <div className="mt-3 text-gray-600 px-2 pb-2 text-sm">{item.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;