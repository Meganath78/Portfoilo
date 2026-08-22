"use client";

import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  index: string;
  label: string;
  title?: string;
}

export default function SectionHeader({ index, label, title }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        data-reveal=""
        className={`sec-head ${visible ? "is-visible" : ""}`}
      >
        <span className="sec-head__index">{index}</span>
        <span className="sec-head__label" aria-hidden="true">
          {label}
        </span>
        <span className="sec-head__rule" aria-hidden="true" />
      </div>
      {title && (
        <h2
          data-reveal=""
          className={`sec-title ${visible ? "is-visible" : ""}`}
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          {title}
        </h2>
      )}
    </>
  );
}
