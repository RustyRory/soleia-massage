import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const atteron = localFont({
  src: "../docs/atteron/Atteron Personal Use Only.ttf",
  variable: "--font-serif",
  weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Soleia Massage — Alexanne",
  description: "Offrez-vous une parenthèse de douceur pour ralentir, apaiser le corps et le mental, retrouver votre énergie, vous reconnecter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${atteron.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
