"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";
import { useLocale } from "./locale-provider";

export default function Header() {
  const path = usePathname();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  return (
    <header className="sk-header">
      <div className="sk-wrap sk-header-in">
        <Link className="sk-logo" href="/" aria-label={t.ui.home} onClick={() => setOpen(false)}>
          <Image src="/img/logo.png" alt="Skillia" width={150} height={44} priority style={{ height: 44, width: "auto" }} />
        </Link>
        <button className="sk-burger" aria-expanded={open} aria-controls="sk-nav" aria-label={open ? t.ui.closeMenu : t.ui.openMenu} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
        </button>
        <nav className={`sk-nav${open ? " open" : ""}`} id="sk-nav" aria-label={t.ui.mainNav}>
          {t.nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <a className="sk-btn sk-btn-sm" href="#contacto" onClick={() => setOpen(false)}>
            {t.ui.request}
          </a>
        </nav>
      </div>
    </header>
  );
}
