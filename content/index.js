// Add one line here every time you add a new book's full text.
// The key MUST match that book's `slug` in data/books.js exactly.

import et01 from './everyday-together/et-01';
import et02 from './everyday-together/et-02';
import murderAtTheShujing from './other-works/murder-at-the-shujing';
import ren01 from './ren/ren-01';

const bookContent = {
  'et-01-the-wrong-line-message': et01, // CHECK: does this match the slug in books.js? Fix if not.
  'et-02-just-say-no-to-overtime': et02,
  'murder-at-the-shujing': murderAtTheShujing,
  'ren-01-the-haunted-shrine-visit': ren01,
};

export default bookContent;