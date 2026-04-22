import type { Metadata } from "next";
import "@fontsource/dm-serif-display";
import "@fontsource/dm-serif-display/400-italic.css";
import "@fontsource-variable/archivo";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globizon — Business Visa Branding",
  description:
    "We manage your social media presence so your business visa application is bulletproof. Book a free strategy call.",
  metadataBase: new URL("https://globizon.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full antialiased"
        style={{
          fontFamily: "'Archivo Variable', 'Archivo', sans-serif",
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
        }}
      >
        {children}
      </body>
    </html>
  );
}
