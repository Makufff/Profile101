import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/SpaceGrotesk-Regular.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/SpaceGrotesk-Regular.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tanapat Chamted",
  description: "AI Developer & IT KMITL Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
