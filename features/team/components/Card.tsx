import { Card as CardType } from "@/mocks/cards";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import IconWrapper from "@/app/components/ui/Icon";

interface CardProps {
    card: CardType
}

const Card = ({
    card
}: CardProps) => {
    return (
        <div
            className="w-64 h-90 relative bg-cover bg-center bg-surface 
            hover:bg-surface-elevated transition-all ease duration-200 rounded-md
            "
            style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.8) 100%)",
                }}
            />
            <div
                className="absolute bottom-0 bg-zinc-950 opacity-85 w-full h-25 text-lg
                flex justify-center gap-2 pt-3 flex-col"
            >
                <div
                className="flex w-full h-1/3items-center justify-center gap-4"
                >
                    <p>
                        HP: {card.hp}
                    </p>
                    <p>
                        POW: {card.attack}
                    </p>
                </div>
                <div
                className="w-full h-2/3 flex items-end pb-3 pr-1 gap-1 flex-col"
                >
                    <IconWrapper
                        color="blue"
                        icon={CreateIcon}
                    />
                    <IconWrapper
                        color="red"
                        icon={DeleteIcon}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card;