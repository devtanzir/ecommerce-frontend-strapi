"use client"
import CheckoutForm from '@/components/shared/checkout-form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY || '');

const Payment = () => {
    const options = {
        mode: "payment",
        currency: "usd",
        amount: 50
      }
    return (
        <div className='w-[300px] mx-auto my-14 '>
        <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
        </div>
    );
};

export default Payment;