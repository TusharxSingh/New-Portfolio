"use client";

import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

interface ProjectsProps {
  showAll?: boolean;
}

export function Projects({ showAll = false }: ProjectsProps) {
  const displayProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Things I've built that I'm proud of"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {displayProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {!showAll && projects.length > displayProjects.length && (
        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="secondary">
            See all projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Section>
  );
}
