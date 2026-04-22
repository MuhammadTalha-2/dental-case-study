type PhaseCardProps = {
  number: number;
  title: string;
  description: string;
};

export default function PhaseCard({ number, title, description }: PhaseCardProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center font-bold text-lg shadow-lg">
        {number}
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex-grow hover:border-blue-300 transition">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
