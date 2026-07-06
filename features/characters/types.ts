export interface Character {
    id: number;
    name: string;
    imageUrl: string;
}

export interface CharacterCardProps extends React.HTMLAttributes<HTMLDivElement> {
    character: Character;
}