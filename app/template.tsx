"use client"
import  { ReactNode } from 'react';
import StoreProvider from './store-provider';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './_components/header/navbar';
import Footer from './_components/footer/footer';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY || '');
const Template = ({children} : {children: ReactNode}) => {
    const options = {
        mode: "payment",
        currency: "usd",
        amount: 50
      }
    return (
        <>
        <StoreProvider>
        <Elements stripe={stripePromise} options={options}>
            <ToastContainer/>
            <Navbar/>
            {children}
            <Footer/>
        </Elements>
        </StoreProvider>
        </>
    );
};

export default Template;