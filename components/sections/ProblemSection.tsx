import ProblemItem from "../ui/ProblemItem";
import Reveal from "../ui/Reveal";

const PROBLEMS = [
  {
    label: "85% Dependency",
    description: "Almost all new patients came from a single, expensive channel.",
  },
  {
    label: "Rising Costs",
    description: "CPC jumped from $8 to $14 due to corporate competition.",
  },
  {
    label: "Zero Equity",
    description: "When ads stopped, the pipeline crashed by 71% instantly.",
  },
];

const BASELINE = [
  { label: "Monthly Ad Spend", value: "$8,400" },
  { label: "Cost Per Patient", value: "$230" },
  { label: "Organic Keywords", value: "14" },
];

export default function ProblemSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6">The Rented Leads Trap</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Like many successful practices, this Midwest client was trapped on
            the paid-ads treadmill. Their marketing wasnt an asset; it was a{" "}
            <strong>rental agreement with Google.</strong>
          </p>
          <ul className="space-y-4">
            {PROBLEMS.map((p) => (
              <ProblemItem key={p.label} {...p} />
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative">
            <div className="absolute -top-6 -left-6 bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg shadow-red-500/30">
              The Baseline
            </div>
            <div className="space-y-6">
              {BASELINE.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-end border-b border-slate-700 pb-4"
                >
                  <span className="text-slate-400">{row.label}</span>
                  <span className="text-2xl font-bold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
