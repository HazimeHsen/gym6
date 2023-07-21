import Slider from "@/components/Slider";
import { Some2Images, SomeImages, images } from "@/data";
import React from "react";

export default function page() {
  return (
    <div className="flex  bg-white flex-col items-center gap-10 py-32 xl:w-full">
      <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl">
        TRANSFORMATIONS
      </h2>
      <div className="slider md:w-1/2 sm:w-3/4 w-full p-8 h-96 ">
        <Slider images={SomeImages} />
      </div>
      <div className="slider md:w-1/2 sm:w-3/4 w-full p-8 h-96 ">
        <Slider images={Some2Images} />
      </div>
    </div>
  );
}
