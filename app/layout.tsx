import type { Metadata } from "next";
import "./globals.css";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Monochrome Literary Map",
  description:
    "A stark, typewritten exploration of the authors inspiring Bungo Stray Dogs, narrated by an emotionally astute companion."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={specialElite.className}>{children}</body>
    </html>
  );
}
