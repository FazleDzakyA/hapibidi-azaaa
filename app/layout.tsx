import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday Lily 🌸 | Azalia Fitriani",
  description: "A special romantic birthday experience made only for Azalia Fitriani (Lily - Tuan Putriku).",
  keywords: ["Azalia Fitriani", "Lily", "Birthday", "Happy Birthday", "Tuan Putriku", "10 October 2026"],
  authors: [{ name: "For Lily" }],
  openGraph: {
    title: "Happy Birthday Lily 🌸 | Azalia Fitriani",
    description: "A special romantic digital birthday experience made only for Lily.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
