import apiShips from '../api-index';
import { IStarship } from '../api-interfaces/Starship-interface';

export const fetchStarship = async () => {
    const data = await apiShips();

    const starshipData: IStarship[] = data.map((ship: {
        name: string,
        model: string,
        manufacturer: string,
        cost_in_credits: string,
        length: string,
        max_atmosphering_speed: string,
        crew: string,
        passengers: string
    }) =>
    ({
        name: ship.name,
        model: ship.model,
        manufacturer: ship.manufacturer,
        cost_in_credits: ship.cost_in_credits,
        length: ship.length,
        max_atmosphering_speed: ship.max_atmosphering_speed,
        crew: ship.crew,
        passengers: ship.passengers
    }));

    console.log("starshipData: ", starshipData);

    return starshipData;
};