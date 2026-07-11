# Raymond Paquette — Books Website

A site for three catalogs — **Ren English Readers**, **Everyday Together**,
and **Shinji** — with reader reviews, star ratings, and a contact form.

Built with Next.js, Tailwind CSS, and Supabase (for reviews/comments/contact).

---

## 1. Run it locally (optional, just to look at it)

You'll need [Node.js](https://nodejs.org) installed (version 18 or later).

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Reviews and the contact form will show a
"not connected yet" message until you set up Supabase (step 3 below) — this
is expected and won't break anything.

---

## 2. Add or edit books

Everything about your book catalog lives in **`data/books.js`**. To add a
new book, copy an existing entry in the `books` array and edit it — no
other code needs to change. Set `status: "upcoming"` for a "Coming Soon"
book with no page of its own yet, or `status: "published"` once it's live.

To change catalog-level info (name, description, level), edit the
`catalogs` object at the top of the same file.

---

## 3. Set up Supabase (for reviews + contact form)

1. Go to [supabase.com](https://supabase.com) and create a free account and
   a new project (pick a region close to Japan if offered).
2. In your new project, go to **SQL Editor → New Query**, paste in the
   contents of **`supabase-schema.sql`** (in this folder), and click Run.
   This creates the `reviews` and `messages` tables.
3. Go to **Project Settings → API**. You'll need two values:
   - **Project URL**
   - **anon public** key
4. Create a file called `.env.local` in this project's root folder (copy
   `.env.local.example` and rename it) and fill in:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

5. Restart `npm run dev` — reviews and the contact form will now work.

To read messages people send through the contact form, go to your Supabase
project → **Table Editor → messages**. New reviews appear in the `reviews`
table the same way.

---

## 4. Deploy to Vercel (free)

1. Push this project to a GitHub repository (create one at
   [github.com/new](https://github.com/new), then follow GitHub's
   instructions to push an existing folder).
2. Go to [vercel.com](https://vercel.com), sign up with your GitHub
   account, click **New Project**, and import the repository.
3. Before deploying, add your two Supabase values as **Environment
   Variables** in Vercel's project setup screen (same names as in
   `.env.local` above).
4. Click **Deploy**. Vercel gives you a free `.vercel.app` address
   immediately.

---

## 5. Add a custom domain (optional, ~$10–15/year)

1. Buy a domain from [Namecheap](https://namecheap.com) or
   [Cloudflare](https://cloudflare.com/products/registrar).
2. In Vercel: **Project Settings → Domains** → add your domain. Vercel
   gives you DNS records to add at your registrar.
3. Wait a few minutes to a few hours for it to connect. Vercel issues free
   HTTPS automatically.

---

## Project structure

```
app/                    Pages (Next.js App Router)
  page.js               Home
  ren/                  Ren English Readers catalog
  everyday-together/    Everyday Together catalog
  shinji/               Shinji catalog
  books/[slug]/         Individual book page (works for all 3 catalogs)
  about/, contact/       Static pages
components/             Reusable UI (BookCard, ReviewSection, etc.)
data/books.js           ALL book & catalog content — edit this to update the site
lib/supabase.js         Supabase client
supabase-schema.sql     Run this once in Supabase's SQL Editor
```
