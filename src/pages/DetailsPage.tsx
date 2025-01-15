import { useParams } from "react-router-dom";
import { DetailsProvider } from "../context/DetailsContext";
import DetailsContent from "../components/Details-Content";
import { PilotsProvider } from "../context/PilotsContext";

const DetailsPage = () => {

    const { id } = useParams<{ id: string }>();

    return (
        <DetailsProvider id={Number(id)}>
            <PilotsProvider id={Number(id)}>
                <DetailsContent />
            </PilotsProvider>

        </DetailsProvider>
    )
};

export default DetailsPage;