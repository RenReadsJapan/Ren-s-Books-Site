
// ---------------------------------------------------------------------------
// This file is the entire book catalog. To add, edit, or remove a book,
// just edit the arrays below — no other code needs to change.
// ---------------------------------------------------------------------------
 
export const catalogs = {
  ren: {
    slug: "ren",
    name: "Ren English Readers",
    tagline: "Graded readers for young learners, ages 10–13",
    level: "A2 · Eiken Grade 3",
    description:
      "Ren English Readers follows a group of friends through slice-of-life adventures in Japan — school days, festivals, and a slow-building supernatural mystery tied to a local shrine. Written for young Japanese learners at A2 / Eiken Grade 3 level, with characters drawn as cats in the classic Carl Barks tradition.",
    accent: "ren",
    catalogCode: "REN",
    charactersImage: "/characters/ren-characters.png",
  },
  everydayTogether: {
    slug: "everyday-together",
    name: "Everyday Together",
    tagline: "Real World English Readers for adult learners",
    level: "A2–B1",
    description:
      "Everyday Together follows four adult friends — Yui, Kaoru, Daichi, and Takumi — through a year of ordinary life in contemporary Osaka. Natural, idiomatic English at A2–B1 level, grounded in the real texture of Japanese daily life: overtime, LINE etiquette, konbini runs, and the quiet mechanics of friendship.",
    accent: "together",
    charactersImage: "/characters/et-characters.png",
    catalogCode: "ET",
  },
  shinji: {
    slug: "shinji",
    name: "Shinji",
    tagline: "A YA mystery/thriller series",
    level: "Young Adult",
    description:
      "Shinji is a young adult mystery/thriller series. Book one, Shinji Inherits a Ghost House, opens the series — with more titles on the way.",
    accent: "shinji",
    catalogCode: "SHJ",
  },
};
 
