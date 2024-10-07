import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const usePayment = () => {
  const stripe = useStripe();
  const [errorMessage, setErrorMessage] = useState("");
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (toPay:number) => {
    if (!stripe || !elements) {
      console.error("Stripe or Elements not loaded");
      return;
    }

    // Get the CardElement
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("Card Element not found");
      return;
    }
    if (!toPay) {
      console.error("Total Price not found");

      return;
    }

    setLoading(true);

    try {
      // Fetch the clientSecret from your server
      const res = await fetch("/api/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: toPay }), // Amount in cents
      });

      if (!res.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { clientSecret } = await res.json();

      // Confirm the payment using the card element
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message || "Payment failed");
      } else if (
        result.paymentIntent &&
        result.paymentIntent.status === "succeeded"
      ) {
        setErrorMessage(""); // Clear any existing errors
        // Redirect or handle success case here
        return true
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handlePayment, loading, errorMessage };
};

export default usePayment;
