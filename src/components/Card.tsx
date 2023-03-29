import { CardProps } from './../types';
import { useState } from 'react';
import { Trash } from './icons';

export const Card: React.FC<CardProps> = ({ title, password, color, client, onDelete }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-gray-800 rounded-md p-4 mb-4 flex items-center justify-between">
            <div className="flex items-center justify-between">
                {color && <div className="w-3 h-3 rounded-full mr-2" style={{ 'background': color }}></div>}
                <p className="text-sm">{client}</p>
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="text-sm" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <span>{isHovered ? password : '*'.repeat(password.length)}</span>
            </div>
            <div>
                <Trash onClick={() => onDelete()} />
            </div>
        </div >
    )
}

export default Card