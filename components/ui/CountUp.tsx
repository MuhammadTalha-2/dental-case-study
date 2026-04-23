"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: string;
  duration?: number;
};

export default function CountUp({ children, duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  const match = children.match(/^([^\d-]*)(-?)(\d+(?:\.\d+)?)(.*)$/);
  const parsed = match
    ? {
        prefix: match[1],
        sign: match[2],
        target: parseFloat(match[3]),
        hasDecimal: match[3].includes("."),
        suffix: match[4],
      }
    : null;

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setCurrent(parsed.target);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setCurrent(parsed.target * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [parsed, duration]);

  if (!parsed) return <>{children}</>;

  const displayed = parsed.hasDecimal
    ? current.toFixed(1)
    : Math.round(current).toString();

  return (
    <span ref={ref}>
      {parsed.prefix}
      {parsed.sign}
      {displayed}
      {parsed.suffix}
    </span>
  );
}
