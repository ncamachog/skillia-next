import type { CSSProperties } from "react";

export function Head({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="sk-head sk-reveal">
      <p className="sk-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export function Ladder({ levels, word }: { levels: { t: string; d: string }[]; word: string }) {
  return (
    <ol className="sk-ladder">
      {levels.map((l, i) => (
        <li key={l.t} className="sk-step sk-neon sk-reveal" style={{ "--h": `${(i + 1) * 20}%` } as CSSProperties}>
          <span className="sk-step-n">{word} {i + 1}</span>
          <h3>{l.t}</h3>
          <p>{l.d}</p>
        </li>
      ))}
    </ol>
  );
}
