import { Project } from "@/types/resume";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ProjectRow from "./ProjectRow";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="section section--raised" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader index="04" label="Selected Work" />
        <h2 id="projects-title" className="sec-title">
          Systems built, shipped, tested.
        </h2>

        <div className="projects__list">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <ProjectRow project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
