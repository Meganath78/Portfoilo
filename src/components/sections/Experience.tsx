import { Experience as ExperienceType } from "@/types/resume";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader index="03" label="Experience" />
        <h2 id="experience-title" className="sec-title">
          Where the work happens.
        </h2>

        <div className="xp__list">
          {experience.map((exp, index) => (
            <Reveal key={index} className="xp">
              <div className="xp__period-col">
                <span className="xp__period">{exp.period.toUpperCase()}</span>
                <span className="mono-label xp__count" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(experience.length).padStart(2, "0")}
                </span>
              </div>

              <div className="xp__body">
                <header className="xp__head">
                  {/* <p className="mono-label">{exp.company}</p> */}
                  <h3 className="xp__role">{exp.role}</h3>
                  <p className="xp__summary">{exp.description}</p>
                </header>

                <ul className="xp__duties">
                  {exp.responsibilities.map((duty, i) => (
                    <li key={i} className="xp__duty">
                      <span className="xp__duty-index" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {duty}
                    </li>
                  ))}
                </ul>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="xp__tech-wrap">
                    <span className="mono-label">Stack</span>
                    <ul className="tech-list">
                      {exp.technologies.map((tech) => (
                        <li key={tech} className="tech-list__item">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
