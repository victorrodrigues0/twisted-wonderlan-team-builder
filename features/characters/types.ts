import z from "zod";
import { createCharacterFormSchema } from "./schemas/createCharacterFormSchema";

export type Character = z.infer<typeof createCharacterFormSchema>

export interface CharacterCardProps extends React.HTMLAttributes<HTMLDivElement> {
    character: Character;
}