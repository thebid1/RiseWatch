import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Crisis } from "./components/sections/Crisis";
import { Solution } from "./components/sections/Solution";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Technology } from "./components/sections/Technology";
import { FooterCTA } from "./components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Crisis />
        <Solution />
        <HowItWorks />
        <Technology />
        <FooterCTA />
      </main>
    </>
  );
}
