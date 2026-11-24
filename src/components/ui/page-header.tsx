import type { ReactNode } from "react";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description: ReactNode;
  meta?: Array<{ label: string; value: ReactNode }>;
}

export function PageHeader({ label, title, description, meta }: PageHeaderProps) {
  return (
    <header className="shell pb-14 pt-14 md:pb-20 md:pt-24">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-accent"
        />
        <p className="eyebrow">{label}</p>
      </div>
      <h1 className="display-hero mt-8 max-w-6xl text-balance">{title}</h1>
      <div className="mt-12 grid gap-10 border-t border-line pt-8 md:mt-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="body-lg max-w-2xl text-pretty">{description}</p>
        </div>
        {meta ? (
          <dl className="grid gap-x-8 gap-y-5 md:col-span-5 md:grid-cols-2 md:pl-8">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="field-label">{item.label}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-ink-soft">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </header>
  );
}
