"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PageReveal from "./PageReveal";
import ProjectArtwork from "./ProjectArtwork";
import { workProjects } from "../data/projects";

const filters = [
  { label: "All projects", value: "all" },
  { label: "Industry solutions", value: "industry" },
  { label: "ERP & operations", value: "operations" },
  { label: "Integrations", value: "integrations" },
] as const;

type ProjectFilter = (typeof filters)[number]["value"];

export default function WorkGallery() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visibleProjects = filter === "all"
    ? workProjects
    : workProjects.filter((project) => project.group === filter);
  const orderedProjectCounts = (itemValue: ProjectFilter) =>
    itemValue === "all"
      ? workProjects.length
      : workProjects.filter((project) => project.group === itemValue).length;

  return (
    <>
      <div className="project-filters" role="tablist" aria-label="Filter projects">
        {filters.map((item) => {
          const count = orderedProjectCounts(item.value);

          return (
            <button
              className={filter === item.value ? "project-filter active" : "project-filter"}
              type="button"
              key={item.value}
              role="tab"
              aria-selected={filter === item.value}
              aria-controls="project-list"
              onClick={() => setFilter(item.value)}
            >
              {item.label}<span>{count.toString().padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
      <div className="project-list" id="project-list" aria-live="polite">
        {visibleProjects.map((project, index) => {
          const number = (workProjects.indexOf(project) + 1).toString().padStart(2, "0");

          return (
            <PageReveal key={project.slug} delay={(index % 3) * 0.06}>
              <Link className="project-card" href={`/projects/${project.slug}`}>
                <ProjectArtwork project={project} number={number} />
                <div className="project-copy">
                  <div className="project-meta"><span>{project.category}</span><span>{project.version}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.features.map((feature) => <span className="tag" key={feature}>{feature}</span>)}
                  </div>
                  <span className="project-card-cta">Explore case study <ArrowUpRight size={13} /></span>
                </div>
              </Link>
            </PageReveal>
          );
        })}
      </div>
    </>
  );
}
