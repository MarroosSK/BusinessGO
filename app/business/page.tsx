"use client";

import { BusinessDataI } from "@/types/types";
import { useState, useEffect } from "react";
import { getBusinesses } from "../actions/get-businesses";
import SearchBusiness from "@/components/search-business";
import BusinessList from "@/components/business-list";
import Image from "next/image";
import Vector from "../../public/Vector.png";

const BusinessPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const location =
    typeof searchParams.location === "string"
      ? searchParams.location
      : undefined;
  const term =
    typeof searchParams.term === "string" ? searchParams.term : undefined;
  const showData = location && term;

  const [businessesData, setBusinessesData] = useState<BusinessDataI | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  //console.log(businessesData);

  useEffect(() => {
    const fetchData = async () => {
      if (showData) {
        setLoading(true);
        const data = await getBusinesses({ query: location, term: term });
        setBusinessesData(data);
        setLoading(false);
      }
    };
    fetchData();
  }, [location, term, showData]);

  return (
    <div className="relative">
      <Image
        src={Vector}
        alt="home-bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <SearchBusiness />
      {!showData ? (
        <div className="flex items-center justify-center py-10 text-[#6b2615] text-lg">
          Make sure to type in both fields...
        </div>
      ) : (
        <BusinessList
          businessesData={businessesData as BusinessDataI}
          loading={loading}
        />
      )}
    </div>
  );
};

export default BusinessPage;
