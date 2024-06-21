"use client";

import React from "react";
import OpenMap from "../open-map";
import { Map } from "lucide-react";
import { Badge } from "../ui/badge";

interface BusinessMapI {
  longitude: number;
  latitude: number;
  name: string;
}

const BusinessMap = ({ longitude, latitude, name }: BusinessMapI) => {
  //console.log(longitude, latitude, name);

  return (
    <div className="z-20 p-8 border bg-white rounded-md h-[400px]">
      <Badge variant="default" className="w-[150px] bg-[#ff5b31]">
        <Map /> Map
      </Badge>
      <OpenMap lon={longitude} lat={latitude} name={name} />
    </div>
  );
};

export default BusinessMap;
