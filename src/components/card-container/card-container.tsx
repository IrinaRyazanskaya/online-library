import type { Book } from "../../types";
import { BookCard } from "../book-card";

import "./card-container.css";

type CardContainerProps = {
  books: Book[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
};

export function CardContainer({ books, favoriteIds, onToggleFavorite }: CardContainerProps) {
  if (!books.length) {
    return (
      <div className="card-container card-container_empty">
        <p className="card-container__message">Ничего не найдено.</p>
      </div>
    );
  }

  return (
    <div className="card-container">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favoriteIds.includes(book.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
