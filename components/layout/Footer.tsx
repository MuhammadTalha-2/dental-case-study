export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <i className="fas fa-chart-line text-white text-[10px]"></i>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            INSHALYTICS
          </span>
        </div>
        <p className="text-sm">
          © 2024 Inshalytics. All rights reserved. Specialized Marketing for
          Modern Dentistry.
        </p>
      </div>
    </footer>
  );
}
