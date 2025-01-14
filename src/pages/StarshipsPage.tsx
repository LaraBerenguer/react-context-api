import ShipCard from '../components/ShipCard';
import { useShips } from '../context/ShipCardContext';

const StarshipsPage = () => {
    const { shipsData, loading, error } = useShips();
    console.log("data id:", shipsData.map(ship => ship.id));

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div className='starships-page-container flex justify-center'>
            <div className='starships-page-list flex flex-col gap-3'>
               {shipsData.map((ship => <ShipCard key={ship.id} shipData={ship} />))} 
            </div>            
        </div>
    );
};

export default StarshipsPage;