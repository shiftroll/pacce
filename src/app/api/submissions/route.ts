import { NextRequest, NextResponse } from "next/server";
import { validTokens } from "@/app/api/admin/login/route";

export interface Submission {
  id: string;
  source: "homepage" | "waitlist";
  email: string;
  furthestDistance: string;
  plannedLoops: string;
  submittedAt: string;
}

// In-memory store (replace with a database in production)
const submissionsStore: Submission[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { source, email, furthestDistance, plannedLoops } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const submission: Submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      source: source || "homepage",
      email,
      furthestDistance: furthestDistance || "",
      plannedLoops: plannedLoops || "",
      submittedAt: new Date().toISOString(),
    };

    submissionsStore.push(submission);

    return NextResponse.json({ success: true, id: submission.id });
  } catch {
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token || !validTokens.has(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    submissions: submissionsStore.slice().reverse(),
    total: submissionsStore.length,
  });
}
