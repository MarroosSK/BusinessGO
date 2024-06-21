export const dynamic = "force-dynamic";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Providers from "@/components/layouts";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/preloader";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "BusinessGO",
  description: "App to search businesses (restaurants, car dealers, etc.).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className}, w-full bg-slate-200/30`}>
        <Providers />
        <Navbar />
        <Preloader backgroundColor="bg-slate-200" color="#ff5b31" size={40}>
          <main className=" min-h-full md:min-h-screen">{children}</main>
        </Preloader>
        <Footer />
      </body>
    </html>
  );
}
