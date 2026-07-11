import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <span
        className="font-mono text-xs uppercase tracking-[0.18em]"
        style={{ color: "var(--accent-gold)" }}
      >
        Get in touch
      </span>
      <h1
        className="font-display text-5xl mt-4 mb-8"
        style={{ color: "var(--paper-text)" }}
      >
        Contact
      </h1>
      <p
        className="text-base leading-relaxed mb-10"
        style={{ color: "var(--paper-text-soft)" }}
      >
        Questions about the books, classroom orders, or anything else —
        send a message below.
      </p>
      <ContactForm />
    </div>
  );
}
