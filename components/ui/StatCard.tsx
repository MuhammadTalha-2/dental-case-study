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
    <div className="stat-card bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
      <div className={`text-3xl font-extrabold mb-2 ${valueClassName}`}>
        {value}
      </div>
      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