export const books = [
  // ---------------------------------------------------------------------
  // REN ENGLISH READERS
  // Only confirmed titles are listed below — add the remaining volumes
  // (Books 2, 4, 6, 9, 11, 19, 20, etc.) the same way as you finalize them.
  // ---------------------------------------------------------------------
  {
    slug: "ren-01-the-haunted-shrine-visit",
    catalog: "ren",
    number: 1,
    title: "The Haunted Shrine Visit",
    description:
      "The first Ren English Readers story — an introduction to Ren, Hana, and the local shrine that becomes the heart of the series.",
    status: "published",
coverImage: "/covers/ren-01.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0GZB7SBY8?ref_=dbs_m_nmg_rwt_calw_tkin_0&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0GZB7SBY8?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-02-riding-the-train",
    catalog: "ren",
    number: 2,
    title: "Riding the Train",
    description:
      "Ren gets his first IC card and learns to navigate the train system with Hana, Sora, and Momo — while a strange encounter at the shrine lingers in the background.",
    wordCount: "~2,300 words",
    status: "published",
coverImage: "/covers/ren-02.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0GZW1Z175?ref_=dbs_m_nmg_rwt_calw_tkin_1&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0GZW1Z175?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-03-rens-first-day-at-school",
    catalog: "ren",
    number: 3,
    title: "Ren's First Day at School",
    description: "Ren navigates his first day at a Japanese school, and the small moments of culture shock and friendship that come with it.",
    status: "published",
coverImage: "/covers/ren-03.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0GX3KH425?ref_=dbs_m_nmg_rwt_calw_tkin_2&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0GX3KH425?ref_=dbs_m_mng_rwt_calw_tkin_2&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-04-festival-fever",
    catalog: "ren",
    number: 4,
    title: "Festival Fever",
    description:
      "The friends head to a summer street festival full of takoyaki, kakigori, and games — but Sora's nerves about the crowds threaten to keep him away.",
    wordCount: "~2,600 words",
    status: "published",
coverImage: "/covers/ren-04.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0H1L88VY3?ref_=dbs_m_nmg_rwt_calw_tkin_3&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0H1L88VY3?ref_=dbs_m_mng_rwt_calw_tkin_3&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-05-time-slip-trouble",
    catalog: "ren",
    number: 5,
    title: "Time Slip Trouble",
    description: "A strange event pulls Ren and his friends out of their ordinary day and into trouble.",
    status: "published",
coverImage: "/covers/ren-05.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0H3MSMGWP?ref_=dbs_m_nmg_rwt_calw_tkin_5&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0H3MSMGWP?ref_=dbs_m_mng_rwt_calw_tkin_5&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-06-valentines-day-mix-up",
    catalog: "ren",
    number: 6,
    title: "Valentine's Day Mix-up",
    description:
      "Hana and Momo make homemade \u201cfriendship chocolate\u201d for Valentine's Day, walking through the customs — and small mix-ups — of a Japanese Valentine's.",
    wordCount: "~2,800 words",
    status: "published",
coverImage: "/covers/ren-06.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0GX2TT2NR?ref_=dbs_m_nmg_rwt_calw_tkin_6&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0GX2TT2NR?ref_=dbs_m_mng_rwt_calw_tkin_6&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-07-the-soccer-bully",
    catalog: "ren",
    number: 7,
    title: "The Soccer Bully",
    description: "A schoolyard conflict tests the group's friendship and Ren's instinct to stay out of confrontation.",
    status: "published",
coverImage: "/covers/ren-07.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0H344T8FJ?ref_=dbs_m_nmg_rwt_calw_tkin_7&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0H344T8FJ?ref_=dbs_m_mng_rwt_calw_tkin_7&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-08-culture-shock",
    catalog: "ren",
    number: 8,
    title: "Culture Shock",
    description: "Ren's mixed-heritage background creates small moments of friction and curiosity as he settles further into life in Japan.",
    status: "published",
coverImage: "/covers/ren-08.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/gp/product/B0H7QRHLL4?ref_=dbs_m_nmg_rwt_calw_tkin_8&storeType=ebooks",
    amazonUrlUS: "https://www.amazon.com/gp/product/B0H7QRHLL4?ref_=dbs_m_mng_rwt_calw_tkin_8&storeType=ebooks&qid=1783923574&sr=8-4",
  },
  {
    slug: "ren-09-the-last-bell",
    catalog: "ren",
    number: 9,
    title: "The Last Bell",
    description:
      "A late-night hatsumode shrine visit turns strange when the friends meet a mysterious girl in an old kimono, deepening the shrine's growing mystery.",
    wordCount: "~3,000 words",
    status: "published",
coverImage: "/covers/ren-09.png",
    amazonUrl: "",
  },
  {
    slug: "ren-10-cherry-blossom-magic",
    catalog: "ren",
    number: 10,
    title: "Cherry Blossom Magic",
    description: "A springtime story woven with a touch of the series' growing supernatural thread.",
    status: "published",
coverImage: "/covers/ren-10.png",
    amazonUrl: "",
  },
  {
    slug: "ren-11-the-idol-competition",
    catalog: "ren",
    number: 11,
    title: "The Idol Competition",
    description:
      "Momo works up the courage to compete in a televised idol competition, with her friends rallying to calm her nerves before the biggest tryout of her life.",
    wordCount: "~3,200 words",
    status: "published",
coverImage: "/covers/ren-11.png",
    amazonUrl: "",
  },
  {
    slug: "ren-12-get-out-oni",
    catalog: "ren",
    number: 12,
    title: "Get Out Oni!",
    description: "A Setsubun story that opens the series' central supernatural arc.",
    status: "published",
coverImage: "/covers/ren-12.png",
    amazonUrl: "",
  },
  {
    slug: "ren-13-two-on-one-bike",
    catalog: "ren",
    number: 13,
    title: "Two on One Bike",
    description: "A slice-of-life story about friendship and the small rules of everyday life in Japan.",
    status: "published",
coverImage: "/covers/ren-13.png",
    amazonUrl: "",
  },
  {
    slug: "ren-14-the-bento-incident",
    catalog: "ren",
    number: 14,
    title: "The Bento Incident",
    description: "A lunchtime mix-up leads to an unexpectedly big day for the group.",
    status: "published",
coverImage: "/covers/ren-14.png",
    amazonUrl: "",
  },
  {
    slug: "ren-15-summer-is-too-hot",
    catalog: "ren",
    number: 15,
    title: "Summer is Too Hot",
    description: "A summer story following the friends through the heat, festivals, and everything that comes with the season.",
    status: "published",
coverImage: "/covers/ren-15.png",
    amazonUrl: "",
  },
  {
    slug: "ren-16-the-voice-at-the-onsen",
    catalog: "ren",
    number: 16,
    title: "The Voice at the Onsen",
    description: "The supernatural arc deepens at a hot spring town, and Ren opens up to Hana about his father for the first time.",
    status: "published",
coverImage: "/covers/ren-16.png",
    amazonUrl: "",
  },
  {
    slug: "ren-17-journey-to-oni-ga-shima",
    catalog: "ren",
    number: 17,
    title: "Journey to Oni-Ga-Shima",
    description: "The supernatural trilogy continues, raising the stakes with a promise that binds the story forward to Book 20.",
    status: "published",
coverImage: "/covers/ren-17.png",
    amazonUrl: "",
  },
  {
    slug: "ren-18-sports-day",
    catalog: "ren",
    number: 18,
    title: "Sports Day",
    description: "A undoukai (sports day) story following the group through Japan's classic school athletic festival.",
    status: "published",
coverImage: "/covers/ren-18.png",
    amazonUrl: "",
  },
  {
    slug: "ren-19-the-cowardly-detective",
    catalog: "ren",
    number: 19,
    title: "The Cowardly Detective",
    description:
      "Channeling their favorite detective stories, Ren, Hana, and Sora search for the missing shrine priest — and end up helping Miwa search for someone of her own.",
    wordCount: "~2,200 words",
    status: "published",
coverImage: "/covers/ren-19.png",
    amazonUrl: "",
  },
  {
    slug: "ren-20-return-to-the-shrine",
    catalog: "ren",
    number: 20,
    title: "Return to the Shrine",
    description:
      "The series finale. The friends finally track down the shrine priest and uncover a centuries-old secret — and Ren makes a binding promise that will carry the story into the B1 series.",
    wordCount: "~3,000 words",
    status: "published",
coverImage: "/covers/ren-20.png",
    amazonUrl: "",
  },
 
  // ---------------------------------------------------------------------
  // EVERYDAY TOGETHER
  // ---------------------------------------------------------------------
  {
    slug: "et-01-the-wrong-line-message",
    catalog: "everydayTogether",
    number: 1,
    title: "The Wrong LINE Message",
    description:
      "Yui, three days into a new café job, sends an honest message about her terrifying boss to what she thinks is a private chat — and it goes to the entire work group instead. A midnight meeting outside a convenience store follows, with onigiri, competing advice, and a lesson in why Japanese politeness sometimes says more than directness ever could.",
    culturalFocus: "Tatemae and honne; workplace communication; the social weight of LINE group chats; indirect speech as social practice.",
    wordCount: "~3,000 words",
    status: "published",
coverImage: "/covers/et-01.png",
    amazonUrl: "",
  },
  {
    slug: "et-02-just-say-no-to-overtime",
    catalog: "everydayTogether",
    number: 2,
    title: "Just Say No to Overtime",
    description:
      "Kaoru has worked overtime every night this week and almost misses Daichi and Takumi's concert. When she finally leaves the office, she has to navigate the particular guilt of walking out while everyone else stays.",
    culturalFocus: "Overtime culture in Japan; work-group loyalty; the social difficulty of leaving; indirect expressions of disappointment.",
    wordCount: "~3,200 words",
    status: "published",
coverImage: "/covers/et-02.png",
    amazonUrl: "",
  },
  {
    slug: "et-03-the-last-train",
    catalog: "everydayTogether",
    number: 3,
    title: "The Last Train",
    description:
      "The four friends miss the last train home after the concert — an evening of vending machine drinks, capsule hotels that keep coming up full, and the kind of conversation that only happens when no one has anywhere to be.",
    culturalFocus: "Midnight Osaka; capsule hotels and internet cafés; inemuri (sleeping in public); urban navigation without a plan.",
    wordCount: "~3,400 words",
    status: "published",
coverImage: "/covers/et-03.png",
    amazonUrl: "",
  },
  {
    slug: "et-04-cooking-up-trouble",
    catalog: "everydayTogether",
    number: 4,
    title: "Cooking Up Trouble",
    description:
      "Daichi decides to cook dinner for the group as an apology for the missed train. He and Takumi attempt teriyaki chicken from YouTube instructions — there is a small fire.",
    culturalFocus: "Manzai comedy and the boke/tsukkomi dynamic; community cooking classes; itadakimasu and mealtime customs; Kansai regional culture.",
    wordCount: "~3,500 words",
    status: "published",
coverImage: "/covers/et-04.png",
    amazonUrl: "",
  },
  {
    slug: "et-05-i-hate-taking-care-of-a-sick-person",
    catalog: "everydayTogether",
    number: 5,
    title: "I Hate Taking Care of a Sick Person",
    description:
      "Kaoru collapses at her desk and is taken to the hospital by ambulance. What follows is three days of Kaoru being furious about the wrong tea, the wrong slippers, and Takumi's quiet, steady care.",
    culturalFocus: "Illness and caregiving in Japan; okayu and recovery food traditions; the difficulty of asking for help; the quiet language of care.",
    wordCount: "~3,000 words",
    status: "published",
coverImage: "/covers/et-05.png",
    amazonUrl: "",
  },
  {
    slug: "et-06-anything-but-work",
    catalog: "everydayTogether",
    number: 6,
    title: "Anything But Work",
    description:
      "Daichi's apartment wi-fi goes down two days before a critical demo deadline, so he shows up at Takumi's door at six in the morning asking to borrow the connection.",
    culturalFocus: "Freelance work culture and precarity; hospitality between friends; reading what is left unsaid; loyalty within a band.",
    wordCount: "~3,200 words",
    status: "published",
coverImage: "/covers/et-06.png",
    amazonUrl: "",
  },
  {
    slug: "et-07-keigo-is-my-enemy",
    catalog: "everydayTogether",
    number: 7,
    title: "Keigo is my Enemy",
    description:
      "Takumi is asked to lead a presentation in front of the company CEO — a man rumored to have fired someone for using casual language in a meeting. A B1 bridge title.",
    culturalFocus: "Keigo and levels of formality; workplace hierarchy; the anxiety of language performance for non-native speakers; grace extended to effort over perfection.",
    wordCount: "~2,700 words",
    status: "published",
coverImage: "/covers/et-07.png",
    amazonUrl: "",
  },
  {
    slug: "et-08-the-great-cookie-spark",
    catalog: "everydayTogether",
    number: 8,
    title: "The Great Cookie Spark",
    description:
      "Yui's cookies are technically flawless — and still missing something. Told that her baking lacks 'a spark,' she enters a televised baking contest to find it. A B1 bridge title.",
    culturalFocus: "Artistic risk versus safety; mentorship through indirect feedback; competitive baking culture in Japan; the difference between technical correctness and creative spark.",
    wordCount: "~2,900 words",
    status: "published",
coverImage: "/covers/et-08.png",
    amazonUrl: "",
  },
 {
    slug: "et-09-the-onsen-trip",
    catalog: "everydayTogether",
    number: 9,
    title: "The Onsen Trip",
    description:
      "Daichi has booked an onsen trip for him and his friends. However, there Yui uncovers the true reason for it. Will Daichi's secret bring the group together or destroy it?",
    culturalFocus: "Onsen culture; what to do at a rotenburo; friendship and trust; learning to express yourself.",
    wordCount: "~3,000 words",
    status: "published",
coverImage: "/covers/et-09.png",
    amazonUrl: "",
  },
  {
    slug: "et-10-how-not-to-be-a-gentleman-the-onsen-trip-part-2",
    catalog: "everydayTogether",
    number: 10,
    title: "How Not to Be a Gentleman: The Onsen Trip, Part 2",
    description:
      "The friends spend the next day at the onsen, enjoying the food, hiking, and relaxing. However, little things keep getting in the way, and Takumi almost makes a terrible mistake.",
    culturalFocus: "Onsen culture; making traditional sweets; social etiquette in shared spaces..",
    wordCount: "~3,000 words",
    status: "published",
coverImage: "/covers/et-10.png",
    amazonUrl: "",
  },
  // ---------------------------------------------------------------------
  // SHINJI
  // ---------------------------------------------------------------------
  {
    slug: "shinji-01-shinji-inherits-a-ghost-house",
    catalog: "shinji",
    number: 1,
    title: "Shinji Inherits a Ghost House",
    description:
      "The first book in the Shinji series. More details coming soon.",
    status: "published",
coverImage: "/covers/shinji-01.png",
    amazonUrl: "https://www.royalroad.com/fiction/160052/shinji-inherits-a-ghost-house?utm_source=home&utm_medium=reading-history",
    linkLabel: "Read on Royal Road",
  },
];
 
