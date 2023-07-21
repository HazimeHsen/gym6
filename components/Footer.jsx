import { AdminName, emailLink, instaLink } from "@/data";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black font-semibold border-t border-primary">
      <div className="flex flex-col py-10 px-4 gap-7 items-center mx-auto max-w-[1240px] justify-center">
        <div className="flex flex-col items-center w-full md:justify-center md:flex-row">
          <p className=" tracking-wide ">Copyright © 2022 {AdminName}</p>
        </div>
      </div>
    </footer>
  );
}
