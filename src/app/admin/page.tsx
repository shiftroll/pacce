"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import type { Submission } from "@/app/api/submissions/route";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchSubmissions = async (authToken: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/submissions", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.status === 401) {
        setError("Session expired. Please sign in again.");
        setAuthenticated(false);
        return;
      }
      const data = await res.json();
      setSubmissions(data.submissions);
      setTotal(data.total);
    } catch {
      setError("Failed to load submissions.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.status === 401) {
        setError("Invalid username or password.");
        return;
      }
      const { token: newToken } = await res.json();
      setToken(newToken);
      setAuthenticated(true);
      await fetchSubmissions(newToken);
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sourceLabel: Record<string, string> = {
    homepage: "Home",
    waitlist: "Waitlist",
  };

  if (!authenticated) {
    return (
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="w-full max-w-sm px-8">
          <h1 className="font-heading text-3xl text-foreground mb-8 text-center">ADMIN</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                USERNAME
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full input-styled"
                placeholder="Username"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full input-styled"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </div>
            {error && <p className="text-accent-red text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors disabled:opacity-50"
            >
              {loading ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  const homepageCount = submissions.filter((s) => s.source === "homepage").length;
  const waitlistCount = submissions.filter((s) => s.source === "waitlist").length;

  return (
    <section className="min-h-screen py-32">
      <div className="section-container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl text-foreground">SUBMISSIONS</h1>
            <p className="text-foreground/50 text-sm mt-1 font-body">
              {total} total &mdash; {homepageCount} from home, {waitlistCount} from waitlist
            </p>
          </div>
          <button
            onClick={() => fetchSubmissions(token)}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 border border-foreground/30 text-foreground/70 text-sm tracking-wider hover:border-foreground hover:text-foreground transition-colors disabled:opacity-40"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            REFRESH
          </button>
        </div>

        {submissions.length === 0 ? (
          <p className="text-foreground/40 font-body">No submissions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left py-3 pr-6 text-foreground/50 tracking-wider font-medium">DATE</th>
                  <th className="text-left py-3 pr-6 text-foreground/50 tracking-wider font-medium">SOURCE</th>
                  <th className="text-left py-3 pr-6 text-foreground/50 tracking-wider font-medium">EMAIL</th>
                  <th className="text-left py-3 pr-6 text-foreground/50 tracking-wider font-medium">FURTHEST DISTANCE</th>
                  <th className="text-left py-3 text-foreground/50 tracking-wider font-medium">LOOPS</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-b border-foreground/10 hover:bg-foreground/5 transition-colors">
                    <td className="py-3 pr-6 text-foreground/60 whitespace-nowrap">
                      {new Date(s.submittedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="py-3 pr-6">
                      <span className={`px-2 py-0.5 text-xs tracking-wider ${
                        s.source === "waitlist"
                          ? "bg-foreground/10 text-foreground/70"
                          : "bg-foreground/5 text-foreground/50"
                      }`}>
                        {sourceLabel[s.source] ?? s.source}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-foreground">{s.email}</td>
                    <td className="py-3 pr-6 text-foreground/80">{s.furthestDistance || "—"}</td>
                    <td className="py-3 text-foreground/80">{s.plannedLoops || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