export function getCatalog(slug) {
  return Object.values(catalogs).find((c) => c.slug === slug);
}
 
export function getBooksForCatalog(catalogKey) {
  return books
    .filter((b) => b.catalog === catalogKey)
    .sort((a, b) => a.number - b.number);
}
 
export function getBookBySlug(slug) {
  return books.find((b) => b.slug === slug);
}
 
// ---------------------------------------------------------------------------
// PAPERBACK COLLECTIONS — bundled print editions, separate from individual
// ebooks. To add a new collection (e.g. for Everyday Together once it's
// ready), copy an entry below and set catalog to "everydayTogether".
// ---------------------------------------------------------------------------
export const collections = [
  {
    slug: "ren-collected-1",
    catalog: "ren",
    title: "Ren English Readers: Collected Book 1",
    includes: [
      "The Haunted Shrine Visit",
      "Riding the Train",
      "Ren's First Day at School",
      "Festival Fever",
    ],
    description:
      "Books 1–4, bundled together in one paperback — the opening arc of the Ren series, from the first shrine visit through festival season.",
    coverImage: "/covers/ren-collected-01.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/Ren-English-Readers-Books-1-4/dp/B0H2J3MK13/ref=sr_1_2?crid=3TU97KBWT6YD8&dib=eyJ2IjoiMSJ9.7lkML_F7ga4BYmXM8FK4f7DpQr-4haP5L4k5mbrkdk55MbXS-P-VwlhYfZ4_inxe4AriDbm91VKiL8R0wDlYOA.pvJqhXSMKRFgsRx25YTAFUZI3RsYOsIlH66dmKJ9EzM&dib_tag=se&keywords=ren+english+readers&qid=1783926064&sprefix=%2Caps%2C286&sr=8-2",
amazonUrlUS: "https://www.amazon.com/Ren-English-Readers-Books-1-4/dp/B0H2J3MK13/ref=sr_1_1?crid=4L8RD9M0AW5I&dib=eyJ2IjoiMSJ9.Bb_F94g8lZBOLFcUwSGpc_Wo74TCMdllaKArqrZfVizy7NdkTJtNOHIYib39_t0SCxalAPoIN53GaQUJ-P1RUuMgvVXXgWnYIBdqwmw07ZaYRih2uWPz2ASGvGjTCpjBd-pSZJq6Yv1DA-dCTC2EHCRVzIO-FNprn1EXY7D5yiih_5FdMXlSj1nkbJyWaiyT-V-TZO99mhM_Usq2JJ7rtY0p20ub-6f-zbxJ7Go6b7A.su_oQa8wYjEYcV4fyYD7Agg4AODTJV8iOBn-udWFWFU&dib_tag=se&keywords=raymond+paquette&qid=1783927331&sprefix=%2Caps%2C436&sr=8-1",

  },
  {
    slug: "ren-collected-2",
    catalog: "ren",
    title: "Ren English Readers: Collected Book 2",
    includes: [
      "Time Slip Trouble",
      "Valentine's Day Mix-up",
      "The Soccer Bully",
      "Culture Shock",
    ],
    description:
      "Books 5–8, bundled together in one paperback — continuing the friends' everyday adventures through the school year.",
    coverImage: "/covers/ren-collected-02.png",
    amazonUrl: "https://www.amazon.co.jp/-/en/Raymond-Paquette/dp/B0H82H55GZ/ref=sr_1_1?crid=3TU97KBWT6YD8&dib=eyJ2IjoiMSJ9.7lkML_F7ga4BYmXM8FK4f7DpQr-4haP5L4k5mbrkdk55MbXS-P-VwlhYfZ4_inxe4AriDbm91VKiL8R0wDlYOA.pvJqhXSMKRFgsRx25YTAFUZI3RsYOsIlH66dmKJ9EzM&dib_tag=se&keywords=ren+english+readers&qid=1783926064&sprefix=%2Caps%2C286&sr=8-1",
amazonUrlUS: "https://www.amazon.com/Ren-English-Readers-Books-5-8/dp/B0H82H55GZ/ref=sr_1_2?crid=4L8RD9M0AW5I&dib=eyJ2IjoiMSJ9.Bb_F94g8lZBOLFcUwSGpc_Wo74TCMdllaKArqrZfVizy7NdkTJtNOHIYib39_t0SCxalAPoIN53GaQUJ-P1RUuMgvVXXgWnYIBdqwmw07ZaYRih2uWPz2ASGvGjTCpjBd-pSZJq6Yv1DA-dCTC2EHCRVzIO-FNprn1EXY7D5yiih_5FdMXlSj1nkbJyWaiyT-V-TZO99mhM_Usq2JJ7rtY0p20ub-6f-zbxJ7Go6b7A.su_oQa8wYjEYcV4fyYD7Agg4AODTJV8iOBn-udWFWFU&dib_tag=se&keywords=raymond+paquette&qid=1783927331&sprefix=%2Caps%2C436&sr=8-2",

  },
];

export function getCollectionsForCatalog(catalogKey) {
  return collections.filter((c) => c.catalog === catalogKey);
}