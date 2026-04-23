import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <Image
              src="/inshalytics-logo.svg"
              alt="Inshalytics"
              width={175}
              height={36}
              priority
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
