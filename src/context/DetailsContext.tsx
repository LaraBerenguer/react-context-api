import { createContext, useContext, useEffect, useState } from "react";
import { IDetails } from "../api/api-interfaces/Details-interface";
import { fetchDetails } from "../api/endpoints/api-details";

interface DetailsContextType {
    detailsData: IDetails | undefined;
    loading: boolean;
    error: string | null;
}

const DetailsContext = createContext<DetailsContextType | undefined>(undefined);

export const DetailsProvider: React.FC<{ id: number, children: React.ReactNode }> = ({ id, children }) => {
    
    const [detailsData, setdetailsData] = useState<IDetails>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: IDetails = await fetchDetails(id);
                setdetailsData(data);
            } catch (err) {
                setError("Error fetching Details data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return (
        <DetailsContext.Provider value={{ detailsData, loading, error }}>
            {children}
        </DetailsContext.Provider>
    )
};

export const useDetails = () => {
    const context = useContext(DetailsContext);
    if (context === undefined) {
        throw new Error("Error: use in DetailsProvider")
    }
    return context;
};