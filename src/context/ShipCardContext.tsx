import { createContext, useContext, useEffect, useState } from "react";
import { fetchShipCard } from '../api/endpoints/api-shipCard';
import { IShipCard } from "../api/api-interfaces/Ship-interface";

interface ShipsContextType {
    shipsData: IShipCard[];
    loading: boolean;
    error: string | null;
}

const ShipsContext = createContext<ShipsContextType | undefined>(undefined);

export const ShipsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [shipsData, setShipsData] = useState<IShipCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: IShipCard[] = await fetchShipCard();
                setShipsData(data);
            } catch (err) {
                setError("Error fetching Starships data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <ShipsContext.Provider value={{ shipsData, loading, error }}>
            {children}
        </ShipsContext.Provider>
    )
};

export const useShips = () => {
    const context = useContext(ShipsContext);
    if (context === undefined) {
        throw new Error("Error: use in ShipsProvider")
    }
    return context;
};


