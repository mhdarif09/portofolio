import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "border-t pt-6 md:pt-8",
        dark ? "border-paper/15" : "border-line",
        className,
      )}
    >
      <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="flex gap-4 md:gap-6">
          <span className="index-number pt-1.5">{index}</span>
          <div>
            <p
              className={cn(
                "eyebrow mb-4",
                dark ? "eyebrow-accent" : "eyebrow-accent",
              )}
            >
              {eyebrow}
            </p>
            <h2 className="display-xl text-balance max-w-3xl">{title}</h2>
          </div>
        </div>
        <div className="flex max-w-sm flex-col items-start gap-5 md:items-end md:text-right">
          {description ? (
            <p
              className={cn(
                "text-pretty text-sm leading-6",
                dark ? "text-paper/55" : "text-muted",
              )}
            >
              {description}
            </p>
          ) : null}
          {action}
        </div>
      </div>
    </div>
  );
}
