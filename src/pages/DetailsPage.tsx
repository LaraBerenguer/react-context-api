import { useParams } from "react-router-dom";
import Starship from "../components/Starship";
import { DetailsProvider, useDetails } from "../context/DetailsContext";

const DetailsPage = () => {

    const {id} = useParams<{id: string}>();
    
    const { detailsData, loading, error } = useDetails();

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!detailsData) return <div>No details available</div>;

    return (
        <DetailsProvider id={Number(id)}>
            <p className="dark: text-white">Details</p>
            <div className="details-page-container">
                <div className="starship-container">
                    <div className="starship-container-component">
                        <Starship shipData={detailsData} />
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
        </DetailsProvider>
    )
};

export default DetailsPage;