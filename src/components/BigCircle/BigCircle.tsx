import React from 'react';

interface BigCircleProps {
    color: string;
    image: string;
}

const BigCircle: React.FC<BigCircleProps> = ({ color, image }) => {
    return (
        <div className="absolute 2xl:w-[1293.88px] 2xl:h-[1293.88px] lg:w-[900.88px] lg:h-[900.88px] hidden rounded-full lg:flex justify-center items-center top-[-100px] left-[975px] z-[-1] shadow-[0_4px_40px_rgba(0,0,0,0.25)]" style={{ backgroundColor: color }}>
            <div className="absolute w-[624.53px] h-[624.53px] border-[38px] border-white rounded-full bg-white overflow-hidden top-[23%] left-[14.6%]">
                <img src={image} alt="Описание изображения" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
}

export default BigCircle;