'use client';

import Link from 'next/link';

// Renders one paragraph of novel text, handling the same conventions as
// the ET books (scene breaks, *italics*) plus two novel-specific markers:
// POV headers (character name shown at the start of a scene) and **bold**
// text (used for the in-story Russian chant).
function NovelParagraph({ text }) {
  if (text === '***SCENE_BREAK***') {
    return (
      <p
        style={{
          textAlign: 'center',
          letterSpacing: '0.3em',
          color: 'var(--paper-text-soft, #999)',
          margin: '2em 0',
        }}
      >
        ✦
      </p>
    );
  }

  if (text.startsWith('***POV_HEADER***')) {
    const name = text.replace('***POV_HEADER***', '');
    return (
      <p
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 'bold',
          marginTop: '2em',
          marginBottom: '0.3em',
          color: 'var(--paper-text, #fff)',
        }}
      >
        {name}
      </p>
    );
  }

  // Split on **bold** first, then *italic* within the remaining segments.
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p style={{ marginBottom: '1.1em', lineHeight: 1.7 }}>
      {boldParts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const italicParts = part.split(/(\*[^*]+\*)/g);
        return (
          <span key={i}>
            {italicParts.map((sub, j) =>
              sub.startsWith('*') && sub.endsWith('*') ? (
                <em key={j}>{sub.slice(1, -1)}</em>
              ) : (
                <span key={j}>{sub}</span>
              )
            )}
          </span>
        );
      })}
    </p>
  );
}

// Table of contents — the landing page for a novel's Read Online section.
export function NovelTOC({ content }) {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2em 1em' }}>
      <Link href={`/books/${content.slug}`} style={{ fontSize: '0.85em' }}>
        &larr; Back to book page
      </Link>

      <h1 style={{ marginTop: '0.5em', marginBottom: '0.3em' }}>{content.title}</h1>
      <p style={{ color: 'var(--paper-text-soft, #999)', marginBottom: '2em' }}>
        {content.chapters.length} chapters
      </p>

      <ol style={{ listStyle: 'none', padding: 0 }}>
        {content.chapters.map((ch) => (
          <li key={ch.number} style={{ marginBottom: '0.6em' }}>
            <Link
              href={`/books/${content.slug}/read/${ch.number}`}
              style={{
                display: 'block',
                padding: '0.7em 1em',
                border: '1px solid var(--paper-border, #e5e0d5)',
                borderRadius: '4px',
              }}
            >
              {ch.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Single chapter view, with Previous/Next navigation between chapters.
export function NovelChapter({ content, chapterNumber }) {
  const chapter = content.chapters.find((c) => c.number === chapterNumber);
  if (!chapter) return null;

  const prevChapter = content.chapters.find((c) => c.number === chapterNumber - 1);
  const nextChapter = content.chapters.find((c) => c.number === chapterNumber + 1);

  const navButtonStyle = {
    padding: '0.6em 1.2em',
    border: '1px solid var(--paper-text-soft, #999)',
    borderRadius: '4px',
    fontSize: '0.85em',
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2em 1em' }}>
      <Link href={`/books/${content.slug}/read`} style={{ fontSize: '0.85em' }}>
        &larr; Table of contents
      </Link>

      <h1 style={{ marginTop: '0.5em', marginBottom: '1.5em' }}>{chapter.title}</h1>

      <div>
        {chapter.paragraphs.map((para, i) => (
          <NovelParagraph key={i} text={para} />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3em',
          paddingTop: '1.5em',
          borderTop: '1px solid var(--paper-border, #e5e0d5)',
        }}
      >
        {prevChapter ? (
          <Link href={`/books/${content.slug}/read/${prevChapter.number}`} style={navButtonStyle}>
            &larr; {prevChapter.title}
          </Link>
        ) : (
          <span />
        )}
        {nextChapter ? (
          <Link href={`/books/${content.slug}/read/${nextChapter.number}`} style={navButtonStyle}>
            {nextChapter.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
