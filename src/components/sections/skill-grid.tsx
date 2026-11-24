import {
  Code2,
  Cpu,
  Database,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { skillGroups } from "@/data/skills";
import type { SkillIcon } from "@/types";

const icons: Record<SkillIcon, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  integration: Cpu,
  security: ShieldCheck,
};

interface SkillGridProps {
  compact?: boolean;
}

export function SkillGrid({ compact = false }: SkillGridProps) {
  return (
    <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-5">
      {skillGroups.map((group) => {
        const Icon = icons[group.icon];

        return (
          <section
            key={group.title}
            className="border-t border-line py-7 lg:border-t-0 lg:border-l lg:py-0 lg:pl-6 first:lg:border-l-0 first:lg:pl-0"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="index-number">{group.label}</span>
              <Icon
                aria-hidden="true"
                size={18}
                strokeWidth={1.25}
                className="text-muted"
              />
            </div>
            <h3 className="display-md mt-6">{group.title}</h3>
            {!compact ? (
              <p className="mt-3 min-h-16 text-pretty text-sm leading-6 text-muted">
                {group.description}
              </p>
            ) : null}
            <ul className="mt-5 space-y-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-2 text-[0.82rem] leading-5 text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-px w-2 shrink-0 bg-accent/70"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
