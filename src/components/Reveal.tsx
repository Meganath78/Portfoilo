"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealTag = "div" | "li" | "span";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  tag?: RevealTag;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

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

  const style = { "--reveal-delay": `${delay}ms` } as React.CSSProperties;
  const cls = `${visible ? "is-visible" : ""} ${className}`.trim();

  if (tag === "li") {
    return (
      <li
        ref={ref as React.RefObject<HTMLLIElement>}
        data-reveal=""
        className={cls}
        style={style}
      >
        {children}
      </li>
    );
  }

  if (tag === "span") {
    return (
      <span ref={ref as React.RefObject<HTMLSpanElement>} data-reveal="" className={cls} style={style}>
        {children}
      </span>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-reveal=""
      className={cls}
      style={style}
    >
      {children}
    </div>
  );
}
