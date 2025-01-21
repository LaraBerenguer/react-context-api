import { Button } from "../components/Button/Button";
import carouselData from "../api/carousel-data-mockup.json";
import { useState } from "react";
import NavigationButton from "../components/Navigation-Button";

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
            <div className="carousel-container w-full max-w-xxl mx-auto p-4 dark:text-white rounded-lg shadow-lg relative">
                <div className="carousel-slide flex flex-col items-center text-center w-full">
                    <div className="carousel-img relative">
                        <img
                            src={carouselData[currentIndex].bgImg}
                            alt="Skelleton Crew"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
                    </div>
                    <div className="carousel-items flex flex-col gap-7 max-w-80 md:absolute md:top-1/2 md:left-1/4 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/star-wars-skeleton-crew-logo-v2-400_17f5dd26.png"
                            alt="Skeleton Crew"
                            className="h-32 mx-auto"
                        />
                        <h2 className="text-lg font-semibold mb-4">{carouselData[currentIndex].title}</h2>
                        <div className="w-full transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-300">
                            <Button
                                label={carouselData[currentIndex].buttonText}
                                primary={true}
                                backgroundColor={"#ffe91f"}
                                color={"#000"}
                            />
                        </div>

                    </div>
                </div>
                <NavigationButton direction="left" onClick={handlePrev} />
                <NavigationButton direction="right" onClick={handleNext} />
            </div>
        </>
    );
};

export default HomePage;