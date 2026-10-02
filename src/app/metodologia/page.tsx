import type { Metadata } from "next";
import Image from "next/image";
import Cta from "@/components/cta";
import { Arrow, Checks } from "@/components/icons";
import { Head, Ladder } from "@/components/sections";
import { BUILDER_STEPS, LLM_ADVICE, MODEL, WORKSHOPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Metodología",
  description: "Evaluación de nivel, talleres semanales de 2 horas, práctica aplicada y seguimiento: así funciona Skillia.",
};

export default function Metodologia() {
  return (
    <>
      <section className="sk-hero sk-hero-sm">
        <div className="sk-blob sk-blob-a" /><div className="sk-blob sk-blob-b" />
        <div className="sk-wrap sk-hero-grid">
          <div className="sk-hero-copy">
            <p className="sk-eyebrow">Metodología</p>
            <h1>Diagnóstico, práctica y <span className="sk-grad">medición</span>. Sin capacitación genérica.</h1>
            <p className="sk-lead">Antes de comenzar, cada empleado realiza una evaluación para identificar su nivel de conocimiento, experiencia y aplicación práctica de IA. Así asignamos contenidos según las necesidades reales.</p>
            <div className="sk-actions">
              <a className="sk-btn" href="/Skillia_Propuesta_Capacitacion_IA.docx" download>Descargar propuesta (Word) <Arrow /></a>
              <a className="sk-btn sk-btn-ghost" href="#contacto">Solicitar diagnóstico</a>
            </div>
          </div>
          <div className="sk-hero-art sk-hero-art-sm" aria-hidden="true">
            <div className="sk-orb" />
            <Image className="sk-hero-pet" src="/img/pets/chart.webp" alt="" width={335} height={356} priority />
          </div>
        </div>
      </section>

      <section className="sk-section" data-bot="laptop|Cuatro etapas: evaluar, aprender, practicar y medir.">
        <div className="sk-wrap">
          <Head eyebrow="Modelo de capacitación" title="Cuatro componentes en cada programa." />
          <div className="sk-table-wrap sk-reveal">
            <table className="sk-table">
              <thead><tr><th>Componente</th><th>Frecuencia</th><th>Duración</th><th>Objetivo</th></tr></thead>
              <tbody>
                {MODEL.map((m) => <tr key={m.t}><th>{m.t}</th><td>{m.f}</td><td>{m.d}</td><td>{m.o}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot="idea|Estos son los cinco niveles de madurez en IA.">
        <div className="sk-wrap">
          <Head eyebrow="Evaluación de nivel de IA" title="Cinco niveles de madurez." />
          <Ladder />
        </div>
      </section>

      <section className="sk-section" data-bot="tablet|Los talleres de 2 horas son 100% prácticos.">
        <div className="sk-wrap">
          <Head eyebrow="Talleres semanales de 2 horas" title="Cada sesión termina con una habilidad aplicable.">
            <p>Los contenidos pueden adaptarse al cargo, área y objetivos de la empresa.</p>
          </Head>
          <div className="sk-cards sk-cards-4">
            {WORKSHOPS.map((t, i) => (
              <article key={t} className="sk-card sk-card-s sk-reveal"><span className="sk-num">{i + 1}</span><p>{t}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="sk-section sk-tint" data-bot="jump|Tu equipo puede crear agentes sin ser programador.">
        <div className="sk-wrap sk-split">
          <div className="sk-reveal">
            <p className="sk-eyebrow">Ruta especial · AI Builders</p>
            <h2>Para empleados de alto perfil: de usuarios a constructores.</h2>
            <p>Identificamos a quienes muestran mayor interés, dominio o potencial de aplicación. La propuesta es reducir la barrera técnica: un empleado no necesita convertirse en programador para aprender a construir agentes.</p>
            <p>Con herramientas no-code, low-code y plataformas modernas, aprenden a diseñar agentes que consultan información, siguen instrucciones, usan herramientas y apoyan procesos empresariales.</p>
          </div>
          <ol className="sk-timeline sk-reveal">
            {BUILDER_STEPS.map((t) => <li key={t}>{t}</li>)}
          </ol>
        </div>
      </section>

      <section className="sk-section" data-bot="think|¿Claude, ChatGPT, Gemini…? Te ayudamos a elegir.">
        <div className="sk-wrap sk-split sk-split-r">
          <div className="sk-reveal">
            <p className="sk-eyebrow">Asesoría en selección de modelos</p>
            <h2>La herramienta adecuada para cada caso de uso, presupuesto y nivel de seguridad.</h2>
            <Checks items={LLM_ADVICE} />
          </div>
          <div className="sk-gov sk-reveal">
            <h3>Seguridad y gobernanza</h3>
            <p>La seguridad, la privacidad y el uso responsable forman parte del temario desde el nivel 1 y se refuerzan con buenas prácticas de control en las rutas avanzadas y en los programas Enterprise.</p>
            <Image src="/img/pets/zen.webp" alt="" width={150} height={140} />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
