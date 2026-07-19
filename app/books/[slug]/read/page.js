import { notFound } from 'next/navigation';
import bookContent from '../../../../content';
import ReadOnline from '../../../../components/ReadOnline';
 
export default async function ReadPage({ params }) {
  const { slug } = await params;
  const content = bookContent[slug];
 
  if (!content) {
    // No full text on file for this book yet — send to a normal 404
    // rather than a broken blank page.
    notFound();
  }
 
  return <ReadOnline content={content} />;
}
 