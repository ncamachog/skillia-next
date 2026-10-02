"use client";
import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import { bot } from "@/lib/content";
import { Arrow, Checks } from "./icons";
import { useLocale } from "./locale-provider";

const initial: LeadState = { status: "idle", message: "" };
const SIZE_VALUES = ["lt25", "25-100", "100-500", "500-1000"];

export default function Cta() {
  const { t } = useLocale();
  const c = t.cta;
  const [state, action, pending] = useActionState(submitLead, initial);
  return (
    <section className="sk-section sk-cta" id="contacto" data-bot={bot("thumbs", t.bot.sections.cta)}>
      <div className="sk-wrap sk-cta-grid">
        <div className="sk-cta-copy">
          <p className="sk-eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
          <Checks items={c.checks} />
        </div>
        <form className="sk-form sk-neon" action={action}>
          <input type="text" name="website" className="sk-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {state.status !== "idle" && <p className={`sk-notice sk-notice-${state.status}`} role="status">{state.message}</p>}
          <label>{c.name}<input name="nombre" required autoComplete="name" /></label>
          <label>{c.company}<input name="empresa" autoComplete="organization" /></label>
          <label>{c.email}<input type="email" name="email" required autoComplete="email" /></label>
          <label>
            {c.size}
            <select name="tamano" defaultValue="">
              <option value="">{c.choose}</option>
              {c.sizes.map((s, i) => <option key={s} value={SIZE_VALUES[i]}>{s}</option>)}
            </select>
          </label>
          <label>{c.message}<textarea name="mensaje" rows={3} /></label>
          <button className="sk-btn" type="submit" disabled={pending}>
            {pending ? c.sending : c.send} <Arrow />
          </button>
        </form>
      </div>
    </section>
  );
}
