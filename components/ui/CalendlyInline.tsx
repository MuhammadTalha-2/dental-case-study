"use client";

import Script from "next/script";

type Props = {
  url: string;
  className?: string;
};

export default function CalendlyInline({ url, className = "" }: Props) {
  return (
    <>
      <div
        className={`rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/40 border border-slate-100 bg-white ${className}`}
      >
        <div
          className="calendly-inline-widget w-full h-[560px] sm:h-[600px] lg:h-[640px]"
          data-url={url}
        />
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
