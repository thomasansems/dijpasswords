import { Trash } from "./icons"

type CardProps = {
    title: string;
    password: string;
    color: string;
    client: string;
}

export const Card: React.FC<CardProps> = ({ title, password, color, client }) => (
    <div className="bg-gray-800 rounded-md p-4 mb-4 flex items-center justify-between">
        <p className="text-sm" style={{ 'background': color }}>{client}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{password}</p>
        <Trash className="cursor-pointer" />
    </div >
)

export default Card