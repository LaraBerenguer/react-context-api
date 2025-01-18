import { Button } from "../components/Button/Button";
import carouselData from "../api/carousel-data-mockup.json";
import { useState } from "react";

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        currentIndex === 0 ? setCurrentIndex(0) : setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        currentIndex === carouselData.length - 1 ? setCurrentIndex(currentIndex) : setCurrentIndex(currentIndex + 1);
    };

    return (
        <>
            <div className="homepage-banner dark:text-white text-md p-3 flex justify-center">
                <div>SKELLETON CREW | NOW STREAMING </div>
            </div>
            <div className="carousel-container w-full max-w-xxl mx-auto p-4 dark:text-white rounded-lg shadow-lg">
                <div className="carousel-slide flex flex-col items-center text-center w-full">
                    <div className="carousel-img relative">
                        <img
                            src={carouselData[currentIndex].bgImg}
                            alt="Skelleton Crew"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
                    </div>
                    <div className="carousel-items flex flex-col gap-7 max-w-80">
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/star-wars-skeleton-crew-logo-v2-400_17f5dd26.png"
                            alt="Skeleton Crew"
                            className="h-32 mx-auto"
                        />
                        <h2 className="text-lg font-semibold mb-4">{carouselData[currentIndex].title}</h2>
                        <Button
                            label={carouselData[currentIndex].buttonText}
                            primary={true}
                            backgroundColor={"#ffe91f"}
                            color={"#000"}
                        />
                    </div>
                </div>
                <button
                    className="absolute left-2 top-2/3 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition"
                    onClick={handlePrev}>◀</button>
                <button className="absolute right-2 top-2/3 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition"
                    onClick={handleNext}>▶</button>
            </div>
        </>
    );
};

export default HomePage;