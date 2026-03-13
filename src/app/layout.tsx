import type { Metadata } from "next";
import "./globals.css";
import { PageTransitionProvider } from "@/components/motion/page-transition-provider";

export const metadata: Metadata = {
  title: "Freelancer Portfolio",
  description: "Designer and front-end developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}
