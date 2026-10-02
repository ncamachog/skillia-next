import type { Metadata } from "next";
import Image from "next/image";
import Cta from "@/components/cta";
import { Head } from "@/components/sections";
import SizeSelector from "@/components/size-selector";
import { bot, getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const m = getContent(await getLocale()).meta.paraQuien;
  return { title: m.title, description: m.desc };
}

export default async function ParaQuien() {
  const t = getContent(await getLocale());
  const w = t.who;
  return (
    <>
      <section className="sk-hero sk-hero-sm">
        <div className="sk-blob sk-blob-a" /><div className="sk-blob sk-blob-b" />
        <div className="sk-wrap sk-hero-grid">
          <div className="sk-hero-copy">
            <p className="sk-eyebrow">{w.eyebrow}</p>
            <h1>{w.h1[0]}<span className="sk-grad">{w.h1[1]}</span>{w.h1[2]}</h1>
            <p className="sk-lead">{w.lead}</p>
          </div>
          <div className="sk-hero-art sk-hero-art-sm" aria-hidden="true">
            <div className="sk-orb" />
            <Image className="sk-hero-pet" src="/img/pets/point.webp" alt="" width={520} height={702} priority />
          </div>
        </div>
      </section>

      <SizeSelector />

      <section className="sk-section sk-tint" data-bot={bot("chart", t.bot.sections.packages)}>
        <div className="sk-wrap">
          <Head eyebrow={w.pkgEyebrow} title={w.pkgTitle} />
          <div className="sk-table-wrap sk-neon sk-reveal">
            <table className="sk-table">
              <thead><tr>{w.pkgCols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {t.packages.map((p) => (
                  <tr key={p.n}><th>{p.n}</th><td>{p.size}</td><td>{p.focus}</td><td>{p.result}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot={bot("idea", t.bot.sections.profiles)}>
        <div className="sk-wrap">
          <Head eyebrow={w.profEyebrow} title={w.profTitle} />
          <div className="sk-cards sk-cards-4">
            {t.profiles.map((p, i) => (
              <article key={p.t} className="sk-card sk-neon sk-reveal"><span className="sk-num">{i + 1}</span><h3>{p.t}</h3><p>{p.d}</p></article>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
