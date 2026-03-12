import { createClient } from "@supabase/supabase-js";

// Accept multiple possible env var names for flexibility across hosting providers.
// SUPABASE_URL takes priority over NEXT_PUBLIC_SUPABASE_URL (server-side code doesn't need NEXT_PUBLIC_).
const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://placeholder-project.supabase.co";

// Prefer the service_role key; fall back to anon key if that's what's configured.
const supabaseServiceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    "placeholder-key";

// Log on startup so we can diagnose connection issues in Netlify function logs.
if (typeof process !== "undefined" && process.env) {
    const masked = supabaseServiceKey.slice(0, 10) + "…";
    console.log(`[supabase] url=${supabaseUrl} key=${masked}`);
}

// Use the service role key so this client bypasses RLS policies.
// This client MUST ONLY be used in server-side API routes, never exposed to the browser.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

