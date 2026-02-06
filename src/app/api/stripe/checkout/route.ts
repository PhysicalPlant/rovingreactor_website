import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

// Map monthly tiers to Stripe price IDs
// TODO: Replace these with your actual Stripe price IDs from the dashboard
const MONTHLY_PRICE_IDS: Record<number, string> = {
  5: process.env.STRIPE_MONTHLY_5_PRICE_ID!,
  25: process.env.STRIPE_MONTHLY_25_PRICE_ID!,
  50: process.env.STRIPE_MONTHLY_50_PRICE_ID!,
  100: process.env.STRIPE_MONTHLY_100_PRICE_ID!,
};

interface CheckoutRequest {
  type: "one_time" | "monthly";
  amount?: number;
  tier?: 5 | 25 | 50 | 100;
}

export async function POST(req: NextRequest) {
  try {
    const body: CheckoutRequest = await req.json();
    const { type, amount, tier } = body;

    // Validate request type
    if (type !== "one_time" && type !== "monthly") {
      return NextResponse.json(
        { error: "Invalid type. Must be 'one_time' or 'monthly'" },
        { status: 400 }
      );
    }

    const baseUrl = process.env.BASE_URL || "https://www.rovingreactor.org";

    // Handle one-time donations
    if (type === "one_time") {
      // Validate amount more defensively
      if (typeof amount !== "number" || !Number.isFinite(amount)) {
        return NextResponse.json(
          { error: "Amount must be a valid number" },
          { status: 400 }
        );
      }

      // Require whole dollar amounts
      if (!Number.isInteger(amount)) {
        return NextResponse.json(
          { error: "Amount must be a whole dollar amount" },
          { status: 400 }
        );
      }

      if (amount < 5) {
        return NextResponse.json(
          { error: "Minimum donation amount is $5" },
          { status: 400 }
        );
      }

      if (amount > 10000) {
        return NextResponse.json(
          { error: "Maximum donation amount is $10,000" },
          { status: 400 }
        );
      }

      // Create one-time payment session
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "donate",
        customer_creation: "if_required",
        billing_address_collection: "auto",
        payment_method_collection: "if_required",
        automatic_tax: { enabled: false },
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "One-Time Donation",
                description: "Support the Roving Reactor project",
              },
              unit_amount: amount * 100, // Convert dollars to cents (already validated as integer)
            },
            quantity: 1,
          },
        ],
        metadata: {
          donation_type: "one_time",
          amount: String(amount),
        },
        success_url: `${baseUrl}/contact?success=true`,
        cancel_url: `${baseUrl}/contact#donate`,
      });

      return NextResponse.json({ url: session.url }, { status: 200 });
    }

    // Handle monthly donations
    if (type === "monthly") {
      // Validate tier
      if (!tier || ![5, 25, 50, 100].includes(tier)) {
        return NextResponse.json(
          { error: "Invalid tier. Must be 5, 25, 50, or 100" },
          { status: 400 }
        );
      }

      const priceId = MONTHLY_PRICE_IDS[tier];
      if (!priceId) {
        return NextResponse.json(
          { error: `Price ID not configured for tier $${tier}` },
          { status: 500 }
        );
      }

      // Create subscription session
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        submit_type: "donate",
        customer_creation: "if_required",
        billing_address_collection: "auto",
        payment_method_collection: "if_required",
        automatic_tax: { enabled: false },
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        metadata: {
          donation_type: "monthly",
          tier: String(tier),
        },
        success_url: `${baseUrl}/contact?success=true`,
        cancel_url: `${baseUrl}/contact#donate`,
      });

      return NextResponse.json({ url: session.url }, { status: 200 });
    }

    // Should never reach here, but TypeScript safety
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  } catch (err) {
    console.error("Stripe Checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
