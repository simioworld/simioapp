import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ClerkConvexProvider } from "@/providers/clerkConvexProvider";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/providers/themeProvider";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simoworld",
  description: "Planificador de eventos de simracing en español",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${jost.className} bg-gradient-to-b  from-neutral-400/40 to-neutral-100 min-h-screen`}
      >
        <ClerkConvexProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClerkConvexProvider>
      </body>
    </html>
  );
}
