import type { Locale } from "./i18n";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://skillia-next.vercel.app";

export type PlanId = "start" | "pro" | "team" | "business" | "enterprise";
export type TierKey = "small" | "team" | "business" | "enterprise";

export const SIZE_MIN = 5;
export const SIZE_MAX = 1000;
export const sizeFromPos = (p: number) => Math.round(SIZE_MIN * Math.pow(SIZE_MAX / SIZE_MIN, p / 100));
export const posFromSize = (v: number) => Math.round((100 * Math.log(v / SIZE_MIN)) / Math.log(SIZE_MAX / SIZE_MIN));

/** Tamaño de empresa → planes recomendados (los textos salen del contenido por idioma). */
export function tierFor(n: number): { key: TierKey; ids: PlanId[]; seg: number } {
  if (n < 25) return { key: "small", ids: ["start", "pro"], seg: 0 };
  if (n <= 100) return { key: "team", ids: ["team"], seg: 1 };
  if (n <= 500) return { key: "business", ids: ["business"], seg: 2 };
  return { key: "enterprise", ids: ["enterprise"], seg: 3 };
}

const es = {
  meta: {
    title: "Skillia — AI Skills for the Modern Workforce",
    desc: "Skillia es un programa corporativo de capacitación y adopción de Inteligencia Artificial: evaluación de nivel, talleres prácticos, rutas AI Builder y asesoría en LLMs.",
    paraQuien: { title: "¿Para quién es?", desc: "Skillia crece al tamaño de tu empresa: Start y Pro para equipos pequeños, Team, Business y Enterprise hasta 1.000 empleados." },
    metodologia: { title: "Metodología", desc: "Evaluación de nivel, talleres semanales de 2 horas, práctica aplicada y seguimiento: así funciona Skillia." },
    ogLocale: "es_CO",
  },
  ui: {
    skip: "Saltar al contenido", home: "Skillia — inicio", openMenu: "Abrir menú", closeMenu: "Cerrar menú", mainNav: "Principal", footNav: "Pie de página", lang: "Idioma",
    request: "Solicitar diagnóstico", download: "Descargar propuesta", downloadWord: "Descargar propuesta (Word)",
    footQuote: "Buscamos que cada empleado sepa cómo usar la IA para trabajar mejor.", planBtn: "Solicitar este plan", seeDetail: "Ver detalle", plan: "Skillia",
  },
  nav: [{ href: "/", label: "Inicio" }, { href: "/para-quien", label: "¿Para quién es?" }, { href: "/metodologia", label: "Metodología" }],
  home: {
    eyebrow: "Programa corporativo de capacitación y adopción de IA",
    h1: ["Que cada empleado sepa usar la ", "Inteligencia Artificial", " para trabajar mejor."],
    lead: "Skillia desarrolla las capacidades de IA de tu equipo de forma práctica, progresiva y orientada a resultados: no solo enseñamos herramientas, las llevamos a tareas y procesos reales.",
    btnWho: "¿Para quién es?", btnMethod: "Ver metodología",
    chips: ["Evaluación de nivel", "Talleres prácticos", "AI Builders"],
    verbs: ["Aprender IA", "Aplicarla al trabajo", "Crear soluciones", "Medir adopción"],
    whatEyebrow: "¿Qué es Skillia?",
    whatH2: ["Capacitación empresarial para trabajar ", "con", " IA, no solo hablar de ella."],
    whatP1: "Skillia es un programa diseñado para desarrollar las capacidades de Inteligencia Artificial de los empleados de forma práctica, progresiva y orientada a resultados.",
    whatP2: "El objetivo no es solamente enseñar herramientas, sino ayudar a cada persona a incorporar IA en sus tareas y procesos reales.",
    whatLink: "Conoce cómo lo hacemos", whatAlt: "Una mano humana y una mano robótica acercándose",
    modelEyebrow: "Modelo de capacitación", modelTitle: "Un ciclo completo, adaptado al perfil de cada empleado.",
    levelsEyebrow: "Evaluación de nivel de IA", levelsTitle: "Cinco niveles. Cada persona empieza donde realmente está.",
    plansEyebrow: "Planes Skillia", plansTitle: "Desde un equipo que quiere arrancar hasta mil empleados.",
    resultsEyebrow: "Resultados para la empresa", resultsTitle: "Adopción medible, no solo asistencia a clases.", resultsAlt: "Mano robótica sobre una red de datos",
    quote: ["“No buscamos que todos los empleados sean expertos en IA.", "Buscamos que cada empleado sepa cómo usarla para trabajar mejor.”"], cite: "Principio de Skillia",
  },
  who: {
    eyebrow: "¿Para quién es Skillia?", h1: ["Un programa que crece ", "al tamaño de tu empresa", "."],
    lead: "Desde un equipo de pocas personas hasta organizaciones de 1.000 empleados. Mueve el control, indícanos cuántas personas son y te mostramos el plan que corresponde.",
    question: "¿Cuántos empleados tiene tu empresa?", employees: "empleados", quick: "Rangos rápidos", saidBubble: "¡Anotado! Mira el plan resaltado.",
    segs: ["< 25", "25–100", "100–500", "500–1.000"],
    pkgEyebrow: "Paquetes empresariales", pkgTitle: "Enfoque y resultado esperado según el tamaño.",
    pkgCols: ["Paquete", "Tamaño", "Enfoque", "Resultado esperado"],
    profEyebrow: "Y dentro de la empresa", profTitle: "La ruta se adapta a cada perfil, cargo y área.",
  },
  method: {
    eyebrow: "Metodología", h1: ["Diagnóstico, práctica y ", "medición", ". Sin capacitación genérica."],
    lead: "Antes de comenzar, cada empleado realiza una evaluación para identificar su nivel de conocimiento, experiencia y aplicación práctica de IA. Así asignamos contenidos según las necesidades reales.",
    modelEyebrow: "Modelo de capacitación", modelTitle: "Cuatro componentes en cada programa.", modelCols: ["Componente", "Frecuencia", "Duración", "Objetivo"],
    levelsEyebrow: "Evaluación de nivel de IA", levelsTitle: "Cinco niveles de madurez.",
    wsEyebrow: "Talleres semanales de 2 horas", wsTitle: "Cada sesión termina con una habilidad aplicable.", wsNote: "Los contenidos pueden adaptarse al cargo, área y objetivos de la empresa.",
    bEyebrow: "Ruta especial · AI Builders", bTitle: "Para empleados de alto perfil: de usuarios a constructores.",
    bP1: "Identificamos a quienes muestran mayor interés, dominio o potencial de aplicación. La propuesta es reducir la barrera técnica: un empleado no necesita convertirse en programador para aprender a construir agentes.",
    bP2: "Con herramientas no-code, low-code y plataformas modernas, aprenden a diseñar agentes que consultan información, siguen instrucciones, usan herramientas y apoyan procesos empresariales.",
    lEyebrow: "Asesoría en selección de modelos", lTitle: "La herramienta adecuada para cada caso de uso, presupuesto y nivel de seguridad.",
    govTitle: "Seguridad y gobernanza",
    govText: "La seguridad, la privacidad y el uso responsable forman parte del temario desde el nivel 1 y se refuerzan con buenas prácticas de control en las rutas avanzadas y en los programas Enterprise.",
  },
  cta: {
    eyebrow: "Empieza hoy", title: "Mide el nivel de IA de tu equipo y construye su ruta de aprendizaje.",
    text: "Cuéntanos sobre tu empresa y te proponemos el programa Skillia que mejor se ajusta a su tamaño y objetivos.",
    checks: ["Evaluación inicial de 30–45 minutos", "Ruta adaptada al perfil de cada empleado", "Recomendación de herramientas y LLMs"],
    name: "Nombre", company: "Empresa", email: "Correo", size: "Tamaño de la empresa", choose: "Selecciona…", message: "Mensaje",
    sizes: ["Menos de 25 empleados", "25–100 empleados", "100–500 empleados", "500–1.000 empleados"],
    send: "Solicitar diagnóstico", sending: "Enviando…", ok: "¡Gracias! Recibimos tu solicitud y te contactaremos pronto.", err: "Revisa tu nombre y correo e inténtalo de nuevo.",
  },
  bot: {
    label: "Robot de Skillia: toca para ver un consejo",
    tips: [
      "¡Hola! Te acompaño mientras recorres Skillia.", "Cada empleado empieza con una evaluación de nivel de IA.", "Los talleres son semanales y duran 2 horas.",
      "Un AI Builder crea agentes sin ser programador.", "No buscamos expertos: buscamos que trabajen mejor con IA.", "Te ayudamos a elegir entre Claude, ChatGPT, Gemini y más.",
      "¿Cuántos son en tu empresa? Mira “¿Para quién es?”.",
    ],
    sections: {
      what: "Skillia no es solo un curso de herramientas: es práctica sobre tu trabajo real.", model: "Cada programa combina diagnóstico, talleres, práctica y seguimiento.",
      levels: "Del Explorador al AI Champion: cinco niveles de madurez en IA.", plans: "Elige el plan según el tamaño de tu empresa.", results: "¡Resultados medibles para tu empresa!",
      quote: "Respira. Con método, la IA se aprende paso a paso.", selector: "Mueve el control: te muestro el plan ideal para tu empresa.", packages: "Cada paquete tiene un enfoque y un resultado esperado.",
      profiles: "Dentro de cada empresa, cada persona recibe una ruta distinta.", cta: "¿Hablamos? El diagnóstico inicial toma 30–45 minutos.",
      mModel: "Cuatro etapas: evaluar, aprender, practicar y medir.", mLevels: "Estos son los cinco niveles de madurez en IA.", mWorkshops: "Los talleres de 2 horas son 100% prácticos.",
      mBuilder: "Tu equipo puede crear agentes sin ser programador.", mLlm: "¿Claude, ChatGPT, Gemini…? Te ayudamos a elegir.",
    },
  },
  model: [
    { t: "Evaluación inicial", f: "Inicio del programa", d: "30–45 min", o: "Identificar el nivel de madurez y necesidades de IA." },
    { t: "Taller práctico", f: "Semanal", d: "2 horas", o: "Aprender y aplicar herramientas y metodologías de IA." },
    { t: "Práctica aplicada", f: "Entre talleres", d: "Flexible", o: "Llevar lo aprendido al trabajo cotidiano." },
    { t: "Seguimiento y evaluación", f: "Por etapa", d: "Según plan", o: "Medir progreso, adopción y oportunidades de mejora." },
  ],
  levelWord: "Nivel",
  levels: [
    { t: "Explorador", d: "Conceptos básicos, seguridad, prompting y uso responsable." },
    { t: "Usuario", d: "Uso frecuente de asistentes de IA para productividad y tareas profesionales." },
    { t: "Power User", d: "Automatización de tareas, workflows, análisis y uso avanzado de herramientas." },
    { t: "AI Builder", d: "Creación de soluciones, agentes y flujos más sofisticados con herramientas no-code/low-code." },
    { t: "AI Champion", d: "Capacidad para impulsar adopción, identificar casos de uso y acompañar equipos." },
  ],
  workshops: [
    "Fundamentos de IA generativa y buenas prácticas.", "Prompting profesional y diseño de instrucciones.", "Investigación, análisis y síntesis con IA.",
    "Creación y edición de documentos, presentaciones y contenidos.", "IA aplicada a ventas, servicio al cliente, operaciones, marketing, finanzas y otras áreas.",
    "Automatización de tareas y diseño de workflows.", "Creación de agentes de IA con herramientas accesibles.", "Seguridad, privacidad, gobernanza y uso responsable de IA.",
  ],
  builder: [
    "Identificación de casos de uso.", "Diseño del flujo y comportamiento del agente.", "Conexión con documentos, herramientas y fuentes de información.",
    "Pruebas, evaluación y mejora del agente.", "Buenas prácticas de seguridad y control.", "Presentación del prototipo y documentación para el equipo.",
  ],
  llm: [
    "Comparación de alternativas como Claude, ChatGPT, Gemini y otros LLMs disponibles.", "Recomendaciones según el tipo de tarea, área y perfil del usuario.",
    "Análisis de productividad, facilidad de adopción y necesidades de integración.", "Orientación sobre planes individuales, equipos y opciones empresariales.",
    "Estrategia de herramientas para evitar compras innecesarias o duplicadas.", "Revisión periódica de nuevas herramientas y capacidades relevantes.",
  ],
  results: [
    "Empleados con un nivel de IA medido y una ruta de aprendizaje definida.", "Mayor productividad en tareas susceptibles de apoyo con IA.",
    "Casos de uso con potencial de automatización identificados.", "Empleados capaces de construir agentes sin depender solo de perfiles técnicos.",
    "Claridad sobre qué LLMs y herramientas usar según cada necesidad.", "Una base interna de AI Champions que apoye la adopción.",
  ],
  plans: {
    start: { name: "Start", dur: "1 mes", tag: "Menos de 25 empleados · equipos", short: "Para empresas o equipos que quieren comenzar rápido.", desc: "Ideal para empresas o equipos que quieren comenzar rápidamente.", items: ["Evaluación inicial de nivel de IA por empleado.", "4 talleres semanales de 2 horas.", "Fundamentos de IA generativa y prompting.", "Uso práctico de LLMs en el trabajo.", "Ejercicios aplicados al contexto laboral.", "Recomendaciones iniciales de herramientas."] },
    pro: { name: "Pro", dur: "3 meses", tag: "Menos de 25 empleados · equipos", short: "Programa completo de adopción y desarrollo de habilidades.", desc: "Programa completo de adopción y desarrollo de habilidades.", items: ["Evaluación inicial y seguimiento del progreso.", "12 talleres semanales de 2 horas.", "Ruta progresiva por niveles.", "Casos de uso por área o rol.", "Automatización y workflows con IA.", "Ruta AI Builder para empleados seleccionados.", "Introducción a la creación de agentes sin conocimientos técnicos avanzados.", "Asesoría de selección de LLMs y herramientas."] },
    team: { name: "Team", dur: "25–100 empleados", tag: "Equipos pequeños y medianos", short: "Equipos pequeños y medianos.", desc: "Programa corporativo para equipos pequeños y medianos.", items: ["Diagnóstico colectivo e individual.", "Capacitación semanal de 2 horas.", "Rutas por nivel y perfil.", "Reporte de progreso para la empresa.", "Recomendación de herramientas y LLMs.", "Identificación de AI Champions."] },
    business: { name: "Business", dur: "100–500 empleados", tag: "Organizaciones en crecimiento", short: "Organizaciones en crecimiento.", desc: "Programa de adopción para organizaciones en crecimiento.", items: ["Todo lo incluido en Team.", "Segmentación por áreas y roles.", "Rutas de aprendizaje personalizadas.", "Workshops orientados a casos de uso.", "Ruta especializada para AI Builders.", "Asesoría de ecosistema LLM.", "Métricas de participación y progreso."] },
    enterprise: { name: "Enterprise", dur: "500–1.000 empleados", tag: "Organizaciones con estrategia de IA", short: "Organizaciones con una estrategia de IA.", desc: "Programa integral para organizaciones con una estrategia de IA.", items: ["Todo lo incluido en Business.", "Diseño de programa por departamentos.", "Gobernanza y buenas prácticas de uso.", "Programa de AI Champions internos.", "Identificación y priorización de casos de uso.", "Capacitación para construcción de agentes.", "Acompañamiento estratégico en selección de LLMs.", "Reportes ejecutivos de adopción y avance."] },
  } as Record<PlanId, { name: string; dur: string; tag: string; short: string; desc: string; items: string[] }>,
  packages: [
    { n: "Team", size: "25–100", focus: "Capacitación + diagnóstico + AI Champions", result: "Base común de habilidades y adopción inicial." },
    { n: "Business", size: "100–500", focus: "Capacitación + especialización + métricas", result: "Adopción por áreas y desarrollo de talento interno." },
    { n: "Enterprise", size: "500–1.000", focus: "Programa integral + estrategia + gobernanza", result: "Escalabilidad y desarrollo de una cultura AI-ready." },
  ],
  profiles: [
    { t: "Todo el equipo", d: "Evaluación inicial y talleres prácticos para pasar de los conceptos básicos al uso frecuente de asistentes de IA." },
    { t: "Áreas y roles", d: "Contenidos adaptados a ventas, servicio al cliente, operaciones, marketing, finanzas y otras áreas." },
    { t: "Empleados de alto perfil", d: "Ruta especializada de AI Builders: aprenden a diseñar agentes con herramientas no-code y low-code, sin ser programadores." },
    { t: "Líderes y AI Champions", d: "Personas que impulsan la adopción, identifican casos de uso y acompañan a sus equipos." },
  ],
  tiers: {
    small: { title: "Skillia Start o Skillia Pro", text: "Para equipos pequeños: 1 mes para comenzar rápido o 3 meses para un programa completo de adopción." },
    team: { title: "Skillia Team", text: "Capacitación + diagnóstico + AI Champions. Base común de habilidades y adopción inicial." },
    business: { title: "Skillia Business", text: "Capacitación + especialización + métricas. Adopción por áreas y desarrollo de talento interno." },
    enterprise: { title: "Skillia Enterprise", text: "Programa integral + estrategia + gobernanza. Escalabilidad y cultura AI-ready." },
  } as Record<TierKey, { title: string; text: string }>,
};

