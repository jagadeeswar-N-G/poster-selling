import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStipePromise = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

  if (!stripePromise && !!key) {  //!! tell that false if the key is empty string
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export default getStipePromise;