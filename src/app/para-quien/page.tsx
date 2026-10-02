import type { Metadata } from "next";
import Image from "next/image";
import Cta from "@/components/cta";
import { Head } from "@/components/sections";
import SizeSelector from "@/components/size-selector";
import { PACKAGES, PROFILES } from "@/lib/content";

export const metadata: Metadata = {
  title: "¿Para quién es?",
  description: "Skillia crece al tamaño de tu empresa: Start y Pro para equipos pequeños, Team, Business y Enterprise hasta 1.000 empleados.",
};

export default function ParaQuien() {
  return (
    <>
      <section className="sk-hero sk-hero-sm">
        <div className="sk-blob sk-blob-a" /><div className="sk-blob sk-blob-b" />
        <div className="sk-wrap sk-hero-grid">
          <div className="sk-hero-copy">
            <p className="sk-eyebrow">¿Para quién es Skillia?</p>
            <h1>Un programa que crece <span className="sk-grad">al tamaño de tu empresa</span>.</h1>
            <p className="sk-lead">Desde un equipo de pocas personas hasta organizaciones de 1.000 empleados. Mueve el control, indícanos cuántas personas son y te mostramos el plan que corresponde.</p>
          </div>
          <div className="sk-hero-art sk-hero-art-sm" aria-hidden="true">
            <div className="sk-orb" />
            <Image className="sk-hero-pet" src="/img/pets/point.webp" alt="" width={260} height={351} priority />
          </div>
        </div>
      </section>

      <SizeSelector />

      <section className="sk-section sk-tint" data-bot="chart|Cada paquete tiene un enfoque y un resultado esperado.">
        <div className="sk-wrap">
          <Head eyebrow="Paquetes empresariales" title="Enfoque y resultado esperado según el tamaño." />
          <div className="sk-table-wrap sk-reveal">
            <table className="sk-table">
              <thead><tr><th>Paquete</th><th>Tamaño</th><th>Enfoque</th><th>Resultado esperado</th></tr></thead>
              <tbody>
                {PACKAGES.map((p) => (
                  <tr key={p.n}><th>{p.n}</th><td>{p.size}</td><td>{p.focus}</td><td>{p.result}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot="idea|Dentro de cada empresa, cada persona recibe una ruta distinta.">
        <div className="sk-wrap">
          <Head eyebrow="Y dentro de la empresa" title="La ruta se adapta a cada perfil, cargo y área." />
          <div className="sk-cards sk-cards-4">
            {PROFILES.map((p, i) => (
              <article key={p.t} className="sk-card sk-reveal"><span className="sk-num">{i + 1}</span><h3>{p.t}</h3><p>{p.d}</p></article>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
