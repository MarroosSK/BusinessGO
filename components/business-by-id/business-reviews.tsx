"use client";

import { GanttChartSquare } from "lucide-react";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ReviewsDataI } from "@/types/types";

const BusinessReviews = ({ reviewsData }: { reviewsData: ReviewsDataI }) => {
  return (
    <div className="w-full p-8 border bg-white rounded-md">
      <Badge variant="default" className="w-[150px] bg-[#ff5b31]">
        <GanttChartSquare /> Reviews
      </Badge>
      <div>
        {reviewsData &&
        reviewsData.reviews &&
        reviewsData?.reviews.length <= 1 ? (
          <div className="text-slate-500 mt-[8px]">
            No reviews for this business
          </div>
        ) : (
          <>
            {reviewsData?.reviews.map((review, index: number) => (
              <div key={index} className="p-4">
                <div className="flex items-center gap-x-2">
                  <Avatar>
                    <AvatarImage src={review?.user?.image_url} />
                    <AvatarFallback className="text-slate-500">
                      {review?.user?.name}
                    </AvatarFallback>
                  </Avatar>

                  <p className="text-slate-500">{review?.time_created}</p>
                </div>
                <Rating
                  initialValue={review?.rating}
                  readonly={true}
                  SVGclassName="text-indigo-500 inline"
                />
                <p className="text-slate-500">{review?.text}</p>
                <Link href={review?.url}>
                  <p className="text-slate-500 mt-[7px] hover:text-slate-700 cursor-pointer">
                    See full review
                  </p>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BusinessReviews;
