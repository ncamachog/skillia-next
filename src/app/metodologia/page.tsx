import type { Metadata } from "next";
import Image from "next/image";
import Cta from "@/components/cta";
import { Arrow, Checks } from "@/components/icons";
import { Head, Ladder } from "@/components/sections";
import { bot, getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const m = getContent(await getLocale()).meta.metodologia;
  return { title: m.title, description: m.desc };
}

export default async function Metodologia() {
  const t = getContent(await getLocale());
  const m = t.method;
  const b = t.bot.sections;
  return (
    <>
      <section className="sk-hero sk-hero-sm">
        <div className="sk-blob sk-blob-a" /><div className="sk-blob sk-blob-b" />
        <div className="sk-wrap sk-hero-grid">
          <div className="sk-hero-copy">
            <p className="sk-eyebrow">{m.eyebrow}</p>
            <h1>{m.h1[0]}<span className="sk-grad">{m.h1[1]}</span>{m.h1[2]}</h1>
            <p className="sk-lead">{m.lead}</p>
            <div className="sk-actions">
              <a className="sk-btn" href="/Skillia_Propuesta_Capacitacion_IA.docx" download>{t.ui.downloadWord} <Arrow /></a>
              <a className="sk-btn sk-btn-ghost" href="#contacto">{t.ui.request}</a>
            </div>
          </div>
          <div className="sk-hero-art sk-hero-art-sm" aria-hidden="true">
            <div className="sk-orb" />
            <Image className="sk-hero-pet" src="/img/pets/chart.webp" alt="" width={670} height={712} priority />
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot={bot("laptop", b.mModel)}>
        <div className="sk-wrap">
          <Head eyebrow={m.modelEyebrow} title={m.modelTitle} />
          <div className="sk-table-wrap sk-neon sk-reveal">
            <table className="sk-table">
              <thead><tr>{m.modelCols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {t.model.map((r) => <tr key={r.t}><th>{r.t}</th><td>{r.f}</td><td>{r.d}</td><td>{r.o}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot={bot("idea", b.mLevels)}>
        <div className="sk-wrap">
          <Head eyebrow={m.levelsEyebrow} title={m.levelsTitle} />
          <Ladder levels={t.levels} word={t.levelWord} />
        </div>
      </section>

      <section className="sk-section" data-bot={bot("tablet", b.mWorkshops)}>
        <div className="sk-wrap">
          <Head eyebrow={m.wsEyebrow} title={m.wsTitle}><p>{m.wsNote}</p></Head>
          <div className="sk-cards sk-cards-4">
            {t.workshops.map((w, i) => (
              <article key={w} className="sk-card sk-card-s sk-neon sk-reveal"><span className="sk-num">{i + 1}</span><p>{w}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot={bot("jump", b.mBuilder)}>
        <div className="sk-wrap sk-split">
          <div className="sk-reveal">
            <p className="sk-eyebrow">{m.bEyebrow}</p>
            <h2>{m.bTitle}</h2>
            <p>{m.bP1}</p>
            <p>{m.bP2}</p>
          </div>
          <ol className="sk-timeline sk-reveal">
            {t.builder.map((s) => <li key={s} className="sk-neon">{s}</li>)}
          </ol>
        </div>
      </section>

      <section className="sk-section" data-bot={bot("think", b.mLlm)}>
        <div className="sk-wrap sk-split sk-split-r">
          <div className="sk-reveal">
            <p className="sk-eyebrow">{m.lEyebrow}</p>
            <h2>{m.lTitle}</h2>
            <Checks items={t.llm} />
          </div>
          <div className="sk-gov sk-neon sk-reveal">
            <h3>{m.govTitle}</h3>
            <p>{m.govText}</p>
            <Image src="/img/pets/zen.webp" alt="" width={618} height={656} />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
