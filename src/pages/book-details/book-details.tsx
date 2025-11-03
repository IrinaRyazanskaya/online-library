import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { useFavorites } from "../../hooks/use-favorites";
import type { Book } from "../../types";

import booksJson from "../../data/books.json" with { type: "json" };

const books = booksJson as Book[];

export function BookDetails() {
  const { id } = useParams();
  const bookId = Number(id);
  const book = useMemo(() => {
    return books.find((book) => book.id === bookId);
  }, [bookId]);

  const { hasFavorite, toggleFavorite } = useFavorites();

  if (!book)
    return (
      <p>
        Книга не найдена. <Link to="/">Вернуться в каталог</Link>
      </p>
    );

  return (
    <article className="details">
      <header>
        <h2>{book.title}</h2>
        <p className="muted">
          {book.author} • {book.year} • {book.genre}
        </p>
      </header>

      <p>{book.description}</p>

      <div className="details__actions">
        <button
          className={"button " + (hasFavorite(book.id) ? "button_secondary" : "button_primary")}
          onClick={() => toggleFavorite(book.id)}
        >
          {hasFavorite(book.id) ? "Убрать из избранного" : "Добавить в избранное"}
        </button>
        <Link className="button button_ghost" to="/">
          Назад
        </Link>
      </div>
    </article>
  );
}
