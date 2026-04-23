import ResultsRow from "../ui/ResultsRow";
import Reveal from "../ui/Reveal";

const RESULTS = [
  { metric: "New Patients / Mo", before: "45", after: "107" },
  {
    metric: "Ad Spend / Mo",
    before: "$8,400",
    after: "$3,200",
    afterClassName: "text-green-600",
  },
  {
    metric: "Cost Per Patient",
    before: "$187",
    after: "$71",
    afterClassName: "text-blue-600",
  },
  { metric: "Ad Dependency", before: "85%", after: "32%" },
];

export default function ResultsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid grid-cols-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 font-bold text-sm uppercase tracking-widest">
            <div>Metric</div>
            <div className="text-center text-slate-400">Before</div>
            <div className="text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              After (Month 12)
            </div>
          </div>
          <Reveal stagger className="divide-y divide-slate-100">
            {RESULTS.map((row, i) => (
              <ResultsRow key={row.metric} {...row} striped={i % 2 === 1} />
            ))}
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
