export default function Stars({ value, size = 16 }) {
  const rounded = Math.round(value * 2) / 2;
  return (
    <span
      aria-label={`${value.toFixed(1)} out of 5 stars`}
      className="inline-flex gap-0.5"
      style={{ color: "var(--accent-gold)" }}
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const fill =
          rounded >= n ? 1 : rounded >= n - 0.5 ? 0.5 : 0;
        return (
          <svg
            key={n}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`star-fill-${n}-${value}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.47 5.27 5.8.6-4.32 3.98 1.2 5.7L10 14.9l-5.15 3.15 1.2-5.7L1.73 7.37l5.8-.6L10 1.5z"
              fill={`url(#star-fill-${n}-${value})`}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </span>
  );
}
