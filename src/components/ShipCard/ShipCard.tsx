import React from "react";

interface ShipCardProps {
    shipName: string;
    shipModel: string;
    onClick?: () => void;
}

const ShipCard: React.FC<ShipCardProps> = ({shipName, shipModel}) => {
    return (
        <>
            <div className="card dark:bg-gray-800 border rounded-md p-4 flex flex-col justify-between max-w-md">
                <div className="card-text dark:text-white">
                    <div className="card-text-name font-semibold">
                        <p>{shipName}</p>
                    </div>
                    <div className="card-text-model text-xs">
                        <p>{shipModel}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ShipCard;