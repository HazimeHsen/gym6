import { emailLink, instaLink, phoneNb, tiktokLink } from "@/data";
import Link from "next/link";
import React from "react";
import { BsTelephoneFill, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiTiktok } from "react-icons/si";
export default function ContactUs() {
  return (
    <div
      id="contact"
      className="bg-white flex flex-col items-center gap-10 py-10 xl:w-full">
      <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl">
        Contact us
      </h2>
      <div className="font-semibold">
        <div className="email my-2 flex items-center">
          <span className="font-bold mr-2">Email:</span>
          <Link className="text-[#0c5c75] text-2xl" href={emailLink}>
            <HiOutlineMail />
          </Link>
        </div>
        <div className="phone my-2">
          <span className="font-bold mr-2">Phone:</span>
          {phoneNb}
        </div>
        <div className="insta my-2 flex items-center">
          <span className="font-bold mr-2">Instagram:</span>
          <Link className="text-[#0c5c75] text-2xl" href={instaLink}>
            <BsInstagram />
          </Link>
        </div>
        <div className="tiktok my-2 flex items-center">
          <span className="font-bold mr-2">Tiktok:</span>
          <Link className="text-[#0c5c75] text-2xl" href={tiktokLink}>
            <SiTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
}
