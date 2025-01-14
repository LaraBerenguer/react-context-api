import React from "react";
import { IDetails } from "../../api/api-interfaces/Details-interface";

interface StarshipProps {
    data: IDetails
    onClick?: () => void;   
};


const Starship: React.FC<StarshipProps> = ({data}) => {
    return (
        <div className="starship-main-container dark:bg-black dark:text-white p-4 flex flex-col">
            <div className="starship-title-div my-4 py-2 px-4 border-t border-b border-gray-600">
                <div className="starship-title">STARSHIP</div>
            </div>
            <div className="starship-card-div flex flex-row justify-center">
                <div className="starship-card-img-div basis-1/2">
                    <div className="starship-img">
                        <img src="/5.jpg" alt="Starship Image" className="w-full h-auto object-cover"/>
                    </div>
                </div>
                <div className="starship-card-details-div dark:bg-gray-600 basis-1/2 p-4">
                    <div className="card-details">
                        <div className="card-details-title mb-4 font-bold">
                            <p>Name{data.name}</p>
                        </div>
                        <div className="card-details-container my-4 flex flex-row text-xs space-x-10">
                            <div className="card-details-left space-y-4">
                                <div className="spaceship-model">
                                    <p>Model{data.model}</p>
                                </div>
                                <div className="spaceship-credits">
                                    <p>Credits{data.cost_in_credits}</p>
                                </div>
                                <div className="spaceship-speed">
                                    <p>Speed{data.max_atmosphering_speed}</p>
                                </div>
                            </div>
                            <div className="card-details-rigth space-y-4">
                                <div className="spaceship-manufacturer">
                                    <p>Manufacture{data.manufacturer}</p>
                                </div>
                                <div className="spaceship-size">
                                    <p>Size{data.length}</p>
                                </div>
                                <div className="spaceship-crew">
                                    <p>Crew{data.passengers}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Starship;