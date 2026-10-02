import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="sk-footer">
      <div className="sk-wrap sk-footer-in">
        <div>
          <Image src="/img/logo.png" alt="Skillia" width={140} height={41} style={{ height: 41, width: "auto" }} />
          <p className="sk-foot-quote">Buscamos que cada empleado sepa cómo usar la IA para trabajar mejor.</p>
        </div>
        <nav aria-label="Pie de página">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <a href="#contacto">Solicitar diagnóstico</a>
          <a href="/Skillia_Propuesta_Capacitacion_IA.docx" download>Descargar propuesta</a>
        </nav>
      </div>
      <div className="sk-wrap sk-copy">© {new Date().getFullYear()} Skillia · AI Skills for the Modern Workforce</div>
    </footer>
  );
}
