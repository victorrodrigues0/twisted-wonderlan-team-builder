import { SubmitHandler } from "react-hook-form";
import { CreateCardFormProps } from "../types";

export const createCard: SubmitHandler<CreateCardFormProps> = (data) => {
    console.log(data)
}