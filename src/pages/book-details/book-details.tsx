import { type MouseEvent, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useFavorites } from "../../hooks/use-favorites";
import type { Book } from "../../types";
import { formatYear } from "../../utils/format-dates";

import booksJson from "../../data/books.json" with { type: "json" };

import "./book-details.css";

const books = booksJson as Book[];

export function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookId = Number(id);
  const book = useMemo(() => {
    return books.find((book) => book.id === bookId);
  }, [bookId]);

  const { hasFavorite, toggleFavorite } = useFavorites();

  const handleBackClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Пользователь вошел не напрямую на book-details
    if (window.history.state?.idx > 0) {
      event.preventDefault();
      navigate(-1);
    }
  };

  if (!book)
    return (
      <p>
        Книга не найдена. <Link to="/">Вернуться в каталог</Link>
      </p>
    );

  return (
    <article className="book-details">
      <header>
        <Link
          className="button button_secondary book-details__back-link"
          to="/"
          onClick={handleBackClick}
        >
          Назад
        </Link>
        <h2>{book.title}</h2>
        <div className="book-details__meta">
          <span className="book-details__meta-item">Автор: {book.author}</span>
          <span className="book-details__meta-item">Год: {formatYear(book.year)}</span>
          <span className="book-details__meta-item">Жанр: {book.genre}</span>
        </div>
      </header>

      <p>{book.description}</p>

      <button
        className={
          "book-details__favorite button " +
          (hasFavorite(book.id) ? "button_secondary" : "button_primary")
        }
        onClick={() => toggleFavorite(book.id)}
      >
        {hasFavorite(book.id) ? "Убрать из избранного" : "Добавить в избранное"}
      </button>
    </article>
  );
}
