import apiShips from '../index';
import {Ship} from '../api-interfaces/Ship-interface';

export const fetchShipCard = async () => {
    const data = await apiShips();
    const shipCardData: Ship = data.results.map((ship: { name: string, model: string }) =>
    ({
        name: ship.name,
        model: ship.model
    }));
    return shipCardData;
};

