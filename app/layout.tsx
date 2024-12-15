import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sydney's website",
  description: "story by sydney and design by laura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
