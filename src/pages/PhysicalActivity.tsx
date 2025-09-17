import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slogan from "../components/Slogan/Slogan";
import BigCircle from "../components/BigCircle/BigCircle";
import PhotoExamples from "../components/PhotoExamples/PhotoExamples";
import Slider from '../components/Slider/Slider';

const PhysicalActivity: React.FC = () => {
    const images = [
        '/images/tren1.jpg',
        '/images/tren2.jpg',
        '/images/tren3.jpg',
        '/images/tren4.jpg',
        '/images/tren5.jpg',
        '/images/tren6.jpg'
    ];
    
    const PageColor = "#0077FF";

    return (
        <div className="max-w-[1920px] mx-auto relative overflow-hidden">
            <Header />
            <div className='2xl:mt-[298px]  lg:mt-[200px] sm:mt-[120px] mt-[50px]'>
            <Slogan
                firstPart="Живи активно –"
                emphasizedPart1={{ text: "дыши полной", color: PageColor }}
                lastPart="грудью"
                energyText="Несколько упражнений, и ты полон"
                energyHighlight={{ text: "энергии", color: PageColor }}
                buttonColor={PageColor}
                buttonLink="/physical-activity/training"
                buttonCount="30 мин"
            />
            <Slider currentColor ={PageColor}/>
            <BigCircle color={PageColor} image="/images/sport-slogan.jpg" />
            <PhotoExamples title="Фото тренировок" imageUrls={images} />
            </div>
            <Footer phoneColor={PageColor} />
        </div>
    );
};

export default PhysicalActivity;