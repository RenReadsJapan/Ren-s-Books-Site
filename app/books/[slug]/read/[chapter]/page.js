import { notFound } from 'next/navigation';
import bookContent from '../../../../../content';
import { NovelChapter } from '../../../../../components/NovelReader';

export default async function ChapterPage({ params }) {
  const { slug, chapter } = await params;
  const content = bookContent[slug];

  if (!content || content.type !== 'novel') {
    notFound();
  }

  const chapterNumber = parseInt(chapter, 10);
  const chapterExists = content.chapters.some((c) => c.number === chapterNumber);

  if (!chapterExists) {
    notFound();
  }

  return <NovelChapter content={content} chapterNumber={chapterNumber} />;
}