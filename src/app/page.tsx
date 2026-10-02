import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/cta";
import { Arrow, Checks } from "@/components/icons";
import { Head, Ladder } from "@/components/sections";
import { MODEL, PLANS, RESULTS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="sk-hero">
        <div className="sk-blob sk-blob-a" /><div className="sk-blob sk-blob-b" />
        <div className="sk-wrap sk-hero-grid">
          <div className="sk-hero-copy">
            <p className="sk-eyebrow">Programa corporativo de capacitación y adopción de IA</p>
            <h1>Que cada empleado sepa usar la <span className="sk-grad">Inteligencia Artificial</span> para trabajar mejor.</h1>
            <p className="sk-lead">Skillia desarrolla las capacidades de IA de tu equipo de forma práctica, progresiva y orientada a resultados: no solo enseñamos herramientas, las llevamos a tareas y procesos reales.</p>
            <div className="sk-actions">
              <Link className="sk-btn" href="/para-quien">¿Para quién es? <Arrow /></Link>
              <Link className="sk-btn sk-btn-ghost" href="/metodologia">Ver metodología</Link>
            </div>
          </div>
          <div className="sk-hero-art" aria-hidden="true">
            <div className="sk-orb" />
            <Image className="sk-hero-pet" src="/img/pets/wave.webp" alt="" width={315} height={386} priority />
            <span className="sk-chip sk-chip-1">Evaluación de nivel</span>
            <span className="sk-chip sk-chip-2">Talleres prácticos</span>
            <span className="sk-chip sk-chip-3">AI Builders</span>
          </div>
        </div>
        <div className="sk-wrap">
          <ul className="sk-verbs">
            <li><b>01</b> Aprender IA</li><li><b>02</b> Aplicarla al trabajo</li><li><b>03</b> Crear soluciones</li><li><b>04</b> Medir adopción</li>
          </ul>
        </div>
      </section>

      <section className="sk-section" data-bot="think|Skillia no es solo un curso de herramientas: es práctica sobre tu trabajo real.">
        <div className="sk-wrap sk-split">
          <figure className="sk-photo sk-reveal">
            <Image src="/img/human-ai.jpg" alt="Una mano humana y una mano robótica acercándose" width={735} height={490} />
          </figure>
          <div className="sk-reveal">
            <p className="sk-eyebrow">¿Qué es Skillia?</p>
            <h2>Capacitación empresarial para trabajar <span className="sk-grad">con</span> IA, no solo hablar de ella.</h2>
            <p>Skillia es un programa diseñado para desarrollar las capacidades de Inteligencia Artificial de los empleados de forma práctica, progresiva y orientada a resultados.</p>
            <p>El objetivo no es solamente enseñar herramientas, sino ayudar a cada persona a incorporar IA en sus tareas y procesos reales.</p>
            <Link className="sk-link" href="/metodologia">Conoce cómo lo hacemos <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot="laptop|Cada programa combina diagnóstico, talleres, práctica y seguimiento.">
        <div className="sk-wrap">
          <Head eyebrow="Modelo de capacitación" title="Un ciclo completo, adaptado al perfil de cada empleado." />
          <div className="sk-cards sk-cards-4">
            {MODEL.map((m, i) => (
              <article key={m.t} className="sk-card sk-reveal">
                <span className="sk-num">{i + 1}</span>
                <h3>{m.t}</h3>
                <p className="sk-meta"><span>{m.f}</span><span>{m.d}</span></p>
                <p>{m.o}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot="idea|Del Explorador al AI Champion: cinco niveles de madurez en IA.">
        <div className="sk-wrap">
          <Head eyebrow="Evaluación de nivel de IA" title="Cinco niveles. Cada persona empieza donde realmente está." />
          <Ladder />
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot="chart|Elige el plan según el tamaño de tu empresa.">
        <div className="sk-wrap">
          <Head eyebrow="Planes Skillia" title="Desde un equipo que quiere arrancar hasta mil empleados." />
          <div className="sk-cards sk-cards-5">
            {PLANS.map((p) => (
              <Link key={p.id} className="sk-plan sk-reveal" href={`/para-quien#${p.id}`}>
                <span className="sk-plan-n">Skillia {p.name}</span>
                <strong>{p.dur}</strong>
                <p>{p.short}</p>
                <span className="sk-link">Ver detalle <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot="jump|¡Resultados medibles para tu empresa!">
        <div className="sk-wrap sk-split sk-split-r">
          <div className="sk-reveal">
            <p className="sk-eyebrow">Resultados para la empresa</p>
            <h2>Adopción medible, no solo asistencia a clases.</h2>
            <Checks items={RESULTS} />
          </div>
          <figure className="sk-photo sk-reveal">
            <Image src="/img/ai-hand.jpg" alt="Mano robótica sosteniendo un chip de IA" width={736} height={736} />
          </figure>
        </div>
      </section>

      <section className="sk-section sk-quote-s" data-bot="zen|Respira. Con método, la IA se aprende paso a paso.">
        <div className="sk-wrap">
          <blockquote className="sk-quote sk-reveal">
            <p>“No buscamos que todos los empleados sean expertos en IA.<br />Buscamos que cada empleado sepa cómo usarla para trabajar mejor.”</p>
            <cite>Principio de Skillia</cite>
          </blockquote>
        </div>
      </section>

      <Cta />
    </>
  );
}
