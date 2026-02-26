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
import { AffiliateProvider } from "@/components/AffiliateProvider";

export const metadata: Metadata = {
  title: "PACCE | Hydration Without Compromise",
  description: "Premium electrolyte hydration engineered for peak athletic performance. Science-backed formula for champions.",
  keywords: ["hydration", "electrolytes", "sports drink", "athletic performance", "sodium", "potassium", "magnesium"],
  openGraph: {
    title: "PACCE | Hydration Without Compromise",
    description: "Premium electrolyte hydration engineered for peak athletic performance.",
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
        <AffiliateProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AffiliateProvider>
      </body>
    </html>
  );
}
