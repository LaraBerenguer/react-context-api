import React from "react";
import { usePilots } from "../../context/PilotsContext";


const Pilots: React.FC = () => {

    const { pilotsData, pilotsLoading, pilotsError } = usePilots();
    console.log("Pilots component data: ", pilotsData);

    if (pilotsLoading) return <div>Loading...</div>
    if (pilotsError) return <div>Error loading pilots</div>

    return (
        <>
            <div className="pilots-main-container dark:text-white p-4 flex flex-col">
                <div className="pilots-title-div my-4 py-2 px-4 border-t border-b border-gray-600">
                    <div className="pilots-title">PILOTS</div>
                </div>
                {!pilotsData || pilotsData.length === 0 && <div className="dark:text-white me-6 ms-6">This ship has no pilots</div>}
                {pilotsData &&
                    <div className="pilots-map flex flex-row justify-start gap-4 ms-4">
                        {pilotsData.map(pilot => (
                            <div className="pilots-card-div flex flex-col items-center w-1/8">
                                <div className="pilots-card-img-div w-full">
                                    <div className="pilots-img overflow-hidden rounded-md shadow-lg w-full">
                                        <img
                                            src={`https://starwars-visualguide.com/assets/img/characters/${pilot.id}.jpg`}
                                            alt={`${pilot.name}`}
                                            className="w-full h-auto object-cover max-w-xs max-h-64"
                                        />
                                    </div>
                                </div>
                                <div className="pilots-card-details-div dark:bg-gray-600 p-4 rounded-md w-full">
                                    <div className="pilot-details">
                                        <div className="pilot-name mb-4 font-bold text-center">
                                            <p>{pilot.name}</p>
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

export default Pilots;