"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    return projects.reduce<Record<string, number>>(
      (accumulator, project) => {
        accumulator.All = (accumulator.All ?? 0) + 1;
        accumulator[project.category] =
          (accumulator[project.category] ?? 0) + 1;
        return accumulator;
      },
      { All: 0 },
    );
  }, [projects]);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 border-t border-line pt-5 md:flex-row md:items-center md:justify-between">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-1.5"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={cn("filter-button")}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
              <span
                className={cn(
                  "mono text-[0.55rem]",
                  filter === category ? "text-paper/65" : "text-muted",
                )}
              >
                {counts[category] ?? 0}
              </span>
            </button>
          ))}
        </div>
        <p
          className="mono text-[0.6rem] uppercase tracking-[0.12em] text-muted"
          aria-live="polite"
        >
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-sm text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
