import type { Metadata } from "next";

import { ProjectGrid } from "@/components/projects/project-grid";
import { ContactCta } from "@/components/ui/contact-cta";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected work by Muhammad Arif Rahmad S. across public services, education, system integration, IoT, product, AI, and infrastructure.",
  path: "/projects",
});

const principles = [
  {
    index: "01",
    title: "Start from the workflow",
    description:
      "The counter, classroom, or device sets the requirements. The framework comes later.",
  },
  {
    index: "02",
    title: "Keep the data honest",
    description:
      "One source of truth, explicit ownership, and reports that can be traced back to a record.",
  },
  {
    index: "03",
    title: "Leave a maintainable system",
    description:
      "Clear boundaries, understandable data models, and documentation for the next person.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects / Index"
        title={
          <>
            Systems, not{" "}
            <em className="text-accent">screenshots.</em>
          </>
        }
        description="A documented index of client systems, workplace tools, product experiments, and academic work. Each case study states the problem, the approach, what the system does, and the operational outcome it was designed for."
        meta={[
          { label: "Projects", value: `${projects.length} documented` },
          { label: "Featured", value: "5 selected systems" },
          { label: "Categories", value: "Public services, education, integration, IoT, product, AI" },
          { label: "Years", value: "2025 — 2026" },
        ]}
      />

      <section className="section-tight">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Project index"
            title="Filter by the kind of problem."
            description="Client names are shown only where the engagement is confirmed. Technology is listed only where it is verified."
          />
          <div className="mt-10">
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Working notes"
            title="What stays constant across the work."
            description="Different domains, same standard for how a system should behave."
            dark
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.index}
                className="border-t border-paper/15 pt-6"
              >
                <span className="index-number text-accent-soft">
                  {principle.index}
                </span>
                <h3 className="display-md mt-5">{principle.title}</h3>
                <p className="mt-3 max-w-sm text-pretty text-sm leading-6 text-paper/55">
                  {principle.description}
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
