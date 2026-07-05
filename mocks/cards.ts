// mock/cards.ts
export type Rarity = 'R' | 'SR' | 'SSR';
export type Dorm = 'HEARTSLABYUL' | 'SAVANACLAW' | 'OCTAVINELLE' | 'SCARABIA' | 'POMEFIORE' | 'IGNIHYDE' | 'DIASOMNIA';
export type BattleType = 'ATTACK' | 'DEFENSE' | 'BALANCED';
export type ElementType = 'FIRE' | 'AQUA' | 'FLORA' | 'COSMO';
export type ActionType = 'ATTACK' | 'HEAL';

export interface CardAttackElement {
  elementType: ElementType;
  actionType: ActionType;
  position: number;
}

export interface Card {
  id: number;
  characterName: string;
  outfitName: string;
  rarity: Rarity;
  dorm: Dorm;
  battleType: BattleType;
  hp: number;
  attack: number;
  imageUrl: string;
  attackElements: CardAttackElement[];
}

export interface CardProps {
  card: Card,
  statsVisibility: boolean
}
export type CardListProps = Card[];

export const mockCards: Card[] = [
  {
    id: 1,
    characterName: "Riddle Rosehearts",
    outfitName: "Uniforme padrão",
    rarity: "SSR",
    dorm: "HEARTSLABYUL",
    battleType: "BALANCED",
    hp: 4820.5,
    attack: 3150.0,
    imageUrl: "/images/hero/slide-5.webp",
    attackElements: [
      { elementType: "FIRE", actionType: "ATTACK", position: 1 },
      { elementType: "COSMO", actionType: "ATTACK", position: 2 },
      { elementType: "AQUA", actionType: "HEAL", position: 3 },
    ],
  },
  {
    id: 2,
    characterName: "Leona Kingscholar",
    outfitName: "Uniforme padrão",
    rarity: "SR",
    dorm: "SAVANACLAW",
    battleType: "ATTACK",
    hp: 3900.0,
    attack: 4200.75,
    imageUrl: "/images/hero/slide-6.webp",
    attackElements: [
      { elementType: "FIRE", actionType: "ATTACK", position: 1 },
      { elementType: "COSMO", actionType: "ATTACK", position: 2 },
      { elementType: "AQUA", actionType: "HEAL", position: 3 },
    ],
  },
  {
    id: 3,
    characterName: "Ace Trappola",
    outfitName: "Uniforme de educação física",
    rarity: "R",
    dorm: "HEARTSLABYUL",
    battleType: "DEFENSE",
    hp: 2700.25,
    attack: 1980.0,
    imageUrl: "/images/hero/slide-7.webp",
    attackElements: [
      { elementType: "FIRE", actionType: "ATTACK", position: 1 },
      { elementType: "COSMO", actionType: "ATTACK", position: 2 },
      { elementType: "AQUA", actionType: "HEAL", position: 3 },
    ],
  },
  {
    id: 4,
    characterName: "Ace Trappola",
    outfitName: "Uniforme de educação física",
    rarity: "R",
    dorm: "HEARTSLABYUL",
    battleType: "DEFENSE",
    hp: 2700.25,
    attack: 1980.0,
    imageUrl: "/images/hero/slide-7.webp",
    attackElements: [
      { elementType: "FIRE", actionType: "ATTACK", position: 1 },
      { elementType: "COSMO", actionType: "ATTACK", position: 2 },
      { elementType: "AQUA", actionType: "HEAL", position: 3 },
    ],
  },
  {
    id: 5,
    characterName: "Ace Trappola",
    outfitName: "Uniforme de educação física",
    rarity: "R",
    dorm: "HEARTSLABYUL",
    battleType: "DEFENSE",
    hp: 2700.25,
    attack: 1980.0,
    imageUrl: "/images/hero/slide-7.webp",
    attackElements: [
      { elementType: "FIRE", actionType: "ATTACK", position: 1 },
      { elementType: "COSMO", actionType: "ATTACK", position: 2 },
      { elementType: "AQUA", actionType: "HEAL", position: 3 },
    ],
  },
];


export const mockCards2: Card[] = [
  {
    id: 6,
    characterName: "Azul Ashengrotto",
    outfitName: "Uniforme padrão",
    rarity: "SSR",
    dorm: "OCTAVINELLE",
    battleType: "ATTACK",
    hp: 3600.0,
    attack: 4550.25,
    imageUrl: "/images/hero/slide-8.webp",
    attackElements: [
      { elementType: "AQUA", actionType: "ATTACK", position: 1 },
      { elementType: "FLORA", actionType: "ATTACK", position: 2 },
      { elementType: "COSMO", actionType: "HEAL", position: 3 },
    ],
  },
  {
    id: 7,
    characterName: "Jamil Viper",
    outfitName: "Uniforme padrão",
    rarity: "SR",
    dorm: "SCARABIA",
    battleType: "BALANCED",
    hp: 3200.5,
    attack: 3400.0,
    imageUrl: "/images/hero/slide-2.webp",
    attackElements: [
      { elementType: "FLORA", actionType: "ATTACK", position: 1 },
      { elementType: "AQUA", actionType: "HEAL", position: 2 },
    ],
  },
  {
    id: 8,
    characterName: "Vil Schoenheit",
    outfitName: "Uniforme padrão",
    rarity: "SSR",
    dorm: "POMEFIORE",
    battleType: "ATTACK",
    hp: 3050.0,
    attack: 4800.5,
    imageUrl: "/images/hero/slide-3.webp",
    attackElements: [
      { elementType: "COSMO", actionType: "ATTACK", position: 1 },
      { elementType: "FIRE", actionType: "ATTACK", position: 2 },
      { elementType: "FLORA", actionType: "HEAL", position: 3 },
    ],
  },
  {
    id: 9,
    characterName: "Idia Shroud",
    outfitName: "Uniforme padrão",
    rarity: "R",
    dorm: "IGNIHYDE",
    battleType: "DEFENSE",
    hp: 2900.0,
    attack: 2100.75,
    imageUrl: "/images/hero/slide-4.webp",
    attackElements: [
      { elementType: "COSMO", actionType: "ATTACK", position: 1 },
    ],
  },
  {
    id: 10,
    characterName: "Malleus Draconia",
    outfitName: "Uniforme padrão",
    rarity: "SSR",
    dorm: "DIASOMNIA",
    battleType: "ATTACK",
    hp: 4100.0,
    attack: 5200.0,
    imageUrl: "/images/hero/slide-8.webp",
    attackElements: [
      { elementType: "FIRE", actionType: "ATTACK", position: 1 },
      { elementType: "COSMO", actionType: "ATTACK", position: 2 },
      { elementType: "AQUA", actionType: "ATTACK", position: 3 },
    ],
  },
];