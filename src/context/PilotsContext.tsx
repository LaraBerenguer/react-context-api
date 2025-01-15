import { createContext, useContext, useEffect, useState } from "react";
import { IPilots } from "../api/api-interfaces/Pilots-interface";
import { fetchPilots } from "../api/endpoints/api-pilots";

interface PilotsContextType {
    pilotsData: IPilots | undefined;
    pilotsLoading: boolean;
    pilotsError: string | null;
}

const PilotsContext = createContext<PilotsContextType | undefined>(undefined);

export const PilotsProvider: React.FC<{ id: number, children: React.ReactNode }> = ({ id, children }) => {
    
    const [pilotsData, setPilotsData] = useState<IPilots>();
    const [pilotsLoading, setpilotsLoading] = useState(true);
    const [pilotsError, setpilotsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: IPilots = await fetchPilots(id);
                setPilotsData(data);
            } catch (err) {
                setpilotsError("pilotsError fetching Details data");
            } finally {
                setpilotsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return (
        <PilotsContext.Provider value={{ pilotsData, pilotsLoading, pilotsError }}>
            {children}
        </PilotsContext.Provider>
    )
};

export const usePilots = () => {
    const context = useContext(PilotsContext);
    if (context === undefined) {
        throw new Error("Error: use in PilotsProvider")
    }
    return context;
};