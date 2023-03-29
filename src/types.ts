export type ItemProps = {
    title: string;
    password: string;
    client: string;
    color: string;
    id?: string;
}

export type CardProps = ItemProps & {
    onDelete: () => void;
};

export type Client = {
    name: string;
    color: string;
};