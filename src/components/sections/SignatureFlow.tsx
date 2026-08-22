import { Skills } from "@/types/resume";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

interface SignatureFlowProps {
  skills: Skills;
}

export default function SignatureFlow({ skills }: SignatureFlowProps) {
  const nodes = [
    {
      label: "Backend",
      detail: skills.backend.slice(0, 2).join(" · "),
    },
    {
      label: "API",
      detail: skills.concepts.find((c) => c.startsWith("REST")),
    },
    {
      label: "Database",
      detail: skills.database.join(" · "),
    },
    {
      label: "Frontend",
      detail: skills.frontend.filter((f) => f === "React" || f === "TypeScript").join(" · "),
    },
    {
      label: "Testing",
      detail: skills.tools.filter((t) => t === "Playwright" || t === "Postman").join(" · "),
    },
  ].filter((node) => node.detail);

  if (nodes.length < 2) return null;

  return (
    <section className="section flow-section" aria-labelledby="flow-title">
      <div className="container">
        <SectionHeader index="05" label="From Code to System" />
        <h2 id="flow-title" className="sec-title">
          One pipeline, end to end.
        </h2>

        <ol className="flow">
          {nodes.map((node, index) => (
            <Reveal key={node.label} delay={index * 90} tag="li" className="flow__step-wrap">
              <div className="flow__step">
                <span className="mono-label">{String(index + 1).padStart(2, "0")}</span>
                <span className="flow__label">{node.label}</span>
                <span className="flow__detail">{node.detail}</span>
              </div>
              {index < nodes.length - 1 && (
                <span className="flow__connector" aria-hidden="true">
                  <svg width="100%" height="12" viewBox="0 0 80 12" fill="none" preserveAspectRatio="none">
                    <line x1="0" y1="6" x2="72" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M66 1 L78 6 L66 11" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </span>
              )}
            </Reveal>
          ))}
        </ol>

        <p className="flow__note mono-label">How the pieces connect in practice</p>
      </div>
    </section>
  );
}
