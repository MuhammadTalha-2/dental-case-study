import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/inshalytics-logo-dark.svg"
            alt="Inshalytics"
            width={175}
            height={36}
          />
        </div>
        <p className="text-sm">
          © 2026 Inshalytics. All rights reserved. Specialized Marketing for
          Modern Dentistry.
        </p>
      </div>
    </footer>
  );
}
