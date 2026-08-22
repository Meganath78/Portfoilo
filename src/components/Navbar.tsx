"use client";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { id: "about", label: "Profile" },
  { id: "system", label: "System" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  name: string;
  role: string;
}

export default function Navbar({ name, role }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={`${name} — back to top`}>
          <span className="nav__mark">{initials}</span>
          <span className="nav__name">
            {name}
            <em>{role}</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? "nav__link--active" : ""}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />

          <button
            type="button"
            className={`nav__toggle ${open ? "nav__toggle--open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__menu ${open ? "nav__menu--open" : ""}`}>
        <nav aria-label="Mobile">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav__menu-link"
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <span className="mono-label">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
