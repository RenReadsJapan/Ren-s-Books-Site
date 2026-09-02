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

// Renders the audio player itself. This component is always mounted
// (see ReadOnline below) so the <audio> element never unmounts when
// switching tabs — playback keeps going even when the Story tab is
// showing. Only its wrapper's visibility is toggled.
function ListenTab({ audioSrc, title }) {
  return (
    <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '0.5em' }}>Listen Along</h3>
      <p style={{ color: 'var(--paper-text-soft, #999)', marginBottom: '1.2em' }}>
        Play the audio here, then switch to the Story tab to read along —
        it keeps playing in the background.
      </p>
      <audio
        controls
        src={audioSrc}
        style={{ width: '100%' }}
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

function VocabularyTab({ vocabulary, idioms, culturalNotes }) {
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
  const hasIdioms = idioms && idioms.length > 0;
  const hasCulturalNotes = culturalNotes && culturalNotes.length > 0;

  return (
    <div>
      <h3 style={{ marginBottom: '0.5em' }}>Vocabulary</h3>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: hasIdioms || hasCulturalNotes ? '2.5em' : 0,
        }}
      >
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

      {/* Idiomatic Expressions — only shown for books that actually have
          idioms (e.g. Everyday Together). Ren books don't use this. */}
      {hasIdioms && (
        <>
          <h3 style={{ marginBottom: '0.5em' }}>Idiomatic Expressions</h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: hasCulturalNotes ? '2.5em' : 0,
            }}
          >
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
        </>
      )}

      {/* Cultural Notes — occasional, separate from vocabulary. Used by
          Ren books; only rendered when a book actually provides some. */}
      {hasCulturalNotes && (
        <>
          <h3 style={{ marginBottom: '0.5em' }}>Cultural Notes</h3>
          {culturalNotes.map((note, i) => (
            <div key={i} style={{ marginBottom: '1.2em' }}>
              {note.title && (
                <p style={{ fontWeight: 'bold', marginBottom: '0.3em' }}>{note.title}</p>
              )}
              <p style={{ lineHeight: 1.6 }}>{note.text}</p>
            </div>
          ))}
        </>
      )}
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

      {workbook.multipleChoice && workbook.multipleChoice.length > 0 && (
        <>
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
        </>
      )}

      {workbook.writeYourOwn && workbook.writeYourOwn.length > 0 && (
        <>
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
        </>
      )}

      {/* True/False — optional section, only present for books whose
          workbook includes it (e.g. Ren titles). */}
      {workbook.trueFalse && workbook.trueFalse.length > 0 && (
        <>
          <h3>D. True or False</h3>
          <ol style={{ marginBottom: '2em' }}>
            {workbook.trueFalse.map((tf, i) => (
              <li key={i} style={{ marginBottom: '0.8em' }}>
                {tf.statement}
                <div style={{ marginTop: '0.3em' }}>
                  <label style={{ marginRight: '1.5em' }}>
                    <input type="radio" name={`tf-${i}`} style={{ marginRight: '0.5em' }} />
                    True
                  </label>
                  <label>
                    <input type="radio" name={`tf-${i}`} style={{ marginRight: '0.5em' }} />
                    False
                  </label>
                </div>
              </li>
            ))}
          </ol>
        </>
      )}

      {/* Short Answer — optional section, only present for books whose
          workbook includes it (e.g. Ren titles). */}
      {workbook.shortAnswer && workbook.shortAnswer.length > 0 && (
        <>
          <h3>E. Short Answer</h3>
          {workbook.shortAnswer.map((item, i) => (
            <div key={i} style={{ marginBottom: '1.5em' }}>
              <p style={{ marginBottom: '0.4em' }}>{item.question}</p>
              <textarea
                rows={3}
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
        </>
      )}

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

        {workbook.multipleChoice && workbook.multipleChoice.length > 0 && (
      <>
        <h4 style={{ marginBottom: '0.6em', color: '#fff' }}>Section B — Multiple Choice</h4>
        <ol style={{ color: '#f0f0f0', marginBottom: workbook.trueFalse || workbook.shortAnswer ? '1.5em' : 0 }}>
          {workbook.multipleChoice.map((mc, i) => (
            <li key={i} style={{ marginBottom: '0.3em' }}>
              {String.fromCharCode(97 + mc.answer)}
            </li>
          ))}
        </ol>
      </>
    )}

    {workbook.trueFalse && workbook.trueFalse.length > 0 && (
      <>
        <h4 style={{ marginBottom: '0.6em', color: '#fff' }}>Section D — True or False</h4>
        <ol style={{ color: '#f0f0f0', marginBottom: workbook.shortAnswer ? '1.5em' : 0 }}>
          {workbook.trueFalse.map((tf, i) => (
            <li key={i} style={{ marginBottom: '0.3em' }}>
              {tf.answer ? 'TRUE' : 'FALSE'}
              {tf.note && <span style={{ color: '#bbb' }}> &mdash; {tf.note}</span>}
            </li>
          ))}
        </ol>
      </>
    )}

    {workbook.shortAnswer && workbook.shortAnswer.length > 0 && (
      <>
        <h4 style={{ marginBottom: '0.6em', color: '#fff' }}>Section E — Short Answer (sample answers)</h4>
        <ol style={{ color: '#f0f0f0' }}>
          {workbook.shortAnswer.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.5em' }}>
              {item.sampleAnswer}
            </li>
          ))}
        </ol>
      </>
    )}
  </div>
)}
    </div>
  );
}

export default function ReadOnline({ content }) {
  // Only show the Listen tab if this book actually has audio yet.
  // Books without an audioSrc (e.g. Ren titles before Sept 2026,
  // or ET books not yet recorded) just won't show the tab.
  const hasAudio = Boolean(content.audioSrc);

  const TABS = ['Story', ...(hasAudio ? ['Listen'] : []), 'Vocabulary', 'Workbook'];

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

      <div style={{ display: tab === 'Story' ? 'block' : 'none' }}>
        <StoryTab story={content.story} />
      </div>

      {/* Always mounted (when audio exists) so playback survives tab
          switches — only its visibility toggles, never its existence. */}
      {hasAudio && (
        <div style={{ display: tab === 'Listen' ? 'block' : 'none' }}>
          <ListenTab audioSrc={content.audioSrc} title={content.title} />
        </div>
      )}

      {tab === 'Vocabulary' && (
        <VocabularyTab
          vocabulary={content.vocabulary}
          idioms={content.idioms}
          culturalNotes={content.culturalNotes}
        />
      )}
      {tab === 'Workbook' && <WorkbookTab workbook={content.workbook} />}
    </div>
  );
}
