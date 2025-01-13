import { createContext, useContext, useEffect, useState } from "react";
import { IStarship } from "../api/api-interfaces/Starship-interface";
import { fetchStarship } from "../api/endpoints/api-starship";

interface StarshipContextType {
    starshipsData: IStarship[];
    loading: boolean;
    error: string | null;
}

const StarshipContext = createContext<StarshipContextType | undefined>(undefined);

export const StarshipsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [starshipsData, setStarshipsData] = useState<IStarship[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: IStarship[] = await fetchStarship();
                setStarshipsData(data);
            } catch (err) {
                setError("Error fetching Starship data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <StarshipContext.Provider value={{ starshipsData, loading, error }}>
            {children}
        </StarshipContext.Provider>
    )
};

export const useStarship = () => {
    const context = useContext(StarshipContext);
    if (context === undefined) {
        throw new Error("Error: use in StarshipsProvider")
    }
    return context;
};


