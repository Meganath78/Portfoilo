"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Project } from "@/types/resume";
import { ArrowUpRight, X } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const wasOpenRef = useRef(false);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeydown);
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        triggerRef.current?.focus();
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [open, handleKeydown]);

  const num = String(index + 1).padStart(2, "0");
  const hasLinks = Boolean(project.links?.github || project.links?.demo);

  return (
    <>
      <Reveal>
        <article className={`project ${index % 2 === 1 ? "project--reverse" : ""}`}>
        <div className="project__visual" aria-hidden="true">
          <span className="project__ghost-num">{num}</span>
          <span className="project__corner project__corner--tl" />
          <span className="project__corner project__corner--br" />
        </div>

        <div className="project__content">
          <div className="project__head">
            <span className="mono-label">{project.category}</span>
            <span className="mono-label" aria-hidden="true">
              {num}
            </span>
          </div>

          <h3 className="project__title">{project.title}</h3>
          <p className="project__desc">{project.description}</p>

          {project.technologies.length > 0 && (
            <ul className="project__stack">
              {project.technologies.map((tech) => (
                <li key={tech} className="project__stack-item">
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <div className="project__actions">
            <button
              ref={triggerRef}
              type="button"
              className="link-arrow"
              onClick={() => setOpen(true)}
            >
              View Case Study
              <ArrowUpRight size={14} aria-hidden="true" />
            </button>
            {hasLinks && (
              <div className="project__links">
                {project.links?.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    Code
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    Demo
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
      </Reveal>

      {open && (
        <div
          className="case"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`case-title-${project.id}`}
        >
          <button
            type="button"
            className="case__backdrop"
            aria-label="Close case study"
            onClick={() => setOpen(false)}
          />
          <div className="case__panel">
            <header className="case__head">
              <div>
                <span className="mono-label">
                  {num} — {project.category}
                </span>
                <h3 id={`case-title-${project.id}`} className="case__title">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="case__close"
                onClick={() => setOpen(false)}
                aria-label="Close case study"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </header>

            <div className="case__body">
              <section className="case__section">
                <h4 className="mono-label">Overview</h4>
                <p>{project.description}</p>
              </section>

              {project.technologies.length > 0 && (
                <section className="case__section">
                  <h4 className="mono-label">Technologies</h4>
                  <ul className="tech-list">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="tech-list__item">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.features.length > 0 && (
                <section className="case__section">
                  <h4 className="mono-label">Key Features</h4>
                  <ol className="case__features">
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <span className="case__feature-index" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {hasLinks && (
                <section className="case__section">
                  <h4 className="mono-label">Links</h4>
                  <div className="project__links">
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn--solid-light">
                        Source Code
                      </a>
                    )}
                    {project.links?.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn--solid-light">
                        Live Demo
                      </a>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
