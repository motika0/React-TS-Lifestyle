import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slogan from "../components/Slogan/Slogan";
import BigCircle from "../components/BigCircle/BigCircle";
import PhotoExamples from "../components/PhotoExamples/PhotoExamples";
import Slider from '../components/Slider/Slider';

const MentalHealth: React.FC = () => {
    const images = [
        '/images/mentl1.jpg',
        '/images/mentl2.jpg',
        '/images/mentl3.jpg',
        '/images/mentl4.jpg',
        '/images/mentl5.jpg',
        '/images/mentl6.jpg'
    ];

    const PageColor = "#A364D3";

    return (
        <div className="max-w-[1920px] mx-auto relative overflow-hidden ">
            <Header />
            <div className='2xl:mt-[298px]  lg:mt-[200px] sm:mt-[120px] mt-[50px] '>
            <Slogan
                firstPart="Задача человека –"
                emphasizedPart1={{ text: "дать жить самому", color: PageColor }}
                lastPart="себе"
                energyText="Цитата"
                energyHighlight={{ text: "Эриха Фромма", color: PageColor }}
                buttonColor={PageColor}
                buttonLink="/mental-health/methods"
                buttonCount="2 курса"
            />
            <Slider currentColor ={PageColor}/>
            <BigCircle color={PageColor} image="/images/mental-slogan.jpg" />
            <PhotoExamples title="Мотивационные фото" imageUrls={images} />
            </div>
           
            <Footer phoneColor={PageColor} />
        </div>
    );
};

export default MentalHealth;