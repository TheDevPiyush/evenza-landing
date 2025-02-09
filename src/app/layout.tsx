import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evenza - Plan. Create. Celebrate",
  description: "Evenza is an event hosting platform designed to connect people, spark meaningful relationships, and unlock life-changing opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full`}
      >
        {children}
      </body>
    </html>
  );
}
