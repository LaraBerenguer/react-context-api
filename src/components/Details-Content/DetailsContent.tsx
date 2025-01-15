import { useDetails } from "../../context/DetailsContext";
import { usePilots } from "../../context/PilotsContext";
import Pilots from "../Pilots";
import Starship from "../Starship";

const DetailsContent: React.FC = () => {

    const { detailsData, loading, error } = useDetails();    
    const { pilotsData, pilotsLoading, pilotsError } = usePilots();    

    if (!detailsData) return <div>Error: no data</div>
    if (!pilotsData) return <div>Error: no pilots</div>
    if (loading) return <div>Loading...</div>
    if (pilotsLoading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (pilotsError) return <div>{error}</div>

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
                        {<Pilots data={pilotsData} />}
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
