import About from "@/components/About";
import AnimatedText from "@/components/AnimatedText";
import ContactUs from "@/components/ContactUs";
import OurServices from "@/components/OurServices";
import Questions from "@/components/Questions";
import SomeTransformation from "@/components/SomeTransformation";
import StartPage from "@/components/StartPage";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="flex-1">
      <StartPage />
      <WhyUs />
      <OurServices />
      <About />
      <SomeTransformation />
      <Questions />
      <ContactUs />
    </div>
  );
}
