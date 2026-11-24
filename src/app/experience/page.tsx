import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ContactCta } from "@/components/ui/contact-cta";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Professional experience of Muhammad Arif Rahmad S. across full-stack development, digital public services, education technology, product leadership, and application security.",
  path: "/experience",
});

const workingPrinciples = [
  {
    index: "01",
    title: "Read the process first",
    description:
      "Sit with the counter, the classroom, or the device workflow before deciding what the interface should ask for.",
  },
  {
    index: "02",
    title: "Make the data traceable",
    description:
      "A report is only useful if it can be traced to a record, a timestamp, and an owner.",
  },
  {
    index: "03",
    title: "Document the handoff",
    description:
      "The next developer should not have to reverse-engineer a decision that could have been written down.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Experience / Timeline"
        title={
          <>
            A record of work, not a{" "}
            <em className="text-accent">list of titles.</em>
          </>
        }
        description="Roles across full-stack development, digital public services, education technology, product leadership, and application security. The through-line is ownership: understanding the process, building the system, and staying close enough to see whether it actually works."
        meta={[
          { label: "Roles", value: `${experiences.length} documented` },
          { label: "Current", value: "Founder & Tech Lead, Sarang Tumbuh" },
          {
            label: "Domains",
            value: "Education, public services, product, security",
          },
          { label: "Base", value: site.location },
        ]}
      />

      <section className="section-tight">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Professional timeline"
            title="Work with responsibilities attached."
            description="Each entry lists the role, the operating context, and the contributions that can be stated without inflation."
          />
          <div className="mt-10">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Security practice"
            title="Findings, reported with context."
            description="Security work is part research discipline, part communication. A finding is only useful when it is reproducible and explained clearly."
            dark
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.25}
                  className="text-accent-soft"
                />
                <p className="eyebrow text-paper/60">Research focus</p>
              </div>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {[
                  "Web application and API security",
                  "Authorization and IDOR analysis",
                  "Session management and OAuth testing",
                  "Email verification behaviour",
                  "Rate-limiting analysis",
                  "Technical vulnerability reporting",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-t border-paper/15 pt-3 text-sm leading-6 text-paper/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-7 text-paper/55">
                Reports are submitted through HackerOne and official reporting
                programmes. Outcomes vary by programme and by report.
              </p>
              <p className="mono mt-5 border-l border-accent-soft/50 pl-4 text-[0.58rem] leading-5 tracking-[0.03em] text-paper/60">
                Some reports were closed as duplicates. Not every finding
                resulted in an accepted bounty payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Ways of working"
            title="What I try to leave behind."
            description="Three habits that matter more than the stack."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {workingPrinciples.map((principle) => (
              <article
                key={principle.index}
                className="border-t border-line pt-6"
              >
                <span className="index-number">{principle.index}</span>
                <h3 className="display-md mt-5">{principle.title}</h3>
                <p className="mt-3 max-w-sm text-pretty text-sm leading-6 text-muted">
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
