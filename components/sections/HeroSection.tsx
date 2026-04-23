import { Tooth } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="animate-fade-up inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full ring-1 ring-blue-100">
            Dental Marketing Case Study
          </span>
          <h1 className="animate-fade-up [animation-delay:100ms] text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            How a 2-Location Practice Added{" "}
            <span className="text-gradient-brand">62 New Patients</span> Monthly
          </h1>
          <p className="animate-fade-up [animation-delay:200ms] text-xl text-slate-600 mb-8 leading-relaxed">
            Moving from a fragile $8,400/month Google Ads Treadmill to a fully
            integrated, compounding marketing engine that costs less and earns
            more.
          </p>
          <div className="animate-fade-up [animation-delay:300ms] flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5 flex items-center justify-center cursor-pointer">
              Get the Full Playbook
              <i className="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
            <div className="flex items-center space-x-3 px-4 py-2 border border-slate-200 rounded-xl bg-white/70 backdrop-blur">
              <div className="flex -space-x-2">
                <Image
                  src="https://ui-avatars.com/api/?name=Dr+Smith&background=random"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  width={32}
                  height={32}
                  alt=""
                  unoptimized
                />
                <Image
                  src="https://ui-avatars.com/api/?name=Dr+Jones&background=random"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  width={32}
                  height={32}
                  alt=""
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium text-slate-500">
                Trusted by 50+ Dental Practices
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 mt-10 opacity-10 rotate-12 animate-float-slow">
        <Tooth size={400} weight="fill" className="text-blue-600" />
      </div>
    </section>
  );
}
