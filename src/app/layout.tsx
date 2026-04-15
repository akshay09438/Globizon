import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globizon — Immigration Branding for India → Canada",
  description:
    "We manage your personal and business social media so your Canada PR file is bulletproof. Book a free strategy call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#0d0d0d] text-white">{children}</body>
    </html>
  );
}
