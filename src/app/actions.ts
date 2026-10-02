"use server";

import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export type LeadState = { status: "idle" | "ok" | "err"; message: string };

const SIZES = ["lt25", "25-100", "100-500", "500-1000"];

/**
 * Recibe la solicitud de diagnóstico. Todavía no hay proveedor de correo conectado:
 * la solicitud queda en los logs de Vercel como `[SKILLIA_LEAD]`.
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const locale = await getLocale();
  const c = getContent(locale).cta;
  if (String(formData.get("website") ?? "")) return { status: "ok", message: c.ok }; // honeypot
  const clean = (k: string, max = 400) => String(formData.get(k) ?? "").trim().slice(0, max);
  const nombre = clean("nombre", 120);
  const email = clean("email", 160);
  const empresa = clean("empresa", 160);
  const tamano = SIZES.includes(clean("tamano")) ? clean("tamano") : "";
  const mensaje = clean("mensaje", 2000);
  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { status: "err", message: c.err };
  console.log("[SKILLIA_LEAD]", JSON.stringify({ at: new Date().toISOString(), locale, nombre, empresa, email, tamano, mensaje }));
  return { status: "ok", message: c.ok };
}
