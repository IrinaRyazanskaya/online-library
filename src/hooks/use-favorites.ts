import { useCallback, useEffect, useMemo, useState } from "react";

import { loadFavorites, saveFavorites } from "../utils/storage";

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => loadFavorites());

  useEffect(() => {
    saveFavorites(favoriteIds);
  }, [favoriteIds]);

  const hasFavorite = useCallback(
    (id: number) => {
      favoriteIds.includes(id);
    },
    [favoriteIds],
  );

  const addFavorite = useCallback(
    (id: number) =>
      setFavoriteIds((previousIds) => {
        if (previousIds.includes(id)) {
          return previousIds;
        }

        return [...previousIds, id];
      }),
    [],
  );

  const toggleFavorite = useCallback((id: number) => {
    setFavoriteIds((previousIds) => {
      if (previousIds.includes(id)) {
        return previousIds.filter((previousId) => previousId !== id);
      }

      return [...previousIds, id];
    });
  }, []);

  const removeFavorite = useCallback(
    (id: number) =>
      setFavoriteIds((previousIds) => {
        return previousIds.filter((previousId) => previousId !== id);
      }),
    [],
  );

  const value = useMemo(
    () => ({ favoriteIds, hasFavorite, addFavorite, toggleFavorite, removeFavorite }),
    [favoriteIds, hasFavorite, addFavorite, toggleFavorite, removeFavorite],
  );

  return value;
}
