"use client"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "./button";
import { FormEvent, useState } from "react";
import useTotalPrice from "@/hooks/totalPrice";



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const totalPrice = useTotalPrice()

  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
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
  
      setLoading(true);
  
      try {
        // Fetch the clientSecret from your server
        const res = await fetch("/api/create-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: totalPrice }), // Amount in cents
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
        } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
          console.log("Payment successful!");
          setErrorMessage(""); // Clear any existing errors
          // Redirect or handle success case here
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
        <>
        
        {/* <form onSubmit={handleSubmit}> */}
        {/* Ensure CardElement is correctly rendered */}
          <CardElement />
          {/* <Button text={loading ? "Processing..." : "Submit"} className="w-full mt-7" />
          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>} */}
     {/* </form> */}
        </>
    );
  };
  

export default CheckoutForm;
