import type { About as AboutType, Profile, Skills } from "@/types/resume";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

interface AboutProps {
  about: AboutType;
  profile: Profile;
  skills: Skills;
}

export default function About({ about, profile, skills }: AboutProps) {
  const focusAreas = [
    {
      label: "Core Stack",
      value: [...skills.backend.slice(0, 2), ...skills.frontend.slice(3), skills.database[0]]
        .filter(Boolean)
        .join(", "),
    },
    { label: "Interface", value: skills.concepts.find((c) => c.startsWith("REST")) ?? "REST APIs" },
    {
      label: "Quality",
      value: skills.tools.filter((t) => t === "Playwright" || t === "Postman").join(" · "),
    },
    { label: "Based In", value: profile.location },
  ].filter((item) => item.value);

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader index="01" label="Profile" />
        <div className="grid-12 about__grid">
          <Reveal className="about__statement-wrap">
            <h2 id="about-title" className="about__statement">
              Engineering reliable software,
              <span className="text-accent"> end to end.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="about__body-wrap">
            <p className="about__body">{about.description}</p>

            <dl className="about__facts">
              {focusAreas.map((fact) => (
                <div key={fact.label} className="about__fact">
                  <dt className="mono-label">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            {profile.availability && (
              <p className="about__availability">
                <span className="status-dot" aria-hidden="true" />
                {profile.availability}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
