"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Buscar..." }: SearchBarProps) => {
  return (
    <div className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 w-full max-w-md">
      <Search className="text-text-secondary" size={20} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none text-text-primary placeholder:text-text-secondary w-full"
      />
    </div>
  );
};

export default SearchBar;