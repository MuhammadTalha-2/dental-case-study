import CountUp from "./CountUp";

type StatCardProps = {
  value: string;
  label: string;
  valueClassName?: string;
};

export default function StatCard({
  value,
  label,
  valueClassName = "text-blue-600",
}: StatCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/50 hover:border-blue-200/60">
      <div
        className={`text-3xl font-extrabold mb-2 transition-transform duration-300 group-hover:scale-105 ${valueClassName}`}
      >
        <CountUp>{value}</CountUp>
      </div>
      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
