import StatCard from "../ui/StatCard";
import Reveal from "../ui/Reveal";

const STATS = [
  { value: "+138%", label: "Patient Volume", valueClassName: "text-blue-600" },
  { value: "-62%", label: "Cost Per Patient", valueClassName: "text-green-600" },
  { value: "23x", label: "Organic Traffic", valueClassName: "text-slate-900" },
  { value: "$740k", label: "Annual Revenue Lift", valueClassName: "text-blue-600" },
];

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <Reveal stagger className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Reveal>
    </section>
  );
}
