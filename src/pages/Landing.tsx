import About from "@/components/layout/About";
import Features from "@/components/layout/Features";
import LandingHero from "@/components/ui/LandingHero";

export default function Landing() {
  return (
    <div className="max-w-[1200px] m-auto min-h-full px-4 py-2">
      <LandingHero />
      <About />
      <Features />
    </div>
  );
}
