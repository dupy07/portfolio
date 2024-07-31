import About from "@/components/About";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-32 sm:mt-40">
        <About />
        <Services />
      </div>
      <Partner />
    </>
  );
}
