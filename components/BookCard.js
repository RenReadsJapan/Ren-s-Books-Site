import Image from "next/image";
import Link from "next/link";
import { accentOf } from "@/lib/accent";

export default function BookCard({ book, catalog }) {
  const accent = accentOf(catalog.accent);
  const isUpcoming = book.status === "upcoming";
  const catalogNumber = `${catalog.catalogCode}-${String(book.number).padStart(2, "0")}`;

  const content = (
    <div
      className="index-card rounded-sm overflow-hidden h-full flex flex-col transition-transform group-hover:-translate-y-0.5"
      style={{ borderLeft: `4px solid ${accent.strong}` }}
    >
      {book.coverImage && (
        <div className="relative w-full aspect-[3/4] bg-black/10">
          <Image
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 pt-8 flex-1 flex flex-col">
        <span
          className="font-mono text-[11px] tracking-[0.12em]"
          style={{ color: accent.strong }}
        >
          {catalogNumber}
          {isUpcoming ? " · COMING SOON" : ""}
        </span>
        <h3 className="font-display text-xl mt-2 mb-2 leading-snug">
          {book.title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--ink-text-soft)" }}
        >
          {book.description}
        </p>
        {!isUpcoming && (
          <span
            className="font-mono text-[11px] mt-4 uppercase tracking-wide"
            style={{ color: accent.strong }}
          >
            Read more →
          </span>
        )}
      </div>
    </div>
  );

  if (isUpcoming) {
    return <div className="opacity-70">{content}</div>;
  }

  return (
    <Link href={`/books/${book.slug}`} className="group block h-full">
      {content}
    </Link>
  );
}
