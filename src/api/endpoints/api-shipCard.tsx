import apiStarWars from '../api-index';
import { IShipCard } from '../api-interfaces/Ship-interface';

export const fetchShipCard = async () => {
    const data = await apiStarWars();
    
    const shipCardData: IShipCard[] = data.map((ship: IShipCard) =>
    ({
        id: ((ship.url).split('/')[5]),
        name: ship.name,
        model: ship.model
    }));

    console.log("shipCardData: ", shipCardData);

    return shipCardData;
};

