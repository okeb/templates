import "./styles/base/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Human Link",
  description: "The new IA assistance which help you to find the best partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-[#040404]">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
