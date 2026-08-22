import { Profile, Skills } from "@/types/resume";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import Reveal from "@/components/Reveal";

interface HeroProps {
  profile: Profile;
  skills: Skills;
}

const DOMAIN_LABELS: Record<string, string> = {
  languages: "Languages",
  backend: "Backend",
  frontend: "Frontend",
  database: "Data",
};

export default function Hero({ profile, skills }: HeroProps) {
  const domains = Object.entries(DOMAIN_LABELS).map(([key, label]) => ({
    label,
    items: skills[key as keyof Skills] ?? [],
  }));

  const [firstName, lastName] = profile.name.split(" ");

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero__meta" data-reveal="">
          <span className="mono-value">
            <span aria-hidden="true">{"//"}</span> {profile.location.toUpperCase()}
          </span>
          <span className="hero__status">
            <span className="status-dot" aria-hidden="true" />
            <span className="mono-label">Open to opportunities</span>
          </span>
        </div>

        <div className="grid-12 hero__grid">
          <div className="hero__main">
            <h1 className="hero__title">
              <Reveal tag="span" className="hero__line" delay={60}>
                {firstName}
              </Reveal>
              <span style={{ display: 'inline-block', width: '0.25em' }}></span>
              <Reveal tag="span" className="hero__line hero__line--accent" delay={140}>
                {lastName}
              </Reveal>
            </h1>

            <Reveal delay={240}>
              <p className="hero__role">
                <span aria-hidden="true" className="hero__role-bar" />
                {profile.title.toUpperCase()}
              </p>
              <p className="hero__tagline">{profile.tagline}</p>
            </Reveal>

            <Reveal delay={340} className="hero__cta-row">
              <a href="#projects" className="btn btn--primary">
                View Projects
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="/resume/Meganath-M-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Download size={16} aria-hidden="true" />
                Resume
              </a>
              {profile.email && (
                <a href={`mailto:${profile.email}`} className="link-arrow">
                  {profile.email}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={420} className="hero__panel-wrap">
            <aside className="hero__panel" aria-label="Engineering profile summary">
              <p className="mono-label hero__panel-head">Engineering Profile</p>
              <dl className="hero__domains">
                {domains.map((domain) => (
                  <div key={domain.label} className="hero__domain">
                    <dt className="mono-label">{domain.label}</dt>
                    <dd>{domain.items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>

        <div className="hero__foot" data-reveal="" style={{ "--reveal-delay": "520ms" } as React.CSSProperties}>
          <span className="mono-label">Scroll</span>
          <ArrowDownRight size={14} aria-hidden="true" />
          <span className="hero__foot-rule" aria-hidden="true" />
          {profile.phone && <span className="mono-value">{profile.phone}</span>}
        </div>
      </div>
    </section>
  );
}
