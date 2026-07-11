import Link from "next/link";

const navItems = [
  { href: "/ren", label: "Ren English Readers" },
  { href: "/everyday-together", label: "Everyday Together" },
  { href: "/shinji", label: "Shinji" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: "var(--rule)" }}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span
            className="font-display text-2xl tracking-tight"
            style={{ color: "var(--paper-text)" }}
          >
            Raymond Paquette
          </span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.18em]"
            style={{ color: "var(--paper-text-soft)" }}
          >
            Reader &amp; Fiction Catalog
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] uppercase tracking-[0.1em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:opacity-100"
              style={{ color: "var(--paper-text-soft)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
