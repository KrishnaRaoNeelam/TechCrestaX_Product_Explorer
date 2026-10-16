import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="field field--search">
      <label htmlFor="search" className="field__label">
        Search products
      </label>
      <div className="search">
        <Search className="search__icon" size={18} aria-hidden="true" />
        <input
          id="search"
          type="search"
          className="control search__input"
          placeholder="Search by product name"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
