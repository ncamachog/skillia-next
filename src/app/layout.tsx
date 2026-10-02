import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { LocaleProvider } from "@/components/locale-provider";
import Mascot from "@/components/mascot";
import RevealObserver from "@/components/reveal-observer";
import { SITE_URL, getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export async function generateMetadata(): Promise<Metadata> {
  const t = getContent(await getLocale());
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: "%s · Skillia" },
    description: t.meta.desc,
    openGraph: { title: "Skillia", description: t.meta.desc, locale: t.meta.ogLocale, type: "website", images: ["/img/logo.png"] },
  };
}
export const viewport: Viewport = { themeColor: "#4F55F5" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const t = getContent(locale);
  return (
    <html lang={locale} className={`${geist.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca "sk-js" antes del primer pintado: los bloques .sk-reveal solo arrancan ocultos si hay JavaScript. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('sk-js')" }} />
      </head>
      <body>
        <LocaleProvider locale={locale}>
          <a className="sk-skip" href="#main">{t.ui.skip}</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <RevealObserver />
          <Mascot />
        </LocaleProvider>
      </body>
    </html>
  );
}
