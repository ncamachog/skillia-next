"use client";
import { useState } from "react";
import { Checks } from "./icons";
import { PLANS, posFromSize, sizeFromPos, tierFor } from "@/lib/content";

const SEGMENTS = [
  { label: "< 25", v: 10 },
  { label: "25–100", v: 60 },
  { label: "100–500", v: 250 },
  { label: "500–1.000", v: 750 },
];
const MARKS = [
  { l: "5", p: 0 },
  { l: "25", p: 30.4 },
  { l: "100", p: 56.6 },
  { l: "500", p: 86.9 },
  { l: "1.000", p: 100 },
];

export default function SizeSelector() {
  const [pos, setPos] = useState(posFromSize(60));
  const n = sizeFromPos(pos);
  const tier = tierFor(n);
  const say = (pose: string, text: string) => window.dispatchEvent(new CustomEvent("sk-bot-say", { detail: { pose, text } }));

  return (
    <section className="sk-section sk-selector" id="selector" data-bot="point|Mueve el control: te muestro el plan ideal para tu empresa.">
      <div className="sk-wrap">
        <div className="sk-sel-card sk-reveal">
          <div className="sk-sel-top">
            <div>
              <label htmlFor="sk-range" className="sk-sel-label">¿Cuántos empleados tiene tu empresa?</label>
              <p className="sk-sel-out"><output htmlFor="sk-range">{n >= 1000 ? "1.000" : n.toLocaleString("es-CO")}</output> <span>empleados</span></p>
            </div>
            <div className="sk-seg" role="group" aria-label="Rangos rápidos">
              {SEGMENTS.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  className={tier.seg === i ? "on" : ""}
                  onClick={() => { setPos(posFromSize(s.v)); say("thumbs", "¡Anotado! Mira el plan resaltado."); }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <input
            id="sk-range"
            className="sk-range"
            type="range"
            min={0}
            max={100}
            step={1}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            style={{ ["--p" as string]: `${pos}%` }}
            aria-describedby="sk-reco"
          />
          <div className="sk-scale" aria-hidden="true">
            {MARKS.map((m) => <span key={m.l} style={{ left: `${m.p}%` }}>{m.l}</span>)}
          </div>
          <div className="sk-reco" id="sk-reco" aria-live="polite">
            <strong>{tier.title}</strong>
            <span>{tier.text}</span>
          </div>
        </div>

        <div className="sk-plans-grid">
          {PLANS.map((p) => (
            <article key={p.id} className={`sk-planbox sk-reveal${tier.ids.includes(p.id) ? " is-match" : ""}`} id={p.id}>
              <header>
                <span className="sk-plan-n">Skillia {p.name}</span>
                <h3>{p.dur}</h3>
                <p className="sk-tag">{p.tag}</p>
              </header>
              <p>{p.desc}</p>
              <Checks items={p.items} />
              <a className="sk-btn sk-btn-sm" href="#contacto">Solicitar este plan</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
