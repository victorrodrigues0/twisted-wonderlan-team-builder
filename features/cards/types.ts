export interface CardDetailProps {
    id: number
}

export interface CardAttackElementFormProps {
    elementType: "FIRE" | "AQUA" | "FLORA" | "COSMO";
    actionType: "ATTACK" | "HEAL";
    position: number;
}

export interface CardBuddyFormProps {
    buddyCharacterId: number;
    isMagicDuo: boolean;
}

export interface CreateCardFormProps {
    characterId: number;
    outfitName: string;
    rarity: "R" | "SR" | "SSR";
    dorm: string;
    battleType: "ATTACK" | "DEFENSE" | "BALANCED";
    hp: number;
    attack: number;
    imageUrl?: string;
    attackElements: [
        CardAttackElementFormProps,
        CardAttackElementFormProps,
        CardAttackElementFormProps
    ];
    buddies: [
        CardBuddyFormProps,
        CardBuddyFormProps,
        CardBuddyFormProps
    ];
}