import React from 'react';

interface Bnmv {
    fotka: string;
}

const HistorySection = ({ fotka }: Bnmv) => {
    return (
        <section className="flex flex-col xl:flex-row gap-8 md:gap-[160px] px-4 md:px-[220px] md:mb-[175px] mb-20">
            <img className='self-center w-full md:w-auto' src={fotka} alt="History" />
            <div className='flex flex-col'>
                <h2 className="text-[24px] md:text-[32px] dark:text-white font-comfortaa font-bold mb-8 md:mb-[126px]">История ЗОЖ началась более 36-ти лет назад...</h2>
                <div className='font-light dark:text-white text-[16px] md:text-[20px] font-montserrat flex flex-col gap-[16px]'>
                    <p>
                        Первоначально ЗОЖ акцентировался на физической активности и спорте. 
                        В 1920-х и 1930-х годах появились различные фитнес-программы и клубы, привлекающие людей к занятиям спортом. 
                        В это время также начали развиваться идеи о правильном питании.
                    </p>
                    <p>
                        В это время также начали развиваться идеи о правильном питании, что способствовало популяризации различных диет и режимов питания. 
                        Это привело к развитию новых подходов, включая интеграцию психологии и спорта.
                    </p>
                    <p>
                        В 21-м веке ЗОЖ продолжает эволюционировать, охватывая более широкий спектр аспектов, включая ментальное здоровье, устойчивое развитие и экологические факторы.
                        Современные технологии и социальные сети способствуют распространению информации о ЗОЖ, делая его доступным и актуальным для новых поколений.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HistorySection;