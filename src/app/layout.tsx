import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Publishing Dashboard",
  description: "Overview of all Vercel publishings by company and purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
