import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BigCircle from "../components/BigCircle/BigCircle";
import PhotoExamples from "../components/PhotoExamples/PhotoExamples";
import Slogan from '../components/Slogan/Slogan';
import Slider from '../components/Slider/Slider';

const HealthyEating: React.FC = () => {
    const images = [
        '/images/eat1.jpg',
        '/images/eat2.jpg',
        '/images/eat3.jpg',
        '/images/eat4.jpg',
        '/images/eat5.jpg',
        '/images/eat6.jpg'
    ];
    const PageColor = "#64D370";

    return (
        <div className="max-w-[1920px] mx-auto relative overflow-hidden">
            <Header />
            <div className='2xl:mt-[298px]  lg:mt-[200px] sm:mt-[120px] mt-[50px]'>
            <Slogan
                firstPart="Детокс программа –"
                emphasizedPart1={{ text: "вкусное очищение", color: PageColor }}
                lastPart="организма"
                energyText="8 бутылочек смузи и фрешей натурального"
                energyHighlight={{ text: "состава ", color: PageColor }}
                buttonColor={PageColor}
                buttonLink="/healthy-eating/recipes"
                buttonCount="425 кл"
            />
            <Slider currentColor ={PageColor}/>
            <BigCircle color={PageColor} image="/images/eating-slogan.jpg" />
            <PhotoExamples title="Фото блюд" imageUrls={images} />
            </div>
            <Footer phoneColor={PageColor} />
        </div>
    );
};

export default HealthyEating;