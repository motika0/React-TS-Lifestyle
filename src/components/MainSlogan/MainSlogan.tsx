import React from 'react';

interface EmphasizedPart {
    text: string;
    color: string;
}

interface SportSloganProps {
    firstPart: string;
    lastPart: string;
    energyText: string;
    emphasizedPart1: EmphasizedPart;
}

export default function Slogan({
    firstPart,
    emphasizedPart1,
    lastPart,
    energyText,
}: SportSloganProps) {
    return (
        <div className='ml-[20px] sm:ml-[30px] md:ml-[80px] 2xl:ml-[212px] dark:text-white mb-10 md:mb-[246px]'>
            <h1 className='font-comfortaa text-2xl md:text-4xl font-bold mb-4'>
                {firstPart}<br />
                <span style={{ color: emphasizedPart1.color }}>{emphasizedPart1.text}</span><br />
                {lastPart}
            </h1>
            <p className='text-[14px] md:text-[20px] dark:text-white mb-40 lg:mb-[591px] md:mb-60 mr-[10px] 2xl:mr-[1080px]'>
                {energyText}
            </p>
        </div>
    );
}