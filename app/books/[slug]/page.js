
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBookBySlug, catalogs } from "@/data/books";
import { accentOf } from "@/lib/accent";
import ReviewSection from "@/components/ReviewSection";
import bookContent from "@/content";
 
export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}
 
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  return { title: book ? book.title : "Book not found" };
}
 
export default async function BookPage({ params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();
 
  const catalog = Object.values(catalogs).find(
    (c) =>
      c.slug === book.catalog ||
      (book.catalog === "everydayTogether" && c.slug === "everyday-together")
  );
  const accent = accentOf(catalog.accent);
  const catalogNumber = `${catalog.catalogCode}-${String(book.number).padStart(2, "0")}`;
 
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href={`/${catalog.slug}`}
        className="font-mono text-xs uppercase tracking-[0.14em] inline-block mb-8"
        style={{ color: accent.strong }}
      >
        ← {catalog.name}
      </Link>
 
      <div className={book.coverImage ? "sm:flex sm:gap-8 mb-8" : ""}>
        {book.coverImage && (
          <div className="relative w-40 sm:w-48 aspect-[3/4] shrink-0 mb-6 sm:mb-0 rounded-sm overflow-hidden">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              fill
              sizes="200px"
              className="object-cover"
              priority
            />
          </div>
        )}
        <div>
          <span
            className="font-mono text-xs uppercase tracking-[0.18em]"
            style={{ color: accent.strong }}
          >
            {catalogNumber}
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl mt-3 mb-3 leading-tight"
            style={{ color: "var(--paper-text)" }}
          >
            {book.title}
          </h1>
          {book.wordCount && (
            <p
              className="font-mono text-xs uppercase tracking-wide"
              style={{ color: "var(--paper-text-soft)" }}
            >
              {book.wordCount}
            </p>
          )}
        </div>
      </div>
 
      <p
        className="text-lg leading-relaxed mb-8"
        style={{ color: "var(--paper-text)" }}
      >
        {book.description}
      </p>
 
      {book.culturalFocus && (
        <div
          className="rounded-md p-5 mb-8"
          style={{
            background: "var(--bg-ink-raised)",
            border: "1px solid var(--rule)",
          }}
        >
          <span
            className="font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: accent.strong }}
          >
            Cultural focus
          </span>
          <p
            className="text-sm mt-2 leading-relaxed"
            style={{ color: "var(--paper-text-soft)" }}
          >
            {book.culturalFocus}
          </p>
        </div>
      )}
 
      <div className="flex flex-wrap gap-3">
        {book.amazonUrl ? (
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-xs uppercase tracking-[0.14em] px-6 py-3 rounded-sm"
            style={{ background: accent.strong, color: "var(--bg-ink)" }}
          >
{book.linkLabel ? book.linkLabel : book.amazonUrlUS ? "Buy on Amazon.co.jp" : "Buy on Amazon"}          </a>
        ) : (
          <p
            className="text-sm italic"
            style={{ color: "var(--paper-text-soft)" }}
          >
            Purchase link coming soon.
          </p>
        )}
        {book.amazonUrlUS && (
          <a
            href={book.amazonUrlUS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-xs uppercase tracking-[0.14em] px-6 py-3 rounded-sm border"
            style={{ borderColor: accent.strong, color: accent.strong }}
          >
            Buy on Amazon.com
          </a>
        )}
{bookContent[book.slug] && (
  <Link
    href={`/books/${book.slug}/read`}
    className="inline-block font-mono text-xs uppercase tracking-[0.14em] px-6 py-3 rounded-sm"
    style={{ backgroundColor: accent.strong, color: '#fff' }}
  >
    Read Online
  </Link>
)}
      </div>
 
      <ReviewSection bookSlug={book.slug} accent={accent.strong} />

    </div>
  );
}
 