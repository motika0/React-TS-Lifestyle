import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainCircle from "../components/MainCircle/MainCircle";
import MainSlogan from "../components/MainSlogan/MainSlogan";
import HistorySection from '../components/HistorySection/HistorySection';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';


const MainPage: React.FC = () => {
    const PageColor = "#D364AA";

    return (
        <div className="max-w-[1920px] mx-auto relative overflow-hidden">
            <Header />
            <div className='2xl:mt-[298px]  lg:mt-[200px] sm:mt-[120px] mt-[50px] '>
            <MainCircle color={PageColor}/>
             <MainSlogan
                            firstPart="Здоровый образ жизни —"
                            emphasizedPart1={{ text: "это проще,", color: PageColor }}
                            lastPart="чем кажется!"
                            energyText="Добро пожаловать на наш сайт, где вы найдете все, чтобы вести здоровый и активный образ жизни. Откройте для себя полезные рецепты, советы по физической активности и ментальному здоровью, а также общайтесь с единомышленниками!"
                        />
            <HistorySection fotka="/images/history.jpg"/>
            <FAQAccordion/>
            </div>
            <Footer phoneColor={PageColor} />
        </div>
    );
};

export default MainPage;