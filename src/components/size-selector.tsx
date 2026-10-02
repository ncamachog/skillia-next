"use client";
import { useState } from "react";
import { Checks } from "./icons";
import { useLocale } from "./locale-provider";
import { bot, posFromSize, sizeFromPos, tierFor, type PlanId } from "@/lib/content";

const SEG_VALUES = [10, 60, 250, 750];
const MARKS = [
  { l: "5", p: 0 },
  { l: "25", p: 30.4 },
  { l: "100", p: 56.6 },
  { l: "500", p: 86.9 },
  { l: "1.000", p: 100 },
];
const ORDER: PlanId[] = ["start", "pro", "team", "business", "enterprise"];

export default function SizeSelector() {
  const { t, locale } = useLocale();
  const w = t.who;
  const [pos, setPos] = useState(posFromSize(60));
  const n = sizeFromPos(pos);
  const tier = tierFor(n);
  const say = (pose: string, text: string) => window.dispatchEvent(new CustomEvent("sk-bot-say", { detail: { pose, text } }));
  const label = n >= 1000 ? (locale === "en" ? "1,000" : "1.000") : n.toLocaleString(locale === "en" ? "en-US" : "es-CO");

  return (
    <section className="sk-section sk-selector" id="selector" data-bot={bot("point", t.bot.sections.selector)}>
      <div className="sk-wrap">
        <div className="sk-sel-card sk-neon sk-reveal">
          <div className="sk-sel-top">
            <div>
              <label htmlFor="sk-range" className="sk-sel-label">{w.question}</label>
              <p className="sk-sel-out"><output htmlFor="sk-range">{label}</output> <span>{w.employees}</span></p>
            </div>
            <div className="sk-seg" role="group" aria-label={w.quick}>
              {w.segs.map((s, i) => (
                <button key={s} type="button" className={tier.seg === i ? "on" : ""} onClick={() => { setPos(posFromSize(SEG_VALUES[i])); say("thumbs", w.saidBubble); }}>
                  {s}
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
            {MARKS.map((m) => <span key={m.l} style={{ left: `${m.p}%` }}>{locale === "en" && m.l === "1.000" ? "1,000" : m.l}</span>)}
          </div>
          <div className="sk-reco" id="sk-reco" aria-live="polite">
            <strong>{t.tiers[tier.key].title}</strong>
            <span>{t.tiers[tier.key].text}</span>
          </div>
        </div>

        <div className="sk-plans-grid">
          {ORDER.map((id) => {
            const p = t.plans[id];
            return (
              <article key={id} className={`sk-planbox sk-neon sk-reveal${tier.ids.includes(id) ? " is-match" : ""}`} id={id}>
                <header>
                  <span className="sk-plan-n">Skillia {p.name}</span>
                  <h3>{p.dur}</h3>
                  <p className="sk-tag">{p.tag}</p>
                </header>
                <p>{p.desc}</p>
                <Checks items={p.items} />
                <a className="sk-btn sk-btn-sm" href="#contacto">{t.ui.planBtn}</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
