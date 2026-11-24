import { ArrowDownRight, MapPin } from "lucide-react";
import Link from "next/link";

import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillGrid } from "@/components/sections/skill-grid";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { ArrowLink } from "@/components/ui/arrow-link";
import { ContactCta } from "@/components/ui/contact-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, education } from "@/data/education";
import { featuredProjects, projects } from "@/data/projects";
import { site } from "@/data/site";

const capabilities = [
  { index: "01", label: "Web applications", note: "Frontend to database" },
  { index: "02", label: "System integration", note: "APIs, SSO, data flow" },
  { index: "03", label: "IoT data flows", note: "Devices to dashboards" },
  { index: "04", label: "Application security", note: "Testing and review" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="shell pb-14 pt-12 md:pb-20 md:pt-16 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="hero-rise hero-delay-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="eyebrow eyebrow-accent">
                  Full-Stack Developer
                </span>
                <span aria-hidden="true" className="h-px w-8 bg-line" />
                <span className="eyebrow">Palembang, Indonesia</span>
              </div>

              <h1 className="display-hero mt-8 md:mt-10">
                <span className="hero-rise hero-delay-2 block">
                  Muhammad Arif
                </span>
                <span className="hero-rise hero-delay-3 block">
                  Rahmad <em className="text-accent">S.</em>
                </span>
              </h1>

              <div className="hero-rise hero-delay-4 mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 md:mt-10">
                <p className="mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  Software Engineer
                </p>
                <span aria-hidden="true" className="h-px w-5 bg-line" />
                <p className="mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  System Integration
                </p>
                <span aria-hidden="true" className="h-px w-5 bg-line" />
                <p className="mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  Application Security
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-end lg:col-span-4">
              <p className="hero-rise hero-delay-4 body-lg max-w-md text-pretty">
                I build end-to-end web systems for education and public
                services, connecting interface, API, database, and device into
                one dependable workflow.
              </p>

              <div className="hero-rise hero-delay-5 mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="button-primary">
                  Selected work
                  <ArrowDownRight
                    aria-hidden="true"
                    size={15}
                    strokeWidth={1.6}
                  />
                </Link>
                <a href={`mailto:${site.email}`} className="button-outline">
                  Email me
                </a>
              </div>

              <div className="hero-rise hero-delay-5 mt-10 border-t border-line pt-4">
                <p className="field-label">Currently</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  Full-Stack Developer at MAN 1 Palembang
                </p>
                <p className="mono mt-1 text-[0.58rem] uppercase tracking-[0.1em] text-muted">
                  Oct 2025 — Oct 2026
                </p>
              </div>
            </div>
          </div>

          <dl className="hero-rise hero-delay-5 mt-14 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            <div>
              <dt className="field-label">Based in</dt>
              <dd className="mt-2 flex items-center gap-1.5 text-[0.82rem] text-ink-soft">
                <MapPin
                  aria-hidden="true"
                  size={12}
                  strokeWidth={1.5}
                  className="text-accent"
                />
                {site.locationShort}
              </dd>
            </div>
            <div>
              <dt className="field-label">Education</dt>
              <dd className="mt-2 text-[0.82rem] text-ink-soft">
                S.Kom. Informatics · GPA {education.gpa}
              </dd>
            </div>
            <div>
              <dt className="field-label">Practice</dt>
              <dd className="mt-2 text-[0.82rem] text-ink-soft">
                Full-stack · Integration · Security
              </dd>
            </div>
            <div>
              <dt className="field-label">Contact</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline break-all text-[0.82rem] text-ink-soft"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-label="Areas of practice" className="border-y border-line">
        <div className="shell grid grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability.label}
              className={
                index === 0
                  ? "py-5 pr-5"
                  : `border-l border-line py-5 pl-5 md:pl-7 ${
                      index === 2 ? "max-lg:border-l-0" : ""
                    }`
              }
            >
              <div className="flex items-baseline gap-2">
                <span className="index-number">{capability.index}</span>
                <p className="text-[0.82rem] font-medium">{capability.label}</p>
              </div>
              <p className="mono mt-1.5 text-[0.56rem] uppercase tracking-[0.1em] text-muted">
                {capability.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Systems built for real workflows."
            description="A selection of systems, each shaped by an operational constraint: a queue, a report, a device, a deadline, or a record that had to stay true."
            action={<ArrowLink href="/projects">All {projects.length} projects</ArrowLink>}
          />

          <div className="mt-12">
            <FeaturedProject project={featuredProjects[0]} />
            <div className="mt-14 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.slice(1, 4).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <p className="mono text-[0.6rem] uppercase tracking-[0.12em] text-muted">
              Selected from {projects.length} documented projects
            </p>
            <ArrowLink href="/projects">Browse the project index</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-accent">Profile / 02</p>
              <h2 className="display-xl mt-5 max-w-lg text-balance">
                Between the process and the software.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="body-lg text-pretty">
                My work sits where an organisation&apos;s actual process meets
                the system that has to support it. That usually means
                understanding the paper form, the counter, the classroom, or the
                device before deciding what the software should do.
              </p>
              <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted">
                I have built attendance systems tied to IoT devices, teaching
                journals, public information portals, queue platforms, and a
                shared data layer that keeps separate applications aligned. I
                also test applications from the outside, which keeps the
                security question present while the product is being built.
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6">
                <div>
                  <dt className="field-label">Degree</dt>
                  <dd className="mt-2 text-sm leading-6 text-ink-soft">
                    S.Kom. Informatics
                    <br />
                    Universitas Bina Darma
                  </dd>
                </div>
                <div>
                  <dt className="field-label">GPA</dt>
                  <dd className="font-display mt-1 text-4xl leading-none">
                    {education.gpa}
                  </dd>
                </div>
                <div>
                  <dt className="field-label">Exchange</dt>
                  <dd className="mt-2 text-sm leading-6 text-ink-soft">
                    INTI University
                    <br />
                    Malaysia · 2025
                  </dd>
                </div>
                <div>
                  <dt className="field-label">Graduation</dt>
                  <dd className="mt-2 text-sm leading-6 text-ink-soft">
                    27 October 2026
                    <br />
                    graduation assessment
                  </dd>
                </div>
              </dl>

              <ArrowLink href="/about" className="mt-8">
                More about the work
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Technical expertise"
            title="A practical stack, used where it fits."
            description="Grouped by where the work happens. No proficiency percentages, no invented tools."
          />
          <div className="mt-12">
            <SkillGrid />
          </div>
          <p className="mono mt-10 border-t border-line pt-5 text-[0.58rem] uppercase leading-5 tracking-[0.1em] text-muted">
            Security practice is supported by hands-on assessment and technical
            reporting.
          </p>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title="Work with operational weight."
            description="Roles across product, public-service systems, education technology, and security research."
            action={<ArrowLink href="/experience">Full experience</ArrowLink>}
          />
          <div className="mt-10">
            <ExperienceTimeline limit={3} compact />
          </div>

          <div className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {achievements.slice(0, 3).map((achievement) => (
              <div key={achievement.title}>
                <p className="font-display text-2xl leading-tight">
                  {achievement.title}
                </p>
                <p className="mt-1.5 text-[0.78rem] leading-5 text-muted">
                  {achievement.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
