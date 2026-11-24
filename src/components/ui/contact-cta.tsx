import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section className="section-dark section" aria-labelledby="contact-cta-title">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="eyebrow eyebrow-accent mb-6">Next step</p>
            <h2
              id="contact-cta-title"
              className="display-hero max-w-4xl text-balance"
            >
              Let&apos;s build something that{" "}
              <em className="text-accent-soft">holds up.</em>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-7 lg:col-span-4">
            <p className="body-copy max-w-sm text-pretty">
              If you are planning a web application, integrating existing
              systems, or reviewing an application&apos;s security, send a short
              brief with the context that matters.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="button-light">
                <Mail aria-hidden="true" size={14} strokeWidth={1.6} />
                Send an email
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="button-light"
              >
                <MessageCircle
                  aria-hidden="true"
                  size={14}
                  strokeWidth={1.6}
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-paper/15 pt-7 sm:grid-cols-3 md:mt-24">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline break-all text-sm text-paper/80"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Location</p>
            <p className="text-sm text-paper/60">{site.location}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Focus</p>
            <p className="text-sm text-paper/60">
              Full-stack · Integration · Security
            </p>
          </div>
        </div>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className="mono mt-10 inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-paper/50 transition-colors hover:text-paper"
        >
          Direct WhatsApp
          <ArrowUpRight aria-hidden="true" size={12} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
