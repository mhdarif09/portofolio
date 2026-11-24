import Link from "next/link";

import { ArrowLink } from "@/components/ui/arrow-link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow eyebrow-accent">Error / 404</p>
        <h1 className="display-hero mt-6 max-w-4xl text-balance">
          This page is not in the <em className="text-accent">index.</em>
        </h1>
        <p className="body-lg mt-8 max-w-xl text-pretty">
          The URL may have changed, or the page may never have existed. The
          project index is a better place to continue.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="button-primary">
            Back home
          </Link>
          <ArrowLink href="/projects" className="button-outline">
            Browse projects
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
