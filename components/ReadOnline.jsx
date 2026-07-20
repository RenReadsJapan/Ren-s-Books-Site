'use client';

import { useState } from 'react';
import Link from 'next/link';

// Turns *word* into an italicized span, and a lone scene-break marker
// into a centered divider. Keeps the content file free of JSX.
function StoryParagraph({ text }) {
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
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <p style={{ marginBottom: '1.1em', lineHeight: 1.7 }}>
      {parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*') ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

function StoryTab({ story }) {
  return (
    <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
      {story.map((para, i) => (
        <StoryParagraph key={i} text={para} />
      ))}
    </div>
  );
}

function VocabularyTab({ vocabulary, idioms }) {
  const cellStyle = {
    padding: '0.6em 0.8em',
    borderBottom: '1px solid var(--paper-border, #e5e0d5)',
    textAlign: 'left',
    verticalAlign: 'top',
  };
  const exampleStyle = {
    display: 'block',
    fontStyle: 'italic',
    color: 'var(--paper-text-soft, #999)',
    marginTop: '0.2em',
  };
  return (
    <div>
      <h3 style={{ marginBottom: '0.5em' }}>Vocabulary</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2.5em' }}>
        <thead>
          <tr>
            <th style={cellStyle}>Word</th>
            <th style={cellStyle}>Japanese</th>
          </tr>
        </thead>
        <tbody>
          {vocabulary.map((v, i) => (
            <tr key={i}>
              <td style={cellStyle}>
                {v.word}
                {v.partOfSpeech && <span style={exampleStyle}>({v.partOfSpeech})</span>}
              </td>
              <td style={cellStyle}>
                {v.translation}
                {v.example && <span style={exampleStyle}>&ldquo;{v.example}&rdquo;</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginBottom: '0.5em' }}>Idiomatic Expressions</h3>
<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={cellStyle}>Expression</th>
      <th style={cellStyle}>Meaning / Context</th>
      <th style={cellStyle}>Japanese</th>
    </tr>
  </thead>
  <tbody>
    {idioms.map((idiom, i) => (
      <tr key={i}>
        <td style={cellStyle}>{idiom.phrase}</td>
        <td style={cellStyle}>
          {idiom.meaning}
          {idiom.example && <span style={exampleStyle}>{idiom.example}</span>}
        </td>
        <td style={cellStyle}>{idiom.translation}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

function WorkbookTab({ workbook }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid var(--paper-text-soft, #999)',
    background: 'transparent',
    padding: '0.2em 0.4em',
    width: '14em',
    fontFamily: 'inherit',
    fontSize: 'inherit',
  };

  return (
    <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
      <h3>Word Bank</h3>
      <p style={{ marginBottom: '1.5em' }}>
        {workbook.wordBank.join(' · ')}
      </p>

      <h3>A. Fill in the Blank</h3>
      <ol style={{ marginBottom: '2em' }}>
        {workbook.fillInBlank.map((q, i) => (
          <li key={i} style={{ marginBottom: '0.8em' }}>
            {q.split('______')[0]}
            <input style={inputStyle} type="text" aria-label={`answer ${i + 1}`} />
            {q.split('______')[1]}
          </li>
        ))}
      </ol>

      <h3>B. Multiple Choice</h3>
      <ol style={{ marginBottom: '2em' }}>
        {workbook.multipleChoice.map((mc, qi) => (
          <li key={qi} style={{ marginBottom: '1em' }}>
            {mc.question}
            <div style={{ marginTop: '0.4em' }}>
              {mc.options.map((opt, oi) => (
                <label key={oi} style={{ display: 'block', margin: '0.2em 0' }}>
                  <input type="radio" name={`mc-${qi}`} style={{ marginRight: '0.5em' }} />
                  {opt}
                </label>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <h3>C. Write Your Own Sentence</h3>
      {workbook.writeYourOwn.map((item, i) => (
        <div key={i} style={{ marginBottom: '1.5em' }}>
          <p style={{ marginBottom: '0.3em' }}>
            <strong>&ldquo;{item.phrase}&rdquo;</strong> &mdash; {item.meaning}
          </p>
          <p style={{ fontStyle: 'italic', marginBottom: '0.4em' }}>{item.prompt}</p>
          <textarea
            rows={2}
            style={{
              width: '100%',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              border: '1px solid var(--paper-border, #e5e0d5)',
              padding: '0.5em',
            }}
          />
        </div>
      ))}

      <button
        onClick={() => setShowAnswers((s) => !s)}
        style={{
          marginTop: '1.5em',
          padding: '0.5em 1em',
          border: '1px solid var(--paper-text-soft, #999)',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {showAnswers ? 'Hide Answer Key' : 'Show Answer Key'}
      </button>

{showAnswers && (
  <div
    style={{
      marginTop: '1em',
      padding: '1.2em',
      background: '#2a2a2a',
      border: '1px solid var(--paper-text-soft, #999)',
      borderRadius: '4px',
    }}
  >
    <h4 style={{ marginBottom: '0.6em', color: '#fff' }}>Section A — Fill in the Blank</h4>
    <ol style={{ marginBottom: '1.5em', color: '#f0f0f0' }}>
      {workbook.fillInBlankAnswers.map((ans, i) => (
        <li key={i} style={{ marginBottom: '0.3em' }}>{ans}</li>
      ))}
    </ol>

    <h4 style={{ marginBottom: '0.6em', color: '#fff' }}>Section B — Multiple Choice</h4>
    <ol style={{ color: '#f0f0f0' }}>
      {workbook.multipleChoice.map((mc, i) => (
        <li key={i} style={{ marginBottom: '0.3em' }}>
          {String.fromCharCode(97 + mc.answer)}
        </li>
      ))}
    </ol>
  </div>
)}
    </div>
  );
}

const TABS = ['Story', 'Vocabulary', 'Workbook'];

export default function ReadOnline({ content }) {
  const [tab, setTab] = useState('Story');

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2em 1em' }}>
      <Link href={`/books/${content.slug}`} style={{ fontSize: '0.85em' }}>
        &larr; Back to book page
      </Link>

      <h1 style={{ marginTop: '0.5em', marginBottom: '0.2em' }}>{content.title}</h1>
      <p style={{ color: 'var(--paper-text-soft, #999)', marginBottom: '1.5em' }}>
        {content.series} &middot; Level {content.level}
      </p>

      <div
        style={{
          display: 'flex',
          gap: '0.5em',
          borderBottom: '1px solid var(--paper-border, #e5e0d5)',
          marginBottom: '2em',
        }}
      >
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: '0.6em 1.2em',
              border: 'none',
              borderBottom: tab === t ? '2px solid var(--accent-strong, #333)' : '2px solid transparent',
              background: 'transparent',
              fontWeight: tab === t ? 'bold' : 'normal',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '1em',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Story' && <StoryTab story={content.story} />}
      {tab === 'Vocabulary' && (
        <VocabularyTab vocabulary={content.vocabulary} idioms={content.idioms} />
      )}
      {tab === 'Workbook' && <WorkbookTab workbook={content.workbook} />}
    </div>
  );
}
