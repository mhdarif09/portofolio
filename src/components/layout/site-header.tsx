"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const open = menuOpen && menuPath === pathname;

  function openMenu() {
    setMenuPath(pathname);
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="site-header">
        <div className="shell flex h-[var(--header-height)] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="font-display grid h-9 w-9 place-items-center rounded-[1px] bg-ink text-[1.15rem] leading-none text-paper transition-colors duration-200 group-hover:bg-accent">
              M
            </span>
            <span className="hidden xs:block">
              <span className="block text-[0.82rem] font-medium leading-tight tracking-[-0.01em]">
                Muhammad Arif
              </span>
              <span className="mono mt-0.5 block text-[0.52rem] uppercase leading-tight tracking-[0.16em] text-muted">
                Full-Stack Developer
              </span>
            </span>
            <span className="sr-only">— Home</span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 md:flex lg:gap-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="button-outline hidden lg:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.6} />
            </Link>
            <button
              ref={triggerRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper md:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
              onClick={openMenu}
            >
              <Menu aria-hidden="true" size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="mobile-menu fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
        >
          <div className="shell flex h-[var(--header-height)] shrink-0 items-center justify-between border-b border-line">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={closeMenu}
            >
              <span className="font-display grid h-9 w-9 place-items-center rounded-[1px] bg-ink text-[1.15rem] leading-none text-paper">
                M
              </span>
              <span>
                <span className="block text-[0.82rem] font-medium leading-tight">
                  Muhammad Arif
                </span>
                <span className="mono mt-0.5 block text-[0.52rem] uppercase leading-tight tracking-[0.16em] text-muted">
                  Full-Stack Developer
                </span>
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              aria-label="Close navigation menu"
              onClick={() => {
                closeMenu();
                triggerRef.current?.focus();
              }}
            >
              <X aria-hidden="true" size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className="shell flex flex-1 flex-col justify-between overflow-y-auto py-10">
            <nav aria-label="Mobile navigation">
              <p className="eyebrow mb-6">Index</p>
              <ul className="space-y-1">
                {navigation.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "group flex items-baseline justify-between border-b border-line py-4",
                        isActive(item.href) && "text-accent",
                      )}
                    >
                      <span className="display-lg leading-none">
                        {item.label}
                      </span>
                      <span className="mono text-[0.6rem] tracking-[0.14em] text-muted">
                        0{index + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-12">
              <p className="eyebrow mb-4">Direct</p>
              <a
                href={`mailto:${site.email}`}
                className="link-underline break-all text-sm text-ink-soft"
              >
                {site.email}
              </a>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {site.socials
                  .filter((social) => social.label !== "Email")
                  .map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="mono text-[0.62rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
                    >
                      {social.label}
                    </a>
                  ))}
              </div>
              <p className="mono mt-8 text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                {site.locationShort} · {site.timezone}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
