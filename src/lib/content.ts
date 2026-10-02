export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://skillia-next.vercel.app";

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/para-quien", label: "¿Para quién es?" },
  { href: "/metodologia", label: "Metodología" },
] as const;

export const LEVELS = [
  { t: "Explorador", d: "Conceptos básicos, seguridad, prompting y uso responsable." },
  { t: "Usuario", d: "Uso frecuente de asistentes de IA para productividad y tareas profesionales." },
  { t: "Power User", d: "Automatización de tareas, workflows, análisis y uso avanzado de herramientas." },
  { t: "AI Builder", d: "Creación de soluciones, agentes y flujos más sofisticados con herramientas no-code/low-code." },
  { t: "AI Champion", d: "Capacidad para impulsar adopción, identificar casos de uso y acompañar equipos." },
] as const;

export const MODEL = [
  { t: "Evaluación inicial", f: "Inicio del programa", d: "30–45 min", o: "Identificar el nivel de madurez y necesidades de IA." },
  { t: "Taller práctico", f: "Semanal", d: "2 horas", o: "Aprender y aplicar herramientas y metodologías de IA." },
  { t: "Práctica aplicada", f: "Entre talleres", d: "Flexible", o: "Llevar lo aprendido al trabajo cotidiano." },
  { t: "Seguimiento y evaluación", f: "Por etapa", d: "Según plan", o: "Medir progreso, adopción y oportunidades de mejora." },
] as const;

export const WORKSHOPS = [
  "Fundamentos de IA generativa y buenas prácticas.",
  "Prompting profesional y diseño de instrucciones.",
  "Investigación, análisis y síntesis con IA.",
  "Creación y edición de documentos, presentaciones y contenidos.",
  "IA aplicada a ventas, servicio al cliente, operaciones, marketing, finanzas y otras áreas.",
  "Automatización de tareas y diseño de workflows.",
  "Creación de agentes de IA con herramientas accesibles.",
  "Seguridad, privacidad, gobernanza y uso responsable de IA.",
];

export const BUILDER_STEPS = [
  "Identificación de casos de uso.",
  "Diseño del flujo y comportamiento del agente.",
  "Conexión con documentos, herramientas y fuentes de información.",
  "Pruebas, evaluación y mejora del agente.",
  "Buenas prácticas de seguridad y control.",
  "Presentación del prototipo y documentación para el equipo.",
];

export const LLM_ADVICE = [
  "Comparación de alternativas como Claude, ChatGPT, Gemini y otros LLMs disponibles.",
  "Recomendaciones según el tipo de tarea, área y perfil del usuario.",
  "Análisis de productividad, facilidad de adopción y necesidades de integración.",
  "Orientación sobre planes individuales, equipos y opciones empresariales.",
  "Estrategia de herramientas para evitar compras innecesarias o duplicadas.",
  "Revisión periódica de nuevas herramientas y capacidades relevantes.",
];

export const RESULTS = [
  "Empleados con un nivel de IA medido y una ruta de aprendizaje definida.",
  "Mayor productividad en tareas susceptibles de apoyo con IA.",
  "Casos de uso con potencial de automatización identificados.",
  "Empleados capaces de construir agentes sin depender solo de perfiles técnicos.",
  "Claridad sobre qué LLMs y herramientas usar según cada necesidad.",
  "Una base interna de AI Champions que apoye la adopción.",
];

export type PlanId = "start" | "pro" | "team" | "business" | "enterprise";
export type Plan = { id: PlanId; name: string; dur: string; tag: string; desc: string; items: string[]; short: string };

