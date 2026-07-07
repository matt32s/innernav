"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-frequency/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link
          href="/"
          className="in-label text-cloud"
          style={{ fontWeight: 300 }}
        >
          INNER NAVIGATION
        </Link>

        {/* desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`in-label pb-1 transition-colors ${
                  active
                    ? "border-b border-lift text-cloud"
                    : "text-haze hover:text-lift"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          {/* amber indicator dot */}
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-signal"
          />
        </nav>

        {/* mobile trigger */}
        <button
          type="button"
          className="in-label text-haze md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-frequency/20 bg-ink md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-4">
            {NAV_LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`in-label block py-3 ${
                      active ? "text-cloud" : "text-haze"
                    }`}
                  >
                    {active && (
                      <span
                        aria-hidden="true"
                        className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-signal align-middle"
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
