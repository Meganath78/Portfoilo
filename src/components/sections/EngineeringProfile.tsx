import { Skills } from "@/types/resume";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

interface EngineeringProfileProps {
  skills: Skills;
}

const CATEGORY_LABELS: Record<string, string> = {
  languages: "Languages",
  backend: "Backend",
  frontend: "Frontend",
  database: "Data",
  concepts: "Concepts",
  tools: "Tooling",
};

const CATEGORY_ORDER = [
  "languages",
  "backend",
  "frontend",
  "database",
  "concepts",
  "tools",
] as const;

export default function EngineeringProfile({ skills }: EngineeringProfileProps) {
  const categories = CATEGORY_ORDER.map((key) => ({
    key,
    label: CATEGORY_LABELS[key],
    items: skills[key] ?? [],
  })).filter((category) => category.items.length > 0);

  if (categories.length === 0) return null;

  return (
    <section id="system" className="section section--raised" aria-labelledby="system-title">
      <div className="container">
        <SectionHeader index="02" label="Engineering Profile" />
        <h2 id="system-title" className="sec-title">
          Capabilities, organized as a system.
        </h2>

        <div className="system__grid">
          {categories.map((category, index) => (
            <Reveal
              key={category.key}
              delay={index * 70}
              className="system__block"
            >
              <div className="system__block-head">
                <span className="mono-label system__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="system__name">{category.label}</h3>
              </div>
              <ul className="system__list">
                {category.items.map((item) => (
                  <li key={item} className="system__item">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {skills.softSkills.length > 0 && (
          <Reveal className="system__practice">
            <span className="mono-label">Approach</span>
            <ul className="system__practice-list">
              {skills.softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
