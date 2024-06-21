"use client";
import useFavoritesStore from "@/hooks/use-favorite-store";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Business } from "@/types/types";

const BusinessFavorite = ({ data }: { data: Business }) => {
  //console.log(data);

  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);

  const isAlreadyFavorite = favorites.some((fav) => fav.id === data.id);

  const handleAddToFavorites = () => {
    if (!isAlreadyFavorite) {
      addFavorite(data);
      toast.success("Added to my places.");
    } else {
      toast.warning("Already in my places.");
    }
  };

  return (
    <Button
      variant="outline"
      className="text-[#ff5b31] flex items-center gap-x-2 border border-[#ff5b31]"
      onClick={handleAddToFavorites}
    >
      <Heart fill={isAlreadyFavorite ? "#ff5b31" : "#FFFFFF"} />
    </Button>
  );
};

export default BusinessFavorite;
