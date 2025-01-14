import { useParams } from "react-router-dom";
import { DetailsProvider } from "../context/DetailsContext";
import DetailsContent from "../components/Details-Content";

const DetailsPage = () => {

    const { id } = useParams<{ id: string }>();

    return (
        <DetailsProvider id={Number(id)}>
            <DetailsContent />
        </DetailsProvider>
    )
};

export default DetailsPage;