import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Mascot from "@/components/mascot";
import RevealObserver from "@/components/reveal-observer";
import { SITE_URL } from "@/lib/content";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

const DESC = "Skillia es un programa corporativo de capacitación y adopción de Inteligencia Artificial: evaluación de nivel, talleres prácticos, rutas AI Builder y asesoría en LLMs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Skillia — AI Skills for the Modern Workforce", template: "%s · Skillia" },
  description: DESC,
  openGraph: { title: "Skillia", description: DESC, locale: "es_CO", type: "website", images: ["/img/logo.png"] },
};
export const viewport: Viewport = { themeColor: "#4F55F5" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca "sk-js" antes del primer pintado: los bloques .sk-reveal solo arrancan ocultos si hay JavaScript. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('sk-js')" }} />
      </head>
      <body>
        <a className="sk-skip" href="#main">Saltar al contenido</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <Mascot />
      </body>
    </html>
  );
}
