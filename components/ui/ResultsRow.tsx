type ResultsRowProps = {
  metric: string;
  before: string;
  after: string;
  afterClassName?: string;
  striped?: boolean;
};

export default function ResultsRow({
  metric,
  before,
  after,
  afterClassName = "text-slate-900",
  striped = false,
}: ResultsRowProps) {
  return (
    <div
      className={`grid grid-cols-3 p-8 items-center ${
        striped ? "bg-slate-50/50" : ""
      }`}
    >
      <div className="font-semibold text-slate-700">{metric}</div>
      <div className="text-center text-slate-500">{before}</div>
      <div className={`text-center font-bold text-xl ${afterClassName}`}>
        {after}
      </div>
    </div>
  );
}
