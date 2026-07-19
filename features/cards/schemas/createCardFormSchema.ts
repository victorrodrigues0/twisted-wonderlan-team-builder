import z from "zod";

const cardAttackElementSchema = z.object({
    elementType: z.enum(["FIRE", "AQUA", "FLORA", "COSMO"], { message: "Selecione um elemento" }),
    actionType: z.enum(["ATTACK", "HEAL"], { message: "Selecione um tipo de ação" }),
    position: z.number({ message: "Selecione a posição" })
});

const cardBuddySchema = z.object({
    buddyCharacterId: z.number({ message: "Selecione um buddy" }),
    isMagicDuo: z.boolean({ message: "Informe se é duo mágico" })
});

export const createCardFormSchema = z.object({
    characterId: z.number({ message: "Adicione um personagem" }),
    outfitName: z.string({ message: "Adicione o nome do traje" }).trim().min(1, "Adicione o nome do traje"),
    rarity: z.enum(["R", "SR", "SSR"], { message: "Selecione uma raridade" }),
    dorm: z.string({ message: "Selecione um dormitório" }).trim().min(1, "Selecione um dormitório"),
    battleType: z.enum(["ATTACK", "DEFENSE", "BALANCED"], { message: "Selecione um tipo de batalha" }),
    hp: z.number({ message: "Adicione a vida" }),
    attack: z.number({ message: "Adicione o ataque" }),
    imageUrl: z.string().url("Adicione uma URL válida").optional().or(z.literal("")),
    attackElements: z.tuple([
        cardAttackElementSchema,
        cardAttackElementSchema,
        cardAttackElementSchema
    ]),
    buddies: z.tuple([
        cardBuddySchema,
        cardBuddySchema,
        cardBuddySchema
    ])
});