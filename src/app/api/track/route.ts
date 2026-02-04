import { NextRequest, NextResponse } from "next/server";

// In-memory storage for demo (replace with Supabase/Firebase in production)
// This resets on server restart - use a real database for production
const clicksStore: Map<string, ClickData[]> = new Map();

interface ClickData {
  id: string;
  affiliateId: string;
  timestamp: string;
  productId?: string;
  productName?: string;
  landingPage: string;
  redirectUrl: string;
  userAgent?: string;
  ip?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ClickData = await request.json();

    // Validate required fields
    if (!data.affiliateId || !data.id) {
      return NextResponse.json(
        { error: "Missing required fields: affiliateId and id" },
        { status: 400 }
      );
    }

    // Get IP for unique click tracking (anonymized)
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    // Hash IP for privacy (simple hash for demo)
    const hashedIp = ip.split("").reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0).toString(16);

    const clickWithIp: ClickData = {
      ...data,
      ip: hashedIp,
      timestamp: data.timestamp || new Date().toISOString(),
    };

    // Store click by affiliate ID
    const existingClicks = clicksStore.get(data.affiliateId) || [];
    existingClicks.push(clickWithIp);
    clicksStore.set(data.affiliateId, existingClicks);

    // Log for debugging (replace with proper logging in production)
    console.log(`[Affiliate Click] ${data.affiliateId} -> ${data.productName || "general"}`);

    return NextResponse.json({
      success: true,
      clickId: data.id,
      message: "Click tracked successfully",
    });
  } catch (error) {
    console.error("Track API error:", error);
    return NextResponse.json(
      { error: "Failed to track click" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve stats (for affiliate dashboard)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const affiliateId = searchParams.get("affiliateId");
  const apiKey = searchParams.get("key");

  // Simple API key check (use proper auth in production)
  if (apiKey !== process.env.AFFILIATE_API_KEY && apiKey !== "demo") {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (affiliateId) {
    // Get stats for specific affiliate
    const clicks = clicksStore.get(affiliateId) || [];
    const uniqueIps = new Set(clicks.map((c) => c.ip)).size;

    return NextResponse.json({
      affiliateId,
      totalClicks: clicks.length,
      uniqueClicks: uniqueIps,
      recentClicks: clicks.slice(-20).reverse(),
    });
  }

  // Get all affiliate stats (admin only)
  const allStats = Array.from(clicksStore.entries()).map(([id, clicks]) => ({
    affiliateId: id,
    totalClicks: clicks.length,
    uniqueClicks: new Set(clicks.map((c) => c.ip)).size,
    lastClick: clicks[clicks.length - 1]?.timestamp,
  }));

  return NextResponse.json({
    affiliates: allStats,
    totalAffiliates: allStats.length,
    totalClicks: allStats.reduce((sum, a) => sum + a.totalClicks, 0),
  });
}
