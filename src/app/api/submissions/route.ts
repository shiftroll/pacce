import { NextRequest, NextResponse } from "next/server";
import { validTokens } from "@/lib/adminTokens";
import { supabaseAdmin } from "@/lib/supabase";
import { sendSubmissionEmail } from "@/lib/email";

export interface Submission {
  id: string;
  source: "homepage" | "waitlist";
  email: string;
  furthestDistance: string;
  plannedLoops: string;
  community: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { source, email, furthestDistance, plannedLoops, community } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("waitlist_submissions")
      .insert([
        {
          source: source || "homepage",
          email,
          furthestDistance: furthestDistance || "",
          plannedLoops: plannedLoops || "",
          community: community || "",
        },
      ])
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save submission to database" }, { status: 500 });
    }

    // Send email notification (non-blocking — don't fail the submission if email fails)
    sendSubmissionEmail({
      source: source || "homepage",
      email,
      furthestDistance: furthestDistance || "",
      plannedLoops: plannedLoops || "",
      community: community || "",
    }).catch((err) => console.error("Email send error:", err));

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("Submission POST catch error:", error);
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 });
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

  try {
    const { data: submissions, error, count } = await supabaseAdmin
      .from("waitlist_submissions")
      .select("*", { count: "exact" })
      .order("submittedAt", { ascending: false });

    if (error) {
      console.error("Supabase GET error:", error);
      return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
    }

    return NextResponse.json({
      submissions: submissions || [],
      total: count || 0,
    });
  } catch (error) {
    console.error("Submission GET catch error:", error);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
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

  try {
    const { error } = await supabaseAdmin
      .from("waitlist_submissions")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase DELETE error:", error);
      return NextResponse.json({ error: "Failed to delete submission" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission DELETE catch error:", error);
    return NextResponse.json({ error: "Failed to delete submission" }, { status: 500 });
  }
}
