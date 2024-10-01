import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "./button";
import { FormEvent, useState } from "react";
import useTotalPrice from "@/hooks/totalPrice";
import { sendEmail } from "@/lib/sendEmail";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const totalPrice = useTotalPrice()

    const handleError = (error: any) => {
        setLoading(false);
        setErrorMessage(error.message);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
  
        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            return;
        }

        setLoading(true);

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError);
            return;
        }
        sendEmail()

        try {
            // Fetch the clientSecret from your server
            const res = await fetch("/api/create-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: totalPrice }), // Amount in dollars
            });

            if (!res.ok) {
                throw new Error("Failed to create payment intent");
            }

            const { clientSecret } = await res.json();

            // Confirm the payment with Stripe
            const result = await stripe.confirmPayment({
                clientSecret,
                elements,
                confirmParams: {
                    return_url: "http://localhost:3000/payment/payment-success",
                },
            });

            if (result.error) {
                // Show error to your customer
                handleError(result.error);
            } else {
                // Payment was successful, handle the success case here
                console.log("Payment successful!");
                setLoading(false); // Reset loading state
            }
        } catch (error: any) {
            handleError(error);
        }
    };


  
    return (
        <>
            <form onSubmit={handleSubmit}>
                <PaymentElement />
                <Button text={loading ? "Processing..." : "Submit"} className="w-full mt-7" />
                {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
            </form>
        </>
    );
};

export default CheckoutForm;
