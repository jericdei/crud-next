import "./globals.css";
import "remixicon/fonts/remixicon.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next CRUD",
  description: "A Next.js CRUD application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
