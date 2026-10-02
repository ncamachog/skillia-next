import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/cta";
import { Arrow, Checks } from "@/components/icons";
import { Head, Ladder } from "@/components/sections";
import { bot, getContent, type PlanId } from "@/lib/content";
import { getLocale } from "@/lib/locale";

const ORDER: PlanId[] = ["start", "pro", "team", "business", "enterprise"];

export default async function Home() {
  const t = getContent(await getLocale());
  const h = t.home;
  const b = t.bot.sections;
  return (
    <>
      <section className="sk-hero">
        <div className="sk-blob sk-blob-a" /><div className="sk-blob sk-blob-b" />
        <div className="sk-wrap sk-hero-grid">
          <div className="sk-hero-copy">
            <p className="sk-eyebrow">{h.eyebrow}</p>
            <h1>{h.h1[0]}<span className="sk-grad">{h.h1[1]}</span>{h.h1[2]}</h1>
            <p className="sk-lead">{h.lead}</p>
            <div className="sk-actions">
              <Link className="sk-btn" href="/para-quien">{h.btnWho} <Arrow /></Link>
              <Link className="sk-btn sk-btn-ghost" href="/metodologia">{h.btnMethod}</Link>
            </div>
          </div>
          <div className="sk-hero-art" aria-hidden="true">
            <div className="sk-orb" />
            <Image className="sk-hero-pet" src="/img/pets/wave.webp" alt="" width={630} height={772} priority />
            <span className="sk-chip sk-chip-1">{h.chips[0]}</span>
            <span className="sk-chip sk-chip-2">{h.chips[1]}</span>
            <span className="sk-chip sk-chip-3">{h.chips[2]}</span>
          </div>
        </div>
        <div className="sk-wrap">
          <ul className="sk-verbs">
            {h.verbs.map((v, i) => <li key={v} className="sk-neon"><b>0{i + 1}</b> {v}</li>)}
          </ul>
        </div>
      </section>

      <section className="sk-section" data-bot={bot("think", b.what)}>
        <div className="sk-wrap sk-split">
          <figure className="sk-photo sk-neon sk-reveal">
            <Image src="/img/human-ai.jpg" alt={h.whatAlt} width={1800} height={1200} sizes="(max-width: 860px) 100vw, 560px" />
          </figure>
          <div className="sk-reveal">
            <p className="sk-eyebrow">{h.whatEyebrow}</p>
            <h2>{h.whatH2[0]}<span className="sk-grad">{h.whatH2[1]}</span>{h.whatH2[2]}</h2>
            <p>{h.whatP1}</p>
            <p>{h.whatP2}</p>
            <Link className="sk-link" href="/metodologia">{h.whatLink} <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot={bot("laptop", b.model)}>
        <div className="sk-wrap">
          <Head eyebrow={h.modelEyebrow} title={h.modelTitle} />
          <div className="sk-cards sk-cards-4">
            {t.model.map((m, i) => (
              <article key={m.t} className="sk-card sk-neon sk-reveal">
                <span className="sk-num">{i + 1}</span>
                <h3>{m.t}</h3>
                <p className="sk-meta"><span>{m.f}</span><span>{m.d}</span></p>
                <p>{m.o}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot={bot("idea", b.levels)}>
        <div className="sk-wrap">
          <Head eyebrow={h.levelsEyebrow} title={h.levelsTitle} />
          <Ladder levels={t.levels} word={t.levelWord} />
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot={bot("chart", b.plans)}>
        <div className="sk-wrap">
          <Head eyebrow={h.plansEyebrow} title={h.plansTitle} />
          <div className="sk-cards sk-cards-5">
            {ORDER.map((id) => {
              const p = t.plans[id];
              return (
                <Link key={id} className="sk-plan sk-neon sk-reveal" href={`/para-quien#${id}`}>
                  <span className="sk-plan-n">Skillia {p.name}</span>
                  <strong>{p.dur}</strong>
                  <p>{p.short}</p>
                  <span className="sk-link">{t.ui.seeDetail} <Arrow /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot={bot("jump", b.results)}>
        <div className="sk-wrap sk-split sk-split-r">
          <div className="sk-reveal">
            <p className="sk-eyebrow">{h.resultsEyebrow}</p>
            <h2>{h.resultsTitle}</h2>
            <Checks items={t.results} />
          </div>
          <figure className="sk-photo sk-neon sk-reveal">
            <Image src="/img/ai-hand.jpg" alt={h.resultsAlt} width={1800} height={1500} sizes="(max-width: 860px) 100vw, 560px" />
          </figure>
        </div>
      </section>

      <section className="sk-section sk-quote-s" data-bot={bot("zen", b.quote)}>
        <div className="sk-wrap">
          <blockquote className="sk-quote sk-reveal">
            <p>{h.quote[0]}<br />{h.quote[1]}</p>
            <cite>{h.cite}</cite>
          </blockquote>
        </div>
      </section>

      <Cta />
    </>
  );
}
