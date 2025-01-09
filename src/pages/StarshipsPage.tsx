import ShipCard from '../components/ShipCard';
import { useShips } from '../context/StarshipsContext';

const StarshipsPage = () => {
    const {shipsData, loading, error} = useShips();

    if (loading) return <div>Loading...</div> 
    if (error) return <div>{error}</div> 

    return (
        <>
        {shipsData.map((ship => <ShipCard key={ship.name} shipData={ship} />))}
        </>
    );
};

export default StarshipsPage;