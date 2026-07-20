import BookCard from "@/components/BookCard";
import CollectionCard from "@/components/CollectionCard";
import { getBooksForCatalog, getCollectionsForCatalog } from "@/data/books";
import { accentOf } from "@/lib/accent";

export default function CatalogView({ catalog }) {
  const catalogKey =
    catalog.slug === "everyday-together" ? "everydayTogether" : catalog.slug;
  const books = getBooksForCatalog(catalogKey);
  const collections = getCollectionsForCatalog(catalogKey);
  const accent = accentOf(catalog.accent);

  return (
    <div>
      <section
        className="border-b"
        style={{ borderColor: "var(--rule)" }}
      >
<div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
  <div className={catalog.charactersImage ? "grid md:grid-cols-2 gap-10 items-center" : ""}>
    <div>
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

    {catalog.charactersImage && (
      <img
        src={catalog.charactersImage}
        alt={`${catalog.name} character introductions`}
        className="w-full rounded-sm"
      />
    )}
  </div>
</div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} catalog={catalog} />
          ))}
        </div>
      </section>

      {collections.length > 0 && (
        <section
          className="max-w-6xl mx-auto px-6 pb-20 pt-4 border-t"
          style={{ borderColor: "var(--rule)" }}
        >
          <h2
            className="font-display text-3xl mt-10 mb-6"
            style={{ color: "var(--paper-text)" }}
          >
            Paperback Collections
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.slug}
                collection={collection}
                catalog={catalog}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
