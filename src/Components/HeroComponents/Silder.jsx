import React, { useState, useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import './style/Slider.css'

const Slider = () => {
    const slides = [
        {
            url: 'https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/slider-01-1185x660.jpg',
        },
        {
            url: 'https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/slider-02-1185x660.jpg',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <div className='w-[100%] h-auto relative slieder overflow-hidden z-0'>
            <div
                style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                className='w-full h-[400px]  bg-center bg-cover transition-all duration-500'
            />
            <button
                onClick={handlePrev}
                className={`absolute prev left-[-35px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full`}    
            >
              <GrFormPrevious />
            </button>
            <button
                onClick={handleNext}
                className='absolute next right-[-35px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full'
            >
                <GrFormNext />
            </button>
        </div>
    );
};

export default Slider;
