"use client"

import { useForm } from "react-hook-form";
import { CreateCardFormProps } from "../types";
import { mockCharacters } from "@/mocks/characters";
import { createCard } from "../services/create";
import ErrorMessage from "@/app/components/ui/ErrorMessage"
import Input from "@/app/components/ui/Input";

const CreateCardForm = () => {
    const { control, handleSubmit } = useForm<CreateCardFormProps>();
    const characters = mockCharacters;

    return (
        <form
            onSubmit={handleSubmit(createCard)}
            className=" w-auto p-3 h-1/2 flex justify-center items-center gap-6
        flex-col"
        >
            <span>
                <label htmlFor="">
                    Traje:
                </label>

                <Input
                    control={control}
                    name="outfitName"
                    rules={{ required: "Campo Obrigatório" }}
                    defaultValue={""}
                />
            </span>

             <span>
                <label htmlFor="">
                    Vida:
                </label>

                <Input
                    control={control}
                    name="hp"
                    rules={{ required: "Campo Obrigatório", min: "100" }}
                    type="number"
                    defaultValue={0}
                />
            </span>


            <input
                type="submit"
                value="Enviar"
            />

        </form>
    )
}


export default CreateCardForm;