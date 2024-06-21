"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className=" w-[100%]  container p-5 h-[80px] flex items-center justify-between px-5">
      <Link href="/">
        <h2 className="text-2xl font-semibold md:text-[25px] text-[#ff5b31]  tracking-widest">
          Business<span className="text-[#6b2615] font-bold">GO</span>
        </h2>
      </Link>
      <div className="flex flex-col sm:flex-row items-center gap-y-6 gap-x-6">
        <Link
          href="/business"
          className={cn(
            "text-lg text-[#8c321b] font-semibold leading-3",
            pathname === "/business" &&
              "underline underline-offset-8 m-auto h-[50%]"
          )}
        >
          Business
        </Link>

        <Link
          href="/my-places"
          className={cn(
            "text-lg text-[#8c321b] font-semibold leading-3",
            pathname === "/my-places" &&
              "underline underline-offset-8 m-auto h-[50%]"
          )}
        >
          My places
        </Link>
      </div>
    </nav>
  );
};
