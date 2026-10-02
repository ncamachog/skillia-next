"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/content";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sk-header">
      <div className="sk-wrap sk-header-in">
        <Link className="sk-logo" href="/" aria-label="Skillia — inicio" onClick={() => setOpen(false)}>
          <Image src="/img/logo.png" alt="Skillia" width={150} height={44} priority style={{ height: 44, width: "auto" }} />
        </Link>
        <button className="sk-burger" aria-expanded={open} aria-controls="sk-nav" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
        </button>
        <nav className={`sk-nav${open ? " open" : ""}`} id="sk-nav" aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <a className="sk-btn sk-btn-sm" href="#contacto" onClick={() => setOpen(false)}>
            Solicitar diagnóstico
          </a>
        </nav>
      </div>
    </header>
  );
}
