import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import FilmGrain from "@/components/FilmGrain";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BootSequence from "@/components/motion/BootSequence";
import Altimeter from "@/components/motion/Altimeter";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Inner Navigation",
    template: "%s · Inner Navigation",
  },
  description: SITE.description,
  openGraph: {
    title: "Inner Navigation",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen font-sans">
        <BootSequence />
        <FilmGrain />
        <Altimeter />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
