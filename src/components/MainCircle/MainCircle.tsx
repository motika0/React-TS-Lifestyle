import React from 'react';

interface MainCircleProps {
    color: string; 
}

const BigCircle: React.FC<MainCircleProps> = ({ color }) => {
    return (
        <div 
            className={`absolute 2xl:w-[1293.88px] 2xl:h-[1293.88px] lg:w-[900.88px] lg:h-[900.88px] hidden rounded-full lg:flex justify-center items-center 2xl:top-[-100px] 2xl:left-[975px] lg:top-[-60px] lg:left-[750px]  z-[-1] shadow-[0_4px_40px_rgba(0,0,0,0.25)]`} 
            style={{ backgroundColor: color }}
        >
            <img 
                src="/images/logoCircle.png" 
                alt="logo" 
                className="max-w-full max-h-full object-contain"
            />
        </div>
    );
}

export default BigCircle;