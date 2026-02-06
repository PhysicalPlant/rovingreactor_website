import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    // Get the raw body as text
    const body = await req.text();
    
    // Get the Stripe signature from headers
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      console.error("Missing stripe-signature header");
      return NextResponse.json(
        { error: "Missing signature" },
        { status: 400 }
      );
    }

    // Verify the webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Log the event type
    console.log("Received Stripe event:", event.type);

    // Handle specific event types
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("Checkout session completed:", session.id);
        console.log("Customer email:", session.customer_email);
        console.log("Amount total:", session.amount_total);
        // TODO: Add database writes or other business logic here
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Always return 200 for successfully verified events
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
