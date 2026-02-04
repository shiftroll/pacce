"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getAffiliateId } from "@/lib/affiliate";

interface AffiliateContextType {
  affiliateId: string | null;
  isLoading: boolean;
}

const AffiliateContext = createContext<AffiliateContextType>({
  affiliateId: null,
  isLoading: true,
});

export function useAffiliate() {
  return useContext(AffiliateContext);
}

interface AffiliateProviderProps {
  children: ReactNode;
}

export function AffiliateProvider({ children }: AffiliateProviderProps) {
  const [affiliateId, setAffiliateId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Capture affiliate ID from URL or storage on mount
    const id = getAffiliateId();
    setAffiliateId(id);
    setIsLoading(false);

    // Log affiliate attribution for debugging
    if (id) {
      console.log(`[PACCE] Affiliate attributed: ${id}`);
    }
  }, []);

  return (
    <AffiliateContext.Provider value={{ affiliateId, isLoading }}>
      {children}
    </AffiliateContext.Provider>
  );
}
