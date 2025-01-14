import { useDetails } from "../../context/DetailsContext";
import Starship from "../Starship";

const DetailsContent: React.FC = () => {

    const { detailsData, loading, error } = useDetails();    

    if (!detailsData) return <div>Error: no data</div>
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    console.log("details data: ", detailsData);
    console.log("details ids: ", detailsData.id);

    return (
        <>
            <div className="details-page-container">
                <div className="starship-container">
                    <div className="starship-container-component">
                        <Starship data={detailsData} />
                    </div>
                </div>
                <div className="pilots-container">
                    <div className="pilots-container-component">
                        {/*<Pilots data={detailsData.pilots} />*/}
                    </div>
                </div>
                <div className="films-container">
                    <div className="films-container-component">
                        {/*<Films data={detailsData.films} />*/}
                    </div>
                </div>
            </div></>
    )
};

export default DetailsContent;