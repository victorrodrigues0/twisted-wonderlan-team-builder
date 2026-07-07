import AddButton from "./AddButton";
import SearchBar from "./SearchBar";

interface SearchAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    search: string,
    onSearchChange?: (value: string) => void,
    hrefLink: string
}

const SearchArea = ({ search, onSearchChange,hrefLink, className, ...props }: SearchAreaProps) => {
    return (
        <div
            className={`z-10 flex items-center justify-center gap-6 w-full max-w-6xl mx-auto bg-bg ${className ?? ""}`}
            {...props}
        >
            <SearchBar
                value={search}
                onChange={(value) => onSearchChange?.(value)}
            />
            <a href={hrefLink}>
                <AddButton />
            </a>
        </div>
    )
}
export default SearchArea;