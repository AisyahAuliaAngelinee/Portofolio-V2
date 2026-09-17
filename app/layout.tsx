import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "clrshna | Personal Portofolio Website",
  description: "Frontend developer working with JavaScript, TypeScript, React and Next.js. Explore my experience and get in touch for freelance projects and full-time remote opportunities.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
