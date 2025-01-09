import Starship from "../components/Starship";

const DetailsPage = () => {
    return (
        <>
            <p className="dark: text-white">Details</p>
            <div className="details-page-container">
                <div className="starship-container">
                    <div className="starship-container-component">
                        <Starship />
                    </div>
                </div>
                <div className="pilots-container">
                    <div className="pilots-container-component">
                        {/*<Pilots />*/}
                    </div>
                </div>
                <div className="movies-container">
                    <div className="movies-container-component">
                        {/*<Movies />*/}
                    </div>
                </div>
            </div>

        </>
    )
};

export default DetailsPage;