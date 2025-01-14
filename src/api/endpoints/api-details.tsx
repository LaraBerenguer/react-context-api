import apiById from '../api-id';
import { IDetails } from '../api-interfaces/Details-interface';

export const fetchDetails = async (id: number) => {
    const data: IDetails = await apiById(id);
    console.log("dataById: ", data);

    return data;
};

