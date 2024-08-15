// /pages/checkout.js
import { stripePromise } from "../../lib/stripe";

export default function Checkout() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { sessionId } = await fetch("/api/checkout_sessions", {
      method: "POST",
    }).then((res) => res.json());

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>AI Flashcards Subscription</h1>
      <button onClick={handleCheckout}>Subscribe Now</button>
    </div>
  );
}
