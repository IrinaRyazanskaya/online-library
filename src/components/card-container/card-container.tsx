import type { Book } from "../../types";
import { BookCard } from "../book-card";

type CardContainerProps = {
  books: Book[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
};

export function CardContainer({ books, favoriteIds, onToggleFavorite }: CardContainerProps) {
  if (!books.length) return <p className="muted">Ничего не найдено.</p>;

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
