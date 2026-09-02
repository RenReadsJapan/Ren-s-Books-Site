// Add one line here every time you add a new book's full text.
// The key MUST match that book's `slug` in data/books.js exactly.

import et01 from './everyday-together/et-01';
import et02 from './everyday-together/et-02';
import et03 from './everyday-together/et-03';
import et04 from './everyday-together/et-04';
import et05 from './everyday-together/et-05';
import et052 from './everyday-together/et-05-2';
import murderAtTheShujing from './other-works/murder-at-the-shujing';
import ren01 from './ren/ren-01';
import ren02 from './ren/ren-02';
import ren03 from './ren/ren-03';
import ren04 from './ren/ren-04';
import ren05 from './ren/ren-05';
import ren06 from './ren/ren-06';

const bookContent = {
  'et-01-the-wrong-line-message': et01, // CHECK: does this match the slug in books.js? Fix if not.
  'et-02-just-say-no-to-overtime': et02,
  'et-03-the-last-train': et03,
  'et-04-cooking-up-trouble': et04,
  'et-05-i-hate-taking-care-of-a-sick-person': et05,
  'et-05-2-i-hate-taking-care-of-a-sick-person': et052,
  'murder-at-the-shujing': murderAtTheShujing,
  'ren-01-the-haunted-shrine-visit': ren01,
  'ren-02-riding-the-train': ren02,
  'ren-03-rens-first-day-at-school': ren03,
  'ren-04-festival-fever': ren04,
  'ren-05-time-slip-trouble': ren05,
  'ren-06-valentines-day-mix-up': ren06
};

export default bookContent;