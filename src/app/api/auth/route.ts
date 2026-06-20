import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === "login") {
      const { email, password } = body;
      if (!email || !password) {
        return NextResponse.json({ error: "Email and password required" }, { status: 400 });
      }
      // Demo: always succeed for now
      return NextResponse.json({
        success: true,
        user: { id: "demo", email, username: "alexchen", name: "Alex Chen" },
        token: "demo-token",
      });
    }

    if (action === "signup") {
      const { email, username, password } = body;
      if (!email || !username || !password) {
        return NextResponse.json({ error: "All fields required" }, { status: 400 });
      }
      return NextResponse.json({
        success: true,
        user: { id: "demo", email, username, name: username },
        token: "demo-token",
      });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
