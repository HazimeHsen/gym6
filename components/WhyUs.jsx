import { benefitsInfo, featuresInfo } from "@/data";
import React from "react";

export default function WhyUs() {
  return (
    <div className="px-4 bg-white flex flex-col items-center py-20 gap-16 max-w-full z-10 ">
      <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl">
        WHY US?
      </h2>
      <div className="flex gap-2 md:gap-32 flex-row">
        <div className="p-5 w-1/2 shadow-xl shadow-slate-500 bg-[#0c5c75] text-white md:text-base text-xs rounded-2xl ">
          <h3 className="pb-4 text-xl font-bold tracking-widest text-center uppercase md:text-3xl">
            Features
          </h3>
          <ul className="max-w-[280px]">
            {featuresInfo.map((info, index) => (
              <li key={index} className="flex md:items-center pb-1.5">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    className="mr-1 md:mt-0 mt-1  text-lg text-[#64889b]"
                    xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <path
                      className="w-20"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"
                      fill="currentColor"></path>
                    <path
                      className="w-20"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
                <p className="">{info}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 w-1/2 md:text-base text-xs shadow-xl shadow-slate-500 bg-[#0c5c75] text-white rounded-2xl ">
          <h3 className="pb-4 text-xl font-bold tracking-widest text-center uppercase md:text-3xl">
            BENEFITS
          </h3>
          <ul>
            {benefitsInfo.map((info, index) => (
              <li key={index} className="flex md:items-center pb-1.5">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    className="mr-1 text-lg text-[#64889b] md:mt-0 mt-1 ">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"
                      fill="currentColor"></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
                <p className="">{info}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
