import type { Metadata } from "next";
import "@fontsource/poppins/900.css";
import "@fontsource/archivo-black/400.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/roboto-slab/700.css";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
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
