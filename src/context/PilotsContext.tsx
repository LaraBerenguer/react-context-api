import { createContext, useContext, useEffect, useState } from "react";
import { IPilots } from "../api/api-interfaces/Pilots-interface";
import { fetchPilots } from "../api/endpoints/api-pilots";

interface PilotsContextType {
    pilotsData: IPilots[];
    pilotsLoading: boolean;
    pilotsError: string | null;
}

const PilotsContext = createContext<PilotsContextType | undefined>(undefined);

export const PilotsProvider: React.FC<{ pilotIds: string[], children: React.ReactNode }> = ({ pilotIds, children }) => {

    const [pilotsData, setPilotsData] = useState<IPilots[]>([]);
    const [pilotsLoading, setpilotsLoading] = useState(true);
    const [pilotsError, setpilotsError] = useState<string | null>(null);

    useEffect(() => {
        console.log("Pilot IDs: ", pilotIds);
        const fetchData = async () => {
            try {
                setpilotsLoading(true);
                const data = await Promise.all(pilotIds.map((id) => fetchPilots(id)));
                console.log("PilotsProvider data: ", data);
                setPilotsData(data);
            } catch (err) {
                setpilotsError("Error fetching Pilots");
            } finally {
                setpilotsLoading(false);
            }
        };

        fetchData();
    }, [pilotIds]);

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