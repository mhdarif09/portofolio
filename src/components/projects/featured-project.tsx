import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { projectImages } from "@/data/project-images";
import type { Project } from "@/types";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const image = projectImages[project.cover] ?? projectImages.skm;

  return (
    <article className="project-card border-t border-line pt-6">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid gap-7 lg:grid-cols-12 lg:gap-8"
      >
        <div className="project-media lg:col-span-7">
          <Image
            src={image}
            alt={project.coverAlt}
            placeholder="blur"
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 60vw, 760px"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col lg:col-span-5 lg:pl-2">
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow eyebrow-accent">
              {project.category}
            </span>
            <span className="mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
              {project.year}
            </span>
          </div>

          <h3 className="project-title display-xl mt-4 text-balance">
            {project.shortTitle}
          </h3>

          <p className="mt-5 max-w-md text-pretty text-sm leading-6 text-muted">
            {project.summary}
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-line pt-5">
            <div>
              <dt className="field-label">Role</dt>
              <dd className="mt-1.5 text-[0.78rem] leading-5 text-ink-soft">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="field-label">Context</dt>
              <dd className="mt-1.5 text-[0.78rem] leading-5 text-ink-soft">
                {project.type}
              </dd>
            </div>
          </dl>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.scope.slice(0, 3).map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
            <span className="mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
              {project.client ?? "Selected system"}
            </span>
            <span className="link-arrow shrink-0 text-[0.6rem]">
              Read case study
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
