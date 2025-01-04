import React from "react";

const ShipCard: React.FC = () => {
    return (
        <>
            <div className="card dark:bg-grey-800 border p-4 flex flex-col justify-between">
                <div className="card-text dark:text-white">
                    <div className="card-text-name dark:text-white font-semibold">
                        <p>Ship Name{/*shipName*/}</p>
                    </div>
                    <div className="card-text-model dark:text-white text-small">
                        <p>Ship Model{/*shipModel*/}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ShipCard;