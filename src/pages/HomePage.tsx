import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import { Button } from "../components/Button/Button";

const HomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/starships")
    };

    return (
        <div className="homepage">
            <div className="homepage-carousel-container">
                <Carousel />
            </div>
            <div className="homepage-button flex justify-center p-10">
                <Button label={"GO TO STARSHIPS"} size={"large"} primary={true} backgroundColor={"#ffe91f"} color={"##000"} onClick={handleClick} />
            </div>
        </div>
    )
};

export default HomePage;
