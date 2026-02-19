import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/ui/navbar";
import Footer from "@/public/assets/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://finaura.com.mx"),
  title: {
    default: "Finaura",
    template: "%s | Finaura",
  },
  description: "Finaura ofrece soluciones de préstamos para patrimonios medios, con enfoque en rendimiento, transparencia y acompañamiento personalizado.",
  icons: { icon: "./favicon.ico", shortcut: "./favicon.ico" },
  applicationName: "Finaura",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://finaura.com.mx",
    siteName: "Finaura",
    title: "Finaura | Préstamos y rendimiento",
    description:
      "Finaura ofrece soluciones de préstamos para patrimonios medios, con enfoque en rendimiento, transparencia y acompañamiento personalizado.",
    images: [
      {
        url: "/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "Finaura",
      },
    ],
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>

      <body className="flex min-h-dvh flex-col background">
        <Providers>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </Providers>
      </body>
    </html>
  );
}