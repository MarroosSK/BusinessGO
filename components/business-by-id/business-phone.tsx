import React from "react";
import { Badge } from "../ui/badge";
import { Phone } from "lucide-react";

const BusinessPhone = ({ phoneNumber }: { phoneNumber: string }) => {
  //console.log(phoneNumber);

  return (
    <div className="flex flex-col p-8 border bg-white rounded-md">
      <Badge variant="default" className="w-[150px] bg-[#ff5b31]">
        <Phone /> Phone
      </Badge>
      {phoneNumber ? (
        <p className="mt-[5px] text-slate-500">{phoneNumber}</p>
      ) : (
        <p className="mt-[5px] text-slate-500">No phone number available</p>
      )}
    </div>
  );
};

export default BusinessPhone;
