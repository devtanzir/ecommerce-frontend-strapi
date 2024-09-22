"use client"
import CheckoutForm from '@/components/shared/checkout-form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51Q1W9dBSlssWtzSdjmU0Ti9tg45OAbPcHHtq4OpDJFnimkjhALJ4mWvhC63sUtyDcfP2XOFfGfZ9uJM4kIRpaCEL000kF82gFU");

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