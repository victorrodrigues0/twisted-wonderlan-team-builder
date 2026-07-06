import AddButton from "./AddButton";
import SearchBar from "./SearchBar";

interface SearchAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    search: string,
    add: () => void,
    onSearchChange?: (value: string) => void
}

const SearchArea = ({ search, add, onSearchChange, className, ...props }: SearchAreaProps) => {
    return (
        <div
            className={`z-10 flex items-center justify-center gap-6 w-full max-w-6xl mx-auto bg-bg ${className ?? ""}`}
            {...props}
        >
            <SearchBar
                value={search}
                onChange={(value) => onSearchChange?.(value)}
            />
            <AddButton
                onClick={add}
            />
        </div>
    )
}
export default SearchArea;