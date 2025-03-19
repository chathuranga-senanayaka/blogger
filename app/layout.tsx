import type { Metadata } from "next";
import { Gloock, Rubik } from "next/font/google";
import "./globals.css";

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gloock.variable} ${rubik.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
