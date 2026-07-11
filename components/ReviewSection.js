"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Stars from "@/components/Stars";

export default function ReviewSection({ bookSlug, accent }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    let active = true;
    supabase
      .from("reviews")
      .select("*")
      .eq("book_slug", bookSlug)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!active) return;
        if (!error && data) setReviews(data);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [bookSlug]);

  const average =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!supabase) return;
    if (!name.trim() || !comment.trim()) return;

    setSubmitting(true);
    setStatus(null);
    const { data, error } = await supabase
      .from("reviews")
      .insert({
        book_slug: bookSlug,
        reviewer_name: name.trim(),
        rating,
        comment: comment.trim(),
      })
      .select();

    setSubmitting(false);
    if (error) {
      setStatus("error");
      return;
    }
    if (data) setReviews((prev) => [data[0], ...prev]);
    setName("");
    setComment("");
    setRating(5);
    setStatus("success");
  }

  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-6">
        <h2 className="font-display text-2xl" style={{ color: "var(--paper-text)" }}>
          Reader Reviews
        </h2>
        {reviews.length > 0 && (
          <div className="flex items-center gap-2">
            <Stars value={average} />
            <span
              className="font-mono text-xs"
              style={{ color: "var(--paper-text-soft)" }}
            >
              {average.toFixed(1)} · {reviews.length}{" "}
              {reviews.length === 1 ? "review" : "reviews"}
            </span>
          </div>
        )}
      </div>

      {!supabase ? (
        <p
          className="text-sm rounded-md p-4"
          style={{
            background: "var(--bg-ink-raised)",
            color: "var(--paper-text-soft)",
            border: "1px dashed var(--rule)",
          }}
        >
          Reviews aren&rsquo;t connected yet. Set up Supabase (see README.md)
          to let readers rate and comment on this book.
        </p>
      ) : (
        <>
          {loading ? (
            <p
              className="text-sm"
              style={{ color: "var(--paper-text-soft)" }}
            >
              Loading reviews…
            </p>
          ) : reviews.length === 0 ? (
            <p
              className="text-sm mb-8"
              style={{ color: "var(--paper-text-soft)" }}
            >
              No reviews yet — be the first to leave one.
            </p>
          ) : (
            <ul className="space-y-4 mb-10">
              {reviews.map((r) => (
                <li
                  key={r.id}
                  className="index-card rounded-sm p-5 pt-6"
                  style={{
                    borderLeft: `4px solid ${accent}`,
                  }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <span className="font-display text-lg">
                      {r.reviewer_name}
                    </span>
                    <Stars value={r.rating} size={14} />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--ink-text-soft)" }}
                  >
                    {r.comment}
                  </p>
                </li>
              ))}
            </ul>
          )}

          <form
            onSubmit={handleSubmit}
            className="rounded-md p-6"
            style={{
              background: "var(--bg-ink-raised)",
              border: "1px solid var(--rule)",
            }}
          >
            <h3
              className="font-mono text-xs uppercase tracking-[0.14em] mb-4"
              style={{ color: "var(--paper-text-soft)" }}
            >
              Leave a review
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <label className="flex flex-col gap-1.5">
                <span
                  className="font-mono text-[11px] uppercase tracking-wide"
                  style={{ color: "var(--paper-text-soft)" }}
                >
                  Your name
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded px-3 py-2 text-sm"
                  style={{
                    background: "var(--bg-paper)",
                    color: "var(--ink-text)",
                  }}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span
                  className="font-mono text-[11px] uppercase tracking-wide"
                  style={{ color: "var(--paper-text-soft)" }}
                >
                  Rating
                </span>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="rounded px-3 py-2 text-sm"
                  style={{
                    background: "var(--bg-paper)",
                    color: "var(--ink-text)",
                  }}
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                      {n} star{n !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-1.5 mb-4">
              <span
                className="font-mono text-[11px] uppercase tracking-wide"
                style={{ color: "var(--paper-text-soft)" }}
              >
                Your review
              </span>
              <textarea
                required
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="rounded px-3 py-2 text-sm resize-none"
                style={{
                  background: "var(--bg-paper)",
                  color: "var(--ink-text)",
                }}
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="font-mono text-xs uppercase tracking-[0.14em] px-5 py-2.5 rounded-sm transition-opacity disabled:opacity-50"
              style={{ background: accent, color: "var(--bg-ink)" }}
            >
              {submitting ? "Submitting…" : "Submit review"}
            </button>
            {status === "success" && (
              <p
                className="text-xs mt-3"
                style={{ color: "var(--accent-gold)" }}
              >
                Thanks — your review has been posted.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs mt-3" style={{ color: "var(--accent-ren)" }}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </>
      )}
    </section>
  );
}
