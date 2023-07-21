"use client";
import React, { useState } from "react";

export default function QuestionsComp({ i }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div
      onClick={() => setIsHidden(!isHidden)}
      class="font-semibold border-t border-secondary h-full md:ml-10">
      <div
        class="flex flex-col py-5 border-b cursor-pointer text-start border-secondary"
        role="button">
        <div class="flex justify-between">
          <h3 class="text-xl">{i.question}</h3>
          <div style={{ opacity: 1 }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              t="1551322312294"
              viewBox="0 0 1024 1024"
              version="1.1"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
              <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
            </svg>
          </div>
        </div>
        <div className={isHidden ? "hidden" : ""}>
          {i.answer.map((an) => (
            <p class=" text-sm ml-3 text-gray-700 pt-2.5">{an}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
