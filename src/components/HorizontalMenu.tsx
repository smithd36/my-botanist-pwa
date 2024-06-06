import React, { useEffect } from 'react';

type HorizontalMenuProps = {
    plants: string[];
    onSelect: (plant: string) => void;
};

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ plants, onSelect }) => {

    return (
        <div className="p-2 shadow bottom-8 scrollbar-hide">
            <div className="flex overflow-x-auto scrollbar-hide mt-10" id="horizontal-plants-menu">
                {plants.map(plant => (
                    <a
                        key={plant}
                        className="text-lg px-2 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => onSelect(plant)}
                    >
                        {plant.toLowerCase()}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HorizontalMenu;