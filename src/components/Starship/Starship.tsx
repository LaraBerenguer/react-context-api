import React from "react";
import { IDetails } from "../../api/api-interfaces/Details-interface";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

interface StarshipProps {
    data: IDetails
    onClick?: () => void;
};

const Starship: React.FC<StarshipProps> = ({ data }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/starships`)
    };
    
    return (
        <div className="starship-main-container dark:text-white p-4 flex flex-col">
            <div className="starship-title-div my-4 py-2 px-4 border-t border-b border-gray-600">
                <div className="starship-title">STARSHIP</div>
            </div>
            <div className="starship-card-div flex flex-row justify-center">
                <div className="flex flex-row">
                    <div className="starship-card-img-div basis-1/2 flex justify-end items-center">
                        <div className="starship-img w-full max-w-lg aspect-auto overflow-hidden rounded-l-md">
                            <img src={`https://starwars-visualguide.com/assets/img/starships/${data.id}.jpg`} alt={`${data.name}`} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="starship-card-details-div dark:bg-gray-600 dark:bg-opacity-80 basis-1/2 p-7 rounded-r-md border-l-2 border-red-500">
                        <div className="card-details flex flex-col justify-between h-full">
                            <div className="card-details-title font-extrabold">
                                <p>{(data.name).toUpperCase()}</p>
                            </div>
                            <div className="card-details-container my-4 flex flex-row text-sm space-x-10">
                                <div className="card-details-left space-y-4">
                                    <div className="spaceship-model">
                                        <p>Model: {data.model}</p>
                                    </div>
                                    <div className="spaceship-credits">
                                        <p>Cost in credits: {data.cost_in_credits}</p>
                                    </div>
                                    <div className="spaceship-speed">
                                        <p>Atmospheric Speed: {data.max_atmosphering_speed}</p>
                                    </div>
                                </div>
                                <div className="card-details-rigth space-y-4">
                                    <div className="spaceship-manufacturer">
                                        <p>Manufacturer: {data.manufacturer}</p>
                                    </div>
                                    <div className="spaceship-size">
                                        <p>Length: {data.length}</p>
                                    </div>
                                    <div className="spaceship-crew">
                                        <p>Crew: {data.passengers}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="button-container">
                                <Button label={"Back"} primary={true} backgroundColor={"#ffe91f"} color={"##000"} onClick={handleClick}/>
                            </div>                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Starship;