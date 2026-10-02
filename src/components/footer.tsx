import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export default async function Footer() {
  const t = getContent(await getLocale());
  return (
    <footer className="sk-footer">
      <div className="sk-wrap sk-footer-in">
        <div>
          <Image src="/img/logo.png" alt="Skillia" width={140} height={41} style={{ height: 41, width: "auto" }} />
          <p className="sk-foot-quote">{t.ui.footQuote}</p>
        </div>
        <nav aria-label={t.ui.footNav}>
          {t.nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <a href="#contacto">{t.ui.request}</a>
          <a href="/Skillia_Propuesta_Capacitacion_IA.docx" download>{t.ui.download}</a>
        </nav>
      </div>
      <div className="sk-wrap sk-copy">© {new Date().getFullYear()} Skillia · AI Skills for the Modern Workforce</div>
    </footer>
  );
}
