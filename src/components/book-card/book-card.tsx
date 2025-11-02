import type { Book } from "../../types";

type BookCardProps = {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export function BookCard({ book, isFavorite, onToggleFavorite }: BookCardProps) {
  return (
    <article className="card">
      <header className="card__header">
        <h3 className="card__title">
          {book.title}
        </h3>
        <div className="card__meta">
          <span>{book.author}</span>
          <span>{book.genre}</span>
        </div>
      </header>

      <p className="card__description">{book.description}</p>

      <div className="card__actions">
        <button
          aria-pressed={isFavorite}
          className={"button " + (isFavorite ? "button_secondary" : "button_primary")}
          onClick={() => onToggleFavorite(book.id)}
        >
          {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
        </button>
      </div>
    </article>
  );
}
