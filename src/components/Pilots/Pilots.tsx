import React from "react";
import { IPilots } from "../../api/api-interfaces/Pilots-interface";

interface PilotsProps {
    data: IPilots
};

const Pilots: React.FC<PilotsProps> = ({data}) => {
    return (
        <div className="pilots-main-container dark:text-white p-4 flex flex-col">
            <div className="pilots-title-div my-4 py-2 px-4 border-t border-b border-gray-600">
                <div className="pilots-title">PILOTS</div>
            </div>
            <div className="pilots-card-div flex flex-col items-center max-w-xs w-full">
                <div className="pilots-card-img-div">
                    <div className="pilots-img overflow-hidden rounded-md shadow-lg">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
                            alt={`${data.name}`}
                            className="w-full h-auto object-cover max-w-xs max-h-64"
                        />
                    </div>
                </div>
                <div className="pilots-card-details-div dark:bg-gray-600 p-4 rounded-md">
                    <div className="pilot-details">
                        <div className="pilot-name mb-4 font-bold text-center">
                            <p>{data.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Pilots;