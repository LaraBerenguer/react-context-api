import React from "react";
import { useFilms } from "../../context/FilmsContext";


const Films: React.FC = () => {

    const { filmsData, filmsLoading, filmsError } = useFilms();
    console.log("Films component data: ", filmsData);

    if (filmsLoading) return <div>Loading...</div>
    if (filmsError) return <div>Error loading films</div>

    return (
        <>
            <div className="films-main-container dark:text-white p-4 flex flex-col">
                <div className="films-title-div my-4 py-2 px-4 border-t border-b border-gray-600">
                    <div className="films-title">FILMS</div>
                </div>
                {!filmsData || filmsData.length === 0 && <div className="dark:text-white me-6 ms-6">This ship doesn't appear in any film</div>}
                {filmsData &&
                    <div className="films-map flex flex-row justify-start gap-4 ms-4">
                        {filmsData.map(film => (
                            <div className="films-card-div flex flex-col items-center w-1/8 hover:transition ease-in-out delay-150 hover:scale-105 duration-300">
                                <div className="films-card-img-div w-full">
                                    <div className="films-img overflow-hidden rounded-t-md shadow-lg w-full">
                                        <img                                            
                                            src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
                                            alt={`${film.title}`}
                                            className="w-full h-auto object-cover max-w-xs max-h-64"
                                        />
                                    </div>
                                </div>
                                <div className="films-card-details-div border-t-2 border-red-500 dark:bg-gray-600 p-4 rounded-b-md w-full">
                                    <div className="film-details">
                                        <div className="film-title mb-2 font-bold text-center">
                                            <p>{film.title}</p>
                                        </div>
                                        <div className="film-episode mb-2 text-xs text-center">
                                            <p>Episode {film.episode_id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
};

export default Films;