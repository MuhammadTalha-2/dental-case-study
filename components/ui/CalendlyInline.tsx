"use client";

import Script from "next/script";

type Props = {
  url: string;
  minWidth?: number;
  height?: number;
  className?: string;
};

export default function CalendlyInline({
  url,
  minWidth = 250,
  height = 700,
  className = "",
}: Props) {
  return (
    <>
      <div
        className={`rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/40 border border-slate-100 bg-white ${className}`}
      >
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{  minWidth: `${minWidth}px`, height: `${height}px` }}
        />
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
