import Reveal from "../ui/Reveal";

export default function CTASection() {
  return (
    <section className="py-24 text-white relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 animate-gradient">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          Ready to stop renting and start owning?
        </h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
          Schedule a free strategy audit for your practice. Well show you
          exactly where youre overpaying and how to build a compounding growth
          engine.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:bg-blue-50 cursor-pointer">
            Book My Strategy Audit
          </button>
          <button className="bg-blue-700/60 backdrop-blur text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 border border-blue-400/60 hover:bg-blue-800/70 hover:-translate-y-0.5 cursor-pointer">
            View More Success Stories
          </button>
        </div>
      </Reveal>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
      </svg>
    </section>
  );
}
