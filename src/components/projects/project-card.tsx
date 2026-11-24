import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { projectImages } from "@/data/project-images";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  variant?: "default" | "feature" | "compact";
  className?: string;
}

export function ProjectCard({
  project,
  priority = false,
  variant = "default",
  className,
}: ProjectCardProps) {
  const image = projectImages[project.cover] ?? projectImages.skm;
  const feature = variant === "feature";

  return (
    <article className={cn("project-card", className)}>
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col"
      >
        <div className="project-media">
          <Image
            src={image}
            alt={project.coverAlt}
            placeholder="blur"
            priority={priority}
            sizes={
              feature
                ? "(max-width: 767px) 100vw, (max-width: 1200px) 66vw, 760px"
                : "(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 460px"
            }
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col pt-5">
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow eyebrow-accent">{project.category}</span>
            <span className="mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
              {project.year}
            </span>
          </div>

          <h3
            className={cn(
              "project-title mt-3 text-balance",
              feature ? "display-lg" : "display-md",
            )}
          >
            {project.shortTitle}
          </h3>

          <p
            className={cn(
              "mt-3 text-pretty text-sm leading-6 text-muted",
              feature ? "max-w-xl" : "line-clamp-3",
            )}
          >
            {project.summary}
          </p>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
            <span className="mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
              {project.type}
            </span>
            <span className="link-arrow shrink-0 text-[0.6rem]">
              Case study
              <ArrowUpRight
                aria-hidden="true"
                size={13}
                strokeWidth={1.6}
                className="project-arrow"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
