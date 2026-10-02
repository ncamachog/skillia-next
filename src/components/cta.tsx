"use client";
import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import { Arrow, Checks } from "./icons";

const initial: LeadState = { status: "idle", message: "" };

export default function Cta() {
  const [state, action, pending] = useActionState(submitLead, initial);
  return (
    <section className="sk-section sk-cta" id="contacto" data-bot="thumbs|¿Hablamos? El diagnóstico inicial toma 30–45 minutos.">
      <div className="sk-wrap sk-cta-grid">
        <div className="sk-cta-copy">
          <p className="sk-eyebrow">Empieza hoy</p>
          <h2>Mide el nivel de IA de tu equipo y construye su ruta de aprendizaje.</h2>
          <p>Cuéntanos sobre tu empresa y te proponemos el programa Skillia que mejor se ajusta a su tamaño y objetivos.</p>
          <Checks items={["Evaluación inicial de 30–45 minutos", "Ruta adaptada al perfil de cada empleado", "Recomendación de herramientas y LLMs"]} />
        </div>
        <form className="sk-form" action={action}>
          <input type="text" name="website" className="sk-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {state.status !== "idle" && (
            <p className={`sk-notice sk-notice-${state.status}`} role="status">{state.message}</p>
          )}
          <label>Nombre<input name="nombre" required autoComplete="name" /></label>
          <label>Empresa<input name="empresa" autoComplete="organization" /></label>
          <label>Correo<input type="email" name="email" required autoComplete="email" /></label>
          <label>
            Tamaño de la empresa
            <select name="tamano" defaultValue="">
              <option value="">Selecciona…</option>
              <option>Menos de 25 empleados</option>
              <option>25–100 empleados</option>
              <option>100–500 empleados</option>
              <option>500–1.000 empleados</option>
            </select>
          </label>
          <label>Mensaje<textarea name="mensaje" rows={3} /></label>
          <button className="sk-btn" type="submit" disabled={pending}>
            {pending ? "Enviando…" : "Solicitar diagnóstico"} <Arrow />
          </button>
        </form>
      </div>
    </section>
  );
}
