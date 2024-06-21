import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Vector from "../public/Vector.png";

export default function Home() {
  return (
    <>
      <div className="relative container flex flex-col min-h-screen items-center justify-center">
        <Image
          src={Vector}
          alt="home-bg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="z-[1] flex flex-col items-center justify-center">
          <>
            <h1 className="z-[3] text-[#6b2615] text-center text-[3.2rem] md:text-[4.5rem] font-extrabold m-0 leading-[4rem]  animate-breeze">
              Connect with great
            </h1>
            <h1 className="z-[3] text-[#6b2615] text-center  text-[3.2rem] md:text-[4.5rem] font-extrabold  m-0 leading-[4rem] animate-breeze">
              <span className="text-[#ff5b31] ">local</span> businesses
            </h1>
          </>

          <p className={` text-[#6b2615] mt-12 font-normal text-sm md:text-lg`}>
            Restaurants, Dentists, Bars, Beauty Salons, Doctors, ...
          </p>

          <div className="flex items-center justify-center mt-16">
            <Button asChild className="bg-[#ff5b31] hover:bg-[#ff5b31]/75">
              <Link href={"/business"}>Find</Link>
            </Button>

            <div className="h-[46px]  border-l-[#ff5b31] border-l-4 mx-4"></div>

            <div className={` text-[#6b2615] font-normal text-sm md:text-lg`}>
              <span>6.321 million businesses.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
