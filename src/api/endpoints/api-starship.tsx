import apiStarWars from '../api-index';
import { IStarship } from '../api-interfaces/Starship-interface';

export const fetchStarship = async () => {
    const data = await apiStarWars();

    const starshipData: IStarship[] = data.map((ship: IStarship) =>
    ({
        id: Number((ship.url).slice(37,-1)),
        //id: Number(new URL(ship.url).pathname.split('/').filter(Boolean).pop()),
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