export const PLANS: Plan[] = [
  { id: "start", name: "Start", dur: "1 mes", tag: "Menos de 25 empleados · equipos", short: "Para empresas o equipos que quieren comenzar rápido.", desc: "Ideal para empresas o equipos que quieren comenzar rápidamente.", items: ["Evaluación inicial de nivel de IA por empleado.", "4 talleres semanales de 2 horas.", "Fundamentos de IA generativa y prompting.", "Uso práctico de LLMs en el trabajo.", "Ejercicios aplicados al contexto laboral.", "Recomendaciones iniciales de herramientas."] },
  { id: "pro", name: "Pro", dur: "3 meses", tag: "Menos de 25 empleados · equipos", short: "Programa completo de adopción y desarrollo de habilidades.", desc: "Programa completo de adopción y desarrollo de habilidades.", items: ["Evaluación inicial y seguimiento del progreso.", "12 talleres semanales de 2 horas.", "Ruta progresiva por niveles.", "Casos de uso por área o rol.", "Automatización y workflows con IA.", "Ruta AI Builder para empleados seleccionados.", "Introducción a la creación de agentes sin conocimientos técnicos avanzados.", "Asesoría de selección de LLMs y herramientas."] },
  { id: "team", name: "Team", dur: "25–100 empleados", tag: "Equipos pequeños y medianos", short: "Equipos pequeños y medianos.", desc: "Programa corporativo para equipos pequeños y medianos.", items: ["Diagnóstico colectivo e individual.", "Capacitación semanal de 2 horas.", "Rutas por nivel y perfil.", "Reporte de progreso para la empresa.", "Recomendación de herramientas y LLMs.", "Identificación de AI Champions."] },
  { id: "business", name: "Business", dur: "100–500 empleados", tag: "Organizaciones en crecimiento", short: "Organizaciones en crecimiento.", desc: "Programa de adopción para organizaciones en crecimiento.", items: ["Todo lo incluido en Team.", "Segmentación por áreas y roles.", "Rutas de aprendizaje personalizadas.", "Workshops orientados a casos de uso.", "Ruta especializada para AI Builders.", "Asesoría de ecosistema LLM.", "Métricas de participación y progreso."] },
  { id: "enterprise", name: "Enterprise", dur: "500–1.000 empleados", tag: "Organizaciones con estrategia de IA", short: "Organizaciones con una estrategia de IA.", desc: "Programa integral para organizaciones con una estrategia de IA.", items: ["Todo lo incluido en Business.", "Diseño de programa por departamentos.", "Gobernanza y buenas prácticas de uso.", "Programa de AI Champions internos.", "Identificación y priorización de casos de uso.", "Capacitación para construcción de agentes.", "Acompañamiento estratégico en selección de LLMs.", "Reportes ejecutivos de adopción y avance."] },
];

export const PACKAGES = [
  { n: "Team", size: "25–100", focus: "Capacitación + diagnóstico + AI Champions", result: "Base común de habilidades y adopción inicial." },
  { n: "Business", size: "100–500", focus: "Capacitación + especialización + métricas", result: "Adopción por áreas y desarrollo de talento interno." },
  { n: "Enterprise", size: "500–1.000", focus: "Programa integral + estrategia + gobernanza", result: "Escalabilidad y desarrollo de una cultura AI-ready." },
];

export const PROFILES = [
  { t: "Todo el equipo", d: "Evaluación inicial y talleres prácticos para pasar de los conceptos básicos al uso frecuente de asistentes de IA." },
  { t: "Áreas y roles", d: "Contenidos adaptados a ventas, servicio al cliente, operaciones, marketing, finanzas y otras áreas." },
  { t: "Empleados de alto perfil", d: "Ruta especializada de AI Builders: aprenden a diseñar agentes con herramientas no-code y low-code, sin ser programadores." },
  { t: "Líderes y AI Champions", d: "Personas que impulsan la adopción, identifican casos de uso y acompañan a sus equipos." },
];

/** Tamaño de empresa → planes recomendados. */
export function tierFor(n: number): { ids: PlanId[]; title: string; text: string; seg: number } {
  if (n < 25) return { ids: ["start", "pro"], title: "Skillia Start o Skillia Pro", text: "Para equipos pequeños: 1 mes para comenzar rápido o 3 meses para un programa completo de adopción.", seg: 0 };
  if (n <= 100) return { ids: ["team"], title: "Skillia Team", text: "Capacitación + diagnóstico + AI Champions. Base común de habilidades y adopción inicial.", seg: 1 };
  if (n <= 500) return { ids: ["business"], title: "Skillia Business", text: "Capacitación + especialización + métricas. Adopción por áreas y desarrollo de talento interno.", seg: 2 };
  return { ids: ["enterprise"], title: "Skillia Enterprise", text: "Programa integral + estrategia + gobernanza. Escalabilidad y cultura AI-ready.", seg: 3 };
}

export const SIZE_MIN = 5;
export const SIZE_MAX = 1000;
export const sizeFromPos = (p: number) => Math.round(SIZE_MIN * Math.pow(SIZE_MAX / SIZE_MIN, p / 100));
export const posFromSize = (v: number) => Math.round((100 * Math.log(v / SIZE_MIN)) / Math.log(SIZE_MAX / SIZE_MIN));
