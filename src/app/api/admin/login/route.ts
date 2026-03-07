import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";

// In-memory token store (tokens expire on server restart)
export const validTokens = new Set<string>();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "last-MANstanding";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = randomBytes(32).toString("hex");
    validTokens.add(token);

    return NextResponse.json({ token });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
