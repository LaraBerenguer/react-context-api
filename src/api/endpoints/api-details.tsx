import apiById from '../api-id';
import { IDetails } from '../api-interfaces/Details-interface';

export const fetchDetails = async (id: number) => {
    const data: IDetails = await apiById(id);

    const DetailsData = {
        ...data,
        id: (data.url.split('/')[5])
    };

    return DetailsData;
};

