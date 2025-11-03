import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import type { Book } from "../../types";
import { useFavorites } from "../../hooks/use-favorites";
import { SearchBar } from "../../components/search-bar";
import { GenreFilter } from "../../components/genre-filter";
import { CardContainer } from "../../components/card-container";

import booksJson from "../../data/books.json" with { type: "json" };

const books = booksJson as Book[];

export function Catalog() {
  const [params, setParams] = useSearchParams();
  const query = params.get("query") ?? "";
  const genre = params.get("genre") ?? "";

  const { favoriteIds, toggleFavorite } = useFavorites();

  const genres = useMemo(() => {
    const genresSet = new Set<string>();

    for (const book of books) {
      genresSet.add(book.genre);
    }

    const uniqGenres = Array.from(genresSet);
    uniqGenres.sort();

    return uniqGenres;
  }, []);

  const filteredBooks: Book[] = useMemo(() => {
    return books.filter((book) => {
      const lowerQuery = query.toLowerCase();

      const genreMatches = genre ? book.genre === genre : true;
      const titleMatches = book.title.toLowerCase().includes(lowerQuery);
      const authorMatches = book.author.toLowerCase().includes(lowerQuery);

      return genreMatches && (titleMatches || authorMatches);
    });
  }, [query, genre]);

  const handleQueryChange = useCallback(
    (value: string) => {
      const next = new URLSearchParams(params);

      if (value) {
        next.set("query", value);
      } else {
        next.delete("query");
      }

      setParams(next, { replace: true });
    },
    [params, setParams],
  );

  const handleGenreChange = useCallback(
    (value: string) => {
      const next = new URLSearchParams(params);

      if (value) {
        next.set("genre", value);
      } else {
        next.delete("genre");
      }

      setParams(next, { replace: true });
    },
    [params, setParams],
  );

  return (
    <section>
      <h2>Каталог книг</h2>
      <div className="toolbar">
        <SearchBar
          value={query}
          onChange={handleQueryChange}
          placeholder="Введите название или автора"
        />
        <GenreFilter
          value={genre}
          options={genres}
          onChange={handleGenreChange}
        />
      </div>
      <CardContainer
        books={filteredBooks}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
}
