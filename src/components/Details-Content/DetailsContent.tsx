import { useDetails } from "../../context/DetailsContext";
import { PilotsProvider } from "../../context/PilotsContext";
import Pilots from "../Pilots";
import Starship from "../Starship";

const DetailsContent: React.FC = () => {

    const { detailsData, loading, error } = useDetails()

    if (!detailsData) return <div>Error: no data</div>
    if (loading) return <div>Loading...</div>
    if (error) return <div>No data</div>

    const pilotIds: string[] = detailsData.pilots.map(detail => (detail.split('/')[5]));
    console.log("details data: ", detailsData);
    console.log("pilotIds: ", pilotIds);

    return (
        <>
            <div className="details-page-container">
                <div className="starship-container">
                    <div className="starship-container-component">
                        <Starship data={detailsData} />
                    </div>
                </div>
                <PilotsProvider pilotIds={pilotIds}>
                    <div className="pilots-container">
                        <div className="pilots-container-component">
                            <Pilots />                                
                        </div>
                    </div>
                </PilotsProvider>

                <div className="films-container">
                    <div className="films-container-component">
                        {/*<Films data={detailsData.films} />*/}
                    </div>
                </div>
            </div >
        </>
    )
};

export default DetailsContent;
