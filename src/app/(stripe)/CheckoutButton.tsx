"use client";

import React from "react";
import getStipePromise from "../../lib/stripe";
import { useAuth } from "../../components/authProvider";
import { Button } from "../../components/ui/button";

const CheckoutButton = () => {
  const { items } = useAuth();
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch('/api/stripe-session', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(items),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  return (
    <Button onClick={handleCheckout} className="w-full">
      Checkout
    </Button>
  );
};

export default CheckoutButton;
