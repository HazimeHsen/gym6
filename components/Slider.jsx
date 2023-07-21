"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "next/image";
import "./styles.css";
// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Slider({ images }) {
  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="mySwiper p-10 w-full">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <div className="relative w-80  p-2 swiper-image-container">
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={100}
                  className="w-full gg h-full mb-5"
                  onError={(e) =>
                    console.log("Error loading image:", e.target.src)
                  }
                />
                <span className="absolute font-bold top-0 left-14 ">
                  Before
                </span>
                <span className="absolute font-bold top-0 right-14 ">
                  After
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
