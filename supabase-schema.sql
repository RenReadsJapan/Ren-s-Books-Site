-- Run this once in Supabase: Project → SQL Editor → New Query → paste → Run.

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  book_slug text not null,
  reviewer_name text not null,
  rating int not null check (rating >= 1 and rating <= 5),
  comment text not null,
  created_at timestamp with time zone default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Row Level Security: allow anyone to read reviews and submit new ones,
-- but never allow public reads of the messages table (that's just for you).
alter table reviews enable row level security;
alter table messages enable row level security;

create policy "Public can read reviews" on reviews
  for select using (true);

create policy "Public can submit reviews" on reviews
  for insert with check (true);

create policy "Public can submit messages" on messages
  for insert with check (true);

-- No select policy on messages — only you can read them, from the
-- Supabase dashboard (Table Editor → messages) or via a service-role key.
