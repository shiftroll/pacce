import { NextRequest, NextResponse } from "next/server";
import { validTokens } from "@/lib/adminTokens";

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

function authCheck(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  return token && validTokens.has(token);
}

export async function GET(request: NextRequest) {
  if (!authCheck(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    submissions: submissionsStore.slice().reverse(),
    total: submissionsStore.length,
  });
}

export async function DELETE(request: NextRequest) {
  if (!authCheck(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const idx = submissionsStore.findIndex((s) => s.id === id);
  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  submissionsStore.splice(idx, 1);
  return NextResponse.json({ success: true });
}
