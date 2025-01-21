import { useEffect, useState, useRef } from 'react';
import { Button } from '../components/Button/Button';
import ShipCard from '../components/ShipCard';
import { IShipCard } from '../api/api-interfaces/Ship-interface';

const StarshipsPage = () => {
    const [ships, setShips] = useState<IShipCard[]>([]);
    const [nextPageUrl, setNextPageUrl] = useState("https://swapi.py4e.com/api/starships/");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef(false);

    const fetchShips = async () => {
        if (!nextPageUrl || hasFetched.current) return;

        hasFetched.current = true;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(nextPageUrl);
            if (!response.ok) {
                throw new Error(`Error al cargar datos: ${response.status}`);
            }

            const data = await response.json();

            const shipsWithId = data.results.map((ship: any) => ({
                id: ((ship.url).split('/')[5]),
                name: ship.name,
                model: ship.model
            }))

            setShips((prevShips) => [...prevShips, ...shipsWithId]);
            setNextPageUrl(data.next);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unexpected error");
            }

        } finally {
            setLoading(false);
            hasFetched.current = false;
        }
    };

    useEffect(() => {
        fetchShips();
    }, []);

    return (
        <div className='starships-page pb-10'>
            <div className='starships-page-container flex justify-center'>
                <div className='starships-page-list flex flex-col gap-3'>
                    {ships.map((ship) => <ShipCard key={ship.id} shipData={ship} />)}
                </div>
            </div>
            <div className='starships-page-button flex justify-center my-6'>
                {nextPageUrl && <Button label={`${loading ? "Loading..." : "Load More"}`} disabled={loading} primary={true} backgroundColor={"#ffe91f"} color={"##000"} onClick={fetchShips} />}
                {!nextPageUrl && !loading && <p className='dark:text-gray-500 text-xs'>No more ships to load.</p>}
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default StarshipsPage;