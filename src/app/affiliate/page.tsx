"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, MousePointer, Users, Link2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { AffiliateClick } from "@/lib/affiliate";

interface AffiliateStats {
  affiliateId: string;
  totalClicks: number;
  uniqueClicks: number;
  recentClicks: AffiliateClick[];
}

export default function AffiliateDashboard() {
  const [affiliateId, setAffiliateId] = useState("");
  const [stats, setStats] = useState<AffiliateStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchStats = async () => {
    if (!affiliateId.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/track?affiliateId=${affiliateId}&key=demo`);
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
    setIsLoading(false);
  };

  const copyAffiliateLink = async () => {
    const link = `${typeof window !== "undefined" ? window.location.origin : ""}/shop?ref=${affiliateId}`;
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const affiliateLink = affiliateId
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/shop?ref=${affiliateId}`
    : "";

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary-accent text-sm tracking-widest font-medium">
              CREATOR PORTAL
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-wide text-foreground mt-4">
              AFFILIATE DASHBOARD
            </h1>
            <p className="mt-4 text-gray-400 tracking-wide max-w-2xl mx-auto">
              Track your referral performance and generate your unique affiliate links.
            </p>
          </div>
        </ScrollReveal>

        {/* Affiliate ID Input */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-secondary-accent p-6 space-y-4">
              <label className="block">
                <span className="text-sm text-gray-400 tracking-wider">YOUR AFFILIATE ID</span>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={affiliateId}
                    onChange={(e) => setAffiliateId(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
                    placeholder="e.g., erick, fitnessguru, runner123"
                    className="flex-1 bg-background border border-gray-700 px-4 py-3 text-foreground tracking-wide focus:border-primary-accent focus:outline-none"
                  />
                  <button
                    onClick={fetchStats}
                    disabled={!affiliateId.trim() || isLoading}
                    className="px-6 py-3 bg-primary-accent text-background font-medium tracking-wider hover:bg-opacity-90 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? "LOADING..." : "VIEW STATS"}
                  </button>
                </div>
              </label>

              {affiliateId && (
                <div className="pt-4 border-t border-gray-700">
                  <span className="text-sm text-gray-400 tracking-wider">YOUR AFFILIATE LINK</span>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={affiliateLink}
                      className="flex-1 bg-background border border-gray-700 px-4 py-3 text-gray-300 tracking-wide text-sm"
                    />
                    <button
                      onClick={copyAffiliateLink}
                      className="px-4 py-3 border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-background transition-colors"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Share this link with your audience. You&apos;ll earn commission on every sale!
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Cards */}
        {stats && (
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary-accent p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary-accent">
                    <MousePointer className="w-6 h-6 text-primary-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm tracking-wider">TOTAL CLICKS</p>
                    <p className="text-3xl font-bold text-foreground">{stats.totalClicks}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-secondary-accent p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary-accent">
                    <Users className="w-6 h-6 text-primary-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm tracking-wider">UNIQUE VISITORS</p>
                    <p className="text-3xl font-bold text-foreground">{stats.uniqueClicks}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-secondary-accent p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary-accent">
                    <TrendingUp className="w-6 h-6 text-primary-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm tracking-wider">CONVERSION RATE</p>
                    <p className="text-3xl font-bold text-foreground">
                      {stats.totalClicks > 0 ? "~5%" : "0%"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        )}

        {/* Recent Clicks Table */}
        {stats && stats.recentClicks && stats.recentClicks.length > 0 && (
          <ScrollReveal delay={0.3}>
            <div className="bg-secondary-accent p-6">
              <h3 className="font-heading text-xl tracking-wide text-foreground mb-6">
                RECENT CLICKS
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400 tracking-wider font-medium">
                        TIMESTAMP
                      </th>
                      <th className="text-left py-3 px-4 text-gray-400 tracking-wider font-medium">
                        PRODUCT
                      </th>
                      <th className="text-left py-3 px-4 text-gray-400 tracking-wider font-medium">
                        PAGE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentClicks.map((click) => (
                      <tr key={click.id} className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">
                          {new Date(click.timestamp).toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-foreground">
                          {click.productName || "General"}
                        </td>
                        <td className="py-3 px-4 text-gray-400">
                          {click.landingPage || "/"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* How It Works */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16">
            <h2 className="font-heading text-2xl tracking-wide text-foreground text-center mb-8">
              HOW IT WORKS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "GET YOUR LINK",
                  description: "Enter your affiliate ID above to generate your unique tracking link.",
                },
                {
                  step: "02",
                  title: "SHARE WITH AUDIENCE",
                  description: "Share your link on social media, blogs, or with your community.",
                },
                {
                  step: "03",
                  title: "TRACK PERFORMANCE",
                  description: "Monitor clicks, conversions, and earnings in real-time.",
                },
                {
                  step: "04",
                  title: "EARN COMMISSION",
                  description: "Get paid for every sale made through your affiliate link.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center border border-primary-accent mb-4">
                    <span className="font-heading text-primary-accent">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg tracking-wide text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm tracking-wide">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Product Links */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 bg-dark-grey p-8">
            <h3 className="font-heading text-xl tracking-wide text-foreground mb-6">
              PRODUCT-SPECIFIC LINKS
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Use these links to promote specific products:
            </p>
            {affiliateId ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Electrolyte Mix Original", slug: "electrolyte-original" },
                  { name: "Electrolyte Mix Citrus", slug: "electrolyte-citrus" },
                  { name: "Recovery Blend Pro", slug: "recovery-blend" },
                  { name: "Shop All Products", slug: "" },
                ].map((product) => (
                  <div
                    key={product.slug || "shop"}
                    className="flex items-center justify-between bg-secondary-accent p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Link2 className="w-4 h-4 text-primary-accent" />
                      <span className="text-foreground">{product.name}</span>
                    </div>
                    <button
                      onClick={async () => {
                        const link = product.slug
                          ? `${window.location.origin}/shop/${product.slug}?ref=${affiliateId}`
                          : `${window.location.origin}/shop?ref=${affiliateId}`;
                        await navigator.clipboard.writeText(link);
                      }}
                      className="text-primary-accent hover:text-foreground transition-colors text-sm tracking-wider"
                    >
                      COPY LINK
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                Enter your affiliate ID above to generate product-specific links.
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
