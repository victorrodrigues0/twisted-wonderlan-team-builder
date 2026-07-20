"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { createCharacterFormSchema } from "../schemas/createCharacterFormSchema";
import { CharacterCardProps } from "../types";

const CreateCharacterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CharacterCardProps>({
        resolver: zodResolver(createCharacterFormSchema)
    })

    const handleSubmitForm: SubmitHandler<CharacterCardProps> = (data) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            teste
        </form>
    )
}

export default CreateCharacterForm;