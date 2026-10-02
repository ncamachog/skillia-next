import type { CSSProperties } from "react";
import { LEVELS } from "@/lib/content";

export function Head({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="sk-head sk-reveal">
      <p className="sk-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export function Ladder() {
  return (
    <ol className="sk-ladder">
      {LEVELS.map((l, i) => (
        <li key={l.t} className="sk-step sk-reveal" style={{ "--h": `${(i + 1) * 20}%` } as CSSProperties}>
          <span className="sk-step-n">Nivel {i + 1}</span>
          <h3>{l.t}</h3>
          <p>{l.d}</p>
        </li>
      ))}
    </ol>
  );
}
