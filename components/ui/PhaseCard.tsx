type PhaseCardProps = {
  number: number;
  title: string;
  description: string;
};

export default function PhaseCard({ number, title, description }: PhaseCardProps) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
        {number}
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex-grow transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-slate-200 group-hover:border-blue-200">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
