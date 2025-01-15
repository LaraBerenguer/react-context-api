import apiPilots from '../api-pilots';
import { IPilots } from '../api-interfaces/Pilots-interface';

export const fetchPilots = async (id: number) => {
    const data: IPilots = await apiPilots(id);

    const PilotsData = {
        ...data,
        id: (data.url.split('/')[5])
    };

    console.log("dataPilots: ", PilotsData);

    return PilotsData;
};