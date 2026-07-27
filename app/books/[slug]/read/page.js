import { notFound } from 'next/navigation';
import bookContent from '../../../../content';
import ReadOnline from '../../../../components/ReadOnline';
import { NovelTOC } from '../../../../components/NovelReader';

export default async function ReadPage({ params }) {
  const { slug } = await params;
  const content = bookContent[slug];

  if (!content) {
    notFound();
  }

  if (content.type === 'novel') {
    return <NovelTOC content={content} />;
  }

  return <ReadOnline content={content} />;
}