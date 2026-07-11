"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!supabase) return;
    setSubmitting(true);
    setStatus(null);
    const { error } = await supabase
      .from("messages")
      .insert({ name: name.trim(), email: email.trim(), message: message.trim() });
    setSubmitting(false);
    if (error) {
      setStatus("error");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    setStatus("success");
  }

  if (!supabase) {
    return (
      <p
        className="text-sm rounded-md p-4"
        style={{
          background: "var(--bg-ink-raised)",
          color: "var(--paper-text-soft)",
          border: "1px dashed var(--rule)",
        }}
      >
        The contact form isn&rsquo;t connected yet. Set up Supabase (see
        README.md) to start receiving messages here.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          className="rounded px-3 py-2.5 text-sm"
          style={{ background: "var(--bg-paper)", color: "var(--ink-text)" }}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span
          className="font-mono text-[11px] uppercase tracking-wide"
          style={{ color: "var(--paper-text-soft)" }}
        >
          Your email
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded px-3 py-2.5 text-sm"
          style={{ background: "var(--bg-paper)", color: "var(--ink-text)" }}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span
          className="font-mono text-[11px] uppercase tracking-wide"
          style={{ color: "var(--paper-text-soft)" }}
        >
          Message
        </span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded px-3 py-2.5 text-sm resize-none"
          style={{ background: "var(--bg-paper)", color: "var(--ink-text)" }}
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="font-mono text-xs uppercase tracking-[0.14em] px-6 py-3 rounded-sm disabled:opacity-50"
        style={{ background: "var(--accent-gold)", color: "var(--bg-ink)" }}
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-xs" style={{ color: "var(--accent-gold)" }}>
          Thanks — your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs" style={{ color: "var(--accent-ren)" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
