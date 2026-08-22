"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="nav__mark"
        style={{
          width: '36px',
          height: '36px',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: '1px solid var(--line-strong)',
          borderRadius: '4px',
          background: 'transparent',
          color: 'var(--text-hi)'
        }}
        aria-label="Toggle theme placeholder"
      >
        <span style={{ width: '18px', height: '18px' }} />
      </button>
    );
  }

  return (
    <button
      className="nav__mark"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        width: '36px',
        height: '36px',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '1px solid var(--line-strong)',
        borderRadius: '4px',
        background: 'var(--bg-raised)',
        color: 'var(--text-hi)',
        transition: 'all 0.2s ease',
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
