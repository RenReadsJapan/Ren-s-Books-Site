import Image from "next/image";
import { accentOf } from "@/lib/accent";

export default function CollectionCard({ collection, catalog }) {
  const accent = accentOf(catalog.accent);

  return (
    <div
      className="index-card rounded-sm overflow-hidden h-full flex flex-col sm:flex-row"
      style={{ borderLeft: `4px solid var(--accent-gold)` }}
    >
      {collection.coverImage && (
        <div className="relative w-full sm:w-40 aspect-[3/4] shrink-0 bg-black/10">
          <Image
            src={collection.coverImage}
            alt={`Cover of ${collection.title}`}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 pt-8 flex-1 flex flex-col">
        <span
          className="font-mono text-[11px] tracking-[0.12em] uppercase"
          style={{ color: "var(--accent-gold)" }}
        >
          Paperback Collection
        </span>
        <h3 className="font-display text-xl mt-2 mb-2 leading-snug">
          {collection.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: "var(--ink-text-soft)" }}
        >
          {collection.description}
        </p>
        <p
          className="font-mono text-[11px] leading-relaxed mb-4"
          style={{ color: accent.strong }}
        >
          Includes: {collection.includes.join(" · ")}
        </p>
        {collection.amazonUrl || collection.amazonUrlUS ? (
          <div className="flex flex-wrap gap-3">
            {collection.amazonUrl && (
              <a
                href={collection.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start font-mono text-[11px] uppercase tracking-[0.14em] px-5 py-2.5 rounded-sm"
                style={{ background: "var(--accent-gold)", color: "var(--bg-ink)" }}
              >
                {collection.amazonUrlUS ? "Buy on Amazon.co.jp" : "Buy the paperback"}
              </a>
            )}
            {collection.amazonUrlUS && (
              <a
                href={collection.amazonUrlUS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start font-mono text-[11px] uppercase tracking-[0.14em] px-5 py-2.5 rounded-sm border"
                style={{ borderColor: "var(--accent-gold)", color: "var(--accent-gold)" }}
              >
                Buy on Amazon.com
              </a>
            )}
          </div>
        ) : (
          <span
            className="text-xs italic"
            style={{ color: "var(--ink-text-soft)" }}
          >
            Purchase link coming soon.
          </span>
        )}
      </div>
    </div>
  );
}
