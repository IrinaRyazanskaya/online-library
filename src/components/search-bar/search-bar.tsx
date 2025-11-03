import { useEffect, useState } from "react";

import "./search-bar.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const [query, setQuery] = useState(value);

  useEffect(() => setQuery(value), [value]);

  return (
    <input
      aria-label="Поиск"
      className="search-bar"
      type="search"
      value={query}
      onChange={(evt) => setQuery(evt.target.value)}
      onKeyDown={(evt) => {
        if (evt.key === "Enter") onChange(query);
      }}
      onBlur={() => onChange(query)}
      placeholder={placeholder ?? "Поиск…"}
    />
  );
}
