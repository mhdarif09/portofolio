import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { navigation, site } from "@/data/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="section-dark">
      <div className="shell py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display grid h-10 w-10 place-items-center rounded-[1px] border border-paper/25 text-[1.25rem] leading-none">
                M
              </span>
              <div>
                <p className="text-[0.85rem] font-medium leading-tight">
                  {site.name}
                </p>
                <p className="mono mt-1 text-[0.55rem] uppercase tracking-[0.16em] text-paper/60">
                  {site.titleLong}
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-md text-[0.95rem] leading-7 text-paper/60">
              Building dependable web systems for education, public services,
              and organisations that need their data to move cleanly.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-7 inline-block text-sm text-paper/85"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.85rem] text-paper/60 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Elsewhere</p>
            <ul className="space-y-3">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="group inline-flex items-center gap-1.5 text-[0.85rem] text-paper/60 transition-colors hover:text-paper"
                  >
                    {social.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      size={12}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[0.58rem] uppercase leading-relaxed tracking-[0.12em] text-paper/60">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="mono text-[0.58rem] uppercase tracking-[0.12em] text-paper/60">
              {site.locationShort} · {site.timezone}
            </p>
            <a
              href="#main"
              className="mono inline-flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.12em] text-paper/55 transition-colors hover:text-paper"
            >
              Back to top
              <ArrowUp aria-hidden="true" size={12} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
