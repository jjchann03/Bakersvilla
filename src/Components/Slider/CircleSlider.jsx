import { useState, useEffect, useRef, useCallback } from "react";
import './carousel.css';

export default function CircleSlider({ data }) {
    const [currIndex, setCurrIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(5);

    const sliderRef = useRef(null);

    useEffect(() => {
        const updateItemsToShow = () => {
            const screenWidth = window.innerWidth;
            setItemsToShow(screenWidth < 800 ? 3 : 5);
        };

        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);

        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    const totalItems = data.length;
    const dots = Math.ceil(totalItems / itemsToShow);

    useEffect(() => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth / itemsToShow;
            sliderRef.current.style.scrollBehavior = 'smooth';
            sliderRef.current.scrollLeft = currIndex * slideWidth;
        }
    }, [currIndex, itemsToShow]);

    const handleDotClick = useCallback((dotIndex) => {
        const newIndex = dotIndex * itemsToShow;
        // Ensure newIndex doesn't exceed the maximum index
        if (newIndex < totalItems) {
            setCurrIndex(newIndex);
        } else {
            setCurrIndex(totalItems - 1); // Jump to the last item if newIndex exceeds
        }
    }, [itemsToShow, totalItems]);

    if (!data || data.length === 0) {
        return <p>No data to display</p>;
    }

    return (
        <div className="relative flex flex-col justify-center items-center w-content my-8 px-4 box-border" id="slider-body">
            <div
                ref={sliderRef}
                className={`flex ${dots === 1 ? 'justify-center' : 'justify-start'} items-center p-8 box-border transition-transform duration-1000 ease-in-out h-auto overflow-x-scroll`}
                id="slider"
            >
                {data.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 min-w-[15%] max-w-[15%] mx-8 hover:scale-[1.3] duration-200 ease-in-out"
                        style={{ willChange: 'transform' }}
                    >
                        <img src={slide.img} alt={`slide-${index}`} className="w-full" />
                    </div>
                ))}
            </div>

            <div id="dots-container" className="mt-12">
                {Array.from({ length: dots }).map((_, dotIndex) => (
                    <div
                        key={dotIndex}
                        className={`inline-block w-[10px] h-[10px] border-[1px] rounded-full pointer mx-[2px] ${
                            currIndex >= dotIndex * itemsToShow && currIndex < (dotIndex + 1) * itemsToShow
                                ? 'bg-slate-800'
                                : 'bg-slate-400'
                        }`}
                        onClick={() => handleDotClick(dotIndex)}
                    />
                ))}
            </div>
        </div>
    );
}
