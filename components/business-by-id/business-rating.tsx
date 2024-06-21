"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Loader, Star } from "lucide-react";
import { Rating } from "react-simple-star-rating";

const BusinessRating = ({ rating }: { rating: number }) => {
  //console.log(rating);

  if (rating === null) {
    return <Loader className="animate-spin" />;
  }
  return (
    <div className="flex flex-col p-8 border bg-white rounded-md">
      <Badge variant="default" className="w-[150px] bg-[#ff5b31]">
        <Star /> Rating
      </Badge>
      <Rating
        initialValue={rating}
        readonly={true}
        SVGclassName="inline"
        fillColor="text-[#ff5b31]"
      />
    </div>
  );
};

export default BusinessRating;
