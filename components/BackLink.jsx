'use client';

import { useRouter } from 'next/navigation';

// A "back" link that uses real browser history when possible, so the
// previous page's scroll position is restored. Falls back to a normal
// navigation when there is no history (e.g. someone opened this page
// directly from a shared link).
export default function BackLink({ href, className, style, children }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(href);
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}