import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { CopyEmail } from "@/components/contact/copy-email";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Muhammad Arif Rahmad S. by email, WhatsApp, LinkedIn, or GitHub for full-stack development, system integration, and application security work.",
  path: "/contact",
});

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    note: "Best for a project brief or a detailed message.",
    external: false,
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsapp,
    icon: MessageCircle,
    note: "Direct messages for a shorter conversation.",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "muhammad-arif-rahmad-syahputra",
    href: "https://linkedin.com/in/muhammad-arif-rahmad-syahputra",
    icon: LinkedInIcon,
    note: "Professional profile and work history.",
    external: true,
  },
  {
    label: "GitHub",
    value: "@mhdarif09",
    href: "https://github.com/mhdarif09",
    icon: GitHubIcon,
    note: "Public repositories and experiments.",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact / Direct"
        title={
          <>
            Start with the problem, not the{" "}
            <em className="text-accent">pitch.</em>
          </>
        }
        description="A useful first message explains what needs to change, who it affects, and what constraints are already in place. If that is still taking shape, write anyway. The first conversation can be about defining the problem."
        meta={[
          { label: "Base", value: "Palembang, South Sumatra, Indonesia" },
          { label: "Timezone", value: "WIB · UTC+7" },
          { label: "Email", value: site.email },
          { label: "WhatsApp", value: site.phoneDisplay },
        ]}
      />

      <section className="pb-16 md:pb-24">
        <div className="shell">
          <div className="border-y border-line py-10 md:py-14">
            <p className="eyebrow eyebrow-accent">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="font-display mt-5 block break-all text-[clamp(1.9rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.035em] transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href={`mailto:${site.email}`} className="button-primary">
                Write an email
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.6} />
              </a>
              <CopyEmail email={site.email} />
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer noopener" : undefined}
                  className="group border-t border-line pt-5 transition-colors hover:border-accent"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Icon
                        aria-hidden="true"
                        size={17}
                        strokeWidth={1.35}
                        className="text-muted transition-colors group-hover:text-accent"
                      />
                      <p className="eyebrow">{channel.label}</p>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={15}
                      strokeWidth={1.5}
                      className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </div>
                  <p className="mt-5 break-all text-[0.95rem] leading-6 text-ink-soft transition-colors group-hover:text-ink">
                    {channel.value}
                  </p>
                  <p className="mt-1.5 text-[0.78rem] leading-5 text-muted">
                    {channel.note}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow eyebrow-accent">01 / A useful brief</p>
            <h2 className="display-xl mt-5 text-balance">
              What to include in the first message.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-sm leading-7 text-muted">
              There is no required template. A few details make the first reply
              more useful.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul>
              {[
                {
                  title: "The context",
                  detail:
                    "Who uses the system, and what process is currently causing friction?",
                },
                {
                  title: "The scope",
                  detail:
                    "Is this a new application, an integration, a security review, or an existing system that needs repair?",
                },
                {
                  title: "The constraints",
                  detail:
                    "Timeline, environment, existing stack, compliance rules, or anything that cannot change.",
                },
                {
                  title: "The outcome",
                  detail:
                    "What should be true after the work is finished that is not true today?",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-2 border-t border-line py-5 last:border-b sm:grid-cols-[2rem_1fr]"
                >
                  <span className="index-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1.5 max-w-lg text-sm leading-6 text-muted">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-dark section-tight">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow eyebrow-accent mb-4">Direct</p>
            <p className="display-lg max-w-2xl text-balance">
              Prefer a shorter conversation?
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 text-sm text-paper/55">
                <MapPin
                  aria-hidden="true"
                  size={14}
                  strokeWidth={1.5}
                  className="text-accent-soft"
                />
                {site.locationShort}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-paper/55">
                <Clock
                  aria-hidden="true"
                  size={14}
                  strokeWidth={1.5}
                  className="text-accent-soft"
                />
                {site.timezone}
              </span>
            </div>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="button-light shrink-0"
          >
            <MessageCircle aria-hidden="true" size={14} strokeWidth={1.6} />
            Message on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
