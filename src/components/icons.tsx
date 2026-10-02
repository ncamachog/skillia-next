export function Check() {
  return (
    <svg className="sk-i" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".14" />
      <path d="M5.8 10.4l2.9 2.9 5.5-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Arrow() {
  return (
    <svg className="sk-i" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Checks({ items }: { items: readonly string[] }) {
  return (
    <ul className="sk-checks">
      {items.map((i) => (
        <li key={i}>
          <Check />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
