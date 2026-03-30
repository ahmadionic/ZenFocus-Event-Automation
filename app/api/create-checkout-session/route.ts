import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Fake session ID for Stripe-free mode
    const fakeSessionId = "cs_test_123456";

    return NextResponse.json({
      url: `/success?session_id=${fakeSessionId}`
    });

  } catch (err: any) {
    console.error("create-checkout-session error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
