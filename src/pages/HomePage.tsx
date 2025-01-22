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
                <Button label={"Go to Starships"} size={"large"} primary={true} onClick={handleClick} />
            </div>
        </div>
    )
};

export default HomePage;
