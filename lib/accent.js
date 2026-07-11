export const accentMap = {
  ren: { strong: "var(--accent-ren)", soft: "var(--accent-ren-soft)" },
  together: {
    strong: "var(--accent-together)",
    soft: "var(--accent-together-soft)",
  },
  shinji: { strong: "var(--accent-shinji)", soft: "var(--accent-shinji-soft)" },
};

export function accentOf(key) {
  return accentMap[key] || accentMap.ren;
}
