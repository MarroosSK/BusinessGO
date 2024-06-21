"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBusiness = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [term, setTerm] = useState("");

  const [queryDebounce] = useDebounce(query, 50);
  const [termDebounce] = useDebounce(term, 50);

  const showRemove = query !== "" || term !== "";

  const removeFields = () => {
    setQuery("");
    setTerm("");
  };

  useEffect(() => {
    if (!query && !term) {
      router.push(`/business`);
    } else {
      router.push(`/business/?location=${queryDebounce}&term=${termDebounce}`);
    }
  }, [query, term, queryDebounce, termDebounce, router]);

  return (
    <div className=" py-[10px] flex flex-col items-center ">
      <div className="mb-[72px] flex flex-col items-center">
        <h2 className=" text-[#6b2615] text-center text-[2.5rem] font-extrabold m-0 leading-[4rem]">
          Search business
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 py-4">
        <Input
          type="text"
          name="query"
          placeholder="'e.g: California, Warsaw'"
          className="z-[6] outline-none p-5 text-[#ff5b31]   font-bold"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <div className="z-[6] h-[46px]  border-l-[#ff5b31] border-l-4 mx-4"></div>
        <Input
          type="text"
          name="query"
          placeholder="'e.g: food, cars'"
          className="z-[6] outline-none p-5  text-[#ff5b31] font-bold"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
        {showRemove && (
          <Button
            variant="default"
            className="z-[6]  bg-[#6b2615] hover:bg-[#6b2615]/75  transition-all ease-in-out rounded-lg cursor-pointer"
            asChild
            onClick={removeFields}
          >
            <X className="z-[6] w-32 " />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBusiness;
