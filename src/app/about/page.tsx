import type { Metadata } from "next";
import { ArrowUpRight, Cpu, ShieldCheck, Workflow } from "lucide-react";

import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ArrowLink } from "@/components/ui/arrow-link";
import { ContactCta } from "@/components/ui/contact-cta";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  achievements,
  education,
  publications,
} from "@/data/education";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Muhammad Arif Rahmad S. is a full-stack developer in Palembang, Indonesia, working across web applications, system integration, IoT, and application security.",
  path: "/about",
});

const interests = [
  {
    icon: Workflow,
    title: "Product engineering",
    description:
      "Interfaces and data models that make a complicated process feel smaller than it is.",
  },
  {
    icon: Cpu,
    title: "Systems & integration",
    description:
      "APIs, single sign-on, master data, and device flows that keep separate services consistent.",
  },
  {
    icon: ShieldCheck,
    title: "Application security",
    description:
      "Authorization, session behaviour, and the ordinary flaws that are easy to ship and expensive to ignore.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About / Profile"
        title={
          <>
            An engineer for the{" "}
            <em className="text-accent">unglamorous</em> parts.
          </>
        }
        description="I am a full-stack developer based in Palembang, Indonesia. Most of my work sits inside real operating environments, where a system has to fit an existing process, survive a busy week, and make sense to the people using it."
        meta={[
          { label: "Base", value: "Palembang, South Sumatra" },
          {
            label: "Degree",
            value: "S.Kom. Informatics, Universitas Bina Darma",
          },
          { label: "GPA", value: education.gpa },
          {
            label: "Current",
            value: "Full-Stack Developer, MAN 1 Palembang",
          },
        ]}
      />

      <section className="section-tight">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink p-6 text-paper sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #f3f0e8 1px, transparent 1px), linear-gradient(to bottom, #f3f0e8 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow text-paper/60">Identity / 2026</p>
                  <span className="mono text-[0.55rem] uppercase tracking-[0.12em] text-paper/60">
                    ID · 01
                  </span>
                </div>
                <div className="mt-auto">
                  <p className="font-display text-[5.5rem] leading-none tracking-[-0.06em] sm:text-[7rem]">
                    MAR
                  </p>
                  <div className="mt-6 border-t border-paper/20 pt-5">
                    <p className="text-sm font-medium">{site.name}</p>
                    <p className="mono mt-1 text-[0.56rem] uppercase tracking-[0.14em] text-paper/60">
                      {site.titleLong}
                    </p>
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <p className="mono text-[0.55rem] uppercase leading-5 tracking-[0.1em] text-paper/60">
                      2°59′S 104°45′E
                      <br />
                      {site.locationShort}
                    </p>
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow eyebrow-accent">01 / The work</p>
            <p className="body-lg mt-5 text-pretty">
              I build end-to-end web applications: the interface, the REST API,
              the database, and the integration layer between them. I have
              worked on systems for schools and government service units,
              including IoT-connected attendance, digital teaching journals,
              public information portals, queue management, and a shared data
              ecosystem for separate applications.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted">
              That range has taught me to start with the workflow rather than
              the framework. A queue system is not only a ticket number; it is
              a priority lane, a counter handoff, a waiting-room screen, and a
              record of how long someone waited. A teaching journal is not only
              a form; it is a report that a teacher should not have to retype.
              The software is better when those details are treated as the
              product.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted">
              I also work on application security: functional testing,
              vulnerability assessment, and technical reporting. It gives me a
              useful second lens on the systems I build, especially around
              authorization, data exposure, and the assumptions that tend to
              survive into production.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="button-primary">
                Start a conversation
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.6} />
              </a>
              <ArrowLink href="/experience" className="button-outline">
                See experience
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Career journey"
            title="A path through products, public systems, and security."
            description="A compact view of the roles behind the project work."
            action={<ArrowLink href="/experience">Full timeline</ArrowLink>}
          />
          <div className="mt-10">
            <ExperienceTimeline compact />
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Technical interests"
            title="Three questions I keep returning to."
            description="How the interface explains itself. How the data stays true. How the system behaves under pressure."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.title}
                  className="border-t border-line pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="index-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      aria-hidden="true"
                      size={20}
                      strokeWidth={1.25}
                      className="text-muted"
                    />
                  </div>
                  <h3 className="display-md mt-7">{interest.title}</h3>
                  <p className="mt-3 max-w-sm text-pretty text-sm leading-6 text-muted">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="Education"
            title="Formal training, applied work."
          />
          <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-display text-3xl leading-tight">
                {education.institution}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                {education.degree}
              </p>
              <p className="mono mt-2 text-[0.6rem] uppercase tracking-[0.1em] text-muted">
                {education.location}
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              <div>
                <p className="field-label">GPA</p>
                <p className="font-display mt-1 text-5xl leading-none">
                  {education.gpa}
                </p>
              </div>
              <div>
                <p className="field-label">Assessment</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  27 October 2026
                  <br />
                  graduation assessment
                </p>
              </div>
              <div>
                <p className="field-label">Exchange</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  INTI University, Malaysia
                  <br />
                  2025
                </p>
              </div>
              <div>
                <p className="field-label">Final project</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {education.finalProject}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="shell">
          <SectionHeading
            index="05"
            eyebrow="Publications"
            title="Written work."
            description="Research and design work developed alongside the systems."
          />
          <div className="mt-10">
            {publications.map((publication, index) => (
              <article
                key={publication.title}
                className="grid gap-3 border-t border-line py-7 last:border-b md:grid-cols-12 md:gap-6"
              >
                <p className="index-number md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="max-w-4xl text-pretty text-[1.05rem] font-medium leading-7 md:col-span-8">
                  {publication.title}
                </h3>
                <p className="mono text-[0.58rem] uppercase leading-5 tracking-[0.1em] text-muted md:col-span-3 md:text-right">
                  {publication.topic}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="06"
            eyebrow="Recognition"
            title="Selected achievements."
            description="Competition results, programme selections, and mentoring outcomes."
          />
          <div className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <article
                key={`${achievement.title}-${achievement.detail}`}
                className="border-t border-line py-6"
              >
                <span className="index-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display-md mt-4">{achievement.title}</h3>
                <p className="mt-2 max-w-xs text-pretty text-sm leading-6 text-muted">
                  {achievement.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
