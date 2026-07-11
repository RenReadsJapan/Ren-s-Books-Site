export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <span
        className="font-mono text-xs uppercase tracking-[0.18em]"
        style={{ color: "var(--accent-gold)" }}
      >
        About the author
      </span>
      <h1
        className="font-display text-5xl mt-4 mb-8"
        style={{ color: "var(--paper-text)" }}
      >
        Raymond Paquette
      </h1>
      <div
        className="space-y-5 text-lg leading-relaxed"
        style={{ color: "var(--paper-text-soft)" }}
      >
        <p>
          Raymond has spent twenty years teaching English in Japan, most of
          it in the Kansai region, working with adult learners and junior
          high school students alike.
        </p>
        <p>
          That classroom experience shapes everything he writes: graded
          readers that learners actually want to finish, set in a Japan
          they recognize, at a language level that builds confidence
          without condescension.
        </p>
        <p>
          He is the author of the <strong>Ren English Readers</strong>{" "}
          series for young learners, <strong>Everyday Together</strong> for
          adult learners, and the YA mystery/thriller series{" "}
          <strong>Shinji</strong>. He is based in Nara.
        </p>
      </div>
    </div>
  );
}
