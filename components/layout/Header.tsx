

export default function Header() {
    return (
      <header>
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chart-line text-white"></i>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-800">
                  INSHALYTICS
                </span>
              </div>
              <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                <a href="#" className="hover:text-blue-600 transition">
                  Services
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  Case Studies
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  About
                </a>
              </div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Free Consultation
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
}