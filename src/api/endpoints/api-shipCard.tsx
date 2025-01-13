import apiStarWars from '../api-index';
import { IShipCard } from '../api-interfaces/Ship-interface';

export const fetchShipCard = async () => {
    const data = await apiStarWars();
    
    const shipCardData: IShipCard[] = data.map((ship: IShipCard) =>
    ({
        id: Number((ship.url).slice(37,-1)),
        //id: Number(new URL(ship.url).pathname.split('/').filter(Boolean).pop()),
        name: ship.name,
        model: ship.model
    }));

    console.log("shipCardData: ", shipCardData);

    return shipCardData;
};

