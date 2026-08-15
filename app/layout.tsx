import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yudha | Portfolio",
  description: "Web & Mobile Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}