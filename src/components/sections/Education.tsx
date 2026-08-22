import { Education as EducationType } from "@/types/resume";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader index="07" label="Education" />
        <h2 id="education-title" className="sec-title">
          Foundations.
        </h2>

        <ul className="edu">
          {education.map((edu, index) => (
            <Reveal key={index} tag="li" delay={index * 60} className="edu__item">
              <span className="mono-label edu__period">{edu.period}</span>
              <div className="edu__body">
                <h3 className="edu__degree">{edu.degree}</h3>
                <p className="edu__field">{edu.field}</p>
                <p className="edu__institution">{edu.institution}</p>
              </div>
              {(edu.cgpa || edu.percentage) && (
                <span className="mono-value edu__score">{edu.cgpa ? `CGPA ${edu.cgpa}` : edu.percentage}</span>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
