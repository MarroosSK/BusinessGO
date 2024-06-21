"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "./ui/sonner";

const Providers = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Toaster />
    </>
  );
};

export default Providers;