export type Content = typeof es;

const en: Content = {
  meta: {
    title: "Skillia — AI Skills for the Modern Workforce",
    desc: "Skillia is a corporate Artificial Intelligence training and adoption program: skill assessment, hands-on workshops, AI Builder tracks and LLM advisory.",
    paraQuien: { title: "Who it's for", desc: "Skillia scales with your company: Start and Pro for small teams, Team, Business and Enterprise up to 1,000 employees." },
    metodologia: { title: "Methodology", desc: "Level assessment, weekly 2-hour workshops, applied practice and follow-up: this is how Skillia works." },
    ogLocale: "en_US",
  },
  ui: {
    skip: "Skip to content", home: "Skillia — home", openMenu: "Open menu", closeMenu: "Close menu", mainNav: "Main", footNav: "Footer", lang: "Language",
    request: "Request an assessment", download: "Download proposal", downloadWord: "Download proposal (Word)",
    footQuote: "We want every employee to know how to use AI to work better.", planBtn: "Request this plan", seeDetail: "See details", plan: "Skillia",
  },
  nav: [{ href: "/", label: "Home" }, { href: "/para-quien", label: "Who it's for" }, { href: "/metodologia", label: "Methodology" }],
  home: {
    eyebrow: "Corporate AI training and adoption program",
    h1: ["Help every employee use ", "Artificial Intelligence", " to work better."],
    lead: "Skillia builds your team's AI skills in a practical, progressive and results-driven way: we don't just teach tools, we apply them to real tasks and processes.",
    btnWho: "Who it's for", btnMethod: "See methodology",
    chips: ["Level assessment", "Hands-on workshops", "AI Builders"],
    verbs: ["Learn AI", "Apply it at work", "Build solutions", "Measure adoption"],
    whatEyebrow: "What is Skillia?",
    whatH2: ["Corporate training to work ", "with", " AI, not just talk about it."],
    whatP1: "Skillia is a program designed to develop employees' Artificial Intelligence skills in a practical, progressive and results-oriented way.",
    whatP2: "The goal isn't just to teach tools, but to help each person bring AI into their real tasks and processes.",
    whatLink: "See how we do it", whatAlt: "A human hand and a robotic hand reaching toward each other",
    modelEyebrow: "Training model", modelTitle: "A complete cycle, tailored to each employee's profile.",
    levelsEyebrow: "AI level assessment", levelsTitle: "Five levels. Everyone starts where they really are.",
    plansEyebrow: "Skillia plans", plansTitle: "From a team getting started to a thousand employees.",
    resultsEyebrow: "Results for the company", resultsTitle: "Measurable adoption, not just class attendance.", resultsAlt: "A robotic hand over a data network",
    quote: ["“We don't aim for every employee to be an AI expert.", "We aim for every employee to know how to use it to work better.”"], cite: "The Skillia principle",
  },
  who: {
    eyebrow: "Who is Skillia for?", h1: ["A program that scales ", "to your company's size", "."],
    lead: "From a handful of people to organizations of 1,000 employees. Move the slider, tell us how many people you have and we'll show you the matching plan.",
    question: "How many employees does your company have?", employees: "employees", quick: "Quick ranges", saidBubble: "Got it! Check the highlighted plan.",
    segs: ["< 25", "25–100", "100–500", "500–1,000"],
    pkgEyebrow: "Business packages", pkgTitle: "Focus and expected outcome by company size.",
    pkgCols: ["Package", "Size", "Focus", "Expected outcome"],
    profEyebrow: "And inside the company", profTitle: "The path adapts to each profile, role and area.",
  },
  method: {
    eyebrow: "Methodology", h1: ["Assessment, practice and ", "measurement", ". No generic training."],
    lead: "Before starting, every employee takes an assessment to identify their knowledge, experience and practical use of AI. That way we assign content to real needs.",
    modelEyebrow: "Training model", modelTitle: "Four components in every program.", modelCols: ["Component", "Frequency", "Duration", "Goal"],
    levelsEyebrow: "AI level assessment", levelsTitle: "Five maturity levels.",
    wsEyebrow: "Weekly 2-hour workshops", wsTitle: "Every session ends with a skill you can apply.", wsNote: "Content can be tailored to the role, area and goals of the company.",
    bEyebrow: "Special track · AI Builders", bTitle: "For high-potential employees: from users to builders.",
    bP1: "We identify those who show the most interest, mastery or potential to apply AI. The idea is to lower the technical barrier: an employee doesn't need to become a programmer to learn to build agents.",
    bP2: "With no-code, low-code and modern platforms, they learn to design agents that look up information, follow instructions, use tools and support business processes.",
    lEyebrow: "Model selection advisory", lTitle: "The right tool for each use case, budget and security level.",
    govTitle: "Security and governance",
    govText: "Security, privacy and responsible use are part of the curriculum from level 1 and are reinforced with control best practices in the advanced tracks and in Enterprise programs.",
  },
  cta: {
    eyebrow: "Start today", title: "Measure your team's AI level and build their learning path.",
    text: "Tell us about your company and we'll propose the Skillia program that best fits its size and goals.",
    checks: ["30–45 minute initial assessment", "Path tailored to each employee's profile", "Tool and LLM recommendations"],
    name: "Name", company: "Company", email: "Email", size: "Company size", choose: "Select…", message: "Message",
    sizes: ["Fewer than 25 employees", "25–100 employees", "100–500 employees", "500–1,000 employees"],
    send: "Request an assessment", sending: "Sending…", ok: "Thank you! We received your request and will be in touch soon.", err: "Please check your name and email and try again.",
  },
  bot: {
    label: "Skillia robot: tap for a tip",
    tips: [
      "Hi! I'll keep you company while you explore Skillia.", "Every employee starts with an AI level assessment.", "Workshops are weekly and last 2 hours.",
      "An AI Builder creates agents without being a programmer.", "We don't need experts: we want people working better with AI.", "We help you choose between Claude, ChatGPT, Gemini and more.",
      "How many people are in your company? Check “Who it's for”.",
    ],
    sections: {
      what: "Skillia isn't just a tools course: it's practice on your real work.", model: "Every program combines assessment, workshops, practice and follow-up.",
      levels: "From Explorer to AI Champion: five levels of AI maturity.", plans: "Pick the plan that fits your company size.", results: "Measurable results for your company!",
      quote: "Breathe. With a method, AI is learned step by step.", selector: "Move the slider: I'll show you the ideal plan for your company.", packages: "Each package has a focus and an expected outcome.",
      profiles: "Inside each company, every person gets a different path.", cta: "Shall we talk? The initial assessment takes 30–45 minutes.",
      mModel: "Four stages: assess, learn, practice and measure.", mLevels: "These are the five levels of AI maturity.", mWorkshops: "The 2-hour workshops are 100% hands-on.",
      mBuilder: "Your team can build agents without being programmers.", mLlm: "Claude, ChatGPT, Gemini…? We help you choose.",
    },
  },
  model: [
    { t: "Initial assessment", f: "Program start", d: "30–45 min", o: "Identify AI maturity level and needs." },
    { t: "Hands-on workshop", f: "Weekly", d: "2 hours", o: "Learn and apply AI tools and methodologies." },
    { t: "Applied practice", f: "Between workshops", d: "Flexible", o: "Bring what was learned into everyday work." },
    { t: "Follow-up and evaluation", f: "Per stage", d: "Per plan", o: "Measure progress, adoption and improvement opportunities." },
  ],
  levelWord: "Level",
  levels: [
    { t: "Explorer", d: "Basic concepts, security, prompting and responsible use." },
    { t: "User", d: "Frequent use of AI assistants for productivity and professional tasks." },
    { t: "Power User", d: "Task automation, workflows, analysis and advanced use of tools." },
    { t: "AI Builder", d: "Building solutions, agents and more sophisticated flows with no-code/low-code tools." },
    { t: "AI Champion", d: "Ability to drive adoption, identify use cases and support teams." },
  ],
  workshops: [
    "Generative AI fundamentals and best practices.", "Professional prompting and instruction design.", "Research, analysis and synthesis with AI.",
    "Creating and editing documents, presentations and content.", "AI applied to sales, customer service, operations, marketing, finance and other areas.",
    "Task automation and workflow design.", "Building AI agents with accessible tools.", "Security, privacy, governance and responsible use of AI.",
  ],
  builder: [
    "Identifying use cases.", "Designing the agent's flow and behavior.", "Connecting documents, tools and information sources.",
    "Testing, evaluating and improving the agent.", "Security and control best practices.", "Prototype presentation and documentation for the team.",
  ],
  llm: [
    "Comparison of alternatives such as Claude, ChatGPT, Gemini and other available LLMs.", "Recommendations by type of task, area and user profile.",
    "Analysis of productivity, ease of adoption and integration needs.", "Guidance on individual, team and enterprise plans.",
    "A tooling strategy that avoids unnecessary or duplicate purchases.", "Periodic review of new tools and relevant capabilities.",
  ],
  results: [
    "Employees with a measured AI level and a defined learning path.", "Higher productivity on tasks that AI can support.",
    "Use cases with automation potential identified.", "Employees able to build agents without relying only on technical profiles.",
    "Clarity on which LLMs and tools to use for each need.", "An internal base of AI Champions to support adoption.",
  ],
  plans: {
    start: { name: "Start", dur: "1 month", tag: "Fewer than 25 employees · teams", short: "For companies or teams that want to get started fast.", desc: "Ideal for companies or teams that want to get started quickly.", items: ["Initial AI level assessment per employee.", "4 weekly 2-hour workshops.", "Generative AI fundamentals and prompting.", "Practical use of LLMs at work.", "Exercises applied to the work context.", "Initial tool recommendations."] },
    pro: { name: "Pro", dur: "3 months", tag: "Fewer than 25 employees · teams", short: "Complete adoption and skill-development program.", desc: "Complete adoption and skill-development program.", items: ["Initial assessment and progress follow-up.", "12 weekly 2-hour workshops.", "Progressive path by level.", "Use cases by area or role.", "Automation and workflows with AI.", "AI Builder track for selected employees.", "Introduction to building agents without advanced technical knowledge.", "LLM and tool selection advisory."] },
    team: { name: "Team", dur: "25–100 employees", tag: "Small and mid-sized teams", short: "Small and mid-sized teams.", desc: "Corporate program for small and mid-sized teams.", items: ["Collective and individual assessment.", "Weekly 2-hour training.", "Paths by level and profile.", "Progress report for the company.", "Tool and LLM recommendation.", "AI Champion identification."] },
    business: { name: "Business", dur: "100–500 employees", tag: "Growing organizations", short: "Growing organizations.", desc: "Adoption program for growing organizations.", items: ["Everything included in Team.", "Segmentation by areas and roles.", "Personalized learning paths.", "Use-case-driven workshops.", "Specialized track for AI Builders.", "LLM ecosystem advisory.", "Participation and progress metrics."] },
    enterprise: { name: "Enterprise", dur: "500–1,000 employees", tag: "Organizations with an AI strategy", short: "Organizations with an AI strategy.", desc: "Comprehensive program for organizations with an AI strategy.", items: ["Everything included in Business.", "Program design by department.", "Governance and usage best practices.", "Internal AI Champions program.", "Use-case identification and prioritization.", "Training to build agents.", "Strategic guidance on LLM selection.", "Executive adoption and progress reports."] },
  },
  packages: [
    { n: "Team", size: "25–100", focus: "Training + assessment + AI Champions", result: "A common skills base and initial adoption." },
    { n: "Business", size: "100–500", focus: "Training + specialization + metrics", result: "Adoption by area and internal talent development." },
    { n: "Enterprise", size: "500–1,000", focus: "Comprehensive program + strategy + governance", result: "Scalability and an AI-ready culture." },
  ],
  profiles: [
    { t: "The whole team", d: "Initial assessment and hands-on workshops to move from the basics to frequent use of AI assistants." },
    { t: "Areas and roles", d: "Content tailored to sales, customer service, operations, marketing, finance and other areas." },
    { t: "High-potential employees", d: "Specialized AI Builder track: they learn to design agents with no-code and low-code tools, without being programmers." },
    { t: "Leaders and AI Champions", d: "People who drive adoption, identify use cases and support their teams." },
  ],
  tiers: {
    small: { title: "Skillia Start or Skillia Pro", text: "For small teams: 1 month to get started fast or 3 months for a complete adoption program." },
    team: { title: "Skillia Team", text: "Training + assessment + AI Champions. A common skills base and initial adoption." },
    business: { title: "Skillia Business", text: "Training + specialization + metrics. Adoption by area and internal talent development." },
    enterprise: { title: "Skillia Enterprise", text: "Comprehensive program + strategy + governance. Scalability and an AI-ready culture." },
  },
};

export const getContent = (locale: Locale): Content => (locale === "en" ? en : es);

/** Una sección que el robot visita: `pose|mensaje`. */
export const bot = (pose: string, text: string) => `${pose}|${text}`;
