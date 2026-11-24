import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function ArrowLink({
  href,
  children,
  className,
  external = false,
}: ArrowLinkProps) {
  const classes = cn("link-arrow", className);
  const content = (
    <>
      {children}
      <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.6} />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer noopener"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
