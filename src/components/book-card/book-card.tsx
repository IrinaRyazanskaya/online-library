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
    <article className="book-card">
      <div className="book-card__content">
        <header className="book-card__header">
          <h3 className="book-card__title">
            <Link className="book-card__link" to={`/book/${book.id}`}>
              {book.title}
            </Link>
          </h3>
          <div className="book-card__meta">
            <span className="book-card__meta-item">Автор: {book.author}</span>
            <span className="book-card__meta-item">Год: {formatYear(book.year)}</span>
            <span className="book-card__meta-item">Жанр: {book.genre}</span>
          </div>
        </header>
        <p className="book-card__description">{book.description}</p>
      </div>
      <div className="book-card__actions">
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
