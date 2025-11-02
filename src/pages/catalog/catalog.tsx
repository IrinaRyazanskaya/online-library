import { CardContainer } from "../../components/card-container";
import type { Book } from "../../types";
import booksJson from "../../data/books.json" with { type: "json" };
import { useFavorites } from "../../hooks/use-favorites";

const books = booksJson as Book[];

export function Catalog() {
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <section>
      <h2>Каталог книг</h2>
      <CardContainer books={books} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
    </section>
  );
}
