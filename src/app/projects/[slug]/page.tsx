import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactCta } from "@/components/ui/contact-cta";
import { projectImages } from "@/data/project-images";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const image = projectImages[project.cover] ?? projectImages.skm;

  return createPageMetadata({
    title: project.shortTitle,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
    images: [
      {
        url: image.src,
        width: image.width,
        height: image.height,
        alt: project.coverAlt,
      },
    ],
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const image = projectImages[project.cover] ?? projectImages.skm;
  const { previous, next } = getAdjacentProjects(project.slug);

  const sections = [
    { id: "context", label: "Context" },
    { id: "problem", label: "Problem" },
    { id: "approach", label: "Approach" },
    { id: "system", label: "System" },
    { id: "outcome", label: "Outcome" },
    { id: "details", label: "Details" },
  ];

  return (
    <>
      <article>
        <header className="shell pb-12 pt-8 md:pb-16 md:pt-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3">
            <Link
              href="/projects"
              className="mono text-[0.6rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
            >
              Projects
            </Link>
            <span aria-hidden="true" className="text-muted/40">
              /
            </span>
            <span className="mono text-[0.6rem] uppercase tracking-[0.12em] text-accent">
              {project.category}
            </span>
          </nav>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="eyebrow eyebrow-accent">{project.type}</span>
            <span aria-hidden="true" className="h-px w-6 bg-line" />
            <span className="eyebrow">{project.year}</span>
          </div>

          <h1 className="display-xl mt-6 max-w-5xl text-balance">
            {project.title}
          </h1>
          <p className="body-lg mt-7 max-w-3xl text-pretty">{project.summary}</p>

          <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="field-label">Client / context</dt>
              <dd className="mt-1.5 text-sm leading-6 text-ink-soft">
                {project.client ?? "Not listed"}
              </dd>
            </div>
            <div>
              <dt className="field-label">Role</dt>
              <dd className="mt-1.5 text-sm leading-6 text-ink-soft">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="field-label">Year</dt>
              <dd className="mt-1.5 text-sm leading-6 text-ink-soft">
                {project.year}
              </dd>
            </div>
            <div>
              <dt className="field-label">Type</dt>
              <dd className="mt-1.5 text-sm leading-6 text-ink-soft">
                {project.type}
              </dd>
            </div>
          </dl>
        </header>

        <figure className="shell">
          <div className="relative aspect-[16/10] overflow-hidden border border-line bg-paper-deep">
            <Image
              src={image}
              alt={project.coverAlt}
              placeholder="blur"
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mono mt-3 flex flex-col gap-1 text-[0.56rem] uppercase leading-5 tracking-[0.08em] text-muted sm:flex-row sm:justify-between">
            <span>Illustrative system cover</span>
            <span>Interface screenshots available on request</span>
          </figcaption>
        </figure>

        {project.pendingNote ? (
          <div className="shell mt-8">
            <p className="border-l-2 border-accent/50 py-1 pl-4 text-sm leading-6 text-muted">
              {project.pendingNote}
            </p>
          </div>
        ) : null}

        <div className="shell mt-12 md:mt-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-28">
                <p className="eyebrow mb-4">Contents</p>
                <nav aria-label="Case study sections">
                  <ul className="space-y-2.5">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="group flex items-baseline gap-2 text-[0.78rem] text-muted transition-colors hover:text-ink"
                        >
                          <span className="mono text-[0.52rem] text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 border-t border-line pt-5">
                  <p className="field-label">Scope</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.scope.map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.referenceUrl ? (
                  <a
                    href={project.referenceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-arrow mt-7"
                  >
                    Original case study
                    <ArrowUpRight
                      aria-hidden="true"
                      size={12}
                      strokeWidth={1.6}
                    />
                  </a>
                ) : null}
              </div>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5">
              <section
                id="context"
                className="case-section scroll-mt-28 first:border-t-0 first:pt-0"
              >
                <div className="case-section-label">
                  <span className="index-number">01</span>
                  <h2 className="eyebrow">Context</h2>
                </div>
                <p className="body-copy max-w-2xl text-pretty">
                  {project.context}
                </p>
              </section>

              <section id="problem" className="case-section scroll-mt-28">
                <div className="case-section-label">
                  <span className="index-number">02</span>
                  <h2 className="eyebrow">The problem</h2>
                </div>
                <div>
                  <p className="body-lg max-w-2xl text-pretty">
                    {project.problem}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {project.problemPoints.map((point) => (
                      <li
                        key={point}
                        className="case-bullet max-w-2xl text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="approach" className="case-section scroll-mt-28">
                <div className="case-section-label">
                  <span className="index-number">03</span>
                  <h2 className="eyebrow">The approach</h2>
                </div>
                <div>
                  <p className="body-lg max-w-2xl text-pretty">
                    {project.solution}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {project.solutionPoints.map((point) => (
                      <li
                        key={point}
                        className="case-bullet max-w-2xl text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="system" className="case-section scroll-mt-28">
                <div className="case-section-label">
                  <span className="index-number">04</span>
                  <h2 className="eyebrow">What the system does</h2>
                </div>
                <div>
                  <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={feature}
                        className="flex gap-3 border-t border-line py-3.5 text-sm leading-6 text-ink-soft"
                      >
                        <span className="mono pt-0.5 text-[0.55rem] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="outcome" className="case-section scroll-mt-28">
                <div className="case-section-label">
                  <span className="index-number">05</span>
                  <h2 className="eyebrow">Outcome</h2>
                </div>
                <div>
                  <p className="body-lg max-w-2xl text-pretty">
                    {project.impact}
                  </p>
                  <p className="mono mt-6 max-w-xl text-[0.58rem] leading-5 tracking-[0.03em] text-muted">
                    Qualitative outcome based on the documented scope. Measured
                    usage or performance metrics are not published.
                  </p>
                </div>
              </section>

              <section id="details" className="case-section scroll-mt-28">
                <div className="case-section-label">
                  <span className="index-number">06</span>
                  <h2 className="eyebrow">Details</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="field-label">Scope</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.scope.map((item) => (
                        <li key={item} className="tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="field-label">Verified technology</p>
                    {project.technologies.length > 0 ? (
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {project.technologies.map((technology) => (
                          <li key={technology} className="tag">
                            {technology}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm leading-6 text-muted">
                        A verified stack list is not published for this project.
                        Scope is documented above.
                      </p>
                    )}
                  </div>
                  {project.referenceUrl ? (
                    <div className="sm:col-span-2">
                      <p className="field-label">Reference</p>
                      <a
                        href={project.referenceUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-arrow mt-3"
                      >
                        Read the original case study
                        <ArrowUpRight
                          aria-hidden="true"
                          size={12}
                          strokeWidth={1.6}
                        />
                      </a>
                    </div>
                  ) : null}
                </div>
              </section>
            </div>
          </div>
        </div>

        <nav
          aria-label="Project navigation"
          className="shell mt-16 border-t border-line pt-8 md:mt-24"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="group border-t border-line py-5 sm:border-t-0"
              >
                <span className="mono flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                  <ArrowLeft
                    aria-hidden="true"
                    size={12}
                    strokeWidth={1.6}
                    className="transition-transform duration-200 group-hover:-translate-x-0.5"
                  />
                  Previous
                </span>
                <p className="display-md mt-3 transition-colors group-hover:text-accent">
                  {previous.shortTitle}
                </p>
                <p className="mono mt-1 text-[0.55rem] uppercase tracking-[0.1em] text-muted">
                  {previous.category}
                </p>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group border-t border-line py-5 text-left sm:border-t-0 sm:text-right"
              >
                <span className="mono flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.12em] text-muted sm:justify-end">
                  Next
                  <ArrowRight
                    aria-hidden="true"
                    size={12}
                    strokeWidth={1.6}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
                <p className="display-md mt-3 transition-colors group-hover:text-accent">
                  {next.shortTitle}
                </p>
                <p className="mono mt-1 text-[0.55rem] uppercase tracking-[0.1em] text-muted">
                  {next.category}
                </p>
              </Link>
            ) : null}
          </div>
        </nav>
      </article>

      <ContactCta />
    </>
  );
}
