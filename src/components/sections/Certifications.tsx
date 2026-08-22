import { Certification } from "@/types/resume";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section" aria-labelledby="certs-title">
      <div className="container">
        <SectionHeader index="06" label="Credentials" />
        <h2 id="certs-title" className="sec-title">
          Certifications.
        </h2>

        <ul className="certs">
          {certifications.map((cert, index) => (
            <Reveal key={index} tag="li" delay={index * 60} className="cert">
              <span className="mono-label cert__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="cert__body">
                <h3 className="cert__name">{cert.name}</h3>
                {cert.description && <p className="cert__desc">{cert.description}</p>}
              </div>
              <div className="cert__meta">
                <span className="cert__issuer">{cert.issuer}</span>
                {cert.year && <span className="mono-value">{cert.year}</span>}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow"
                  >
                    Credential
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
