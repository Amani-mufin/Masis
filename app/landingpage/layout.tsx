import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import { url } from "inspector";
import { Rubik_Glitch, Rubik_Iso } from "next/font/google";
import "../globals.css";
import { Weight } from "lucide-react";






const rubikGlitch = Rubik_Glitch({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik-glitch',
  display: 'swap',
});

const rubikIso = Rubik_Iso({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik-iso',
  display: 'swap',
});

  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${rubikGlitch.variable} ${rubikIso.variable} ${geistMono.variable} antialiased`} style={{ background: url() }}>
        {children}
      </body>
    </html>
  );
}
