import AddIcon from '@mui/icons-material/Add';

interface AddButtonProps {
    label?: string
}

const AddButton = ({ label = "Adicionar" }: AddButtonProps) => {
    return (
        <button
            className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover
             text-white font-medium rounded-lg transition-colors cursor-pointer ease 
             delay-75 duration-200"
        >
            <AddIcon />
            {label}
        </button>
    );
}

export default AddButton;