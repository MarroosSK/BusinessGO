import { BusinessDataI } from "@/types/types";
import BusinessItemCard from "./business-item-card";

const BusinessItem = ({ data }: { data: BusinessDataI }) => {
  // console.log(data.businesses);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.businesses.map((bus) => (
        <BusinessItemCard business={bus} key={bus.id} />
      ))}
    </div>
  );
};

export default BusinessItem;
