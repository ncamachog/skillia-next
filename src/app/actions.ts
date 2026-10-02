"use server";

export type LeadState = { status: "idle" | "ok" | "err"; message: string };

const SIZES = ["", "Menos de 25 empleados", "25–100 empleados", "100–500 empleados", "500–1.000 empleados"];

/**
 * Recibe la solicitud de diagnóstico. Todavía no hay proveedor de correo conectado:
 * la solicitud queda en los logs de Vercel como `[SKILLIA_LEAD]`.
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  if (String(formData.get("website") ?? "")) return { status: "ok", message: "¡Gracias!" }; // honeypot
  const clean = (k: string, max = 400) => String(formData.get(k) ?? "").trim().slice(0, max);
  const nombre = clean("nombre", 120);
  const email = clean("email", 160);
  const empresa = clean("empresa", 160);
  const tamano = SIZES.includes(clean("tamano")) ? clean("tamano") : "";
  const mensaje = clean("mensaje", 2000);
  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "err", message: "Revisa tu nombre y correo e inténtalo de nuevo." };
  }
  console.log("[SKILLIA_LEAD]", JSON.stringify({ at: new Date().toISOString(), nombre, empresa, email, tamano, mensaje }));
  return { status: "ok", message: "¡Gracias! Recibimos tu solicitud y te contactaremos pronto." };
}
