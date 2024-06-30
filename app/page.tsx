import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" container flex flex-col min-h-screen items-center justify-center">
        {/* <Image
          src={Vector}
          alt="home-bg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        /> */}

        <div className="z-[1] flex flex-col items-center justify-center">
          <div className="relative">
            <img
              src="./cloud.png"
              className="absolute -top-32 right-0 z-[6] animate-breeze"
            />
            <h1 className=" text-[#6b2615] text-center text-[3.2rem] md:text-[4.5rem] font-extrabold m-0 leading-[4rem]">
              Connect with great
            </h1>
            <h1 className=" text-[#6b2615] text-center  text-[3.2rem] md:text-[4.5rem] font-extrabold  m-0 leading-[4rem]">
              <span className="text-[#ff5b31] ">local</span> businesses
            </h1>
          </div>

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
