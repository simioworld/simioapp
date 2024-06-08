import type { Metadata } from "next";
import "./globals.css";
import { ClerkConvexProvider } from "@/providers/clerkConvexProvider";
import { ThemeProvider } from "@/providers/themeProvider";
import { montserrat } from "@/constants";

export const metadata: Metadata = {
  title: "Simoworld",
  description: "Planificador de eventos de simracing en español",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className} select-none bg-gradient-to-b from-neutral-400/40 to-neutral-100 min-h-screen`}
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
