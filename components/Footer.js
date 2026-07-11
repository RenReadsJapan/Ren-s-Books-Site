export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "var(--rule)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4">
        <p
          className="font-mono text-[11px] uppercase tracking-[0.14em]"
          style={{ color: "var(--paper-text-soft)" }}
        >
          © {new Date().getFullYear()} Raymond Paquette
        </p>
        <p
          className="font-mono text-[11px] uppercase tracking-[0.14em]"
          style={{ color: "var(--paper-text-soft)" }}
        >
          Nara, Japan
        </p>
      </div>
    </footer>
  );
}
