import React, { useState } from 'react';

// TypeScript type definition
type ThreeDButtonProps = {
    label: string;
    onClick: () => void; // Definition should come from parent
};

export default function ThreeDButton({ label, onClick }: ThreeDButtonProps) {
    const[isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); // Internal state change
        onClick(); // External action
    }
    
    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {isActive ? `${label} Active` : `${label} Inactive`}
        </button>
    )
}