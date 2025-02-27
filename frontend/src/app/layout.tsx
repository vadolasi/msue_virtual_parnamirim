import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Parnamirim",
  description: "Generated by create next app"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={clsx(roboto.className)}>{children}</body>
    </html>
  );
}
