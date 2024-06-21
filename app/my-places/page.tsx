"use client";

import FavoriteItemCard from "@/components/favorite-item-card";
import useFavoritesStore from "@/hooks/use-favorite-store";
import Image from "next/image";
import { useEffect } from "react";
import Vector from "../../public/Vector.png";

const MyPlaces = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  useEffect(() => {
    //console.log("Favorites updated:", favorites);
  }, [favorites]);

  return (
    <div className="relative container flex flex-col items-center gap-y-3">
      <Image
        src={Vector}
        alt="home-bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="mb-[72px] flex flex-col items-center">
        <h2 className=" text-[#6b2615] text-center text-[2.5rem] font-extrabold m-0 leading-[4rem]">
          My Places
        </h2>
      </div>

      {favorites.length === 0 && (
        <div className="flex items-center justify-center py-10 text-muted-foreground text-sm">
          No places added to favorites yet.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {favorites &&
          favorites.map((bus) => (
            <FavoriteItemCard business={bus} key={bus.id} />
          ))}
      </div>
      <ul></ul>
    </div>
  );
};

export default MyPlaces;
