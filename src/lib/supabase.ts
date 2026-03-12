import { createClient } from "@supabase/supabase-js";

// Use non-null assertion or fallback strings to satisfy TypeScript
// in development before env vars are populated. The client will
// fail gracefully later if calls are made without valid credentials.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-key";

// Use the service role key so this client bypasses RLS policies.
// This client MUST ONLY be used in server-side API routes, never exposed to the browser.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
