import React from "react";
import { Badge } from "../ui/badge";
import { Home, MapPin } from "lucide-react";

const BusinessAddress = ({
  location,
  city,
}: {
  location: string;
  city: string;
}) => {
  //console.log(location, city);

  return (
    <div>
      <div className="flex flex-col p-8 border bg-white rounded-md">
        <Badge variant="default" className="w-[150px] bg-[#ff5b31]">
          <MapPin /> Address
        </Badge>
        <div className="flex items-center gap-x-2 mt-[5px]">
          <Home className="text-slate-500" />
          <p className="text-slate-500">
            {location}, {city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessAddress;
