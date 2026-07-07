import { CreateCardFormProps } from "@/features/cards/types";
import { useController, UseControllerProps } from "react-hook-form";

interface InputProps extends UseControllerProps<CreateCardFormProps> {
    type?: string
}

const Input = ({ type = "text", ...props }: InputProps) => {
    const { field, fieldState } = useController(props);
    
    return (
        <span>
            <input
                type={type}
                {...field}
                className="border border-white text-white"
            />

            {fieldState.error?.type === "required" &&
                <p>{fieldState.error.message}</p>
            }

            {fieldState.error?.type === "min" &&
                <p>Minimo 100</p>
            }
        </span>
    )
}

export default Input;