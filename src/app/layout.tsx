import type { Metadata } from "next";
import "@fontsource/poppins/900.css";
import "@fontsource/archivo-black/400.css";
import "@fontsource/source-sans-3/300.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/500.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RYPE | Last Man Standing",
  description: "Last Man Standing - an elimination-style endurance running event. 6.7 km loop. Every hour on the hour. No finish line. Until Last Man Standing.",
  keywords: ["last man standing", "endurance running", "ultramarathon", "running event", "elimination race", "backyard ultra"],
  openGraph: {
    title: "RYPE | Last Man Standing",
    description: "Last Man Standing - an elimination-style endurance running event. Until only one remains.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
