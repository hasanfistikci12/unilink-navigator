import type { Metadata } from "next";
import "./globals.css";
import "./desktop-minimal.css";
import QuickExitButton from "@/components/QuickExitButton";
import EmergencyHeader from "@/components/EmergencyHeader";

export const metadata: Metadata = {
  title: "Unilink Navigator - Güvenli Destek",
  description: "Anonim ve güvenli destek platformu. Acil yardım, yakınımdaki destek, haklar ve güvenlik planı.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        <EmergencyHeader />
        <QuickExitButton />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
