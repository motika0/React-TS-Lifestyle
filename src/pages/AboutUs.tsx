import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slogan from "../components/Slogan/Slogan";
import BigCircle from "../components/BigCircle/BigCircle";
import Slider from '../components/Slider/Slider';

const AboutUs: React.FC = () => {

    const PageColor = "#64D3B8";

    return (
        <div className="max-w-[1920px] mx-auto relative overflow-hidden">
            <Header />
            <div className='mt-[298px]'>
            <Slogan
            firstPart="Здравствуйте! Меня зовут"
            emphasizedPart1={{ text: "Украинский Матвей,", color: PageColor }}
            lastPart="и я являюсь создателем"
            energyText="и тестировщиком"
            energyHighlight={{ text: "данного веб-ресурса.", color: PageColor }}
            buttonColor= {PageColor}
            buttonLink="/"
            buttonCount="3 раздела"
        />
        <Slider currentColor ={PageColor}/>
            <BigCircle color="#64D3B8" image="/images/about-slogan.jpg" />
            </div>
            <Footer phoneColor={PageColor} />
        </div>
    );
};

export default AboutUs;