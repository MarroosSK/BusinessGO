import { Badge } from "@/components/ui/badge";
import { getBusiness } from "@/app/actions/get-business";
import { getReviews } from "@/app/actions/get-reviews";
import BusinessAddress from "@/components/business-by-id/business-address";
import BusinessGallery from "@/components/business-by-id/business-gallery";
import BusinessLink from "@/components/business-by-id/business-link";
import BusinessMap from "@/components/business-by-id/business-map";
import BusinessOpenHours from "@/components/business-by-id/business-open-hours";
import BusinessPhone from "@/components/business-by-id/business-phone";
import BusinessRating from "@/components/business-by-id/business-rating";
import BusinessReviews from "@/components/business-by-id/business-reviews";
import BusinessFavorite from "@/components/business-by-id/business-favorite";

const BusinessDetailPage = async ({ params }: { params: { id: string } }) => {
  const [businessData, reviewsData] = await Promise.all([
    getBusiness(params.id),
    getReviews(params.id),
  ]);

  //console.log(businessData);

  return (
    <div className="relative container flex flex-col space-y-4 py-2 pb-4">
      <BusinessGallery photos={businessData?.photos} />
      <div className="flex items-center gap-x-2">
        <h5 className="text-2xl text-[#6b2615]">{businessData?.name}</h5>
        {/* LINK */}
        <BusinessLink directLink={businessData?.url} />
        <BusinessFavorite data={businessData} />
      </div>
      <div>
        {businessData?.hours && businessData?.hours[0].is_open_now ? (
          <Badge variant="default" className="bg-[#ff5b31] ">
            Open
          </Badge>
        ) : (
          <Badge variant="destructive">Closed</Badge>
        )}
      </div>

      <div className="mt-5 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2">
        {/* OPEN HOURS */}
        <div className="flex flex-col w-full h-[400px]">
          <BusinessOpenHours openHours={businessData?.hours} />
        </div>
        <div className="flex flex-col justify-between">
          {/* ADDRESS */}
          <BusinessAddress
            location={businessData?.location.address1}
            city={businessData?.location.city}
          />
          {/* PHONE */}
          <BusinessPhone phoneNumber={businessData?.display_phone} />
          {/* RATING */}
          <BusinessRating rating={businessData?.rating} />
        </div>

        <div className="z-10 h-[400px]">
          {/* MAP */}
          <BusinessMap
            longitude={businessData?.coordinates.longitude}
            latitude={businessData?.coordinates.latitude}
            name={businessData?.name}
          />
        </div>
      </div>
      <div className="">
        {/* REVIEWS */}
        <BusinessReviews reviewsData={reviewsData} />
      </div>
    </div>
  );
};

export default BusinessDetailPage;
