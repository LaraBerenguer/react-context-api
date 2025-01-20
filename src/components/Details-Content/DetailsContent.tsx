import { useDetails } from "../../context/DetailsContext";
import { FilmsProvider } from "../../context/FilmsContext";
import { PilotsProvider } from "../../context/PilotsContext";
import Films from "../Films";
import Pilots from "../Pilots";
import Starship from "../Starship";

const DetailsContent: React.FC = () => {

    const { detailsData, loading, error } = useDetails();

    if (!detailsData) return <div>Error: no data</div>
    if (loading) return <div>Loading...</div>
    if (error) return <div>No data</div>

    const pilotIds: string[] = detailsData.pilots.map(detail => (detail.split('/')[5]));
    const fimlIds: string[] = detailsData.films.map(detail => (detail.split('/')[5]));
    console.log("details data: ", detailsData);
    console.log("pilotIds: ", pilotIds);
    console.log("fimlIds: ", fimlIds);

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
                <FilmsProvider fimlIds={fimlIds}>
                    <div className="films-container">
                        <div className="films-container-component">
                            {<Films />}
                        </div>
                    </div>
                </FilmsProvider>
            </div >
        </>
    )
};

export default DetailsContent;
