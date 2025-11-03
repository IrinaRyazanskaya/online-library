import { Link } from "react-router-dom";

import type { Book } from "../../types";
import { formatYear } from "../../utils/format-dates";

import "./book-card.css";

type BookCardProps = {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export function BookCard({ book, isFavorite, onToggleFavorite }: BookCardProps) {
  return (
    <article className="card">
      <div className="card__content">
        <header className="card__header">
          <h3 className="card__title">
            <Link className="card__link" to={`/book/${book.id}`}>{book.title}</Link>
          </h3>
          <div className="card__meta">
            <span className="meta__author">Автор: {book.author}</span>
            <span className="meta__year">Год: {formatYear(book.year)}</span>
            <span className="meta__genre">Жанр: {book.genre}</span>
          </div>
        </header>
        <p className="card__description">{book.description}</p>
      </div>
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
