import BookCard from "@/components/BookCard";
import { getBooksForCatalog } from "@/data/books";
import { accentOf } from "@/lib/accent";

export default function CatalogView({ catalog }) {
  const books = getBooksForCatalog(
    catalog.slug === "everyday-together"
      ? "everydayTogether"
      : catalog.slug
  );
  const accent = accentOf(catalog.accent);

  return (
    <div>
      <section
        className="border-b"
        style={{ borderColor: "var(--rule)" }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <span
            className="font-mono text-xs uppercase tracking-[0.18em]"
            style={{ color: accent.strong }}
          >
            {catalog.level}
          </span>
          <h1 className="font-display text-5xl mt-3 mb-4" style={{ color: "var(--paper-text)" }}>
            {catalog.name}
          </h1>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--paper-text-soft)" }}
          >
            {catalog.description}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} catalog={catalog} />
          ))}
        </div>
      </section>
    </div>
  );
}
