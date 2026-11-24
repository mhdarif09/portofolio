import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { experiences } from "@/data/experience";
import { getProject } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ExperienceTimelineProps {
  limit?: number;
  compact?: boolean;
}

export function ExperienceTimeline({
  limit,
  compact = false,
}: ExperienceTimelineProps) {
  const items = typeof limit === "number" ? experiences.slice(0, limit) : experiences;

  return (
    <div>
      {items.map((experience, index) => (
        <article key={experience.slug} className="timeline-item">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="index-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {experience.current ? (
                <span className="mono inline-flex items-center gap-1.5 text-[0.55rem] uppercase tracking-[0.12em] text-accent">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  Current
                </span>
              ) : null}
            </div>
            <p className="mono mt-3 text-[0.64rem] uppercase leading-5 tracking-[0.08em] text-ink-soft">
              {experience.period}
            </p>
            <p className="mono mt-1 text-[0.58rem] uppercase tracking-[0.1em] text-muted">
              {experience.type}
              {experience.location ? ` · ${experience.location}` : ""}
            </p>
          </div>

          <div className={cn(compact && "pb-1")}>
            <h2 className="display-md text-balance">{experience.role}</h2>
            <p className="mt-1.5 text-sm font-medium text-ink">
              {experience.company}
              {experience.companyNote ? (
                <span className="font-normal text-muted">
                  {" "}
                  ({experience.companyNote})
                </span>
              ) : null}
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-muted">
              {experience.summary}
            </p>

            {!compact ? (
              <>
                <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="case-bullet text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {experience.achievements ? (
                  <div className="mt-6 border-l-2 border-accent/40 pl-4">
                    <p className="field-label mb-2">Selected outcomes</p>
                    <ul className="space-y-1.5">
                      {experience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-sm leading-6 text-ink-soft"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {experience.note ? (
                  <p className="mono mt-6 max-w-xl text-[0.6rem] leading-5 tracking-[0.03em] text-muted">
                    Note: {experience.note}
                  </p>
                ) : null}

                {experience.relatedProjects?.length ? (
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="field-label">Related work</span>
                    {experience.relatedProjects.map((slug) => {
                      const project = getProject(slug);
                      if (!project) {
                        return null;
                      }
                      return (
                        <Link
                          key={slug}
                          href={`/projects/${slug}`}
                          className="group inline-flex items-center gap-1 text-[0.72rem] text-ink-soft transition-colors hover:text-accent"
                        >
                          {project.shortTitle}
                          <ArrowUpRight
                            aria-hidden="true"
                            size={11}
                            strokeWidth={1.6}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
