import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProblemSection from "@/components/sections/ProblemSection";
import StrategySection from "@/components/sections/StrategySection";
import ResultsSection from "@/components/sections/ResultsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <StrategySection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </>
  );
}
