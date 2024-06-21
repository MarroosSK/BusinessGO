import { MapPin } from "lucide-react";
import { Suspense } from "react";
import BusinessItem from "./business-item";
import { BusinessDataI } from "@/types/types";

const BusinessList = ({
  businessesData,
  loading,
}: {
  businessesData: BusinessDataI;
  loading: boolean;
}) => {
  //console.log(businessesData);

  if (loading) {
    return (
      <div className="relative container flex flex-col items-center gap-y-3 min-h-screen">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px]  overflow-hidden rounded-lg bg-[#6b2615]"></div>
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px] overflow-hidden rounded-lg bg-[#6b2615]"></div>
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px] overflow-hidden rounded-lg bg-[#6b2615]"></div>
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px] overflow-hidden rounded-lg bg-[#6b2615]"></div>
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px] overflow-hidden rounded-lg bg-[#6b2615]"></div>
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px] overflow-hidden rounded-lg bg-[#6b2615]"></div>
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px] overflow-hidden rounded-lg bg-[#6b2615]"></div>
          <div className="w-[250px] sm:w-[300px] lg:w-[330px] xl-[380px] h-[250px] sm:h-[320px] overflow-hidden rounded-lg bg-[#6b2615]"></div>
        </div>
      </div>
    );
  }

  if (!businessesData || businessesData.businesses.length === 0) {
    return (
      <div className="container flex items-center justify-center py-10 text-[#6b2615] text-lg">
        No data found...
      </div>
    );
  }

  return (
    <div className="relative container flex flex-col items-center gap-y-3 min-h-screen">
      <BusinessItem data={businessesData} />
    </div>
  );
};

export default BusinessList;
