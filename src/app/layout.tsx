import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klinik Cuci Sepatu | Bersih, Wangi, Rapi",
  description:
    "Layanan cuci sepatu profesional: deep clean, whitening, unyellowing, repaint. Booking online & pickup delivery.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
