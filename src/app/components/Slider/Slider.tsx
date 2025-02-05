"use client"
import { useState, useEffect } from 'react';

const Slider = () => {
    const slides = [
        { id: 1, image: '/images/slide1.jpg' },
        { id: 2, image: '/images/slide2.jpg' },
        { id: 3, image: '/images/slide3.jpg' },
        // Add more slides as needed
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-slide feature using useEffect
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000); // 3 seconds for auto-slide
        return () => clearInterval(slideInterval); // Cleanup interval on unmount
    }, []); // Empty dependency array ensures it only runs once

    return (
        <div className="slider-container">
            <div className="slider">
                <div
                    className="slider-images"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="slide">
                            <img src={slide.image} alt={`Slide ${slide.id}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="prev" onClick={prevSlide}>Prev</button>
            <button className="next" onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Slider;
