import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/user";

export async function GET(req: Request) {
  try {
    // Fake user data (Stripe skip)
    const name = "Test User";
    const email = "test@example.com";
    const phone = "0000000000";
    const amount = "$97.00";

    // Save user in DB (optional but good)
    await connectDB();
    await User.findOneAndUpdate(
      { email },
      {
        $set: {
          name,
          phone,
          email,
          isPaid: true,
        },
        $setOnInsert: {
          registeredAt: new Date(),
          sentEmails: [],
        },
      },
      { upsert: true, returnDocument: "after" }
    );

    return NextResponse.json({
      name,
      email,
      phone,
      amount,
      transactionId: "demo_txn_123",
      paymentStatus: "paid",
    });

  } catch (err: any) {
    console.error("verify-session error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
