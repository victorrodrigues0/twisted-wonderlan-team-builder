import { Card as CardType } from "@/mocks/cards";

interface CardProps {
    card: CardType;
}

const Card = ({ card }: CardProps) => {
    return (
        <div className="w-60 aspect-square rounded-lg overflow-hidden shadow-md flex flex-col bg-bg
        cursor-pointer hover:bg-surface-elevated transition-all ease duration-200 delay-75 transform
        hover:-translate-1">
            <img
                src={card.imageUrl}
                alt={card.characterName}
                className="w-full h-3/4 object-cover"
            />
            <div className="h-1/4 flex items-center justify-center px-1">
                <span className="text-white text-[10px] font-medium text-center truncate">
                    {card.characterName}
                </span>
            </div>
        </div>
    )
}

export default Card;