import PhaseCard from "../ui/PhaseCard";
import Reveal from "../ui/Reveal";

const PHASES = [
  {
    number: 1,
    title: "Foundation & Infrastructure",
    description:
      "Fixed broken plumbing: technical SEO, schema implementation, and dynamic call tracking mapped to actual booked appointments.",
  },
  {
    number: 2,
    title: "The SEO Build",
    description:
      "Published 84 optimized pillar posts. Built topical authority for Emergency Care, Cosmetic, Family, and Financing keywords.",
  },
  {
    number: 3,
    title: "The Social Trust Layer",
    description:
      "Created human-centric content featuring the actual staff. Built trust that corporate DSOs cant replicate through monthly video sessions.",
  },
  {
    number: 4,
    title: "Sharpening Google Ads",
    description:
      "Ads became a scalpel. Shifted budget to high-intent, bottom-funnel keywords and retargeting based on organic site visitors.",
  },
];

export default function StrategySection() {
  return (
    <section className="py-24 bg-slate-100 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <h2 className="text-4xl font-bold mb-4">The 4-Phase Integrated Strategy</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We stopped treating channels as silos and started treating marketing as
          a compounding system.
        </p>
      </Reveal>

      <Reveal stagger className="max-w-5xl mx-auto px-4 grid gap-8 relative">
        {PHASES.map((phase) => (
          <PhaseCard key={phase.number} {...phase} />
        ))}
      </Reveal>
    </section>
  );
}
