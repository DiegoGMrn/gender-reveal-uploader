import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revelación de Género",
  description: "Una galería moderna para compartir momentos inolvidables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true} className={`${inter.className} selection:bg-zinc-900 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
