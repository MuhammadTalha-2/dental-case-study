import { Tooth } from "@phosphor-icons/react/dist/ssr";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Dental Marketing Case Study
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            How a 2-Location Practice Added{" "}
            <span className="text-blue-600">62 New Patients</span> Monthly
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Moving from a fragile $8,400/month Google Ads Treadmill to a fully
            integrated, compounding marketing engine that costs less and earns
            more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center">
              Get the Full Playbook <i className="fas fa-arrow-right ml-3"></i>
            </button>
            <div className="flex items-center space-x-3 px-4 py-2 border border-slate-200 rounded-xl bg-white">
              <div className="flex -space-x-2">
                <img
                  src="https://ui-avatars.com/api/?name=Dr+Smith&background=random"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://ui-avatars.com/api/?name=Dr+Jones&background=random"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-sm font-medium text-slate-500">
                Trusted by 50+ Dental Practices
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 mt-10 opacity-10 rotate-12">
        <Tooth size={400} weight="fill" className="text-blue-600" />
      </div>
    </section>
  );
}
