import React, { useState, useEffect } from 'react';

interface PhotoExamplesProps {
  title: string;
  imageUrls: string[];
}

const PhotoExamples: React.FC<PhotoExamplesProps> = React.memo(({ title, imageUrls }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImages = () => {
    if (isMobile) {
      setScrollPosition(prev => Math.max(prev - 100, -((imageUrls.length - 1) * 100)));
    } else {
      setScrollPosition(prev => Math.max(prev - 100, -((imageUrls.length - 5) * 100)));
    }
  };

  const prevImages = () => {
    setScrollPosition(prev => Math.min(prev + 100, 0));
  };

  return (
    <div className="mb-[125px] relative px-4 sm:px-0">
      <h2 className="font-['Comfortaa'] dark:text-white text-[24px] sm:text-[30px] font-bold mb-[30px] sm:mb-[60px] text-center">
        {title}
      </h2>
      
      <div className="relative mx-auto max-w-[380px] sm:max-w-none">
        <button
          onClick={prevImages}
          className="absolute bg-[rgba(255,255,255,0.5)] border-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] cursor-pointer top-[50%] transform -translate-y-1/2 z-[100] left-0 sm:left-[10px]"
          style={{
            backgroundImage: "url('/images/arrow-left.png')",
            backgroundSize: '20px sm:24px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          aria-label="Previous images"
        />
        
        <div className="overflow-hidden sm:overflow-visible">
          <div 
            className={`flex gap-[15px] sm:gap-[20px] transition-transform duration-300 ${
              isMobile ? 'w-[100%] h-[300px]' : 'w-[380px] h-[570px]'
            }`}
            style={{ transform: `translateX(${scrollPosition}%)` }}
          >
            {imageUrls.map((url, index) => (
              <img 
                key={index} 
                src={url} 
                alt={`Workout ${index}`} 
                className={`w-full rounded-[20px] sm:rounded-[30px] object-cover ${
                  isMobile ? 'h-[300px]' : 'h-[570px]'
                }`}
              />
            ))}
          </div>
        </div>
        
        <button
          onClick={nextImages}
          className="absolute bg-[rgba(255,255,255,0.5)] border-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] cursor-pointer top-[50%] transform -translate-y-1/2 z-[100] right-0 sm:right-[10px]"
          style={{
            backgroundImage: "url('/images/arrow-right.png')",
            backgroundSize: '20px sm:24px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          aria-label="Next images"
        />
      </div>
    </div>
  );
});

export default React.memo(PhotoExamples);