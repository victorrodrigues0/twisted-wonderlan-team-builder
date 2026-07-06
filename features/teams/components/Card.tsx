import { CardProps } from "@/mocks/cards";
import CardMagic from "./CardMagic";


const Card = ({ card, statsVisibility }: CardProps) => {
    return (
        <div
            className="w-[30%] aspect-3/4 relative bg-cover bg-center bg-surface 
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
            {statsVisibility &&
                <div
                    className="absolute bottom-0 bg-zinc-950 opacity-85 w-full h-20 text-lg
                flex gap-2 pt-3 flex-col"
                >
                    <div
                        className="flex w-full h-2/3 items-center justify-center gap-4"
                    >
                        <p>
                            HP: {card.hp}
                        </p>
                        <p>
                            POW: {card.attack}
                        </p>
                    </div>

                    <div
                        className="w-full h-1/3 relative flex justify-evenly"
                    >
                        {card.attackElements.map((attack, idx) =>
                            <CardMagic
                                key={idx + 1}
                                actionType={attack.actionType}
                                elementType={attack.elementType}
                            />
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default Card;