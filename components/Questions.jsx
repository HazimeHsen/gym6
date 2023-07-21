import { questions } from "@/data";
import QuestionsComp from "./QuestionsComp";

export default function Questions() {
  return (
    <section>
      <div class="px-4 bg-white flex flex-col text-center items-center py-20  ">
        <h2 class="text-3xl font-bold mb-10 tracking-wide uppercase md:text-4xl">
          Frequently asked questions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
          {questions.map((i, index) => (
            <div className="w-full" key={index}>
              <QuestionsComp i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
