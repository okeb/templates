import { cn } from "@/lib/utils";
import "./styles/base/globals.scss";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from '../components/theme-provider';
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "{{ cookiecutter.MON_SITE }}",
  description: "The new IA assistance which help you to find the best partner",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode; 
}>) {
  return (
    <html lang="fr">
      <body 
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          themes={[
            'light', 
            'dark', 
            // 'purple', 
            // 'darkpurple'
          ]}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
