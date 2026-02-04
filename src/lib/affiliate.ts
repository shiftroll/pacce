// Affiliate tracking types and utilities

export interface AffiliateClick {
  id: string;
  affiliateId: string;
  timestamp: string;
  productId?: string;
  productName?: string;
  landingPage: string;
  redirectUrl: string;
  userAgent?: string;
}

export interface AffiliateStats {
  affiliateId: string;
  totalClicks: number;
  uniqueClicks: number;
  clicks: AffiliateClick[];
}

// Generate unique click ID
export function generateClickId(): string {
  return `click_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get affiliate ID from URL or storage
export function getAffiliateId(): string | null {
  if (typeof window === "undefined") return null;

  // Check URL params first
  const urlParams = new URLSearchParams(window.location.search);
  const refFromUrl = urlParams.get("ref") || urlParams.get("affiliate");

  if (refFromUrl) {
    // Store in localStorage for persistence across pages
    localStorage.setItem("pacce_affiliate_id", refFromUrl);
    localStorage.setItem("pacce_affiliate_timestamp", new Date().toISOString());
    return refFromUrl;
  }

  // Fall back to stored affiliate (with 30-day expiry)
  const storedRef = localStorage.getItem("pacce_affiliate_id");
  const storedTimestamp = localStorage.getItem("pacce_affiliate_timestamp");

  if (storedRef && storedTimestamp) {
    const daysSinceStored = (Date.now() - new Date(storedTimestamp).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceStored < 30) {
      return storedRef;
    }
    // Expired - clear storage
    localStorage.removeItem("pacce_affiliate_id");
    localStorage.removeItem("pacce_affiliate_timestamp");
  }

  return null;
}

// Track a click event
export async function trackAffiliateClick(data: {
  affiliateId: string;
  productId?: string;
  productName?: string;
  redirectUrl: string;
}): Promise<AffiliateClick> {
  const click: AffiliateClick = {
    id: generateClickId(),
    affiliateId: data.affiliateId,
    timestamp: new Date().toISOString(),
    productId: data.productId,
    productName: data.productName,
    landingPage: typeof window !== "undefined" ? window.location.pathname : "",
    redirectUrl: data.redirectUrl,
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
  };

  // Send to API endpoint
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(click),
    });
  } catch (error) {
    console.error("Failed to track click:", error);
  }

  // Also store locally for redundancy
  storeClickLocally(click);

  return click;
}

// Store click in localStorage (backup/demo purposes)
function storeClickLocally(click: AffiliateClick): void {
  if (typeof window === "undefined") return;

  const key = "pacce_affiliate_clicks";
  const existing = localStorage.getItem(key);
  const clicks: AffiliateClick[] = existing ? JSON.parse(existing) : [];

  clicks.push(click);

  // Keep only last 100 clicks locally
  if (clicks.length > 100) {
    clicks.shift();
  }

  localStorage.setItem(key, JSON.stringify(clicks));
}

// Get local click history (for demo/debugging)
export function getLocalClickHistory(): AffiliateClick[] {
  if (typeof window === "undefined") return [];

  const key = "pacce_affiliate_clicks";
  const existing = localStorage.getItem(key);
  return existing ? JSON.parse(existing) : [];
}

// Build Tokopedia URL with tracking
export function buildTokopediaUrl(
  baseUrl: string = "https://www.tokopedia.com/pacce",
  productSlug?: string
): string {
  let url = baseUrl;
  if (productSlug) {
    url = `${baseUrl}/${productSlug}`;
  }
  return url;
}
