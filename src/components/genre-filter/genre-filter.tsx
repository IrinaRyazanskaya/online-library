import "./genre-filter.css";

type GenreFilterProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export function GenreFilter({ value, options, onChange }: GenreFilterProps) {
  return (
    <select
      aria-label="Фильтр по жанру"
      className="genre-filter"
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
    >
      <option value="">Все жанры</option>
      {options.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}
