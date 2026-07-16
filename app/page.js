import Image from "next/image";
import Link from "next/link";
import { catalogs, getBooksForCatalog } from "@/data/books";
import { accentOf } from "@/lib/accent";

const catalogList = [
  { ...catalogs.ren, key: "ren" },
  { ...catalogs.everydayTogether, key: "everydayTogether" },
  { ...catalogs.shinji, key: "shinji" },
];

export default function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <span
              className="font-mono text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-gold)" }}
            >
              English Readers &amp; Fiction, written in Japan
            </span>
            <h1
              className="font-display text-5xl sm:text-6xl mt-4 mb-6 leading-[1.05]"
              style={{ color: "var(--paper-text)" }}
            >
              Stories built for the readers who actually use them.
            </h1>
            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: "var(--paper-text-soft)" }}
            >
              Three catalogs, one author: graded readers for young learners,
              graded readers for working adults, and a YA mystery series —
              all written from twenty years teaching English in the Kansai
              region.
            </p>
          </div>
          <div
            className="relative rounded-md overflow-hidden"
            style={{ border: "1px solid var(--rule)" }}
          >
            <Image
              src="/images/hero-ren-friends.png"
              alt="Ren and his friends walking together under cherry blossoms"
              width={1717}
              height={916}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {catalogList.map((catalog) => {
            const accent = accentOf(catalog.accent);
            const count = getBooksForCatalog(catalog.key).filter(
              (b) => b.status === "published"
            ).length;
            return (
              <Link
                key={catalog.slug}
                href={`/${catalog.slug}`}
                className="group block rounded-md p-7 transition-transform hover:-translate-y-1"
                style={{
                  background: "var(--bg-ink-raised)",
                  border: `1px solid var(--rule)`,
                  borderTop: `4px solid ${accent.strong}`,
                }}
              >
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.14em]"
                  style={{ color: accent.strong }}
                >
                  {catalog.level}
                </span>
                <h2
                  className="font-display text-2xl mt-3 mb-2"
                  style={{ color: "var(--paper-text)" }}
                >
                  {catalog.name}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--paper-text-soft)" }}
                >
                  {catalog.tagline}
                </p>
                <span
                  className="font-mono text-[11px] uppercase tracking-wide"
                  style={{ color: accent.strong }}
                >
                  {count} {count === 1 ? "book" : "books"} · Browse →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
