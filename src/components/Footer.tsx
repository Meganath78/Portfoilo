import { Profile } from "@/types/resume";

interface FooterProps {
  profile: Profile;
}

export default function Footer({ profile }: FooterProps) {
  const year = new Date().getFullYear();
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__mark" aria-hidden="true">
            {initials}
          </span>
          <span>
            {profile.name} — {profile.title}
          </span>
        </div>
        <span className="mono-label">© {year} · Built with Next.js</span>
        <a href="#top" className="link-arrow">
          Back to top
        </a>
      </div>
    </footer>
  );
}
