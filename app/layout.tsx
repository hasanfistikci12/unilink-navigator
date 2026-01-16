import type { Metadata } from "next";
import "./globals.css";
import "./desktop-minimal.css";
import QuickExitButton from "@/components/QuickExitButton";
import EmergencyHeader from "@/components/EmergencyHeader";
import SimpleNavbar from "@/components/SimpleNavbar";

export const metadata: Metadata = {
  title: "Unilink Navigator - Güvenli Destek",
  description: "Anonim ve güvenli destek platformu. Acil yardım, yakınımdaki destek, haklar ve güvenlik planı.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <LanguageProvider>
          <SimpleNavbar />
          {/* <EmergencyHeader /> */}
          <main id="main-content">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
