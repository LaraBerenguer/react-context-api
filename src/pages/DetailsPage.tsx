import { useParams } from "react-router-dom";
import Starship from "../components/Starship";
import { useEffect, useState } from "react";
import apiById from "../api/api-id";
import { IDetails } from "../api/api-interfaces/Details-interface";

const DetailsPage = () => {

    const { id } = useParams<{ id: string }>();
    const [detailsData, setdetailsData] = useState<IDetails>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: IDetails = await apiById(Number(id));
                setdetailsData(data);
            } catch (err) {
                setError("Error fetching Details data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!detailsData) return <div>No details available</div>;

    return (
        <>
            <p className="dark: text-white">Details</p>
            <div className="details-page-container">
                <div className="starship-container">
                    <div className="starship-container-component">
                        <Starship data={detailsData} />
                    </div>
                </div>
                <div className="pilots-container">
                    <div className="pilots-container-component">
                        {<Pilots data={detailsData.pilots} />}
                    </div>
                </div>
                <div className="films-container">
                    <div className="films-container-component">
                        {<Films data={detailsData.films} />}
                    </div>
                </div>
            </div>
        </>
    )
};

export default DetailsPage;