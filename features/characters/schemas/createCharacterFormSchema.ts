import z from "zod";

export const createCharacterFormSchema = z.object({
    id: z.number(),
    name: z.string(),
    imageUrl: z.file()
})