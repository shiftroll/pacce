"use client";

import { useState, useEffect } from "react";
import { RefreshCw, Trash2, Check, X } from "lucide-react";
import type { Submission } from "@/app/api/submissions/route";

const STORAGE_KEY = "pacce_admin_token";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alwaysLogin, setAlwaysLogin] = useState(false);

  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchSubmissions = async (authToken: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/submissions", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.status === 401) {
        localStorage.removeItem(STORAGE_KEY);
        setAuthenticated(false);
        setToken("");
        setError("Session expired. Please sign in again.");
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

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setToken(stored);
      setAuthenticated(true);
      fetchSubmissions(stored);
    } else {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      if (alwaysLogin) localStorage.setItem(STORAGE_KEY, newToken);
      await fetchSubmissions(newToken);
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthenticated(false);
    setToken("");
    setSubmissions([]);
    setTotal(0);
    setUsername("");
    setPassword("");
  };

  const confirmDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/submissions?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      setTotal((t) => t - 1);
      setDeletingId(null);
    } catch {
      setError("Failed to delete submission.");
    }
  };

  const sourceLabel: Record<string, string> = { homepage: "Home", waitlist: "Waitlist" };

  if (!authenticated) {
    return (
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="w-full max-w-sm px-8">
          <h1 className="font-heading text-3xl text-foreground mb-8 text-center">ADMIN</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-foreground/60 mb-2 tracking-wider">USERNAME</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                className="w-full input-styled" placeholder="Username" autoComplete="username" required />
            </div>
            <div>
              <label className="block text-sm text-foreground/60 mb-2 tracking-wider">PASSWORD</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full input-styled" placeholder="Password" autoComplete="current-password" required />
            </div>
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div role="checkbox" aria-checked={alwaysLogin} onClick={() => setAlwaysLogin((v) => !v)}
                className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
                  alwaysLogin ? "bg-foreground border-foreground" : "bg-transparent border-foreground/40 hover:border-foreground/70"
                }`}>
                {alwaysLogin && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-background" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-foreground/60 tracking-wider">ALWAYS LOGIN</span>
            </label>
            {error && <p className="text-accent-red text-sm">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full py-3 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors disabled:opacity-50">
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
          <div className="flex items-center gap-3">
            <button onClick={() => fetchSubmissions(token)} disabled={loading}
              className="flex items-center gap-2 px-4 py-2 border border-foreground/30 text-foreground/70 text-sm tracking-wider hover:border-foreground hover:text-foreground transition-colors disabled:opacity-40">
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              REFRESH
            </button>
            <button onClick={handleSignOut}
              className="px-4 py-2 border border-foreground/30 text-foreground/70 text-sm tracking-wider hover:border-foreground hover:text-foreground transition-colors">
              SIGN OUT
            </button>
          </div>
        </div>

        {error && <p className="text-accent-red text-sm mb-6">{error}</p>}

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
                  <th className="text-left py-3 pr-6 text-foreground/50 tracking-wider font-medium">DISTANCE</th>
                  <th className="text-left py-3 pr-6 text-foreground/50 tracking-wider font-medium">LOOPS</th>
                  <th className="text-left py-3 pr-6 text-foreground/50 tracking-wider font-medium">COMMUNITY</th>
                  <th className="py-3 w-16" />
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-b border-foreground/10 hover:bg-foreground/5 transition-colors">
                    <td className="py-3 pr-6 text-foreground/60 whitespace-nowrap">
                      {new Date(s.submittedAt).toLocaleDateString("en-GB", {
                        day: "2-digit", month: "short", year: "numeric",
                        hour: "2-digit", minute: "2-digit",
                      })}
                    </td>
                    <td className="py-3 pr-6">
                      <span className={`px-2 py-0.5 text-xs tracking-wider ${
                        s.source === "waitlist" ? "bg-foreground/10 text-foreground/70" : "bg-foreground/5 text-foreground/50"
                      }`}>
                        {sourceLabel[s.source] ?? s.source}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-foreground">{s.email}</td>
                    <td className="py-3 pr-6 text-foreground/80">{s.furthestDistance || "—"}</td>
                    <td className="py-3 pr-6 text-foreground/80">{s.plannedLoops || "—"}</td>
                    <td className="py-3 pr-6 text-foreground/80">{s.community || "—"}</td>
                    <td className="py-3">
                      {deletingId === s.id ? (
                        <div className="flex items-center gap-2 justify-end whitespace-nowrap">
                          <span className="text-xs text-foreground/50">Delete?</span>
                          <button onClick={() => confirmDelete(s.id)} title="Confirm"
                            className="p-1 text-accent-red hover:opacity-70 transition-opacity">
                            <Check size={14} />
                          </button>
                          <button onClick={() => setDeletingId(null)} title="Cancel"
                            className="p-1 text-foreground/40 hover:text-foreground transition-colors">
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <button onClick={() => setDeletingId(s.id)} title="Delete"
                            className="p-1 text-foreground/30 hover:text-accent-red transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      )}
                    </td>
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
