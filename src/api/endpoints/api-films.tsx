import apiFilms from '../api-films';
import { IFilms } from '../api-interfaces/Films-interface';

export const fetchFilms = async (id: string) => {
    const data: IFilms = await apiFilms(id);

    const FilmsData = {
        ...data,
        id: (data.url.split('/')[5])
    };

    console.log("fetchFilms data: ", FilmsData);

    return FilmsData;
};