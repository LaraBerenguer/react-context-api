import { useState } from "react";
import NavigationButton from "../Navigation-Button";
import carouselData from "../../api/carousel-data-mockup.json";
import { Button } from "../Button/Button";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="homepage relative w-full max-w-full mx-auto">
            <div className="homepage-container relative h-[600px] overflow-hidden rounded-lg">
                <div
                    className="homepage-carousel flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {carouselData.map((item, index) => (
                        <div key={index} className="homepage-carousel-map flex-none w-full">
                            <div className="carousel-container relative h-[600px]">
                                <img
                                    src={item.bgImg}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                />
                                <div className="carousel-gradient absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

                                <div className="carousel-info absolute inset-24 flex flex-col justify-center items-center text-center max-w-md">
                                    <img
                                        src="https://lumiere-a.akamaihd.net/v1/images/star-wars-skeleton-crew-logo-v2-400_17f5dd26.png"
                                        alt="Skeleton Crew"
                                        className="h-32 mb-4"
                                    />
                                    <h2 className="text-white text-lg font-semibold">{item.title}</h2>
                                    <div className="mt-4">
                                        <Button
                                            label={item.buttonText}
                                            primary={true}                                            
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NavigationButton direction="left" onClick={handlePrev} />
            <NavigationButton direction="right" onClick={handleNext} />
        </div>
    );
};

export default Carousel;
