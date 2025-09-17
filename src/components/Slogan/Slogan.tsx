import React from 'react';
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton';

interface EmphasizedPart {
    text: string;
    color: string;
}

interface SportSloganProps {
    firstPart: string;
    lastPart: string;
    energyText: string;
    energyHighlight: EmphasizedPart; 
    emphasizedPart1: EmphasizedPart; 
    buttonColor: string;
    buttonLink: string;
    buttonCount: string;
}

export default function Slogan({ 
    firstPart, 
    emphasizedPart1, 
    lastPart, 
    energyText, 
    energyHighlight,
    buttonColor,
    buttonLink,
    buttonCount
}: SportSloganProps) {
    return (
        <div className='ml-[20px] sm:ml-[30px] md:ml-[80px] 2xl:ml-[212px] mb-10 md:mb-[246px]'>
            <h1 className='font-comfortaa dark:text-white text-2xl md:text-4xl font-bold mb-4'>
                {firstPart}<br />
                <span style={{ color: emphasizedPart1.color }}>{emphasizedPart1.text}</span><br />
                {lastPart}
            </h1>
            <p className='text-[14px] md:text-[20px] dark:text-white mb-4'>
                {energyText} <span className='textBlue' style={{ color: energyHighlight.color }}>{energyHighlight.text}</span>
            </p>
            <LearnMoreButton color={buttonColor} to={buttonLink} count={buttonCount}/> 
        </div>
    );
}