import React from "react";

interface ShipCardProps {
    shipData: {
        name: string,
        model: string
    }
    onClick?: () => void;
}

const ShipCard: React.FC<ShipCardProps> = ({shipData}) => {
    return (
        <>
            <div className="card dark:bg-gray-900 rounded-md p-4 flex flex-col max-w-lg">
                <div className="card-text dark:text-white">
                    <div className="card-text-name font-semibold">
                        <p>{shipData.name}</p>
                    </div>
                    <div className="card-text-model text-xs">
                        <p>{shipData.model}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ShipCard;