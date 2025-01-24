import { createContext, useContext, useEffect, useState } from "react";
import { IFilms } from "../api/api-interfaces/Films-interface";
import { fetchFilms } from "../api/endpoints/api-films";

interface FilmsContextType {
    filmsData: IFilms[];
    filmsLoading: boolean;
    filmsError: string | null;
}

const FilmsContext = createContext<FilmsContextType | undefined>(undefined);

export const FilmsProvider: React.FC<{ fimlIds: string[], children: React.ReactNode }> = ({ fimlIds, children }) => {

    const [filmsData, setFilmsData] = useState<IFilms[]>([]);
    const [filmsLoading, setFilmsLoading] = useState(true);
    const [filmsError, setFilmsError] = useState<string | null>(null);

    useEffect(() => {        
        const fetchData = async () => {
            try {
                setFilmsLoading(true);
                const data = await Promise.all(fimlIds.map((id) => fetchFilms(id)));
                setFilmsData(data);
            } catch (err) {
                setFilmsError("Error fetching Films");
            } finally {
                setFilmsLoading(false);
            }
        };

        fetchData();
    }, [fimlIds]);

    return (
        <FilmsContext.Provider value={{ filmsData, filmsLoading, filmsError }}>
            {children}
        </FilmsContext.Provider>
    )
};

export const useFilms = () => {
    const context = useContext(FilmsContext);
    if (context === undefined) {
        throw new Error("Error: use in FilmsProvider")
    }
    return context;
};