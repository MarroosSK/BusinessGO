import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import arrow from "../../public/colored-arrow.svg";

const BusinessLink = ({ directLink }: { directLink: string }) => {
  return (
    <Link href={directLink} target="_blank">
      <Button
        variant="outline"
        className="text-[#ff5b31] flex items-center gap-x-2 border border-[#ff5b31]"
      >
        <Image className="w-[32px] h-[32px] " src={arrow} alt="arrow" />
      </Button>
    </Link>
  );
};

export default BusinessLink;
