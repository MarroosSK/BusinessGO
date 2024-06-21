import { getFromLocalStorage } from "@/lib/get-from-local-storage";
import { create } from "zustand";

interface useFavoriteI {
  favorites: any[];
  addFavorite: (business: any) => void;
  removeFavorite: (id: string) => void;
}

// to prevent unexpected errors with empty storage
const storedFavoritesString = getFromLocalStorage("favorites");
const storedFavorites = storedFavoritesString
  ? JSON.parse(storedFavoritesString)
  : [];

const useFavoritesStore = create<useFavoriteI>((set) => ({
  favorites: storedFavorites,
  addFavorite: (business) => {
    set((state) => {
      const newFavorites = [...state.favorites, business];

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    });
  },
  removeFavorite: (id) => {
    set((state) => {
      const newFavorites = state.favorites.filter(
        (business) => business.id !== id
      );

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    });
  },
}));

export default useFavoritesStore;
