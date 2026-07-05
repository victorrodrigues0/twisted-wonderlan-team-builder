import { ActionType, ElementType } from "@/mocks/cards";

interface CardMagicProps {
    elementType: ElementType,
    actionType: ActionType
}

const CardMagic = ({ elementType, actionType }: CardMagicProps) => {
    const elementImages: Record<ElementType, string> = {
        FIRE: "/images/magic_types/fire.webp",
        AQUA: "/images/magic_types/aqua.webp",
        FLORA: "/images/magic_types/flora.webp",
        COSMO: "/images/magic_types/cosmic.webp",
    };

    const typesAttacksImages: Record<ActionType, string> = {
        ATTACK: "/images/magic_types/attack.webp",
        HEAL: "/images/magic_types/heal.webp",
    };

    return (
        <div
            className="w-10 h-14 flex flex-col items-center justify-center"
        >
            <img src={elementImages[elementType]} alt={elementType} />
            <img src={typesAttacksImages[actionType]} alt={actionType} />
        </div>
    )
}

export default CardMagic;