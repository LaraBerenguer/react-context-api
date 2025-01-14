import React from "react";
import { useNavigate } from "react-router-dom";

interface ShipCardProps {
    shipData: {
        id: number,
        name: string,
        model: string
    }
    onClick?: () => void;
}

const ShipCard: React.FC<ShipCardProps> = ({shipData}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/starships/${shipData.id}`)
    };

    return (
        <button onClick={handleClick}>
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
        </button>
    )
};

export default ShipCard;