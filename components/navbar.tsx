"use client";

import { cn } from "@/lib/utils";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="relative w-[100%] container p-5 h-[80px] flex items-center justify-between px-5">
      <Link href="/">
        <h2 className="text-2xl font-semibold md:text-[25px] text-[#ff5b31] tracking-widest">
          Business<span className="text-[#6b2615] font-bold">GO</span>
        </h2>
      </Link>
      {/* mobile menu */}
      <div className="sm:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={cn(
          "fixed top-0 left-0 w-[250px] bg-white flex flex-col gap-y-6 h-screen z-[10] py-10 px-4 transition-transform duration-300 ease-in-out",
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        )}
      >
        <h2 className="text-2xl font-semibold md:text-[25px] text-[#ff5b31] tracking-widest">
          Business<span className="text-[#6b2615] font-bold">GO</span>
        </h2>
        <div className="flex flex-col gap-y-2 px-4">
          <Link
            href="/business"
            className={cn(
              "text-lg text-[#8c321b] font-semibold",
              pathname === "/business" && ""
            )}
            onClick={() => setOpen(false)}
          >
            Business
          </Link>
          <Link
            href="/my-places"
            className={cn(
              "text-lg text-[#8c321b] font-semibold",
              pathname === "/my-places" && ""
            )}
            onClick={() => setOpen(false)}
          >
            My places
          </Link>
        </div>
      </div>
      <div className="hidden sm:flex flex-row items-center gap-y-6 gap-x-6">
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
