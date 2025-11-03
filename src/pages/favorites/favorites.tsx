import { useMemo } from "react";

import type { Book } from "../../types";
import { CardContainer } from "../../components/card-container";
import { useFavorites } from "../../hooks/use-favorites";

import booksJson from "../../data/books.json" with { type: "json" };

const books = booksJson as Book[];

export function Favorites() {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const favoriteBooks = useMemo(() => {
    return books.filter((book) => favoriteIds.includes(book.id));
  }, [favoriteIds]);

  return (
    <section>
      <h2>Избранное</h2>
      <CardContainer
        books={favoriteBooks}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
}
